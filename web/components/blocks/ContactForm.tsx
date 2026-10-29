"use client";

import Link from "next/link";
import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/contact/actions";
import { site } from "@/content/site";
import { T } from "@/components/ui/T";
import { ArrowIcon } from "@/components/ui/primitives";

const initial: ContactState = { status: "idle" };

function Field({
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  error,
  defaultValue,
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  defaultValue?: string;
  textarea?: boolean;
}) {
  const cls = `mt-2 w-full rounded border bg-surface px-4 py-3 text-base outline-none transition-colors focus:border-brand-700 focus:ring-2 focus:ring-brand-700/20 ${
    error ? "border-red-700" : "border-line"
  }`;
  const describedBy = error ? `${name}-error` : undefined;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-muted"> *</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={6} required={required} defaultValue={defaultValue} aria-invalid={!!error} aria-describedby={describedBy} className={cls} />
      ) : (
        <input id={name} name={name} type={type} required={required} autoComplete={autoComplete} defaultValue={defaultValue} aria-invalid={!!error} aria-describedby={describedBy} className={cls} />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-xl bg-tint p-8">
        <p className="t-h3">Thanks, your message is with our sales team.</p>
        <p className="mt-2 text-muted">We&apos;ll be in touch today or the next working day.</p>
      </div>
    );
  }

  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form action={action} noValidate className="space-y-5">
      {state.message && (
        <p role="alert" className="rounded border border-red-700/30 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message} <T>{site.phone}</T>
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Name" required autoComplete="name" error={e.name} defaultValue={v.name} />
        <Field name="company" label="Company" autoComplete="organization" defaultValue={v.company} />
        <Field name="email" label="Email" type="email" required autoComplete="email" error={e.email} defaultValue={v.email} />
        <Field name="phone" label="Phone" type="tel" autoComplete="tel" defaultValue={v.phone} />
      </div>
      <Field name="message" label="Message" required textarea error={e.message} defaultValue={v.message} />

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4 w-4 accent-brand-950"
            aria-invalid={!!e.consent}
            aria-describedby={e.consent ? "consent-error" : undefined}
          />
          <span>
            I agree to the{" "}
            <Link href="/privacy" className="text-brand-700 underline underline-offset-2">
              Privacy Policy
            </Link>
            . <span className="text-muted">*</span>
          </span>
        </label>
        {e.consent && (
          <p id="consent-error" className="mt-1 text-sm text-red-700">
            {e.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 rounded bg-brand-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
        <ArrowIcon />
      </button>
    </form>
  );
}
