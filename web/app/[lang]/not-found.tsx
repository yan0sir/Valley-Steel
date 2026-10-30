"use client";

import { useI18n } from "@/components/i18n/I18nProvider";
import { Button, SectionLabel } from "@/components/ui/primitives";

export default function NotFound() {
  const { c, href } = useI18n();
  const t = c.notFound;
  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center pb-20 pt-36">
      <SectionLabel>{t.label}</SectionLabel>
      <h1 className="t-h1 mt-6 max-w-3xl">{t.title}</h1>
      <p className="t-body-l mt-6 max-w-xl text-muted">{t.body}</p>
      <div className="mt-10 flex gap-3">
        <Button href={href("/")}>{t.home}</Button>
        <Button href={href("/products")} variant="secondary">
          {t.products}
        </Button>
      </div>
    </section>
  );
}
