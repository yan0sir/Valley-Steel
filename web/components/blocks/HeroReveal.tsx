"use client";

import Link from "next/link";
import { useRef, useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { site } from "@/content/site";
import { Bars, SectionLabel, TextLink } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { QuickContact } from "./ContactCard";

const statement =
  "Valley Steel is a Bahrain-based steel trader. We source from approved mills, hold stock locally and deliver to your site when you need it, with the certificates to prove every bar.";

const strip = (
  <>
    Supplying{" "}
    {[
      ["rebar", "/products/rebar"],
      ["sections", "/products/structural-sections"],
      ["plates", "/products/plates-sheets"],
      ["pipes", "/products/pipes-hollow-sections"],
    ].map(([label, href], i, a) => (
      <span key={href}>
        <Link href={href} className="font-medium underline underline-offset-4 hover:text-brand-200">
          {label}
        </Link>
        {i < a.length - 2 ? ", " : i === a.length - 2 ? " and " : ""}
      </span>
    ))}{" "}
    across Bahrain.
  </>
);

function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 768px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 768px)").matches,
    () => true,
  );
}

function HeroCopy({ opacity }: { opacity?: MotionValue<number> }) {
  return (
    <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-between text-white">
      <div className="container-x pt-32 md:pt-40">
        <Bars animate className="mb-6 scale-150 origin-left" />
        <h1 className="t-display rise-in max-w-[11ch]" style={{ animationDelay: "250ms" }}>
          {site.tagline}
        </h1>
      </div>
      <div className="container-x flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
        <p className="t-body-l rise-in max-w-md text-white/90" style={{ animationDelay: "450ms" }}>
          {strip}
        </p>
        <div className="rise-in" style={{ animationDelay: "650ms" }}>
          <QuickContact />
        </div>
      </div>
    </motion.div>
  );
}

function Statement() {
  return (
    <>
      <SectionLabel>Who we are</SectionLabel>
      <p className="t-h2 mt-6">{statement}</p>
      <div className="mt-8">
        <TextLink href="/about">More about us</TextLink>
      </div>
    </>
  );
}

/** Hero that scales into a framed panel as "Who we are" scrolls in (Auremin-style moment). */
export function HeroReveal() {
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();

  if (reduce || !desktop) {
    return (
      <>
        <section className="relative h-[100svh] min-h-[560px]">
          <Photo name="heroAerial" preload className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />
          <HeroCopy />
        </section>
        <section className="container-x py-[72px]">
          <Statement />
        </section>
      </>
    );
  }
  return <PinnedHero />;
}

function PinnedHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const ease = [0.1, 0.65];

  const top = useTransform(scrollYProgress, ease, ["0%", "14%"]);
  const left = useTransform(scrollYProgress, ease, ["0%", "52%"]);
  const right = useTransform(scrollYProgress, ease, ["0%", "2.5%"]);
  const bottom = useTransform(scrollYProgress, ease, ["0%", "10%"]);
  const radius = useTransform(scrollYProgress, ease, ["0px", "12px"]);
  const clipPath = useTransform(
    [top, right, bottom, left, radius] as MotionValue<string>[],
    ([t, r, b, l, rad]) => `inset(${t} ${r} ${b} ${l} round ${rad})`,
  );
  const imgScale = useTransform(scrollYProgress, ease, [1.08, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const stOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const stY = useTransform(scrollYProgress, [0.35, 0.6], [40, 0]);

  return (
    <div ref={ref} className="relative h-[230vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* blueprint rules */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div className="rule-v-dashed absolute inset-y-0 left-1/2" />
        </div>

        <motion.div style={{ clipPath }} className="absolute inset-0 z-10">
          <motion.div style={{ scale: imgScale }} className="absolute inset-0">
            <Photo name="heroAerial" preload className="absolute inset-0" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />
          <HeroCopy opacity={heroOpacity} />
        </motion.div>

        <motion.div
          style={{ opacity: stOpacity, y: stY }}
          className="container-x absolute inset-y-0 left-0 right-0 z-0 flex items-center"
        >
          <div className="w-[46%] pr-8">
            <Statement />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
