import type { Metadata } from "next";
import { aboutStats, leadership, timeline, values } from "@/content/about";
import { PageHero } from "@/components/blocks/PageHero";
import { StatRow } from "@/components/blocks/StatRow";
import { ContactCTA } from "@/components/blocks/ContactCard";
import { ImagePlaceholder, SectionLabel } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";

export const metadata: Metadata = {
  title: "About",
  description:
    "Valley Steel Trading W.L.L. supplies steel to Bahrain's construction and industrial sectors, with certified stock, in-house processing and on-time delivery.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Valley Steel"
        title="Steel you can build on."
      >
        <p className="t-body-l mt-6 max-w-2xl text-muted">
          <T>
            {
              "Valley Steel Trading W.L.L. supplies steel to Bahrain's construction and industrial sectors. Founded in [[2010]], we've grown from a single yard into one of the Kingdom's dependable stockists, because we answer the phone, keep our promises and stand behind every bar."
            }
          </T>
        </p>
      </PageHero>

      <div className="container-x">
        <Photo name="rebarStockpile" sizes="(min-width: 1440px) 1392px, 100vw" className="aspect-[16/9] w-full rounded-xl md:aspect-[21/9]" />
      </div>

      {/* Story / timeline */}
      <section className="container-x py-20 md:py-28" aria-labelledby="story-heading">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel>Our story</SectionLabel>
          </div>
          <h2 id="story-heading" className="t-h2 md:col-span-8">
            From one yard and one product to a full steel range.
          </h2>
        </div>
        <div className="relative mt-14">
        <div aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" />
        <ol className="grid gap-10 md:grid-cols-5 md:gap-0" role="list">
          {timeline.map((t, i) => (
            <li key={i} className="relative md:pr-6">
              <Reveal delay={i * 0.08}>
                <span
                  aria-hidden
                  className={`relative z-10 block h-[15px] w-[15px] rounded-full border-2 ${
                    i === timeline.length - 1 ? "border-brand-500 bg-brand-500" : "border-brand-500 bg-bg"
                  }`}
                />
                <p className="t-label mt-5 text-brand-700">
                  <T>{t.year}</T>
                </p>
                <p className="mt-2 text-muted">
                  <T>{t.text}</T>
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-tint" aria-labelledby="values-heading">
        <div className="container-x py-20 md:py-28">
          <SectionLabel>What we stand for</SectionLabel>
          <h2 id="values-heading" className="t-h2 mt-6 max-w-3xl">
            Four promises behind every delivery.
          </h2>
          <ul className="mt-14 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {values.map((v, i) => (
              <li
                key={v.title}
                className="border-b border-dashed border-ink/15 py-8 px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Reveal delay={i * 0.06}>
                  <span className="t-label text-brand-700">0{i + 1}</span>
                  <h3 className="t-h3 mt-4">{v.title}</h3>
                  <p className="mt-2 text-muted">{v.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Numbers */}
      <section className="container-x py-20 md:py-28" aria-labelledby="numbers-heading">
        <SectionLabel>By the numbers</SectionLabel>
        <h2 id="numbers-heading" className="sr-only">
          By the numbers
        </h2>
        <div className="mt-10">
          <StatRow stats={aboutStats} />
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-line" aria-labelledby="team-heading">
        <div className="container-x py-20 md:py-28">
          <SectionLabel>Leadership</SectionLabel>
          <h2 id="team-heading" className="t-h2 mt-6">
            The people you&apos;ll deal with.
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {leadership.map((p, i) => (
              <li key={i}>
                <Reveal delay={i * 0.06}>
                  <ImagePlaceholder shot={`Portrait · ${p.role}`} className="aspect-[4/5] w-full rounded-xl" />
                  <p className="mt-4 font-medium">
                    <T>{p.name}</T>
                  </p>
                  <p className="text-sm text-muted">{p.role}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
