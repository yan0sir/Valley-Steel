"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { Logo } from "./Logo";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          solid ? "border-b border-line bg-bg/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
          <Link href="/" aria-label="Valley Steel, home" className="shrink-0">
            <Logo variant="compact" reversed={!solid} className="h-8 w-auto md:h-9" />
          </Link>

          <nav aria-label="Main" className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-opacity hover:opacity-70 ${solid ? "text-ink" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="inline-flex items-center gap-3 rounded bg-brand-950 py-2 pl-4 pr-3 text-sm font-medium text-white transition-colors hover:bg-brand-700 lg:hidden"
          >
            Menu
            <span aria-hidden className="text-lg leading-none">+</span>
          </button>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
