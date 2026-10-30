"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

/** Start each new page at the top instantly, instead of easing from the previous scroll position. */
function ResetOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();
  useEffect(() => {
    if (!window.location.hash) lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);
  return null;
}

/**
 * Site-wide momentum scrolling (Lenis). Native scroll position is kept in sync,
 * so Motion's useScroll / whileInView keep working. Smoothing switches off
 * automatically for visitors who prefer reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 1,
        anchors: { offset: -96 },
        stopInertiaOnNavigate: true,
      }}
    >
      <ResetOnNavigate />
      {children}
    </ReactLenis>
  );
}
