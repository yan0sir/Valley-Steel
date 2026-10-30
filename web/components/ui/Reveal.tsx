"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Fade + 16px rise when scrolled into view (static under reduced motion). */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.1, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** A 1px rule that draws in from the left when it enters the viewport. */
export function Rule({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`h-px origin-left rtl:origin-right ${dark ? "bg-white/15" : "bg-line"} ${className}`}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.2, 0.7, 0.1, 1] }}
    />
  );
}
