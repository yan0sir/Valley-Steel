import { NextResponse, type NextRequest } from "next/server";

// English is served without a prefix; Arabic under /ar. All routes live in app/[lang],
// so unprefixed requests are rewritten to /en internally, and /en/... redirects to the
// clean URL so each page has one address.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/ar" || pathname.startsWith("/ar/")) return;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, metadata icons and any path with a file extension (public assets).
  matcher: ["/((?!_next/|api/|icon|apple-icon|.*\\..*).*)"],
};
