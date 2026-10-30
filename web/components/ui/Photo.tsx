"use client";

import Image from "next/image";
import { photos, type PhotoKey } from "@/content/images";
import { useI18n } from "@/components/i18n/I18nProvider";

/** Cover-fit photo filling its frame. The wrapper sets size/aspect; pass `preload` for the LCP image only. */
export function Photo({
  name,
  className = "",
  sizes = "100vw",
  preload = false,
}: {
  name: PhotoKey;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  const { lang } = useI18n();
  const p = photos[name];
  const position = /\b(absolute|fixed|sticky)\b/.test(className) ? "" : "relative";
  return (
    <div className={`${position} overflow-hidden bg-brand-200 ${className}`}>
      <Image src={p.src} alt={p.alt[lang]} fill sizes={sizes} preload={preload} placeholder="blur" className="object-cover" />
    </div>
  );
}
