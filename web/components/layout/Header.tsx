"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { stripLocale } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
  const { c, href } = useI18n();
  const pathname = usePathname();
  const overHero = stripLocale(pathname) === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overHero;
  const linkColor = solid ? "text-ink" : "text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          solid ? "border-b border-line bg-bg/95" : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
          <Link href={href("/")} aria-label={c.ui.homeAria} className="shrink-0">
            <Logo variant="compact" reversed={!solid} className="h-8 w-auto md:h-9" />
          </Link>

          <nav aria-label={c.ui.mainNav} className="ms-auto hidden lg:block">
            <ul className="flex items-center gap-8">
              {c.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={href(item.href)}
                    className={`text-sm font-medium transition-opacity hover:opacity-70 ${linkColor}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className={`border-s ps-8 ${solid ? "border-line" : "border-white/30"}`}>
                <LanguageSwitch className={`text-sm font-medium transition-opacity hover:opacity-70 ${linkColor}`} />
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitch className={`text-sm font-medium ${linkColor}`} />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="inline-flex items-center gap-3 rounded bg-brand-950 py-2 ps-4 pe-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              {c.ui.menu}
              <span aria-hidden className="text-lg leading-none">+</span>
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
