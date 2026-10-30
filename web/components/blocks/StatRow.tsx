"use client";

import { useI18n } from "@/components/i18n/I18nProvider";
import { Counter } from "./Counter";

/** Row of rolling-counter stats. All figures are unconfirmed, so each number carries the placeholder outline. */
export function StatRow({ stats }: { stats: { value: string; suffix: string; label: string }[] }) {
  const { c } = useI18n();
  return (
    <ul className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4" role="list">
      {stats.map((s) => (
        <li
          key={s.label}
          className="border-b border-dashed border-line py-8 px-6 sm:odd:border-e lg:border-b-0 lg:border-e lg:last:border-e-0"
        >
          <p className="text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] text-brand-500">
            <span dir="ltr" className="ph inline-block" title={c.ui.placeholderTitle}>
              <Counter value={s.value} />
              {s.suffix}
            </span>
          </p>
          <p className="mt-3 text-muted">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}
