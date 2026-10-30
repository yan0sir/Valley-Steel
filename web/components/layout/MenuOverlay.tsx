"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { T, plain } from "@/components/ui/T";
import { Logo } from "./Logo";
import { LanguageSwitch } from "./LanguageSwitch";

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const { c, href } = useI18n();
  const { site } = c;

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    panel.current?.querySelector<HTMLElement>("a,button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panel.current) return;
      const els = panel.current.querySelectorAll<HTMLElement>("a,button");
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [open, onClose, lenis]);

  return (
    <div
      id="site-menu"
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label={c.ui.menuDialog}
      hidden={!open}
      data-lenis-prevent
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-950 text-white"
    >
      <div className="container-x flex min-h-full flex-col">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href={href("/")} onClick={onClose} aria-label={c.ui.homeAria} className="shrink-0">
            <Logo variant="compact" reversed className="h-8 w-auto md:h-9" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-3 rounded bg-white py-2 ps-4 pe-3 text-sm font-medium text-brand-950"
          >
            {c.ui.close} <span aria-hidden className="text-lg leading-none">×</span>
          </button>
        </div>

        <div className="grid flex-1 gap-12 border-t border-white/15 py-12 md:grid-cols-[2fr_1fr]">
          <nav aria-label={c.ui.menu}>
            <ul className="space-y-3">
              {[{ label: c.ui.home, href: "/" }, ...c.nav].map((item) => (
                <li key={item.href}>
                  <Link href={href(item.href)} onClick={onClose} className="t-h1 transition-colors hover:text-brand-500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-6 border-white/15 md:border-s md:ps-10">
            <p className="t-label text-brand-200">{c.ui.quickContact}</p>
            <p className="space-y-1 text-lg">
              <a href={site.phoneHref} className="ltr block w-fit hover:text-brand-500" aria-label={`${c.ui.call} ${plain(site.phone)}`}>
                <T>{site.phone}</T>
              </a>
              <a href={site.emailHref} className="ltr block w-fit hover:text-brand-500">
                <T>{site.email}</T>
              </a>
            </p>
            <p className="text-sm text-white/70">
              <T>{site.address}</T>
              <br />
              {site.country}
            </p>
            <LanguageSwitch className="inline-block rounded border border-white/30 px-3 py-1.5 text-sm hover:bg-white hover:text-brand-950" />
          </div>
        </div>
      </div>
    </div>
  );
}
