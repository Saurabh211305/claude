"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { COMMUNITIES } from "@/lib/data";

export default function Communities() {
  const [active, setActive] = useState(0);
  const community = COMMUNITIES[active];

  return (
    <section id="communities" className="bg-paper py-24 md:py-32">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow mb-4 text-gold">Dubai Communities</p>
        </Reveal>
        <h2 className="font-display max-w-2xl text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
          <TextReveal
            lines={["A diverse range of communities", "tailored to different lifestyles."]}
          />
        </h2>

        <Reveal delay={0.15} className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="flex flex-col gap-2">
            {COMMUNITIES.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => setActive(i)}
                data-cursor="View"
                className={`flex items-center gap-3 rounded-sm border px-5 py-4 text-left text-sm transition-colors ${
                  i === active
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-ink/10 text-ink/70 hover:border-gold/40"
                }`}
              >
                <MapPin size={15} className={i === active ? "text-gold" : "text-ink/40"} />
                {c.name}
              </button>
            ))}
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={community.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={community.image}
                  alt={community.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="font-display text-2xl text-paper">{community.name}</p>
                  {community.description && (
                    <p className="mt-2 max-w-md text-sm text-paper/70">{community.description}</p>
                  )}
                  <Link
                    href="/buy"
                    data-cursor="View"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-ink transition-transform duration-300 hover:scale-105"
                  >
                    See More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
