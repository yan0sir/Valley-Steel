import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getI18n, pageMetadata } from "@/lib/i18n-server";
import { PageHero } from "@/components/blocks/PageHero";
import { ContactForm } from "@/components/blocks/ContactForm";
import { ImagePlaceholder, MailIcon, PhoneIcon, SectionLabel } from "@/components/ui/primitives";
import { T, plain } from "@/components/ui/T";

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getI18n();
  return pageMetadata("/contact", c.meta.contact);
}

function ContactLine({ href, icon, children, label }: { href: string; icon: ReactNode; children: string; label: string }) {
  return (
    <a href={href} aria-label={`${label} ${plain(children)}`} className="group flex items-center gap-3 py-1">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-brand-950 text-white transition-colors group-hover:bg-brand-700">
        {icon}
      </span>
      <span className="ltr group-hover:underline">
        <T>{children}</T>
      </span>
    </a>
  );
}

export default async function ContactPage() {
  const { c } = await getI18n();
  const { site, ui } = c;
  const k = c.contact;
  return (
    <>
      <PageHero label={k.label} title={k.title} intro={k.intro} />

      <section className="border-t border-line" aria-label={k.optionsAria}>
        <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-0">
          {/* People */}
          <div className="space-y-6 lg:col-span-4 lg:border-e lg:border-dashed lg:border-line lg:pe-10">
            <div className="rounded-xl bg-surface p-6">
              <div className="flex items-center gap-4">
                <div className="img-ph h-16 w-16 shrink-0 rounded" role="img" aria-label={ui.portraitPlaceholder} />
                <div>
                  <p className="font-medium">
                    <T>{site.salesContact.name}</T>
                  </p>
                  <p className="text-sm text-muted">{site.salesContact.role}</p>
                </div>
              </div>
              <div className="mt-5 space-y-1 text-sm">
                <ContactLine href={site.phoneHref} icon={<PhoneIcon />} label={ui.call}>
                  {site.phone}
                </ContactLine>
                <ContactLine href={site.emailHref} icon={<MailIcon />} label={ui.email}>
                  {site.email}
                </ContactLine>
              </div>
            </div>
            <div className="rounded-xl bg-tint p-6">
              <p className="t-label text-muted">{k.general}</p>
              <div className="mt-4 space-y-1 text-sm">
                <ContactLine href={site.generalPhoneHref} icon={<PhoneIcon />} label={ui.call}>
                  {site.generalPhone}
                </ContactLine>
                <ContactLine href={site.generalEmailHref} icon={<MailIcon />} label={ui.email}>
                  {site.generalEmail}
                </ContactLine>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <SectionLabel>{k.formLabel}</SectionLabel>
            <h2 className="t-h2 mb-8 mt-6">{k.formHeading}</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="bg-tint" aria-labelledby="visit-heading">
        <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SectionLabel>{k.visitLabel}</SectionLabel>
            <h2 id="visit-heading" className="t-h2 mt-6">
              {k.visitHeading}
            </h2>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="t-label text-muted">{k.address}</dt>
                <dd className="mt-1">
                  {site.name}
                  <br />
                  <T>{site.address}</T>
                  <br />
                  {site.country}
                </dd>
              </div>
              <div>
                <dt className="t-label text-muted">{k.hours}</dt>
                <dd className="mt-1">
                  <T>{site.hours}</T>
                  {ui.listSep}
                  {site.fridayClosed}
                </dd>
              </div>
              <div>
                <dt className="t-label text-muted">{k.registration}</dt>
                <dd className="mt-1">
                  {ui.footer.crNo}{" "}
                  <span className="ltr inline-block">
                    <T>{site.cr}</T>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-8">
            <ImagePlaceholder
              shot={k.map}
              photoWord={ui.photo}
              placeholderWord={ui.placeholder}
              className="aspect-[16/10] w-full rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
