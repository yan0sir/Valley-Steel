"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { products } from "@/content/products";
import { Cutout } from "@/components/illustrations/iso";
import { Button, CircleLink, SectionLabel } from "@/components/ui/primitives";

export function ProductSelector() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section className="border-y border-line" aria-labelledby="products-heading">
      <div className="container-x grid lg:grid-cols-12">
        {/* intro */}
        <div className="py-16 lg:col-span-3 lg:border-r lg:border-dashed lg:border-line lg:py-14 lg:pr-8">
          <SectionLabel>Our products</SectionLabel>
          <h2 id="products-heading" className="sr-only">
            Our products
          </h2>
          <p className="mt-6 text-muted">
            From a single bundle of rebar to full structural packages, we keep the steel Bahrain builds with in stock,
            ready to cut and deliver.
          </p>
          <Button href="/products" className="mt-8">
            View all products
          </Button>
        </div>

        {/* desktop list + card */}
        <div className="hidden lg:col-span-9 lg:grid lg:grid-cols-9">
          <ul className="col-span-5 flex flex-col justify-center gap-1 py-14 pl-10" role="list">
            {products.map((item, i) => (
              <li key={item.slug}>
                <Link
                  href={`/products/${item.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={i === active ? "true" : undefined}
                  className={`t-h2 flex items-center gap-3 py-1 transition-colors duration-200 ${
                    i === active ? "text-ink" : "text-ink/35 hover:text-ink/70"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`h-1.5 bg-brand-500 transition-all duration-300 ${i === active ? "w-5" : "w-0"}`}
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="col-span-4 py-12">
            <div className="flex h-[min(520px,calc(100svh-11rem))] flex-col rounded-xl bg-tint p-6">
              <p className="t-label text-muted">{p.name}</p>
              <div className="relative flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.2, 0.7, 0.1, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Cutout kind={p.cutout} className="max-h-full w-full animate-[float_6s_ease-in-out_infinite]" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-end justify-between gap-4">
                <p className="max-w-[28ch] text-sm text-muted">{p.summary}</p>
                <CircleLink href={`/products/${p.slug}`} label={`View ${p.name}`} />
              </div>
            </div>
          </div>
        </div>

        {/* mobile carousel */}
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-16 lg:hidden" role="list">
          {products.map((item) => (
            <li key={item.slug} className="w-[78%] shrink-0 snap-start sm:w-[45%]">
              <Link href={`/products/${item.slug}`} className="flex aspect-[4/5] flex-col rounded-xl bg-tint p-5">
                <p className="t-h3">{item.name}</p>
                <div className="flex flex-1 items-center">
                  <Cutout kind={item.cutout} className="w-full" />
                </div>
                <p className="text-sm text-muted">{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
