/**
 * Isometric line illustrations (process steps, capability panels) and stand-in
 * product "cutouts". All drawn from a tiny isometric box helper so the style stays consistent.
 * The cutouts are placeholders for the photographed/rendered cutouts in the shot list.
 */
import type { ReactNode } from "react";

const C = Math.cos(Math.PI / 6);
const S = 0.5;
const pt = (x: number, y: number, z: number) => [(x - y) * C, (x + y) * S - z] as const;
const poly = (...p: (readonly [number, number])[]) => p.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");

type Fill = { top: string; left: string; right: string };
const LINE: Fill = { top: "none", left: "none", right: "none" };

/** Axis-aligned box at (x,y,z) with size (w,d,h). */
function Box({ x, y, z, w, d, h, fill = LINE, stroke = "currentColor" }: {
  x: number; y: number; z: number; w: number; d: number; h: number; fill?: Fill; stroke?: string;
}) {
  const p = (dx: number, dy: number, dz: number) => pt(x + dx, y + dy, z + dz);
  return (
    <g stroke={stroke} strokeLinejoin="round">
      <polygon points={poly(p(0, d, 0), p(w, d, 0), p(w, d, h), p(0, d, h))} fill={fill.left} />
      <polygon points={poly(p(w, 0, 0), p(w, d, 0), p(w, d, h), p(w, 0, h))} fill={fill.right} />
      <polygon points={poly(p(0, 0, h), p(w, 0, h), p(w, d, h), p(0, d, h))} fill={fill.top} />
    </g>
  );
}

/** Cylinder lying along the x axis. */
function Rod({ x, y, z, len, r, fill, stroke = "currentColor" }: {
  x: number; y: number; z: number; len: number; r: number; fill?: Fill; stroke?: string;
}) {
  const [ax, ay] = pt(x, y, z);
  const [bx, by] = pt(x + len, y, z);
  const rx = r * 0.62;
  const ry = r;
  return (
    <g stroke={stroke}>
      <path
        d={`M${ax},${ay - ry} L${bx},${by - ry} A${rx},${ry} 0 0 1 ${bx},${by + ry} L${ax},${ay + ry}`}
        fill={fill?.left ?? "none"}
      />
      <ellipse cx={bx} cy={by} rx={rx} ry={ry} fill={fill?.top ?? "none"} transform={`rotate(-30 ${bx} ${by})`} />
    </g>
  );
}

function Frame({ children, vb = "-120 -80 240 160", className = "" }: { children: ReactNode; vb?: string; className?: string }) {
  return (
    <svg viewBox={vb} className={className} fill="none" strokeWidth={1.5} overflow="visible" aria-hidden>
      {children}
    </svg>
  );
}

/** Shared cutout viewBox, sized to the tallest drawing (pipe stack / beam) plus its shadow. */
const CUTOUT_VB = "-130 -128 260 206";

const HL: Fill = { top: "#5591C5", left: "none", right: "none" };

/* ---------- Line illustrations ---------- */

export function IsoIllustration({ name, className = "" }: { name: string; className?: string }) {
  switch (name) {
    case "source": // ship container + bundles
      return (
        <Frame className={className}>
          <Box x={-60} y={-10} z={0} w={90} d={30} h={30} />
          <Box x={-60} y={-10} z={30} w={40} d={30} h={20} fill={HL} />
          <Box x={-15} y={-10} z={30} w={40} d={30} h={20} />
          <Box x={40} y={-10} z={0} w={30} d={30} h={8} />
          <Box x={40} y={-10} z={8} w={30} d={30} h={8} />
        </Frame>
      );
    case "inspect": // plate + clipboard + magnifier
      return (
        <Frame className={className}>
          <Box x={-50} y={-30} z={0} w={80} d={50} h={6} />
          <Box x={-20} y={-10} z={6} w={30} d={22} h={2} fill={HL} />
          <g stroke="currentColor">
            <circle cx={50} cy={-30} r={16} />
            <path d="M61 -19 L80 0" />
          </g>
        </Frame>
      );
    case "stock": // racks of bundles
      return (
        <Frame className={className}>
          {[0, 1, 2].map((i) => (
            <Box key={`a${i}`} x={-70} y={-40 + i * 26} z={0} w={110} d={16} h={10} fill={i === 1 ? HL : LINE} />
          ))}
          {[0, 1].map((i) => (
            <Box key={`b${i}`} x={-70} y={-27 + i * 26} z={10} w={110} d={16} h={10} />
          ))}
        </Frame>
      );
    case "process": // bent bar on machine
      return (
        <Frame className={className}>
          <Box x={-40} y={-20} z={0} w={70} d={40} h={24} />
          <Box x={-10} y={-5} z={24} w={10} d={10} h={10} fill={HL} />
          <g stroke="currentColor">
            <polyline points={poly(pt(-90, 0, 29), pt(-5, 0, 29), pt(-5, 50, 29), pt(40, 50, 29))} />
          </g>
        </Frame>
      );
    case "deliver": // flatbed truck
      return (
        <Frame className={className}>
          <Box x={-80} y={-10} z={8} w={100} d={34} h={4} />
          <Box x={-70} y={-5} z={12} w={80} d={24} h={10} fill={HL} />
          <Box x={24} y={-10} z={8} w={30} d={34} h={30} />
          <g stroke="currentColor">
            {[[-60, 24], [-10, 24], [40, 24]].map(([x, y]) => {
              const [cx, cy] = pt(x, y, 4);
              return <ellipse key={x} cx={cx} cy={cy} rx={6} ry={8} transform={`rotate(-30 ${cx} ${cy})`} />;
            })}
          </g>
        </Frame>
      );
    default:
      return null;
  }
}

/* ---------- Product cutouts (stand-ins) ---------- */

const STEEL: Fill = { top: "#c9d3dc", left: "#7f8f9e", right: "#a4b2bf" };
const DARK: Fill = { top: "#8a96a2", left: "#3e4954", right: "#5e6b77" };
const GALV: Fill = { top: "#e3e9ee", left: "#9aa8b4", right: "#c3ced8" };
const SHADOW = <ellipse cx={0} cy={58} rx={110} ry={14} fill="#0d1b2a" opacity={0.12} stroke="none" />;

export function Cutout({ kind, className = "" }: { kind: string; className?: string }) {
  const s = "#2b3540";
  switch (kind) {
    case "rebar":
      return (
        <Frame className={className} vb={CUTOUT_VB}>
          {SHADOW}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].slice(row).map((i) => (
              <Rod key={`${row}-${i}`} x={-90} y={-30 + i * 9 - row * 4.5} z={row * 8 + 4} len={150} r={4.5} fill={DARK} stroke={s} />
            )),
          )}
          <Box x={-40} y={-34} z={0} w={4} d={44} h={40} fill={{ top: "#5591C5", left: "#3c6d99", right: "#4b82b3" }} stroke={s} />
        </Frame>
      );
    case "beam":
      return (
        <Frame className={className} vb={CUTOUT_VB}>
          {SHADOW}
          <Box x={-90} y={-20} z={0} w={170} d={40} h={5} fill={STEEL} stroke={s} />
          <Box x={-90} y={-2.5} z={5} w={170} d={5} h={40} fill={STEEL} stroke={s} />
          <Box x={-90} y={-20} z={45} w={170} d={40} h={5} fill={STEEL} stroke={s} />
        </Frame>
      );
    case "plate":
      return (
        <Frame className={className} vb={CUTOUT_VB}>
          {SHADOW}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Box key={i} x={-70 + (i % 2) * 3} y={-45} z={i * 7} w={130} d={80} h={6} fill={i === 5 ? STEEL : DARK} stroke={s} />
          ))}
        </Frame>
      );
    case "pipe":
      return (
        <Frame className={className} vb={CUTOUT_VB}>
          {SHADOW}
          {[[0, 0], [1, 0], [2, 0], [0.5, 1], [1.5, 1], [1, 2]].map(([i, row], k) => (
            <g key={k}>
              <Rod x={-80} y={-30 + i * 22} z={row * 19 + 11} len={140} r={11} fill={GALV} stroke={s} />
              {(() => {
                const [cx, cy] = pt(60, -30 + i * 22, row * 19 + 11);
                return <ellipse cx={cx} cy={cy} rx={4} ry={6.5} fill="#2b3540" stroke="none" transform={`rotate(-30 ${cx} ${cy})`} />;
              })()}
            </g>
          ))}
        </Frame>
      );
    case "coil":
      return (
        <Frame className={className} vb={CUTOUT_VB}>
          {SHADOW}
          <path d={`M-62 -2 L-62 30 A62 36 0 0 0 62 30 L62 -2`} fill={GALV.left} stroke={s} />
          <ellipse cx={0} cy={-2} rx={62} ry={36} fill={GALV.top} stroke={s} />
          {[50, 38, 26].map((r) => (
            <ellipse key={r} cx={0} cy={-2} rx={r} ry={r * 0.58} stroke="#9aa8b4" />
          ))}
          <ellipse cx={0} cy={-2} rx={18} ry={10.5} fill="#2b3540" stroke={s} />
        </Frame>
      );
    case "wire":
      return (
        <Frame className={className} vb={CUTOUT_VB}>
          {SHADOW}
          {Array.from({ length: 14 }).map((_, i) => (
            <ellipse key={i} cx={-8 + i * 1.2} cy={-4 + i * 0.6} rx={60 - (i % 3) * 2} ry={46 - (i % 3) * 2} stroke={i % 2 ? "#3e4954" : "#7f8f9e"} strokeWidth={3} transform="rotate(-20)" />
          ))}
          <ellipse cx={0} cy={0} rx={30} ry={22} fill="#f4f6f8" stroke="#3e4954" transform="rotate(-20)" />
        </Frame>
      );
    case "bent":
      return (
        <Frame className={className} vb={CUTOUT_VB}>
          {SHADOW}
          {[0, 1, 2].map((i) => (
            <polyline
              key={i}
              points={poly(pt(-80 + i * 10, -30 + i * 10, 0), pt(-80 + i * 10, -30 + i * 10, 70), pt(40 + i * 10, -30 + i * 10, 70), pt(40 + i * 10, -30 + i * 10, 0))}
              stroke={i === 1 ? "#5591C5" : "#3e4954"}
              strokeWidth={6}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}
        </Frame>
      );
    default:
      return null;
  }
}
