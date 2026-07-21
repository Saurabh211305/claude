"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TextReveal from "@/components/motion/TextReveal";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[720px] w-full items-end overflow-hidden bg-ink"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src="/images/hero-villa.svg"
          alt="Architectural line study of a minimalist Trixis Homes villa at dusk with an infinity pool"
          className="h-full w-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      <div className="container-fluid relative z-10 flex w-full flex-col pb-16 pt-24 md:pb-24 md:pt-40">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <div className="mb-6 flex items-center gap-4 overflow-hidden">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: "left" }}
              className="h-px w-10 bg-gold"
            />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="text-eyebrow text-gold"
            >
              Trixis Homes &mdash; Est. Rare Living
            </motion.p>
          </div>

          <h1 className="font-display max-w-4xl text-[clamp(2.75rem,7.5vw,6.5rem)] font-light leading-[0.98] text-paper">
            <TextReveal
              delay={2.1}
              lines={["Residences for", "the life you", "haven't lived yet."]}
            />
          </h1>

          <div className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.7 }}
              className="max-w-md text-base leading-relaxed text-paper/70"
            >
              A private collection of architecturally rare homes — designed
              in limited number, built without compromise, and reserved for
              those who value substance over spectacle.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.75, duration: 0.7 }}
              className="flex shrink-0 items-center gap-5"
            >
              <a
                href="#properties"
                data-cursor="Explore"
                className="rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-ink transition-transform duration-300 hover:scale-105"
              >
                View Residences
              </a>
              <a
                href="#contact"
                className="text-sm tracking-wide text-paper/80 underline decoration-gold/40 underline-offset-8 transition-colors hover:text-paper"
              >
                Private Enquiry
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-8 right-6 z-10 flex flex-col items-center gap-2 text-paper/60 md:right-10"
      >
        <span className="text-eyebrow [writing-mode:vertical-rl]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
