import { notFound } from "next/navigation";

// Any URL that matches no page renders the localized [lang]/not-found.tsx
// inside the site layout (header, footer, language switch).
// It always 404s, so there is no navigation to validate as instant.
export const instant = false;

export default function CatchAll() {
  notFound();
}
