import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/blocks/PageHero";
import { ContactForm } from "@/components/blocks/ContactForm";
import { ImagePlaceholder, MailIcon, PhoneIcon, SectionLabel } from "@/components/ui/primitives";
import { T, plain } from "@/components/ui/T";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, email or message Valley Steel Trading W.L.L. for prices, stock checks or a yard visit in Bahrain.",
};

const general = {
  phone: "[[+973 1700 0001]]",
  phoneHref: "tel:+97317000001",
  email: "[[info@valleysteel.bh]]",
  emailHref: "mailto:info@valleysteel.bh",
};

function ContactLine({ href, icon, children, label }: { href: string; icon: React.ReactNode; children: string; label: string }) {
  return (
    <a href={href} aria-label={`${label} ${plain(children)}`} className="group flex items-center gap-3 py-1">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-brand-950 text-white transition-colors group-hover:bg-brand-700">
        {icon}
      </span>
      <span className="group-hover:underline">
        <T>{children}</T>
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk steel."
        intro="Questions, prices, stock checks or a yard visit? Call, email or send a message. We'll reply the same working day."
      />

      <section className="border-t border-line" aria-label="Contact options">
        <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-0">
          {/* People */}
          <div className="space-y-6 lg:col-span-4 lg:border-r lg:border-dashed lg:border-line lg:pr-10">
            <div className="rounded-xl bg-surface p-6">
              <div className="flex items-center gap-4">
                <div className="img-ph h-16 w-16 shrink-0 rounded" role="img" aria-label="Placeholder: sales manager portrait" />
                <div>
                  <p className="font-medium">
                    <T>{site.salesContact.name}</T>
                  </p>
                  <p className="text-sm text-muted">{site.salesContact.role}</p>
                </div>
              </div>
              <div className="mt-5 space-y-1 text-sm">
                <ContactLine href={site.phoneHref} icon={<PhoneIcon />} label="Call">
                  {site.phone}
                </ContactLine>
                <ContactLine href={site.emailHref} icon={<MailIcon />} label="Email">
                  {site.email}
                </ContactLine>
              </div>
            </div>
            <div className="rounded-xl bg-tint p-6">
              <p className="t-label text-muted">General enquiries</p>
              <div className="mt-4 space-y-1 text-sm">
                <ContactLine href={general.phoneHref} icon={<PhoneIcon />} label="Call">
                  {general.phone}
                </ContactLine>
                <ContactLine href={general.emailHref} icon={<MailIcon />} label="Email">
                  {general.email}
                </ContactLine>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <SectionLabel>Send a message</SectionLabel>
            <h2 className="t-h2 mb-8 mt-6">Tell us what you need.</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="bg-tint" aria-labelledby="visit-heading">
        <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SectionLabel>Visit us</SectionLabel>
            <h2 id="visit-heading" className="t-h2 mt-6">
              Our yard
            </h2>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="t-label text-muted">Address</dt>
                <dd className="mt-1">
                  {site.name}
                  <br />
                  <T>{site.address}</T>
                  <br />
                  {site.country}
                </dd>
              </div>
              <div>
                <dt className="t-label text-muted">Opening hours</dt>
                <dd className="mt-1">
                  <T>{site.hours}</T>, Friday closed
                </dd>
              </div>
              <div>
                <dt className="t-label text-muted">Commercial registration</dt>
                <dd className="mt-1">
                  CR No. <T>{site.cr}</T>
                </dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-8">
            <ImagePlaceholder shot="Map · yard location (embed once address is confirmed)" className="aspect-[16/10] w-full rounded-xl" />
          </div>
        </div>
      </section>
    </>
  );
}
