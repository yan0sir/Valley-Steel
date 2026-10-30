// Browsers request /favicon.ico on their own; point them at the SVG icon (app/icon.svg)
// instead of letting the request fall through to the [lang] routes and 404.
export function GET(request: Request) {
  return Response.redirect(new URL("/icon.svg", request.url), 308);
}
