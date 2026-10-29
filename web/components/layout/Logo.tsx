/**
 * Interim SVG redraw of the supplied logo (brand/logo-supplied.png).
 * The wordmark is set in Geist; replace with the client's vector artwork when it arrives.
 */
export function Logo({
  variant = "full",
  reversed = false,
  className = "",
}: {
  variant?: "full" | "compact";
  reversed?: boolean;
  className?: string;
}) {
  const ink = reversed ? "#ffffff" : "#0b0d10";
  const full = variant === "full";
  return (
    <svg
      viewBox={full ? "0 0 240 104" : "0 0 240 78"}
      className={className}
      role="img"
      aria-label="Valley Steel Trading W.L.L."
    >
      <rect x="6" y="2" width="130" height="10" fill="#5591C5" />
      <rect x="150" y="2" width="82" height="10" fill="#5591C5" />
      <text
        x="2"
        y="70"
        fill={ink}
        style={{ font: "800 72px var(--font-geist-sans), sans-serif", letterSpacing: "-3px" }}
      >
        valley
      </text>
      {full && (
        <text
          x="120"
          y="96"
          textAnchor="middle"
          fill={ink}
          style={{ font: "500 10.5px var(--font-geist-mono), monospace", letterSpacing: "6px" }}
        >
          STEEL TRADING W.L.L
        </text>
      )}
    </svg>
  );
}
