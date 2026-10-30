"use server";

import { headers } from "next/headers";
import { content } from "@/content";
import { defaultLocale, isLocale } from "@/lib/i18n";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message" | "consent", string>>;
  values?: Record<string, string>;
};

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  // Server Actions cannot read root params, so the form posts its locale.
  const lang = isLocale(get("lang")) ? (get("lang") as keyof typeof content) : defaultLocale;
  const t = content[lang].contact.form;
  const values = {
    name: get("name"),
    company: get("company"),
    email: get("email"),
    phone: get("phone"),
    message: get("message"),
  };

  // Honeypot: real visitors never see or fill this field.
  if (get("website")) return { status: "success" };

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = t.errName;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = t.errEmail;
  if (values.message.length < 10) errors.message = t.errMessage;
  if (formData.get("consent") !== "on") errors.consent = t.errConsent;
  if (values.message.length > 5000 || values.name.length > 200) errors.message = t.errTooLong;
  if (Object.keys(errors).length) return { status: "error", errors, values };

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) {
    return { status: "error", message: t.errRate, values };
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!key || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email not configured; submission received:", values);
      return { status: "success" };
    }
    console.error("[contact] RESEND_API_KEY / CONTACT_TO / CONTACT_FROM missing");
    return { status: "error", message: t.errGeneric, values };
  }

  const rows = Object.entries(values)
    .map(([k, v]) => `<tr><th align="left">${k}</th><td>${escape(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: values.email,
      subject: `Website enquiry (${lang.toUpperCase()}) from ${values.name}${values.company ? ` (${values.company})` : ""}`,
      html: `<table cellpadding="6">${rows}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return { status: "error", message: t.errGeneric, values };
  }
  return { status: "success" };
}
