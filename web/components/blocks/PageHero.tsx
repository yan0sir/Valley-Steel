import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/primitives";

/** Standard inner-page hero: label, H1, intro. Leaves room for the fixed header. */
export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-x pb-12 pt-32 md:pb-16 md:pt-40">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="t-h1 mt-6 max-w-4xl">{title}</h1>
      {intro && <p className="t-body-l mt-6 max-w-2xl text-muted">{intro}</p>}
      {children}
    </section>
  );
}
