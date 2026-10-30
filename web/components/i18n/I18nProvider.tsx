"use client";

import { createContext, useContext, type ReactNode } from "react";
import { content, type Content } from "@/content";
import { dirOf, localePath, type Locale } from "@/lib/i18n";

const I18nContext = createContext<Locale>("en");

/** Supplies the current locale to Client Components (set once in the [lang] layout). */
export function I18nProvider({ lang, children }: { lang: Locale; children: ReactNode }) {
  return <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>;
}

/** Current locale + its content, for Client Components. Mirrors getI18n() on the server. */
export function useI18n(): { lang: Locale; dir: "ltr" | "rtl"; c: Content; href: (path: string) => string } {
  const lang = useContext(I18nContext);
  return { lang, dir: dirOf(lang), c: content[lang], href: (path) => localePath(lang, path) };
}
