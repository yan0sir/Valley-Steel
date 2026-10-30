import type { Metadata } from "next";
import { getI18n, pageMetadata } from "@/lib/i18n-server";
import { PageHero } from "@/components/blocks/PageHero";
import { StatRow } from "@/components/blocks/StatRow";
import { ContactCTA } from "@/components/blocks/ContactCard";
import { ImagePlaceholder, SectionLabel } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getI18n();
  return pageMetadata("/about", c.meta.about);
}

export default async function AboutPage() {
  const { c } = await getI18n();
  const a = c.about;
  return (
    <>
      <PageHero label={a.label} title={a.title}>
        <p className="t-body-l mt-6 max-w-2xl text-muted">
          <T>{a.intro}</T>
        </p>
      </PageHero>

      <div className="container-x">
        <Photo
          name="rebarStockpile"
          sizes="(min-width: 1440px) 1392px, 100vw"
          className="aspect-[16/9] w-full rounded-xl md:aspect-[21/9]"
        />
      </div>

      {/* Story / timeline */}
      <section className="container-x py-20 md:py-28" aria-labelledby="story-heading">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel>{a.storyLabel}</SectionLabel>
          </div>
          <h2 id="story-heading" className="t-h2 md:col-span-8">
            {a.storyHeading}
          </h2>
        </div>
        <div className="relative mt-14">
          <div aria-hidden className="absolute start-0 end-0 top-[7px] hidden h-px bg-line md:block" />
          <ol className="grid gap-10 md:grid-cols-5 md:gap-0" role="list">
            {a.timeline.map((t, i) => (
              <li key={i} className="relative md:pe-6">
                <Reveal delay={i * 0.08}>
                  <span
                    aria-hidden
                    className={`relative z-10 block h-[15px] w-[15px] rounded-full border-2 ${
                      i === a.timeline.length - 1 ? "border-brand-500 bg-brand-500" : "border-brand-500 bg-bg"
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
          <SectionLabel>{a.valuesLabel}</SectionLabel>
          <h2 id="values-heading" className="t-h2 mt-6 max-w-3xl">
            {a.valuesHeading}
          </h2>
          <ul className="mt-14 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {a.values.map((v, i) => (
              <li
                key={v.title}
                className="border-b border-dashed border-ink/15 py-8 px-6 sm:odd:border-e lg:border-b-0 lg:border-e lg:last:border-e-0"
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
        <SectionLabel>{a.numbersLabel}</SectionLabel>
        <h2 id="numbers-heading" className="sr-only">
          {a.numbersLabel}
        </h2>
        <div className="mt-10">
          <StatRow stats={a.stats} />
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-line" aria-labelledby="team-heading">
        <div className="container-x py-20 md:py-28">
          <SectionLabel>{a.leadershipLabel}</SectionLabel>
          <h2 id="team-heading" className="t-h2 mt-6">
            {a.leadershipHeading}
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {a.leadership.map((p, i) => (
              <li key={i}>
                <Reveal delay={i * 0.06}>
                  <ImagePlaceholder
                    shot={`${a.portrait} · ${p.role}`}
                    photoWord={c.ui.photo}
                    placeholderWord={c.ui.placeholder}
                    className="aspect-[4/5] w-full rounded-xl"
                  />
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
