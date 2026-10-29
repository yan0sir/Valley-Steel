import type { Metadata } from "next";
import { products } from "@/content/products";
import { PageHero } from "@/components/blocks/PageHero";
import { ProductCard } from "@/components/blocks/ProductCard";
import { ContactCTA } from "@/components/blocks/ContactCard";
import { Button, SectionLabel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Rebar, structural sections, plates, pipes, coils, wire and processing, held in stock in Bahrain and ready to cut and deliver.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Our products"
        title="Our products"
        intro="Rebar, sections, plates, pipes and more, held in stock in Bahrain and ready to process and deliver."
      />

      <section className="border-t border-line" aria-label="Product families">
        <ul className="container-x grid gap-4 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-3" role="list">
          {products.map((p, i) => (
            <li key={p.slug} className={i === 0 ? "lg:col-span-2" : ""}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <div className={i === 0 ? "h-full lg:[&_svg]:max-w-[420px]" : "h-full"}>
                  <ProductCard product={p} index={i} />
                </div>
              </Reveal>
            </li>
          ))}
          <li className="flex">
            <Reveal className="flex w-full">
              <div className="flex w-full flex-col justify-between gap-8 rounded-xl border border-dashed border-line p-6">
                <SectionLabel>Can&apos;t see it?</SectionLabel>
                <p className="t-h3">
                  We source to order too. If it&apos;s steel and it&apos;s specified, ask us.
                </p>
                <Button href="/contact" variant="secondary" className="self-start">
                  Ask about a product
                </Button>
              </div>
            </Reveal>
          </li>
        </ul>
      </section>

      <section className="bg-brand-950 text-white">
        <div className="container-x grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-7">
            <SectionLabel dark>Need advice?</SectionLabel>
            <h2 className="t-h2 mt-6">Not sure which product you need?</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-white/75">
              Every project specifies differently. Send us your drawings or bar-bending schedule and we&apos;ll help
              you match grade, size and quantity.
            </p>
            <Button href="/contact" variant="light" className="mt-6">
              Go to contact
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
