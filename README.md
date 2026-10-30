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

Then open http://localhost:3000 (English) or http://localhost:3000/ar (Arabic).

## English & Arabic

- English is served at `/…`, Arabic at `/ar/…` (right-to-left, IBM Plex Sans Arabic). All routes live in `web/app/[lang]`; `web/proxy.ts` maps unprefixed URLs to English.
- All copy lives in `web/content/en.ts` and `web/content/ar.ts`, which share one type (`web/content/types.ts`), so a missing translation fails the build.
- The Arabic text is a draft translation and should be reviewed by a native Arabic copywriter before launch.

## Status

Draft. Copy, figures and contact details written `[[like this]]` are placeholders shown with a dashed outline and must be confirmed by the client. Photos are interim CC0 stock (credits in `web/content/images.ts`). The contact form needs `RESEND_API_KEY`, `CONTACT_TO` and `CONTACT_FROM` (see `web/.env.example`).
