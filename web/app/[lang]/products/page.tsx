import type { Metadata } from "next";
import { getI18n, pageMetadata } from "@/lib/i18n-server";
import { PageHero } from "@/components/blocks/PageHero";
import { ProductCard } from "@/components/blocks/ProductCard";
import { ContactCTA } from "@/components/blocks/ContactCard";
import { Button, SectionLabel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getI18n();
  return pageMetadata("/products", c.meta.products);
}

export default async function ProductsPage() {
  const { c, href } = await getI18n();
  const p = c.productsPage;
  return (
    <>
      <PageHero label={p.label} title={p.title} intro={p.intro} />

      <section className="border-t border-line" aria-label={p.familiesAria}>
        <ul className="container-x grid gap-4 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-3" role="list">
          {c.products.map((product, i) => (
            <li key={product.slug} className={i === 0 ? "lg:col-span-2" : ""}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <div className={i === 0 ? "h-full lg:[&_svg]:max-w-[420px]" : "h-full"}>
                  <ProductCard product={product} index={i} />
                </div>
              </Reveal>
            </li>
          ))}
          <li className="flex">
            <Reveal className="flex w-full">
              <div className="flex w-full flex-col justify-between gap-8 rounded-xl border border-dashed border-line p-6">
                <SectionLabel>{p.cantSeeLabel}</SectionLabel>
                <p className="t-h3">{p.cantSee}</p>
                <Button href={href("/contact")} variant="secondary" className="self-start">
                  {p.askAbout}
                </Button>
              </div>
            </Reveal>
          </li>
        </ul>
      </section>

      <section className="bg-brand-950 text-white">
        <div className="container-x grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-7">
            <SectionLabel dark>{p.adviceLabel}</SectionLabel>
            <h2 className="t-h2 mt-6">{p.adviceHeading}</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-white/75">{p.adviceBody}</p>
            <Button href={href("/contact")} variant="light" className="mt-6">
              {p.goToContact}
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
