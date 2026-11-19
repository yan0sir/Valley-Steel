"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Photo } from "@/components/ui/Photo";
import { T } from "@/components/ui/T";
import { SectionLabel, TextLink } from "@/components/ui/primitives";

/*
 * "What we do" — scroll-linked sticky card stack (desktop).
 * Left: a sticky photo panel that swaps to the active card's photo.
 * Right: each card is sticky, offset by one title strip more than the card before it,
 * so as you scroll the next card slides up over the previous one and leaves the
 * previous card's number + title visible as a strip above it.
 * Below lg the cards simply stack, each with its own photo.
 */

const TOP = "7rem"; // clears the fixed header
const STRIP = 76; // px: visible title strip of a covered card

export function Capabilities() {
  const { c, href } = useI18n();
  const h = c.home;
  const items = h.capabilities;
  const id = useId();
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // The active card is the last one that has slid up to its sticky position.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const base = 7 * rem;
      let next = 0;
      cardRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= base + i * STRIP + 4) next = i;
      });
      setActive(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Card height fills the viewport below the stack of covered title strips.
  const stackHeight = `calc(100svh - ${TOP} - ${(items.length - 1) * STRIP}px - 1.5rem)`;

  return (
    <section className="bg-brand-950 text-white" aria-labelledby={`${id}-h`}>
      <div className="container-x py-20 md:py-28">
        <SectionLabel dark>{h.capabilitiesLabel}</SectionLabel>
        <h2 id={`${id}-h`} className="t-h2 mt-6 max-w-4xl">
          {h.capabilitiesHeading}
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Sticky photo panel (desktop) */}
          <div className="hidden lg:col-span-6 lg:block">
            <div
              className="sticky overflow-hidden rounded-xl"
              style={{ top: TOP, height: `calc(100svh - ${TOP} - 1.5rem)` }}
            >
              {items.map((item, i) => (
                <div
                  key={item.title}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
                    i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                  }`}
                >
                  <Photo name={item.photo} sizes="50vw" className="absolute inset-0" />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6">
                <p className="t-h2 leading-none">
                  <span className="t-label me-3 align-middle text-brand-200">0{active + 1}</span>
                  {items[active].title}
                </p>
                <div className="flex gap-1.5" aria-hidden>
                  {items.map((item, i) => (
                    <span
                      key={item.title}
                      className={`h-1.5 transition-all duration-500 ${i === active ? "w-8 bg-brand-500" : "w-4 bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card stack */}
          <ol className="space-y-6 lg:col-span-6" role="list">
            {items.map((item, i) => {
              const sticky: CSSProperties = {
                top: `calc(${TOP} + ${i * STRIP}px)`,
                height: stackHeight,
              };
              return (
                <li
                  key={item.title}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  aria-current={i === active ? "step" : undefined}
                  className="flex flex-col overflow-hidden rounded-xl border-t border-white/20 bg-[#13263a] shadow-[0_-20px_40px_-20px_rgb(0_0_0/0.6)] lg:sticky lg:min-h-[460px] lg:[height:var(--card-h)] lg:[top:var(--card-top)]"
                  style={{ "--card-h": sticky.height, "--card-top": sticky.top } as CSSProperties}
                >
                  <div className="flex shrink-0 items-baseline gap-4 px-6" style={{ minHeight: STRIP }}>
                    <span className="t-label pt-7 text-brand-200">0{i + 1}</span>
                    <h3
                      className={`t-h3 pt-6 transition-colors duration-300 ${
                        i === active ? "text-white" : "text-white/60"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 px-6 pb-6 ps-[calc(1.5rem+2.25rem)]">
                    <p className="max-w-xl text-white/75">
                      <T>{item.body}</T>
                    </p>
                    <Photo
                      name={item.detail}
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="aspect-[16/10] w-full rounded-lg lg:aspect-auto lg:min-h-[180px] lg:flex-1"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-2">
          <p className="text-sm text-white/70">{h.continuity}</p>
          <div>
            <p className="t-h3">{h.discover}</p>
            <div className="mt-2 flex gap-4">
              <TextLink href={href("/facilities-quality")} dark>
                {h.facilitiesLink}
              </TextLink>
              <TextLink href={href("/facilities-quality#quality")} dark>
                {h.qualityLink}
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
