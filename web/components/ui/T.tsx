import { Fragment } from "react";

/** Renders text, outlining any [[unconfirmed]] segment so it can't go live unnoticed. */
export function T({ children }: { children: string }) {
  const parts = children.split(/(\[\[.*?\]\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[[") ? (
          <span key={i} className="ph" title="Placeholder — to confirm with client">
            {part.slice(2, -2)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Strip placeholder brackets for attributes (aria-labels, hrefs). */
export const plain = (s: string) => s.replace(/\[\[|\]\]/g, "");
