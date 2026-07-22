# Trixis Homes — Website Redesign

A rebuild of the Trixis Homes Dubai/Abu Dhabi real estate brokerage site: Next.js (App Router) + TypeScript + Tailwind CSS v4, animated with Framer Motion and Lenis smooth-scroll.

See [`DESIGN.md`](./DESIGN.md) for the full creative rationale, section-by-section breakdown, and — importantly — exactly which content is real (pulled from the live site) vs. placeholder.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Important: placeholder imagery

All imagery on this site (`public/images/*.svg`) is **placeholder art** — locally generated Dubai skyline/community illustrations, not real photography or renders. This was necessary because the build environment had no internet access to source real Dubai property photography. Regenerate or edit via `scripts/gen-images.mjs`.

Before this goes live for the client, replace these with real photography/renders, and swap the plain `<img>` tags for `next/image` (with a configured loader) once real, hosted image URLs are available, to restore optimization, responsive `srcset`, and lazy loading.

## Project structure

```
src/
  app/
    page.tsx                 — Home (17 sections)
    buy/                     — property listings + search/filter
    projects/[slug]/         — project detail (dynamic)
    developers/              — developer directory
    developers/[slug]/       — developer detail (dynamic)
    sell/, contact/          — lead-gen pages
    insights/, insights/[slug]/ — market insights articles
    media/                   — press/social grid
  components/
    sections/                — one component per page section
    motion/                  — shared scroll-reveal / text-reveal / counter primitives
    icons/                   — small inline social icons (lucide-react dropped brand marks)
    Navbar.tsx, Footer.tsx, Logo.tsx, CustomCursor.tsx, Preloader.tsx, StickyCTA.tsx
  lib/data.ts                — properties, developers, communities, stats, testimonial, FAQ data
scripts/gen-images.mjs        — regenerates the placeholder SVG artwork in public/images/
```

## Content

`src/lib/data.ts` is the single source of truth for properties, developers, communities, stats, and the client testimonial. Real content (pulled from client-provided screenshots of the live site) and placeholder content (Sell/Contact details, Insights article topics, Market Dashboard figures) are both flagged in `DESIGN.md` §5 — check there before editing or launching.
