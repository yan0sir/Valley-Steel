import Link from "next/link";
import { getI18n } from "@/lib/i18n-server";
import { T } from "@/components/ui/T";
import { Logo } from "./Logo";
import { LanguageSwitch } from "./LanguageSwitch";

export async function Footer() {
  const { c, href } = await getI18n();
  const { site, ui } = c;
  return (
    <footer className="bg-brand-950 text-white">
      <div className="container-x grid gap-10 border-white/15 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <FooterCol title={ui.footer.goTo}>
          {[{ label: ui.home, href: "/" }, ...c.nav].map((n) => (
            <li key={n.href}>
              <Link href={href(n.href)} className="hover:text-brand-500">
                {n.label}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title={ui.footer.products}>
          {c.products.map((p) => (
            <li key={p.slug}>
              <Link href={href(`/products/${p.slug}`)} className="hover:text-brand-500">
                {p.name}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title={ui.footer.contact}>
          <li>
            <a href={site.phoneHref} className="ltr hover:text-brand-500">
              <T>{site.phone}</T>
            </a>
          </li>
          <li>
            <a href={site.emailHref} className="ltr hover:text-brand-500">
              <T>{site.email}</T>
            </a>
          </li>
          <li className="text-white/60">
            <T>{site.hours}</T>
          </li>
        </FooterCol>
        <FooterCol title={ui.footer.company}>
          <li>{site.name}</li>
          <li className="text-white/60">
            {ui.footer.crNo}{" "}
            <span className="ltr inline-block">
              <T>{site.cr}</T>
            </span>
          </li>
          <li className="text-white/60">
            <T>{site.address}</T>
            {ui.listSep}
            {site.country}
          </li>
        </FooterCol>
      </div>

      <div className="container-x flex flex-col-reverse gap-8 border-t border-white/15 py-8 md:flex-row md:items-end md:justify-between">
        <p className="flex flex-wrap items-center gap-x-2 text-xs text-white/50">
          <span>
            © 2026 {site.name}
          </span>
          <span aria-hidden>·</span>
          <Link href={href("/privacy")} className="hover:text-white">
            {ui.footer.privacy}
          </Link>
          <span aria-hidden>·</span>
          <LanguageSwitch className="hover:text-white" />
        </p>
        <Logo reversed className="h-auto w-56 md:w-80" />
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:border-s lg:border-dashed lg:border-white/20 lg:px-8 lg:first:border-s-0 lg:first:ps-0">
      <h2 className="t-label mb-4 text-brand-200">{title}</h2>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}
