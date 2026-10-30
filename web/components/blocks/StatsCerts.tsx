"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/I18nProvider";
import { T } from "@/components/ui/T";
import { ArrowIcon, SectionLabel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "./Counter";

export function StatsCerts() {
  const { c, href } = useI18n();
  const h = c.home;
  return (
    <section className="container-x py-20 md:py-28" aria-labelledby="stats-heading">
      <SectionLabel>{h.statsLabel}</SectionLabel>
      <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
        <p className="md:col-span-8">
          <span dir="ltr" className="ph inline-block text-[clamp(4.5rem,13vw,11rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-brand-500" title={c.ui.placeholderTitle}>
            <Counter value={h.statValue} />
            {h.statSuffix}
          </span>
        </p>
        <div className="md:col-span-4 md:pb-4">
          <h2 id="stats-heading" className="t-h3">
            {h.statHeading}
          </h2>
          <p className="mt-2 text-muted">{h.statSub}</p>
        </div>
      </div>

      <ul className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5" role="list">
        {h.certifications.map((cert, i) => (
          <li key={cert.name} className="border-b border-dashed border-line lg:border-b-0 lg:border-e lg:last:border-e-0">
            <Reveal delay={i * 0.06} className="flex h-full flex-col gap-3 p-6">
              <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/70 font-mono text-[10px]">
                {cert.name.replace(/\[|\]/g, "").split(/[ /:]/)[0]}
              </span>
              <p className="font-medium">
                <T>{cert.name}</T>
              </p>
              <p className="text-sm text-muted">{cert.detail}</p>
              <Link href={href("/facilities-quality#certificates")} className="mt-auto inline-flex items-center gap-1 text-sm text-brand-700 hover:underline">
                {c.ui.viewCertificate} <ArrowIcon />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
