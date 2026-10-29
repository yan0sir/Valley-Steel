"use client";

import { useEffect, useRef, useState } from "react";

/** APC-style rolling digits. Non-digit characters (commas, +) render as-is. */
export function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`inline-flex tabular-nums ${className}`} aria-label={value}>
      {value.split("").map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={i} className="digit-col" aria-hidden>
            <span
              className="digit-strip"
              style={{
                transform: `translateY(-${on ? Number(ch) + 10 : 0}em)`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {[...Array(20)].map((_, n) => (
                <span key={n} className="block h-[1em]">
                  {n % 10}
                </span>
              ))}
            </span>
          </span>
        ) : (
          <span key={i} aria-hidden>
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
