import Link from "next/link";
import { certifications } from "@/content/home";
import { T } from "@/components/ui/T";
import { ArrowIcon, SectionLabel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "./Counter";

export function StatsCerts() {
  return (
    <section className="container-x py-20 md:py-28" aria-labelledby="stats-heading">
      <SectionLabel>In numbers</SectionLabel>
      <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
        <p className="md:col-span-8">
          <span className="ph inline-block text-[clamp(4.5rem,13vw,11rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-brand-500" title="Placeholder — to confirm with client">
            <Counter value="25,000" />+
          </span>
        </p>
        <div className="md:col-span-4 md:pb-4">
          <h2 id="stats-heading" className="t-h3">
            tonnes of steel delivered every year
          </h2>
          <p className="mt-2 text-muted">To contractors, fabricators and traders across Bahrain and the GCC.</p>
        </div>
      </div>

      <ul className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5" role="list">
        {certifications.map((c, i) => (
          <li key={c.name} className="border-b border-dashed border-line lg:border-b-0 lg:border-r lg:last:border-r-0">
            <Reveal delay={i * 0.06} className="flex h-full flex-col gap-3 p-6">
              <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/70 font-mono text-[10px]">
                {c.name.replace(/\[|\]/g, "").split(/[ /:]/)[0]}
              </span>
              <p className="font-medium">
                <T>{c.name}</T>
              </p>
              <p className="text-sm text-muted">{c.detail}</p>
              <Link href="/facilities-quality#certificates" className="mt-auto inline-flex items-center gap-1 text-sm text-brand-700 hover:underline">
                View certificate <ArrowIcon />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
