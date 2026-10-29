# Valley Steel — Implementation Plan

> Companion to `website-brief.md`. Build order, stack and acceptance criteria for v1.
> Status: v0.2 (2026-10-20). Not started. Valley Steel Trading W.L.L. is a Bahrain steel trader/stockist; palette and draft copy are in the brief.

---

## Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | Static generation for speed, room for a CMS or dynamic features later |
| Styling | **Tailwind CSS v4** with CSS-variable design tokens | Tokens in one file; utilities for layout |
| Fonts | **Geist + Geist Mono** via `next/font` | Self-hosted automatically, no layout shift |
| Animation | **Motion** (`motion/react`) | Scroll-linked hero reveal, counters, reveals; built-in reduced-motion support |
| Content | Typed TS data files (`content/*.ts`) | Product families and specs as structured data; easy to move to a CMS later |
| Images | `next/image`, WebP/AVIF; cutouts as transparent WebP | Performance |
| Contact form | Server Action + **Resend** (email) + honeypot + rate limit | No RFQ, so a simple email delivery is enough |
| Hosting | **Vercel** | Zero-config Next.js hosting, preview URLs for client review |
| Quality | ESLint, Prettier, Lighthouse CI (optional), Playwright smoke tests | — |

Placeholders: any text written `[[LIKE THIS]]` renders with a dashed outline (`<Placeholder>` component), so nothing unconfirmed goes live unnoticed. Image placeholders show a labelled grey frame naming the shot from the shot list.

---

## Project structure

```
valley-steel/
├─ app/
│  ├─ layout.tsx                 # fonts, header, footer, metadata defaults
│  ├─ page.tsx                   # Home
│  ├─ about/page.tsx
│  ├─ products/page.tsx          # index
│  ├─ products/[family]/page.tsx # detail (generateStaticParams)
│  ├─ facilities-quality/page.tsx
│  ├─ contact/page.tsx + actions.ts
│  ├─ privacy/page.tsx
│  ├─ not-found.tsx
│  ├─ sitemap.ts, robots.ts
├─ components/
│  ├─ layout/    Header, MenuOverlay, Footer, GridLines, Section
│  ├─ ui/        Button, IconButton, SectionLabel, Accordion, Placeholder
│  ├─ blocks/    Hero, ScrollReveal, ProductSelector, Counter, CertBadges,
│  │             Capabilities, ProcessSteps, ContactCard, QuickContact, SpecTable
│  └─ illustrations/  isometric SVGs (process + capability panels)
├─ content/
│  ├─ site.ts            # company facts, contacts, addresses, socials
│  ├─ products.ts        # families: slug, name, summary, cutout, specs, datasheet
│  ├─ certifications.ts
│  └─ process.ts
├─ public/
│  ├─ images/ (placeholders → final photos)
│  ├─ cutouts/
│  └─ docs/ (datasheets, certificates PDFs)
└─ styles/
   ├─ tokens.css         # colours, type, spacing, motion
   └─ globals.css
```

---

## Phases

Each phase ends with a preview deploy for review.

### Phase 0: Inputs & prerequisites
- [x] Receive logo → palette derived (brief §3.1: logo blue `#5591C5`, ink `#0B0D10`, `brand-950` `#0D1B2A`)
- [ ] Redraw logo as SVG (full, compact, reversed); supplied PNG is only 248×123
- [ ] Client reviews draft copy (brief §5–6) and fills every `[[placeholder]]` (brief §7)
- [ ] Generate placeholder cutouts (AI renders), clearly marked for replacement
- [ ] Produce isometric line illustrations (Source → Inspect → Stock → Process → Deliver + Stock / Processing / Delivery panels), or commission them

**Done when:** palette locked, family list confirmed, placeholder asset set in place.

### Phase 1: Scaffolding
- [ ] `create-next-app` (TS, App Router, Tailwind, ESLint), Prettier, path aliases
- [ ] Load Geist + Geist Mono via `next/font`
- [ ] `styles/tokens.css`: colour, type scale, spacing, radius, easing tokens wired into Tailwind `@theme`
- [ ] `content/` data files with typed schemas, filled with the draft copy from the brief
- [ ] `<Placeholder>` component + image placeholder frame
- [ ] Vercel project + preview deploys

**Done when:** blank site deploys, tokens visible on a `/styleguide` dev route.

### Phase 2: Design primitives
- [ ] `GridLines` / `Section`: solid + dashed 1px rules, draw-in on enter
- [ ] Button (primary, secondary, text+arrow), circular IconButton
- [ ] SectionLabel (mono + square bullet)
- [ ] Accordion (accessible: `button` + `aria-expanded`, one open at a time)
- [ ] Reveal wrapper (fade + rise, stagger), reduced-motion fallback
- [ ] Type styles as utilities/components (Display, H1–H3, Body L, Label)

**Done when:** `/styleguide` shows every primitive in all states, keyboard-navigable.

### Phase 3: Global layout
- [ ] Header: logo, nav, "Menu +" pill; transparent over hero → solid on scroll
- [ ] MenuOverlay: full-screen, large links, contact details; focus trap, Esc closes
- [ ] Footer: column grid with dividers, addresses, company details, cert marks, oversized logo, legal row
- [ ] 404 page, privacy page shell, necessary-only cookie notice (only if analytics are added)

**Done when:** layout wraps every route, works 360px → 1920px, menu fully keyboard-accessible.

### Phase 4: Home page
Build in page order; each block is a standalone component fed from `content/`.
1. [ ] **Hero**: full-bleed drone image, logo blue bars slide in on load, Display H1 "Steel, stocked and delivered.", bottom "Supplying rebar, sections, plates and pipes across Bahrain" strip, QuickContact chip
2. [ ] **ScrollReveal ("Who we are")**: pinned section; `useScroll` + `useTransform` scales/clips the hero image into a framed panel as the statement rises. Static layout under reduced motion and on low-power mobile
3. [ ] **ProductSelector**: text list + sticky cutout card; hover/focus/click swaps the card (crossfade + slight float); mobile = snap carousel
4. [ ] **Counter + CertBadges**: rolling digits trigger once in view; badges link to PDFs
5. [ ] **Capabilities**: intro statement + accordion (Stock / Processing / Delivery) with swapping illustration panel on brand-950
6. [ ] **ProcessSteps**: 5 numbered steps (Source → Deliver) with isometric SVGs; horizontal scroll/drag on desktop, stacked on mobile
7. [ ] **ContactCard CTA**: photo background, overlaid card with person, phone/email buttons

**Done when:** Home matches the brief §5.1 on desktop/tablet/mobile; Lighthouse ≥ 90 on all four categories; no layout shift from animations.

### Phase 5: Products
- [ ] `/products` index: page hero, family card grid with floating cutouts, "Not sure which product fits?" band, ContactCard
- [ ] `/products/[family]` template: hero with cutout + datasheet/contact buttons, overview, **SpecTable**, relevant certs, applications, related products, ContactCard
- [ ] `generateStaticParams` from `content/products.ts`; per-page metadata + `Product` JSON-LD

**Done when:** adding a family to `products.ts` creates a fully styled page with no other changes.

### Phase 6: About
- [ ] Hero, story/timeline on a grid line, values row, stats (reuse Counter), optional team, ContactCard

### Phase 7: Facilities & Quality
- [ ] Hero, yard overview + stats + map, processing services, full process (reuse ProcessSteps), quality & traceability, certificate grid with PDFs, delivery, HSE, ContactCard

### Phase 8: Contact
- [ ] Contact cards, address/hours/map, company details
- [ ] Form: name, company, email, phone, message, consent; client + server validation (zod)
- [ ] Server Action → Resend to `[[sales email]]`, auto-reply to sender (optional)
- [ ] Spam protection: honeypot + basic rate limit; success/error states
- [ ] `tel:` / `mailto:` links tracked as conversion events (if analytics chosen)

**Done when:** a test submission arrives in the inbox; invalid input is handled accessibly.

### Phase 9: SEO, accessibility & performance
- [ ] Metadata per page, Open Graph images, `sitemap.ts`, `robots.ts`, canonical URLs
- [ ] JSON-LD: `Organization` + `LocalBusiness` (Bahrain address, CR, contact), `Product` per family
- [ ] WCAG 2.2 AA: contrast, focus states, alt text, landmarks, reduced motion
- [ ] Images: correct `sizes`, priority on hero only, AVIF/WebP; fonts subset
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms on mid-range mobile
- [ ] Privacy-friendly analytics (e.g. Vercel Analytics / Plausible), if the client wants it

### Phase 10: Content swap & launch
- [ ] Replace placeholders with final copy, photos, cutouts, PDFs; search the codebase for `[[` to confirm none remain
- [ ] Cross-browser/device QA (Chrome, Safari iOS, Firefox, Edge; 360 / 768 / 1280 / 1920)
- [ ] Playwright smoke tests: every route renders, menu opens, form submits
- [ ] Domain + DNS, HTTPS, redirects from any old site
- [ ] Hand-over notes: how to edit `content/` files, add a product, swap images

---

## Suggested sequencing

| Order | Phases | Output for review |
|---|---|---|
| 1 | 0–3 | Styleguide + empty shell with header/menu/footer |
| 2 | 4 | Home page (the main design sign-off) |
| 3 | 5 | Products index + one complete family page |
| 4 | 6–8 | About, Facilities & Quality, Contact |
| 5 | 9–10 | Polish, real content, launch |

Get the Home page approved before building the other pages. It sets every pattern they reuse.

## Risks & mitigations
| Risk | Mitigation |
|---|---|
| No photos yet; drone/yard imagery drives the whole design | Book the shoot early (shot list in brief §6); design with labelled placeholders sized to final crops |
| Product spec data incomplete | Spec table hides empty rows; datasheet button hidden if no PDF |
| Scroll-reveal hurts mobile performance | Transform/opacity only; disable pinning below 768px and under reduced motion |
| Low-res logo | Redraw as SVG in Phase 0; ask client for the original vector |
