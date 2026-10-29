# Valley Steel — website

Website for **Valley Steel Trading W.L.L.**, a steel trader and stockist in Bahrain.

| Path | What |
|---|---|
| [`website-brief.md`](website-brief.md) | Purpose, design system, sitemap and draft copy |
| [`implementation-plan.md`](implementation-plan.md) | Stack, build phases and acceptance criteria |
| [`brand/`](brand) | Supplied logo |
| [`web/`](web) | Next.js 16 site (App Router, Tailwind v4, Motion) |

## Run locally

Requires Node.js 20+.

```bash
cd web
npm install
npm run dev
```

Then open http://localhost:3000.

## Status

Draft. Copy, figures and contact details written `[[like this]]` are placeholders shown with a dashed outline and must be confirmed by the client. Photos are interim CC0 stock (credits in `web/content/images.ts`). The contact form needs `RESEND_API_KEY`, `CONTACT_TO` and `CONTACT_FROM` (see `web/.env.example`).
