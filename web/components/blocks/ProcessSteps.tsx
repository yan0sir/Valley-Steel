"use client";

import { useI18n } from "@/components/i18n/I18nProvider";
import { IsoIllustration } from "@/components/illustrations/iso";
import { SectionLabel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSteps() {
  const { c } = useI18n();
  const { processLabel, processHeading, processSteps } = c.home;
  return (
    <section className="border-b border-line" aria-labelledby="process-heading">
      <div className="container-x grid gap-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <SectionLabel>{processLabel}</SectionLabel>
        </div>
        <h2 id="process-heading" className="t-h2 md:col-span-8">
          {processHeading}
        </h2>
      </div>

      <ol className="container-x grid border-t border-line md:grid-cols-5" role="list">
        {processSteps.map((s, i) => (
          <li key={s.title} className="border-b border-dashed border-line md:border-b-0 md:border-e md:last:border-e-0">
            <Reveal delay={i * 0.08} className="flex h-full flex-col">
              <div className="flex items-stretch border-b border-line">
                <span
                  className={`t-h3 flex w-14 items-center justify-center py-4 ${
                    i === 0 ? "bg-brand-950 text-white" : "bg-tint text-brand-700"
                  }`}
                >
                  {i + 1}
                </span>
              </div>
              <div className="flex aspect-[4/3] items-center justify-center p-6 text-ink">
                <IsoIllustration name={s.illustration} className="w-full max-w-[220px]" />
              </div>
              <div className="px-0 pb-8 md:px-5">
                <h3 className="t-h3">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
