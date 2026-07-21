# Trixis Homes — Redesign Strategy

This document is the rationale behind the redesign implemented in this repository. It covers the audit of the previous site, the creative direction, and a section-by-section breakdown of the new homepage.

## 1. Audit summary

The brief described the current site (trixis.vercel.app) as generic, visually flat, and lacking the emotional weight expected of a premium real estate brand. The most common failure pattern in real-estate sites at this tier is treating the homepage as a list of features (amenities, floor plans, contact form) rather than as a narrative that builds desire before asking for information. The redesign inverts that: every section earns the right to ask for the next thing, and the enquiry form is the last step of a journey, not the first thing competing for attention.

## 2. Creative direction

- **Palette**: near-black ink (`#0a0a0a`) as the dominant surface, warm ivory (`#f6f3ec`) as a breathing counter-surface, and a single muted brass/gold accent (`#c9a25c`) used sparingly — on labels, dividers, icons, and primary actions only. One accent color, used consistently, reads as more expensive than five.
- **Typography**: Fraunces (a soft, editorial serif with italics) for display headlines, paired with Inter for body copy and UI. The serif carries emotion; the sans carries clarity. This mirrors the pairing used by Aman, Sotheby's International Realty, and most luxury editorial brands.
- **Rhythm**: dark → dark → light → dark alternation between sections (Hero/Stats dark, Brand Story dark, Why Trixis ivory, Journey/Testimonials/Contact dark) so the page has visual pacing instead of a single flat scroll.
- **Motion language**: everything reveals on scroll, nothing pops. Text unmasks line-by-line, images wipe open rather than fade, numbers count up once, and hover states are slow (300–700ms) with eased curves rather than default linear transitions. Motion is used to *reveal* content the user already wants, not to decorate.

## 3. Section-by-section breakdown

### Navbar
- **Purpose**: orientation and a low-friction path to enquiry from anywhere on the page.
- **Layout**: fixed, transparent over the hero, transitions to a blurred glass bar after 40px of scroll so it never fights the hero image.
- **Interaction**: underline-on-hover links, a full-screen italic-serif takeover menu on mobile instead of a cramped dropdown.
- **Conversion**: a permanently visible "Private Enquiry" pill button — the primary CTA is never more than one click away.

### Hero
- **Purpose**: set the emotional register in under three seconds. This is the section doing the heaviest lifting for "premium first impression."
- **Layout**: full-bleed image, content anchored to the bottom third (not dead-centered — centered hero text is the single most common "generic template" tell).
- **Design direction**: cinematic dusk villa scene, heavy gradient at the base for legibility, an eyebrow label with an animated rule, a three-line serif headline that reveals line-by-line, and a supporting line that does the actual positioning work ("designed in limited number... reserved for those who value substance over spectacle").
- **Animation**: parallax background on scroll, masked line-reveal headline timed to finish exactly as the preloader lifts, animated scroll cue.
- **Conversion**: two CTAs at different commitment levels — "View Residences" (primary, low-friction browsing) and "Private Enquiry" (direct, for ready buyers) — instead of a single generic "Learn More."

### Stats strip
- **Purpose**: credibility, immediately after the emotional hook, before any content that could be doubted.
- **Design direction**: a quiet horizontal band, four numbers, no imagery — a deliberate pause in an otherwise image-heavy page.
- **Animation**: numbers count up once when scrolled into view.
- **Why it exists**: the brief's "trust and exclusivity" gap is closed fastest by hard numbers (residences delivered, portfolio value, referral rate) shown before any sales copy.

### Brand Story / Philosophy
- **Purpose**: this is the section that actually differentiates "developer" from "curator." It replaces a generic "About Us" paragraph with a point of view.
- **Layout**: asymmetric split (text left, image right on desktop, reversed stacking on mobile), not a symmetric two-column — asymmetry reads as designed, symmetry reads as templated.
- **Animation**: the portrait image is revealed by a wipe (a dark panel slides away) rather than a fade — this is the single highest-leverage "premium" motion cue on the page.
- **Conversion**: three quiet stats at the base (years, residences, locations) instead of a CTA — this section's job is trust, not conversion.

### Featured Residences (Properties)
- **Purpose**: the actual product. Everything above this point was permission to look.
- **Layout**: filterable grid (All / Villas / Penthouses / Estates), asymmetric card content — category tag, name, location, then beds/area/price on a hairline divider at the bottom of each card.
- **Interaction**: image scales slowly on hover, a gold arrow badge fades in top-right, gradient scrim keeps text legible at all times. This is more restrained than carousel/lightbox galleries, which read as "stock listing site" rather than "curated collection."
- **Conversion**: filters double as light engagement/segmentation (a user who filters "Penthouse" has told you their intent for free), and the section ends with a CTA to request the *full* private portfolio — implying the six shown are not the complete inventory, which reinforces scarcity.

### Why Trixis (USP grid)
- **Purpose**: answer the objections a serious buyer has *before* they reach the form — legitimacy, craftsmanship, transparency.
- **Layout**: switches to the ivory surface — this section is the page's palate cleanser and should feel like reading a manifesto, not scrolling more marketing.
- **Interaction**: each of the six cards inverts to ink-on-hover, icon lifts slightly — a small, expensive-feeling micro-interaction rather than a generic card shadow.
- **Conversion**: "Limited by Design" and "Proven Track Record" specifically exist to preempt the two most common luxury-real-estate objections (is this actually exclusive, and is this developer established).

### Acquisition Journey
- **Purpose**: luxury buyers are risk-averse about opaque, high-friction real estate transactions. A visible, five-step process converts anxiety into confidence.
- **Layout**: numbered vertical timeline with a progress line that fills as the user scrolls — literally visualizing "you are here" in the process.
- **Why it replaces a generic FAQ**: FAQs are reactive (answer objections); a journey map is proactive (remove the objection before it forms).

### Testimonials + Press strip
- **Purpose**: third-party social proof, in the buyer's own words, followed by brand-credibility signals (press mentions).
- **Layout**: single large quote at a time (not a dense carousel of three) — a full-width italic serif quote reads as an editorial pull-quote, which is a stronger trust signal than a cluttered card grid.
- **Interaction**: manual + dot navigation, directional slide transitions.
- **Below it**: an infinite-scroll marquee of press names — cheap to build, disproportionately effective for perceived credibility.

### Contact / Private Consultation (lead-gen)
- **Purpose**: convert warmed-up interest into a qualified lead with the lowest possible friction.
- **Layout**: two columns — reassurance copy + direct contact details on the left, a glass-panel form floating over a faint background texture on the right.
- **Form design**: minimal required fields (name, phone, email), a residence-of-interest dropdown pre-populated from the actual portfolio (turns a cold enquiry into a qualified, taggable lead), optional message, explicit confidentiality microcopy beneath the submit button to reduce hesitation.
- **Feedback**: on submit, the form is replaced by a confirmation state (checkmark + reassurance copy) rather than a plain alert — the last thing a user sees should still feel designed.

### Sticky mobile CTA
- **Purpose**: on mobile, users scroll past the primary CTA within seconds; a persistent bottom bar keeps "Enquire" reachable without reintroducing a static, ugly bottom nav on desktop (it's mobile-only by design).

### Footer
- **Purpose**: a calm landing point, not an afterthought link dump.
- **Content**: brand statement, sitemap, studio contact details, and a newsletter capture framed as "join the private list" — a second, lower-commitment lead-gen surface for visitors not ready to submit a full enquiry.

## 4. What was deliberately left out

- **Autoplaying video backgrounds** — heavy, often inaccessible, and rarely outperforms a well-art-directed still image at this tier.
- **Dense stat dashboards / mortgage calculators** — those serve mass-market portals, not a curated/limited-inventory brand; they'd contradict the "by design, not by volume" positioning.
- **A generic FAQ accordion** — replaced by the Acquisition Journey, which does the same trust-building job with more emotional design value.

## 5. Implementation notes

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4, Framer Motion for all animation/scroll-linked effects, and Lenis for smooth-scroll easing. See `README.md` for setup and the placeholder-imagery note before this goes live for the client.
