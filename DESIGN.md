# Trixis Homes — Redesign Strategy

This document is the rationale behind the redesign implemented in this repository.

## 1. What this rebuild is

Trixis Homes is a Dubai/Abu Dhabi off-plan property brokerage aggregating listings across developers (Aldar, Emaar, Damac, Binghatti, Beyond). The live site (`trixis.vercel.app`) already has the right information architecture — Off-Plan, Buy, Sell, Insights, Media, Contact, Developers — but a navy/orange "corporate portal" execution that reads as generic rather than premium.

This redesign keeps every real page and every piece of real copy, pricing, and developer data pulled directly from the client's screenshots of the live site, and rebuilds the *execution*: typography, spacing, motion, and a set of genuinely interactive tools (path finder, ROI calculator, comparison tool, market dashboard) that the brief asked for on top of the existing content.

Three revisions happened along the way, all driven by direct client feedback:
1. An initial pass used a fictional "curated boutique villas" concept before the real business (a Dubai off-plan brokerage) was shared — that direction was fully discarded.
2. A palette pass moved from dark-only to a light/warm editorial mood, then the real brand's actual navy + orange identity (visible in the live nav, logo, and CTAs) was restored and refined — the client's own brand, not a generic aesthetic, elevated rather than replaced.
3. The client explicitly rejected any dark-themed sections a second time ("I don't need dark version"). Every `bg-midnight` section background was removed site-wide and replaced with the light `paper`/`surface` tokens, and an advanced animation layer (route-transition wipes, magnetic buttons, grain texture, mix-blend cursor) was added in the same pass, modeled on the motion quality of the luxury real-estate reference sites the client sent (era-residence.com, fortvega.com, eleos.la, and others — see Section 7).

## 2. Creative direction

- **Palette**: the site is light-only. Warm paper (`--paper #f8f7f5`, `--paper-dim #efedea`, `--surface #ffffff`, never stark white) is the only background family; ink (`#14161f`) is the only text-on-light color. The old midnight-navy tokens (`--midnight`, `--midnight-soft`, `--midnight-elevated`) still exist in `globals.css` but are used only as small, localized photo-caption scrims (a gradient over an image thumbnail so light text stays legible), never as a section or page background. A single refined amber/orange accent (`--gold #e2872a`) is used consistently for labels, icons, and primary actions.
- **Typography**: Fraunces (an editorial serif with italics) for display headlines paired with Inter for body/UI — carries the same "trusted but not corporate" register the brief asked for.
- **Rhythm**: since dark sections are gone, pacing across a 17-section homepage now comes from alternating `paper` and `paper-dim` tones, generous whitespace, and scroll-triggered reveals rather than light/dark contrast.
- **Motion language**: scroll-triggered reveals, masked text, image wipes, animated counters, a mix-blend-mode custom cursor, magnetic buttons on primary CTAs, a full-page curtain wipe on route change, and a subtle grain/noise overlay — applied consistently across every page and tool.

## 3. Site structure

Rebuilt as a real multi-page Next.js app, not a single long homepage:

- `/` — Home (17 sections, see below)
- `/buy` — searchable, filterable property listings
- `/projects/[slug]` — project detail (built from the real Canopies at Yas Point page)
- `/developers` — developer directory with real stats
- `/developers/[slug]` — developer detail (built from the real Aldar Properties page)
- `/sell` — seller lead-gen page (not shown in source screenshots; designed on-brand, pattern-matched to the rest of the site)
- `/contact` — contact page (same caveat — placeholder phone/email/address pending real details)
- `/insights`, `/insights/[slug]` — market insights articles
- `/media` — social/press image grid

## 4. Homepage — 17 sections, in the order specified

1. **Hero** — real headline ("Trusted Real Estate Company In Dubai"), real stat bar (398M+ transactions, 199+ clients, 348+ sold, 8+ yrs, 4.5★, RERA).
2. **Why Trixis Homes** — the five real value props (RERA Certified, Data Driven, End-to-End, Global Network, Fast & Transparent) plus the real client testimonial.
3. **Smart Property Search** — a functional search bar with quick filters, wired to `/buy`.
4. **Investment Path Finder** — a genuine 3-step interactive quiz (goal → budget → timeline) that recommends a property track and deep-links into `/buy` with matching filters.
5. **Partner Developers** — grid of the 5 real developers, linking to their detail pages.
6. **Featured Off-Plan Projects** — the 4 real projects (Canopies, Golf Trails, Golf Fields, Al Ghadeer Gardens), no invented listings.
7. **Dubai Investment Benefits** — factual, well-known investment benefits (tax, yields, Golden Visa, freehold ownership, infrastructure, regulation).
8. **Featured Communities** — interactive selector (Damac Hills, Jumeirah Islands, The Meadows, The Springs, Town Square).
9. **Market Performance Dashboard** — a single-hue bar chart (avg. price growth by area, clearly labeled "illustrative") plus real KPI tiles.
10. **ROI Calculator** — a fully functional calculator: property price, down payment, rental yield, appreciation, and holding period as live sliders, computing down payment, rental income, projected value, and total ROI in real time.
11. **Compare Communities & Developers** — toggleable side-by-side comparison tool built on real developer/community data.
12. **Real Investor Success Stories** — the one real testimonial, spotlighted, plus aggregate trust stats (no fabricated named quotes).
13. **Buying Process** — a six-step timeline (discovery → shortlist → reservation → SPA → payment plan → handover) with a scroll-linked progress line.
14. **Latest Market Insights** — three editorial articles (topics are original, not scraped — no real blog existed in the source material).
15. **Instagram / Media** — image grid + Instagram link (no fabricated press-logo endorsements).
16. **FAQ** — accordion of genuine, factual Dubai off-plan buying questions.
17. **Final Consultation CTA** — the real "Ready to build your wealth in Dubai?" form and copy from the live site.

## 5. What's real vs. what's placeholder

**Real, pulled directly from client screenshots**: all hero copy, stats, the "Why Trixis" five points, the Damac Hills community description, all 4 project listings and their full detail copy, all 5 developers and Aldar's full About/Key Facts, the footer sitemap columns, and the client testimonial.

**Placeholder, clearly to be replaced**: all imagery (locally generated Dubai skyline/community SVG art — no internet access was available to source real photography, and screenshots can't be extracted as image assets), the Sell/Contact page copy and contact details (phone/email/address), the 3 Insights article topics, and the Market Dashboard's specific growth percentages (labeled "illustrative market indicator" in the UI itself).

## 6. Implementation notes

Next.js (App Router) + TypeScript + Tailwind CSS v4, Framer Motion for animation, Lenis for smooth scroll. See `README.md` for setup, and Section 5 above before this goes live for the client.

## 7. Animation layer (added in the light-only pass)

- **`PageTransition`** (`src/components/PageTransition.tsx`) — a full-viewport curtain wipes down on every route change, keyed off `usePathname()`, with the incoming page crossfading in underneath.
- **`MagneticButton`** (`src/components/motion/MagneticButton.tsx`) — wraps primary CTAs (nav, hero, contact forms, detail pages) with a pointer-follow offset so buttons subtly pull toward the cursor.
- **Custom cursor** — `mix-blend-mode: difference` ring that inverts against whatever it passes over, standard on the reference sites the client sent.
- **Grain overlay** — a fixed, full-viewport inline-SVG noise texture at very low opacity (`mix-blend-mode: overlay`) to keep large flat paper-colored areas from looking sterile.
- **Preloader** — a live 0–100% counter drives the initial load screen instead of a static spinner.
- These references (era-residence.com, fortvega.com, eleos.la, aircenter.space, kameralnie.com/polanki, modusprojects.nl, allys.mu, elyse-residence-dev.webflow.io, findrealestate.com, rangedevelopmentsgroup.com, fame-estate.com, kononenkogroup.com) could not be browsed directly — this sandbox has no outbound internet access to any domain — so the animation direction was built from general knowledge of that design genre (curtain transitions, magnetic CTAs, grain, mix-blend cursors) rather than pixel-matched to the actual sites. Worth a side-by-side check against the real references once the client can view this live.

## 8. Placeholder-art rendering fix

The generated skyline/community/developer SVGs (`scripts/gen-images.mjs`) all shared a single internal drawing coordinate system (`viewBox="0 0 1400 900"`) but were rendered at different target pixel sizes per use case (e.g. `1200×1500` for portrait property cards). Without `preserveAspectRatio`, the SVG default (`xMidYMid meet`) fit the artwork *inside* the target box and left transparent letterbox bars above and below — which then showed the card's dark `bg-midnight-elevated` container color through the gaps, reading as a solid dark band across every project/developer card. Adding `preserveAspectRatio="xMidYMid slice"` makes the artwork *cover* the box (cropping overflow, like CSS `object-fit: cover`) instead, eliminating the bars; the card container background was also switched to `bg-paper-dim` as a second line of defense. All 20 SVGs were regenerated after the fix.
