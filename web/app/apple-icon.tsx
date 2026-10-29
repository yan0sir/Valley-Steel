import { ImageResponse } from "next/og";

// iOS home-screen icon: same mark as app/icon.svg, square (iOS rounds the corners itself).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="180" height="180">
        <rect width="64" height="64" fill="#0D1B2A" />
        <rect x="12" y="13" width="24" height="6" rx="1" fill="#5591C5" />
        <rect x="39" y="13" width="13" height="6" rx="1" fill="#5591C5" />
        <path
          d="M17 27 L32 51 L47 27"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    size,
  );
}
