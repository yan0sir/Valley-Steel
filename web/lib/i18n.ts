// Locale config shared by server and client code.
// English is served without a prefix (/about); Arabic lives under /ar (/ar/about).
// proxy.ts rewrites unprefixed URLs to /en internally.

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const dirOf = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");

/** Public URL for an app path in a given locale: ("ar", "/about") -> "/ar/about". */
export function localePath(lang: Locale, path: string) {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

/** Strip any locale prefix from a pathname: "/ar/about" -> "/about", "/en" -> "/". */
export function stripLocale(pathname: string) {
  const m = pathname.match(/^\/(en|ar)(?=\/|$)/);
  const rest = m ? pathname.slice(m[0].length) : pathname;
  return rest === "" ? "/" : rest;
}
