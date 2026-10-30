"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { IsoIllustration } from "@/components/illustrations/iso";
import { T } from "@/components/ui/T";
import { SectionLabel, TextLink } from "@/components/ui/primitives";

export function Capabilities() {
  const { c, href } = useI18n();
  const h = c.home;
  const capabilities = h.capabilities;
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <section className="bg-tint" aria-labelledby={`${id}-h`}>
      <div className="container-x py-20 md:py-28">
        <SectionLabel>{h.capabilitiesLabel}</SectionLabel>
        <h2 id={`${id}-h`} className="t-h2 mt-6 max-w-4xl">
          {h.capabilitiesHeading}
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-950 text-white lg:col-span-5 lg:aspect-auto lg:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center p-10"
              >
                <IsoIllustration name={capabilities[open].illustration} className="w-full max-w-sm" />
              </motion.div>
            </AnimatePresence>
            <p className="t-label absolute bottom-5 start-5 text-brand-200">0{open + 1} / {capabilities[open].title}</p>
          </div>

          <div className="lg:col-span-7">
            {capabilities.map((c, i) => {
              const isOpen = i === open;
              return (
                <div key={c.title} className="border-b border-ink/15 first:border-t">
                  <h3>
                    <button
                      type="button"
                      id={`${id}-b${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`${id}-p${i}`}
                      onClick={() => setOpen(i)}
                      className="flex w-full items-center gap-4 py-6 text-start"
                    >
                      <span
                        aria-hidden
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-colors ${
                          isOpen ? "border-brand-950 bg-brand-950 text-white" : "border-ink/60"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                      <span className="t-h3">{c.title}</span>
                    </button>
                  </h3>
                  <div
                    id={`${id}-p${i}`}
                    role="region"
                    aria-labelledby={`${id}-b${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 ps-12 text-muted">
                        <T>{c.body}</T>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <p className="text-sm text-muted">
                {h.continuity}
              </p>
              <div>
                <p className="t-h3">{h.discover}</p>
                <div className="mt-2 flex gap-4">
                  <TextLink href={href("/facilities-quality")}>{h.facilitiesLink}</TextLink>
                  <TextLink href={href("/facilities-quality#quality")}>{h.qualityLink}</TextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
