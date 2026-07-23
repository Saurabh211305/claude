"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";
import { PROPERTIES, type Property } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-paper py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Featured Projects</p>
            </Reveal>
            <h2 className="font-display max-w-xl text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
              <TextReveal lines={["Newest Off-Plan Projects", "In The Market"]} />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/buy"
              data-cursor="View"
              className="group flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
            >
              View all projects
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {PROPERTIES.map((property) => (
            <StaggerItem key={property.id}>
              <ProjectCard property={property} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function ProjectCard({ property }: { property: Property }) {
  return (
    <motion.div whileHover="hover" className="group h-full">
      <Link href={`/projects/${property.slug}`} data-cursor="View" className="block h-full">
        <TiltCard className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-paper-dim" max={5}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/10 to-transparent" />

          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-medium tracking-wide text-ink">
              {property.status.toUpperCase()}
            </span>
            <span className="rounded-full border border-paper/30 bg-midnight/40 px-3 py-1 text-[10px] tracking-wide text-paper backdrop-blur-sm">
              {property.handoverYear}
            </span>
          </div>

          <motion.div
            variants={{ hover: { opacity: 1, y: 0 } }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4 }}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink"
          >
            <ArrowUpRight size={16} />
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-display text-lg leading-tight text-paper">{property.name}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-paper/50">{property.developerName}</p>
            <p className="mt-1 text-xs text-paper/60">{property.location}</p>
            <div className="mt-3 flex items-center justify-between border-t border-paper/15 pt-3 text-[11px] text-paper/70">
              <span>{property.price}</span>
              <span>{property.roi}</span>
              <span className="text-gold-soft">{property.paymentPlan}</span>
            </div>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}
