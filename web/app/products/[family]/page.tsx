import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/content/products";
import { PageHero } from "@/components/blocks/PageHero";
import { ProductCard } from "@/components/blocks/ProductCard";
import { ContactCTA } from "@/components/blocks/ContactCard";
import { Cutout } from "@/components/illustrations/iso";
import { Photo } from "@/components/ui/Photo";
import { Button, SectionLabel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";

// Every family page is prerendered from generateStaticParams, so a navigation that waits
// for the page (instead of streaming into a shared shell) is fast; opt out of the
// instant-navigation check that flags reading `params` outside <Suspense>.
export const instant = false;

export function generateStaticParams() {
  return products.map((p) => ({ family: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[family]">): Promise<Metadata> {
  const product = getProduct((await params).family);
  if (!product) return {};
  return { title: product.name, description: `${product.intro} ${product.summary}` };
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m3 8.5 3 3 7-7" />
    </svg>
  );
}

export default async function ProductPage({ params }: PageProps<"/products/[family]">) {
  const product = getProduct((await params).family);
  if (!product) notFound();

  const related = product.related.map(getProduct).filter((p) => p !== undefined);

  return (
    <>
      {/* Hero: copy left, floating cutout right */}
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-7">
          <PageHero
            label="Product family"
            title={product.name}
            intro={product.intro}
          >
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/contact">Contact sales</Button>
              {product.datasheet ? (
                <Button href={product.datasheet} variant="secondary" download>
                  Download datasheet (PDF)
                </Button>
              ) : (
                <span className="t-label text-muted">
                  <T>[[Datasheet PDF to supply]]</T>
                </span>
              )}
            </div>
          </PageHero>
        </div>
        <div className="px-[var(--gutter)] pb-12 lg:col-span-5 lg:pb-0 lg:pl-0 lg:pt-28">
          <div className="flex aspect-square items-center justify-center rounded-xl bg-tint p-8 lg:h-full lg:aspect-auto lg:rounded-r-none">
            <Cutout kind={product.cutout} className="w-full max-w-[460px] animate-[float_6s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* In-context photo */}
      {product.photo && (
        <div className="container-x pb-12 md:pb-16">
          <Photo
            name={product.photo}
            sizes="(min-width: 1440px) 1392px, 100vw"
            className="aspect-[16/9] w-full rounded-xl md:aspect-[21/9]"
          />
        </div>
      )}

      {/* Overview */}
      <section className="border-y border-line" aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="sr-only">
          Overview
        </h2>
        <div className="container-x grid md:grid-cols-2">
          <Reveal className="py-12 md:border-r md:border-dashed md:border-line md:py-16 md:pr-10">
            <SectionLabel>Applications</SectionLabel>
            <ul className="mt-6 space-y-3" role="list">
              {product.applications.map((a) => (
                <li key={a} className="t-body-l flex gap-3 border-b border-line pb-3 last:border-0">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="border-t border-line py-12 md:border-t-0 md:py-16 md:pl-10">
            <SectionLabel>Why Valley Steel</SectionLabel>
            <ul className="mt-6 space-y-3" role="list">
              {product.why.map((w) => (
                <li key={w} className="t-body-l flex gap-3 border-b border-line pb-3 last:border-0">
                  <Check />
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Specifications */}
      <section className="container-x grid gap-8 py-16 md:grid-cols-12 md:py-24" aria-labelledby="specs-heading">
        <div className="md:col-span-4">
          <SectionLabel>Specifications</SectionLabel>
          <h2 id="specs-heading" className="t-h2 mt-6">
            What we supply
          </h2>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Typical ranges held in stock or available to order. Other grades and sizes on request.
          </p>
        </div>
        <Reveal className="md:col-span-8">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{product.name} specifications</caption>
              <tbody>
                {product.specs.map(([label, value]) => (
                  <tr key={label} className="border-b border-line last:border-0 even:bg-bg/60">
                    <th scope="row" className="t-label w-[38%] px-5 py-4 align-top font-medium text-muted">
                      {label}
                    </th>
                    <td className="px-5 py-4 font-mono text-[0.9rem] text-ink">
                      <T>{value}</T>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="t-label mr-2 text-muted">Standards</span>
            {product.standards.map((s) => (
              <span key={s} className="rounded-full border border-ink/20 bg-surface px-3 py-1 font-mono text-xs">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Related */}
      <section className="border-t border-line" aria-labelledby="related-heading">
        <div className="container-x py-16 md:py-20">
          <SectionLabel>Related products</SectionLabel>
          <h2 id="related-heading" className="t-h2 mt-6">
            Often ordered together
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {related.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={i * 0.06} className="h-full">
                  <ProductCard product={p} />
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
