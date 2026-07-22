"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { PROPERTIES, type Property } from "@/lib/data";

const FILTERS = ["All", "Villa", "Penthouse", "Estate"] as const;

export default function Properties() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PROPERTIES
        : PROPERTIES.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="properties" className="bg-cream py-28 md:py-40">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-6 text-clay">The Collection</p>
            </Reveal>
            <h2 className="font-display max-w-xl text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-ink">
              <TextReveal lines={["Residences currently", "in private release."]} />
            </h2>
          </div>

          <Reveal delay={0.15} className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-cursor="Filter"
                className={`rounded-full border px-5 py-2 text-sm tracking-wide transition-colors ${
                  filter === f
                    ? "border-clay bg-clay text-cream"
                    : "border-line-strong text-ink/70 hover:border-clay/60 hover:text-ink"
                }`}
              >
                {f === "All" ? "All Residences" : `${f}s`}
              </button>
            ))}
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((property) => (
            <StaggerItem key={property.id}>
              <PropertyCard property={property} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-16 flex justify-center">
          <a
            href="#contact"
            data-cursor="View"
            className="group flex items-center gap-3 rounded-full border border-line-strong px-8 py-4 text-sm tracking-wide text-ink transition-colors hover:border-clay hover:text-clay"
          >
            Request the Full Private Portfolio
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.a
      href="#contact"
      data-cursor="View"
      whileHover="hover"
      className="group block"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-deep">
        <motion.div
          variants={{ hover: { scale: 1.08 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={property.image}
            alt={`${property.name} in ${property.location}`}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-cream/30 bg-ink/40 px-3 py-1 text-[11px] tracking-wide text-cream backdrop-blur-sm">
            {property.category}
          </span>
        </div>

        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4 }}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-clay text-cream"
        >
          <ArrowUpRight size={18} />
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-display text-xl text-cream">{property.name}</p>
          <p className="mt-1 text-sm text-cream/60">{property.location}</p>
          <div className="mt-4 flex items-center justify-between border-t border-cream/15 pt-4 text-xs text-cream/70">
            <span>{property.beds} Bed</span>
            <span>{property.area}</span>
            <span className="text-clay-soft">{property.price}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
