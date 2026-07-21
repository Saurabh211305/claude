# Trixis Homes — Website Redesign

An ultra-premium redesign of the Trixis Homes website: Next.js (App Router) + TypeScript + Tailwind CSS v4, animated with Framer Motion and Lenis smooth-scroll.

See [`DESIGN.md`](./DESIGN.md) for the full creative rationale and section-by-section breakdown.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Important: placeholder imagery

All photography on this site (`public/images/*.svg`) is **placeholder art**, not real property photography — generated locally as elegant duotone architectural line studies so the design can be reviewed without depending on external stock-photo hosts. Regenerate or edit them via `scripts/gen-images.mjs`.

Before this goes live for the client, replace these with:
- Real photography or 3D renders of actual Trixis Homes properties, and
- Swap the plain `<img>` tags for `next/image` (with a configured `remotePatterns`/loader) once real, hosted image URLs are available, to restore automatic optimization, responsive `srcset`, and lazy loading.

## Project structure

```
src/
  app/                 — root layout, global styles, homepage
  components/
    sections/          — one component per homepage section (Hero, BrandStory, Properties, ...)
    motion/            — shared scroll-reveal / text-reveal / counter primitives
    icons/             — small inline social icons (lucide-react dropped brand marks)
  lib/data.ts          — property, testimonial, journey-step, and press data
scripts/gen-images.mjs — regenerates the placeholder SVG artwork in public/images/
```

## Content

Copy, pricing, and location data throughout the site (properties, stats, testimonials, press mentions) is illustrative and should be replaced with real Trixis Homes content before launch.
