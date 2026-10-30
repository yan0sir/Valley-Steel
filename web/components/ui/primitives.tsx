import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function ArrowIcon({ className = "", direction = "right" }: { className?: string; direction?: "right" | "up" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={`h-4 w-4 ${direction === "up" ? "-rotate-90" : "rtl:-scale-x-100"} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3.5 1.5h2.2l1.1 3.2-1.5 1.1a8 8 0 0 0 4.9 4.9l1.1-1.5 3.2 1.1v2.2a1.5 1.5 0 0 1-1.6 1.5A12.5 12.5 0 0 1 2 3.1 1.5 1.5 0 0 1 3.5 1.5Z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" />
      <path d="m2 4 6 5 6-5" />
    </svg>
  );
}

type ButtonProps = { href: string; variant?: "primary" | "secondary" | "light"; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "href"
>;

export function Button({ href, variant = "primary", children, className = "", ...rest }: ButtonProps) {
  const styles = {
    primary: "bg-brand-950 text-white hover:bg-brand-700",
    secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-white",
    light: "bg-white text-ink hover:bg-tint",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${styles} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function CircleLink({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
        dark
          ? "border-white/40 text-white hover:bg-white hover:text-brand-950"
          : "border-ink/70 text-ink hover:bg-ink hover:text-white"
      }`}
    >
      <ArrowIcon />
    </Link>
  );
}

export function TextLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline ${
        dark ? "text-white" : "text-brand-700"
      }`}
    >
      {children}
      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </Link>
  );
}

/** The logo's blue bars, as a label marker. */
export function Bars({ className = "", animate = false }: { className?: string; animate?: boolean }) {
  return (
    <span aria-hidden className={`inline-flex items-center gap-1 ${className}`}>
      <span className={`block h-1.5 w-5 bg-brand-500 ${animate ? "bar-in" : ""}`} />
      <span className={`block h-1.5 w-3 bg-brand-500 ${animate ? "bar-in" : ""}`} style={{ animationDelay: "120ms" }} />
    </span>
  );
}

export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`t-label flex items-center gap-3 ${dark ? "text-brand-200" : "text-muted"}`}>
      <Bars />
      {children}
    </p>
  );
}

/** Labelled frame standing in for a photo from the shot list. Pass translated words for Arabic pages. */
export function ImagePlaceholder({
  shot,
  className = "",
  photoWord = "Photo",
  placeholderWord = "Placeholder",
}: {
  shot: string;
  className?: string;
  photoWord?: string;
  placeholderWord?: string;
}) {
  return (
    <div className={`img-ph ${className}`} role="img" aria-label={`${placeholderWord}: ${shot}`}>
      <span className="t-label absolute bottom-3 start-3 rounded bg-black/40 px-2 py-1 text-[10px] text-white/90">
        {photoWord} · {shot}
      </span>
    </div>
  );
}
