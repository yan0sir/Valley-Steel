import { site } from "@/content/site";
import { T, plain } from "@/components/ui/T";
import { MailIcon, PhoneIcon, TextLink, Bars } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";

function Avatar({ size = 48 }: { size?: number }) {
  return (
    <div
      className="img-ph shrink-0 rounded"
      style={{ width: size, height: size }}
      role="img"
      aria-label="Placeholder: sales manager portrait"
    />
  );
}

function IconButtons({ dark = false }: { dark?: boolean }) {
  const cls = dark
    ? "bg-white/10 text-white hover:bg-white hover:text-brand-950"
    : "bg-brand-950 text-white hover:bg-brand-700";
  return (
    <div className="flex gap-2">
      <a href={site.phoneHref} aria-label={`Call ${plain(site.phone)}`} className={`inline-flex h-10 w-10 items-center justify-center rounded transition-colors ${cls}`}>
        <PhoneIcon />
      </a>
      <a href={site.emailHref} aria-label={`Email ${plain(site.email)}`} className={`inline-flex h-10 w-10 items-center justify-center rounded transition-colors ${cls}`}>
        <MailIcon />
      </a>
    </div>
  );
}

/** Compact chip in the hero (APC "Rather get in touch fast?"). */
export function QuickContact() {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-black/35 p-2 pl-4 text-white backdrop-blur-md">
      <p className="text-sm">Rather get in touch fast?</p>
      <Avatar size={40} />
      <IconButtons dark />
    </div>
  );
}

/** Closing CTA used on every page. */
export function ContactCTA() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="relative overflow-hidden rounded-xl">
        <Photo name="rebarSite" sizes="(min-width: 1440px) 1392px, 100vw" className="aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]" />
        <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:right-8 sm:top-1/2 sm:bottom-auto sm:w-[400px] sm:-translate-y-1/2">
          <div className="rounded-xl bg-surface p-6 shadow-[0_20px_60px_-20px_rgb(13_27_42/0.4)] md:p-8">
            <div className="flex items-start justify-between gap-4">
              <h2 className="t-h2">Let&apos;s keep it practical.</h2>
              <Avatar />
            </div>
            <p className="mt-4 text-muted">
              Need a price, a stock check or a delivery date? Call or email and we&apos;ll sort it the same day.
            </p>
            <p className="mt-4 text-sm">
              <span className="font-medium">
                <T>{site.salesContact.name}</T>
              </span>
              , {site.salesContact.role}
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <IconButtons />
              <TextLink href="/contact">Go to contact</TextLink>
            </div>
          </div>
        </div>
        <Bars className="absolute left-6 top-6" />
      </div>
    </section>
  );
}
