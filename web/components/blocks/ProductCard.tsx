import Link from "next/link";
import type { ProductFamily } from "@/content/products";
import { Cutout } from "@/components/illustrations/iso";
import { ArrowIcon } from "@/components/ui/primitives";

/** Product family card with an Auremin-style floating cutout. The whole card is the link. */
export function ProductCard({ product, index }: { product: ProductFamily; index?: number }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col rounded-xl bg-tint p-5 transition-colors duration-300 hover:bg-brand-200/60 md:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="t-h3">{product.name}</h3>
        {index !== undefined && <span className="t-label text-muted">{String(index + 1).padStart(2, "0")}</span>}
      </div>
      <div className="flex flex-1 items-center justify-center py-6">
        <Cutout
          kind={product.cutout}
          className="w-full max-w-[320px] transition-transform duration-500 ease-out group-hover:-translate-y-2"
        />
      </div>
      <div className="flex items-end justify-between gap-4">
        <p className="max-w-[34ch] text-sm text-muted">{product.summary}</p>
        <span
          aria-hidden
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/70 transition-colors duration-200 group-hover:bg-ink group-hover:text-white"
        >
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
