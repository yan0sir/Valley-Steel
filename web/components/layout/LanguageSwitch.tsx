"use client";

import { usePathname } from "next/navigation";
import { useI18n } from "@/components/i18n/I18nProvider";
import { localePath, stripLocale } from "@/lib/i18n";

/** Link to the current page in the other language (full page load: the root layout changes). */
export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, c } = useI18n();
  const pathname = usePathname();
  const other = lang === "ar" ? "en" : "ar";
  return (
    <a
      href={localePath(other, stripLocale(pathname))}
      hrefLang={other}
      lang={other}
      aria-label={c.ui.otherLanguageAria}
      className={className}
    >
      {c.ui.otherLanguage}
    </a>
  );
}
