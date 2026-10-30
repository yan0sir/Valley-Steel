import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { getI18n, pageMetadata } from "@/lib/i18n-server";
import { locales } from "@/lib/i18n";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Arabic pages: a geometric sans that sits well beside Geist and the logo wordmark.
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { c } = await getI18n();
  return {
    ...(await pageMetadata("/", { title: c.meta.siteTitle, description: c.meta.description })),
    title: { default: c.meta.siteTitle, template: c.meta.titleTemplate },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { lang, dir } = await getI18n();
  return (
    <html
      lang={lang === "ar" ? "ar-BH" : "en-GB"}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} ${plexArabic.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <I18nProvider lang={lang}>
          <SmoothScroll>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  );
}
