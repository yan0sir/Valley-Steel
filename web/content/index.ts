import type { Locale } from "@/lib/i18n";
import type { Content } from "./types";
import { en } from "./en";
import { ar } from "./ar";

export type { Content, ProductFamily, IllustrationName, CutoutKind } from "./types";

export const content: Record<Locale, Content> = { en, ar };

export const findProduct = (c: Content, slug: string) => c.products.find((p) => p.slug === slug);

/** Product slugs are shared by every locale, so routes can be generated from English. */
export const productSlugs = en.products.map((p) => p.slug);
