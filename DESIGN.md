# Trixis Homes — Redesign Strategy

This document is the rationale behind the redesign implemented in this repository.

## 1. What this rebuild is

Trixis Homes is a Dubai/Abu Dhabi off-plan property brokerage aggregating listings across developers (Aldar, Emaar, Damac, Binghatti, Beyond). The live site (`trixis.vercel.app`) already has the right information architecture — Off-Plan, Buy, Sell, Insights, Media, Contact, Developers — but a navy/orange "corporate portal" execution that reads as generic rather than premium.

This redesign keeps every real page and every piece of real copy, pricing, and developer data pulled directly from the client's screenshots of the live site, and rebuilds the *execution*: typography, spacing, motion, and a set of genuinely interactive tools (path finder, ROI calculator, comparison tool, market dashboard) that the brief asked for on top of the existing content.

Two revisions happened along the way, both driven by direct client feedback:
1. An initial pass used a fictional "curated boutique villas" concept before the real business (a Dubai off-plan brokerage) was shared — that direction was fully discarded.
2. A palette pass moved from dark-only to a light/warm editorial mood, then the real brand's actual navy + orange identity (visible in the live nav, logo, and CTAs) was restored and refined — the client's own brand, not a generic aesthetic, elevated rather than replaced.

## 2. Creative direction

- **Palette**: deep midnight navy (`#090d1a`) as the primary dark surface, warm paper (`#fbf8f3`, never stark white) as the light surface, and a single refined amber/orange accent (`#dd8a3b`) — a warmer, less saturated take on the live site's flat CTA-orange, used consistently for labels, icons, and primary actions.
- **Typography**: Fraunces (an editorial serif with italics) for display headlines paired with Inter for body/UI — carries the same "trusted but not corporate" register the brief asked for.
- **Rhythm**: dark/light alternation between sections (mirroring the live site's own pattern) rather than a single flat scroll, so a 17-section homepage still reads as paced rather than exhausting.
- **Motion language**: scroll-triggered reveals, masked text, image wipes, animated counters, and a custom cursor — carried over from the original design system and applied consistently across every new page and tool.

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
