# Valley Steel — Website Brief

> Status: ideation, v0.2 (2026-10-20).
> **Confirmed:** logo (`brand/logo-supplied.png`), Valley Steel Trading W.L.L. is a **steel trader / stockist based in Bahrain**.
> **Everything else is draft copy written for review.** Any figure, name, certification or address written `[[LIKE THIS]]` is a placeholder the client must confirm before launch.

---

## 1. Purpose of the website

Valley Steel Trading W.L.L. sources, stocks, processes and delivers steel to buyers in Bahrain and the wider GCC. The website does two jobs:

1. **Build credibility.** Valley Steel doesn't own a mill, so buyers have to trust that it can supply the right grade, in the right quantity, with the right paperwork, on time. The site should show that with evidence: stock range, warehouse and yard, mill test certificates, approved mills, a delivery fleet, and real people.
2. **Act as a product catalogue.** Buyers can find a product family, see the grades, standards and sizes held in stock or available to order, and download a datasheet.

Conversion is deliberately simple: **no RFQ form.** Every page ends at a contact card (phone, email) and a short message form.

### Primary audiences

| Audience | What they need to see | Where they find it |
|---|---|---|
| **Contractors & developers** | Rebar, mesh and sections in stock; cut & bend; fast delivery to site anywhere in Bahrain; MTCs for consultants | Products, Facilities & Quality (processing, logistics) |
| **Industrial / OEM / fabrication buyers** | Plates, sheets, pipes and hollow sections; grade and tolerance detail; consistent supply | Product detail pages, Quality |
| **Distributors & traders (GCC)** | Breadth of range, volumes, mill sources, reliability | Home (counter, mills/standards), Products, About |

### Success measures (to agree with client)
- Contact enquiries per month (form + click-to-call + click-to-email + WhatsApp if added later)
- Datasheet downloads per product family
- Visits to Products and Facilities & Quality pages
- Share of visitors who reach a contact card

---

## 2. Creative direction

**APC-led, with two Auremin accents.**

The site should feel like an engineered drawing brought to life: calm, light, precise and practical, with a human touch. APC Pallets supplies the structure and most of the components. Auremin adds **floating material cutouts** and **one cinematic scroll moment**.

**Keywords:** dependable, stocked, precise, local, approachable.
**Avoid:** sparks-on-black heavy-industry clichés, generic corporate stock photos, gradients and glows, and any implication that Valley Steel manufactures steel. It is a trader: it supplies and processes steel.

### Logo-derived motif: the blue bars
The logo has **two blue bars sitting on top of the wordmark**. This becomes the site's signature graphic, playing the role of APC's thin polygon:
- A short, thick blue bar (pair of bars on key moments) sits above section labels and H1s.
- In the hero, the two bars animate in (slide from left) over the yard photo, then the headline appears beneath them, echoing the logo lock-up.
- Grid rules use the same bar proportions where lines meet section edges.

### What we take from each reference

| Element | Source | How it's used for Valley Steel |
|---|---|---|
| Dashed "blueprint" grid lines | APC | Global layout language: thin solid section edges, dashed internal column splits, like a technical drawing. |
| Aerial drone hero + geometric overlay | APC | Drone shot of the Valley Steel stockyard/warehouse; the logo's blue bars animate over it. |
| Quick-contact chip in hero | APC | Card bottom-right: sales rep photo + phone + email. |
| Product selector (list left, card right) | APC | Product families as large text; the card swaps the cutout image and description. |
| Floating material cutouts | Auremin | Studio cutouts of rebar bundles, I-beams, plate stacks, pipes, coils on transparent backgrounds. |
| Rolling-digit counter | APC | `[[25,000]]+ tonnes of steel delivered every year`. |
| Certification / standards row | APC | Standards Valley Steel supplies to + company certification, each with "View certificate". |
| Capability accordion + illustration panel | APC | Stock / Processing / Delivery. |
| Numbered isometric process steps | APC | Source → Inspect → Stock → Process → Deliver. |
| Contact card with a real person | APC | Closing CTA on every page. |
| Cinematic scroll reveal | Auremin | Home only: hero image scales into a framed panel as "Who we are" scrolls in. |
| Large gridded footer + oversized logo | APC | Sitemap, Bahrain address, CR number, contact. |

---

## 3. Design system

### 3.1 Colour (derived from the logo)

The logo uses **steel blue `#5591C5`** and **black**. The system pairs them with cool steel neutrals. The structure mirrors APC: light tinted background, one deep colour for solid panels, one light tint for highlights.

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#F4F6F8` | Page background (cool off-white) |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-surface-tint` | `#E4EEF7` | Highlight bands, active list item, product card backgrounds (APC's sage band → blue tint) |
| `--color-ink` | `#0B0D10` | Primary text; matches the logo's black |
| `--color-ink-muted` | `#55606B` | Secondary text |
| `--color-line` | `#C8D0D8` | Grid rules, dividers |
| `--color-brand-950` | `#0D1B2A` | Solid panels, primary buttons, "Menu +" pill, footer (blue-black, links the logo's black and blue) |
| `--color-brand-700` | `#2F6699` | Links, focus rings, small text on light backgrounds (AA-safe: ≈ 5.9:1 on white) |
| `--color-brand-500` | `#5591C5` | **Logo blue.** Bars, counter digits, illustration highlights, icons, large text only (≈ 3.4:1 on white, so never body text) |
| `--color-brand-200` | `#BCD5EC` | Hover fills, dashed highlight lines on dark panels |

Rules:
- Logo blue is a **graphic** colour (bars, highlights, large display numerals), not a text colour on light backgrounds; use `brand-700` for blue text.
- On `brand-950` panels, use white text and `brand-500` / `brand-200` accents.
- One saturated colour per viewport. No gradients.
- Dark mode out of scope for v1.

**Logo usage:** the supplied PNG is low resolution (248×123). An SVG redraw is needed (Phase 0). Versions: full lock-up (with "STEEL TRADING W.L.L"), compact (bars + "valley") for the header, reversed (white wordmark, blue bars) for dark panels and the footer.

### 3.2 Typography

**Geist** (geometric grotesk, sits well next to the logo's heavy rounded wordmark) + **Geist Mono** for labels, grades and dimensions.

| Style | Font | Size (desktop / mobile) | Use |
|---|---|---|---|
| Display | Geist 600 | 96 / 48px, lh 0.95, tracking −0.03em | Hero H1 |
| H1 | Geist 500 | 64 / 40px | Page titles |
| H2 | Geist 500 | 44 / 32px | Section titles, product selector list |
| H3 | Geist 500 | 24 / 20px | Cards, accordion items |
| Body L | Geist 400 | 20 / 18px | Intros |
| Body | Geist 400 | 16px, lh 1.55 | Default |
| Small | Geist 400 | 14px | Captions, footer |
| Label / spec | Geist Mono 500, uppercase, +0.08em | 12px | Section labels, spec tables, step numbers, grades (`B500B`, `S275JR`, `ASTM A36`) |

Mono labels echo the logo's widely tracked "STEEL TRADING W.L.L" line.

### 3.3 Layout & grid
- 12 columns, max width 1440px, gutters 24px (mobile 16px).
- 1px `--color-line` rules: solid at section edges, dashed (4/4) for internal splits; they draw in on enter.
- Section rhythm 120px desktop / 72px mobile.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 120, 160.
- Radius: 4px buttons/inputs, 12px cards/images; hero full-bleed, no radius.

### 3.4 Components

| Component | Notes |
|---|---|
| Header | Compact logo left; links: Products, Facilities & Quality, About, Contact; `brand-950` "Menu +" pill right. Transparent over hero, solid after scroll. |
| Menu overlay | Full screen, large H2 links, phone/email, Bahrain address. |
| Buttons | Primary (`brand-950` fill), secondary (outline), text + arrow, circular arrow icon button. |
| Section label | Blue bar + mono uppercase label. |
| Product selector | Text list + sticky cutout card; snap carousel on mobile. |
| Product card | Cutout on `surface-tint`, name, one-liner, arrow. |
| Spec table | Mono values, zebra rows, sticky first column on mobile. |
| Counter | Rolling digits in `brand-500`, once on enter. |
| Standard / cert badge | Mark, name, one-liner, "View" link (PDF). |
| Accordion | Circle `+`/`−`, one open at a time, linked illustration panel. |
| Process step | Number tile (`brand-950` active / tint idle), isometric line art, title + copy. |
| Contact card / quick-contact chip | Photo, name, role, phone + email icon buttons. |
| Form fields | Label above, 1px border, `brand-700` focus ring. |
| Footer | `brand-950`, gridded columns, reversed oversized logo. |

### 3.5 Imagery
No assets yet. The build uses labelled placeholders; the client works from the shot list in §7.
- **Photography:** daylight, true colour, steel in context: stacked bundles in the yard, overhead cranes, forklifts, trucks loading, people in PPE. Bahrain light (bright, warm) is fine; avoid heavy grading.
- **Cutouts (Auremin):** one per product family, consistent 3/4 angle, soft shadow, transparent WebP.
- **Illustrations:** isometric line art, 1.5px ink lines with `brand-500` highlights, for process steps and accordion panels.

### 3.6 Motion
- Easing `cubic-bezier(0.2, 0.7, 0.1, 1)`; 200ms UI / 600ms reveals.
- Reveals: fade + 16px rise, 60ms stagger. Grid lines draw in. Logo bars slide in on the hero.
- **Signature moment (Auremin):** Home hero image scales into a framed panel as "Who we are" scrolls up. The only pinned section.
- All motion respects `prefers-reduced-motion`.

### 3.7 Voice
Short, practical, confident, like APC. Talk about what the buyer gets: the right grade, in stock, with paperwork, delivered on time. Use specifics (grades, standards, sizes). British English, which suits Bahrain's construction sector (BS/EN standards, "metres", "tonnes").

---

## 4. Sitemap

```
/                         Home
/about                    About
/products                 Products index
/products/[family]        Product family detail
/facilities-quality       Facilities & Quality (yard, processing, QA, delivery)
/contact                  Contact
/privacy                  Privacy
404
```

**Product families (draft):**

| Slug | Family |
|---|---|
| `rebar` | Reinforcing steel bars & mesh |
| `structural-sections` | Beams, columns, angles & channels |
| `plates-sheets` | Plates & sheets |
| `pipes-hollow-sections` | Pipes & hollow sections |
| `coils-galvanized` | Coils & galvanized products |
| `wire-accessories` | Wire rod, binding wire & accessories |
| `processing` | Processing services: cut & bend, cut-to-length, shearing |

---

## 5. Site-wide content

**Company name:** Valley Steel Trading W.L.L.
**Tagline (draft):** *Steel, stocked and delivered.*
**Meta description (draft):** Valley Steel Trading W.L.L. supplies rebar, structural sections, plates, pipes and more from stock in Bahrain, with mill certificates, in-house processing and on-time delivery across the Kingdom.

**Header nav:** Products · Facilities & Quality · About · Contact · `Menu +`

**Menu overlay:** Home / Products / Facilities & Quality / About / Contact
Side column: "Rather get in touch fast?" · `[[+973 1700 0000]]` · `[[sales@valleysteel.bh]]` · `[[Building, Road, Block, Area]], Kingdom of Bahrain`

**Footer**
- Column "Go to": Home, Products, Facilities & Quality, About, Contact
- Column "Products": the 7 families
- Column "Contact": phone, email, opening hours `[[Sat–Thu, 7:00–17:00]]`
- Column "Company": Valley Steel Trading W.L.L. · CR No. `[[000000-0]]` · `[[address]]`, Kingdom of Bahrain
- Legal row: © 2026 Valley Steel Trading W.L.L. · Privacy
- Oversized reversed logo bottom-right

**Contact card (reused on every page)**
> **Let's keep it practical.**
> Need a price, a stock check or a delivery date? Call or email and we'll sort it the same day.
> `[[Name Surname]]`, Sales Manager · phone icon · email icon · "Go to contact →"

**Quick-contact chip (hero):** "Rather get in touch fast?" + rep photo + phone + email icons.

---

## 6. Pages, sections & copy

### 6.1 Home

**1. Hero** *(drone shot of yard; blue bars slide in)*
- H1: **Steel, stocked and delivered.**
- Bottom strip: Supplying **rebar**, **sections**, **plates** and **pipes** across Bahrain.
- Quick-contact chip.

**2. Who we are** *(Auremin scroll reveal)*
- Label: WHO WE ARE
- Statement: **Valley Steel is a Bahrain-based steel trader. We source from approved mills, hold stock locally and deliver to your site when you need it, with the certificates to prove every bar.**
- Link: More about us →

**3. Product selector**
- Label: OUR PRODUCTS
- Left intro: From a single bundle of rebar to full structural packages, we keep the steel Bahrain builds with in stock, ready to cut and deliver.
- Button: View all products
- List → card copy:
  - **Rebar & mesh**: Deformed bars from 8 to 32 mm and welded mesh, to BS 4449 and ASTM A615.
  - **Structural sections**: IPE, HEA, HEB, UB, UC, angles and channels for frames of every size.
  - **Plates & sheets**: Hot-rolled, cold-rolled and chequered plate, cut to your dimensions.
  - **Pipes & hollow sections**: ERW and seamless pipe, SHS and RHS for structures and services.
  - **Coils & galvanized**: HR, CR and GI coil and sheet for fabricators and manufacturers.
  - **Wire & accessories**: Wire rod, binding wire, couplers and spacers to finish the job.
  - **Processing**: Cut & bend, cut-to-length and shearing, done in our yard before delivery.

**4. Counter + standards**
- Counter: **`[[25,000]]+** tonnes of steel delivered every year`
- Sub-line: To contractors, fabricators and traders across Bahrain and the GCC.
- Badges (each "View certificate →"):
  - **`[[ISO 9001:2015]]`**: Quality management
  - **BS 4449 / BS EN 10080**: Reinforcing steel
  - **ASTM A615 / A706**: Deformed bars
  - **EN 10025**: Structural steel
  - **EN 10204 3.1**: Mill test certificates with every delivery

**5. Capabilities**
- Statement: **A steel bar looks simple. On site, it decides whether the pour happens today or next week. So we think beyond the bar.**
- Accordion:
  - **Stock**: We hold `[[X,000]]` tonnes across `[[X]]` product families in our yard in `[[area]]`, so most orders ship from stock, not from a mill schedule.
  - **Processing**: Cut & bend to bar-bending schedules, cut-to-length and shearing in-house. Less waste on site, faster fixing.
  - **Delivery**: Our own trucks and crane lorries deliver across Bahrain, typically within `[[24–48]]` hours of order confirmation.
- Side text: We know how much continuity matters. We make sure the steel arrives when your programme needs it.
- Links: Discover our facilities · quality

**6. Process: from mill to site**
- Label: HOW WE WORK
1. **Source**: We buy from approved mills in the GCC and internationally, against the grades your project specifies.
2. **Inspect**: Every consignment is checked against its mill test certificate: grade, size, markings and heat numbers.
3. **Stock**: Steel is stored under cover or on raised racks in our yard, tagged and traceable.
4. **Process**: We cut, bend and shear to your schedule before it leaves the yard.
5. **Deliver**: Loaded, documented and delivered to site, with certificates handed over with the delivery note.

**7. Contact CTA:** contact card over a photo of the yard.

### 6.2 About

**Hero**
- H1: **Steel you can build on.**
- Intro: Valley Steel Trading W.L.L. supplies steel to Bahrain's construction and industrial sectors. Founded in `[[2010]]`, we've grown from a single yard into one of the Kingdom's dependable stockists, because we answer the phone, keep our promises and stand behind every bar.

**Our story** *(timeline on a grid line, mono years)*
- `[[2010]]`: Valley Steel is established in Bahrain, trading rebar to local contractors.
- `[[2014]]`: Moves to a larger yard in `[[area]]` and adds structural sections and plates.
- `[[2018]]`: Launches in-house cut & bend processing.
- `[[2022]]`: Expands its delivery fleet and begins supplying traders across the GCC.
- `[[2026]]`: `[[X,000]]+` tonnes delivered a year, `[[X]]` product families in stock.

**What we stand for**
- **Straight answers**: A clear price, real stock levels and an honest delivery date.
- **Certified steel**: Every delivery is traceable to its mill and its test certificate.
- **On time**: We plan around your programme, not ours.
- **Long relationships**: Most of our customers have been ordering from us for years.

**By the numbers:** `[[15]]` years in business · `[[25,000]]+` tonnes a year · `[[X]]` product families · `[[X]]` delivery vehicles

**Leadership** *(optional; show only with real photos)*: `[[Name]]`, Managing Director · `[[Name]]`, Sales Manager · `[[Name]]`, Operations Manager

**Contact CTA**

### 6.3 Products index

**Hero**
- H1: **Our products**
- Intro: Rebar, sections, plates, pipes and more, held in stock in Bahrain and ready to process and deliver.

**Family grid:** 7 cards with cutouts, using the one-liners from the Home selector.

**Help band**
- H2: **Not sure which product you need?**
- Copy: Every project specifies differently. Send us your drawings or bar-bending schedule and we'll help you match grade, size and quantity.
- Button: Go to contact

**Contact CTA**

### 6.4 Product family detail: template + sample copy (Rebar)

Each family uses the same structure. Sample for **Rebar & mesh**:

**Hero:** H1 **Rebar & mesh** · Intro: High-yield deformed bars and welded mesh for reinforced concrete, held in stock in all common diameters. · Buttons: Download datasheet · Contact sales

**Overview**
- *Applications:* foundations, slabs, columns, beams, retaining walls, precast.
- *Why Valley Steel:* stocked from 8 to 32 mm · cut & bend to your schedule · MTC with every delivery · delivered across Bahrain.

**Specifications** *(spec table, all values draft)*

| | |
|---|---|
| Grades | B500B, Grade 60 |
| Standards | BS 4449:2005+A3, ASTM A615 / A615M |
| Diameters | 8, 10, 12, 16, 20, 25, 32 mm |
| Lengths | 12 m standard; cut-to-length on request |
| Mesh | A142–A393 and B-series, standard sheets 4.8 × 2.4 m |
| Finish | Black; epoxy-coated on request |
| Documentation | EN 10204 3.1 mill test certificate |

**Standards:** BS 4449 · ASTM A615 · EN 10204 3.1
**Related:** Wire & accessories · Processing · Structural sections
**Contact CTA**

**Specification data for the other families (draft, to confirm with client):**
- **Structural sections:** IPE 80–600, HEA/HEB 100–600, UB/UC, equal & unequal angles, UPN/PFC channels · S235JR, S275JR, S355JR · EN 10025, BS 4-1, ASTM A36 / A572 · 6 m / 12 m.
- **Plates & sheets:** HR plate 3–50 mm, CR sheet 0.5–3 mm, chequered plate 3–10 mm · S275, S355, A36 · sheet sizes 1250×2500, 1500×3000, 2000×6000 mm; cut to size.
- **Pipes & hollow sections:** ERW and seamless pipe ½"–24", SHS 20×20–300×300, RHS 40×20–400×200 · ASTM A53/A106, EN 10219/10210 · black and galvanized.
- **Coils & galvanized:** HR, CR and GI coil and sheet, 0.3–6 mm · Z120–Z275 zinc coating · slit-to-width on request.
- **Wire & accessories:** wire rod 5.5–12 mm, annealed binding wire, rebar couplers, spacers and chairs.
- **Processing:** cut & bend to BS 8666 schedules, cut-to-length, plate shearing; turnaround `[[24–72]]` hours depending on volume.

### 6.5 Facilities & Quality

**Hero**
- H1: **Built around your programme.**
- Intro: Our yard, processing shop and fleet exist for one reason: to get the right steel to your site on the day you need it.

**Our yard**
- Copy: A `[[10,000]]` m² stockyard and covered warehouse in `[[area]]`, Bahrain, holding `[[X,000]]` tonnes of steel across `[[X]]` product families. Overhead cranes and forklifts load trucks in minutes, not hours.
- Stats: `[[10,000]]` m² yard · `[[X,000]]` t in stock · `[[X]]` overhead cranes
- Map embed (location).

**Processing**
- **Cut & bend**: Automated cutting and bending to BS 8666 shape codes, straight from your bar-bending schedule.
- **Cut-to-length**: Sections, pipes and bars cut to the length you specify.
- **Shearing**: Plates and sheets sheared to size for fabricators.

**How we work** *(full process steps, as Home §6.1.6)*

**Quality**
- Statement: **Every bar, beam and plate we supply is traceable.**
- Points:
  - **Approved mills**: We buy only from mills with recognised product certification.
  - **Incoming inspection**: Size, grade markings and heat numbers checked against the MTC on arrival.
  - **Traceability**: Stock is tagged by heat number from the yard to your site.
  - **Documentation**: EN 10204 3.1 mill test certificates handed over with every delivery note.
- Certificates grid (as Home badges) with PDF links.

**Delivery**
- Copy: Our own fleet of `[[X]]` flatbeds and crane lorries covers the whole Kingdom, from Manama to Askar and from Muharraq to Hamad Town. Typical lead time `[[24–48]]` hours from confirmed order; urgent deliveries same day where stock allows. GCC exports arranged on request.

**Health, safety & environment**
- Copy: Safe loading, certified lifting equipment and trained drivers. We consolidate deliveries to cut trips and recycle all offcuts from processing.

**Contact CTA**

### 6.6 Contact

- H1: **Let's talk steel.**
- Intro: Questions, prices, stock checks or a yard visit? Call, email or send a message. We'll reply the same working day.
- Contact cards: `[[Name]]`, Sales Manager, `[[phone]]`, `[[email]]`; general enquiries `[[+973 1700 0000]]`, `[[info@valleysteel.bh]]`
- **Form:** Name\* · Company · Email\* · Phone · Message\* · ☐ I agree to the Privacy Policy\* · **Send message**
  - Success: Thanks, your message is with our sales team. We'll be in touch today or the next working day.
  - Error: Something went wrong. Please try again or call us on `[[phone]]`.
- **Visit us:** Valley Steel Trading W.L.L. · `[[Building, Road, Block, Area]]` · Kingdom of Bahrain · Hours `[[Sat–Thu 7:00–17:00, Fri closed]]` · CR No. `[[000000-0]]` · Map embed.

### 6.7 404
- H1: **This page has gone off the truck.**
- Copy: The page you're looking for doesn't exist or has moved. · Buttons: Back to home · View products

---

## 7. Assets still needed from the client

**Brand**
- [ ] Logo as vector (SVG/AI/PDF); the supplied PNG is 248×123 and will be redrawn otherwise

**Facts to confirm** (every `[[placeholder]]` above)
- [ ] Address, CR number, phone, email, opening hours
- [ ] Founding year and milestones
- [ ] Yard size, tonnes in stock, tonnes delivered per year, fleet size, lead times
- [ ] Final product families, grades, sizes and standards; datasheet PDFs
- [ ] Company certifications (e.g. ISO 9001) + PDFs
- [ ] Sales contact name, role and photo; leadership names (optional)
- [ ] Email address for form submissions

**Photo shot list** (placeholders until the shoot)
1. Drone: full yard and warehouse aerial (hero) + 2–3 angles
2. Yard: stacked rebar bundles, sections on racks, plate stacks, overhead crane lifting
3. Processing: cut & bend machine running, shearing, finished bent bars tagged
4. Quality: staff checking heat numbers/markings against an MTC
5. Delivery: crane lorry loading, truck leaving the yard, delivery on a Bahrain site
6. People: sales manager portrait in the yard; team at work in PPE
7. Products: one cutout per family (rebar bundle, I-beam, plate stack, pipe bundle, GI coil, wire coil, bent rebar shapes)

---

## 8. Scope

**In v1:** Home, About, Products index, Product detail template (7 families), Facilities & Quality, Contact, 404, Privacy; responsive; SEO basics; simple contact form; English only.

**Later:** RFQ / quote builder, Arabic version, WhatsApp button, News, Careers, Projects/case studies, CMS, dark mode.
