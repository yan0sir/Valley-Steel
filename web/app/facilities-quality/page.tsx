import type { Metadata } from "next";
import { certifications } from "@/content/home";
import { deliveryCopy, processingServices, qualityPoints, yardStats } from "@/content/facilities";
import { site } from "@/content/site";
import { PageHero } from "@/components/blocks/PageHero";
import { StatRow } from "@/components/blocks/StatRow";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { ContactCTA } from "@/components/blocks/ContactCard";
import { IsoIllustration } from "@/components/illustrations/iso";
import { ImagePlaceholder, SectionLabel } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";

export const metadata: Metadata = {
  title: "Facilities & Quality",
  description:
    "Valley Steel's stockyard, processing shop, quality checks and delivery fleet in Bahrain, built to get certified steel to your site on time.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        label="Facilities & Quality"
        title="Built around your programme."
        intro="Our yard, processing shop and fleet exist for one reason: to get the right steel to your site on the day you need it."
      />

      <div className="container-x">
        <Photo name="yardPipes" sizes="(min-width: 1440px) 1392px, 100vw" className="aspect-[16/9] w-full rounded-xl md:aspect-[21/9]" />
      </div>

      {/* Yard */}
      <section className="container-x py-20 md:py-28" aria-labelledby="yard-heading">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel>Our yard</SectionLabel>
            <h2 id="yard-heading" className="t-h2 mt-6">
              Stock you can see, in <T>{"[[area]]"}</T>, Bahrain.
            </h2>
            <p className="mt-6 text-muted">
              <T>
                {
                  "A [[10,000]] m² stockyard and covered warehouse holding [[5,000]] tonnes of steel across [[7]] product families. Overhead cranes and forklifts load trucks in minutes, not hours."
                }
              </T>
            </p>
            <p className="mt-6 text-sm">
              <span className="t-label block text-muted">Address</span>
              <T>{site.address}</T>, {site.country}
            </p>
          </div>
          <div className="md:col-span-7">
            <ImagePlaceholder shot="Map · yard location" className="aspect-[4/3] w-full rounded-xl" />
          </div>
        </div>
        <div className="mt-16">
          <StatRow stats={yardStats} />
        </div>
      </section>

      {/* Processing */}
      <section className="bg-tint" aria-labelledby="processing-heading">
        <div className="container-x py-20 md:py-28">
          <SectionLabel>Processing</SectionLabel>
          <h2 id="processing-heading" className="t-h2 mt-6 max-w-3xl">
            Steel that arrives ready to fix, weld or erect.
          </h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-3" role="list">
            {processingServices.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.08} className="flex h-full flex-col rounded-xl bg-surface">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-t-xl bg-brand-950 p-10 text-white">
                    <IsoIllustration name={s.illustration} className="w-full max-w-[240px]" />
                  </div>
                  <div className="p-6">
                    <h3 className="t-h3">{s.title}</h3>
                    <p className="mt-2 text-muted">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps />

      {/* Quality */}
      <section id="quality" className="container-x scroll-mt-24 py-20 md:py-28" aria-labelledby="quality-heading">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel>Quality</SectionLabel>
            <h2 id="quality-heading" className="t-h2 mt-6">
              Every bar, beam and plate we supply is traceable.
            </h2>
            <Photo name="rebarCloseup" sizes="(min-width: 768px) 40vw, 100vw" className="mt-10 aspect-[4/3] w-full rounded-xl" />
          </div>
          <ol className="md:col-span-6 md:col-start-7" role="list">
            {qualityPoints.map((q, i) => (
              <li key={q.title} className="border-b border-line py-8 first:pt-0 md:first:pt-2">
                <Reveal delay={i * 0.06} className="flex gap-6">
                  <span
                    className={`t-label flex h-10 w-10 shrink-0 items-center justify-center rounded ${
                      i === 0 ? "bg-brand-950 text-white" : "bg-tint text-brand-700"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="t-h3">{q.title}</h3>
                    <p className="mt-2 text-muted">{q.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="scroll-mt-24 border-t border-line" aria-labelledby="certs-heading">
        <div className="container-x py-20 md:py-24">
          <SectionLabel>Certificates & standards</SectionLabel>
          <h2 id="certs-heading" className="t-h2 mt-6">
            The paperwork, ready when you need it.
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
            {certifications.map((c, i) => (
              <li key={c.name}>
                <Reveal delay={i * 0.05} className="flex h-full flex-col gap-3 rounded-xl border border-line bg-surface p-5">
                  <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/70 font-mono text-[10px]">
                    {c.name.replace(/\[|\]/g, "").split(/[ /:]/)[0]}
                  </span>
                  <p className="font-medium">
                    <T>{c.name}</T>
                  </p>
                  <p className="text-sm text-muted">{c.detail}</p>
                  <span className="t-label mt-auto pt-2 text-muted">
                    <T>{"[[PDF to supply]]"}</T>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery */}
      <section className="bg-brand-950 text-white" aria-labelledby="delivery-heading">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12 md:items-center md:py-28">
          <div className="md:col-span-6">
            <Photo name="deliveryCoils" sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-xl" />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <SectionLabel dark>Delivery</SectionLabel>
            <h2 id="delivery-heading" className="t-h2 mt-6">
              Anywhere in the Kingdom, on the day you need it.
            </h2>
            <p className="mt-6 text-white/75">
              <T>{deliveryCopy}</T>
            </p>
          </div>
        </div>
      </section>

      {/* HSE */}
      <section className="container-x grid gap-6 py-20 md:grid-cols-12 md:py-24" aria-labelledby="hse-heading">
        <div className="md:col-span-4">
          <SectionLabel>Health, safety & environment</SectionLabel>
        </div>
        <div className="md:col-span-8">
          <h2 id="hse-heading" className="t-h3">
            Safe loading, certified lifting equipment and trained drivers.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            We consolidate deliveries to cut trips, keep our yard organised and inspected, and recycle all offcuts from
            processing.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
