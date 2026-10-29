import Link from "next/link";
import { nav, site } from "@/content/site";
import { products } from "@/content/products";
import { T } from "@/components/ui/T";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="container-x grid gap-10 border-white/15 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <FooterCol title="Go to">
          {[{ label: "Home", href: "/" }, ...nav].map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-brand-500">
                {n.label}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Products">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`} className="hover:text-brand-500">
                {p.name}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Contact">
          <li>
            <a href={site.phoneHref} className="hover:text-brand-500">
              <T>{site.phone}</T>
            </a>
          </li>
          <li>
            <a href={site.emailHref} className="hover:text-brand-500">
              <T>{site.email}</T>
            </a>
          </li>
          <li className="text-white/60">
            <T>{site.hours}</T>
          </li>
        </FooterCol>
        <FooterCol title="Company">
          <li>{site.name}</li>
          <li className="text-white/60">
            CR No. <T>{site.cr}</T>
          </li>
          <li className="text-white/60">
            <T>{site.address}</T>, {site.country}
          </li>
        </FooterCol>
      </div>

      <div className="container-x flex flex-col-reverse gap-8 border-t border-white/15 py-8 md:flex-row md:items-end md:justify-between">
        <p className="text-xs text-white/50">
          © 2026 {site.name} ·{" "}
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </p>
        <Logo reversed className="h-auto w-56 md:w-80" />
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:border-l lg:border-dashed lg:border-white/20 lg:px-8 lg:first:border-l-0 lg:first:pl-0">
      <h2 className="t-label mb-4 text-brand-200">{title}</h2>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}
