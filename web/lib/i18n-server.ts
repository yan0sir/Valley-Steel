import type { Metadata } from "next";
import { lang as rootLang } from "next/root-params";
import { notFound } from "next/navigation";
import { content } from "@/content";
import { dirOf, isLocale, localePath, locales, type Locale } from "./i18n";

/** Current locale + its content, for Server Components (reads the [lang] root param). */
export async function getI18n() {
  const value = await rootLang();
  if (!value || !isLocale(value)) notFound();
  const lang: Locale = value;
  return {
    lang,
    dir: dirOf(lang),
    c: content[lang],
    href: (path: string) => localePath(lang, path),
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Title, description, canonical URL and hreflang alternates for an app path in the current locale. */
export async function pageMetadata(path: string, meta: { title: string; description: string }): Promise<Metadata> {
  const { lang } = await getI18n();
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(lang, path),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l === "ar" ? "ar-BH" : "en-GB", localePath(l, path)])),
        "x-default": localePath("en", path),
      },
    },
    openGraph: { locale: lang === "ar" ? "ar_BH" : "en_GB", title: meta.title, description: meta.description },
  };
}
