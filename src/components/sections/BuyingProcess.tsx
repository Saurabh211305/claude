"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We understand your goals, budget, and timeline before recommending a single option.",
  },
  {
    step: "02",
    title: "Curated Shortlist",
    description: "A shortlist of matching off-plan and ready properties, underwritten against real market data.",
  },
  {
    step: "03",
    title: "Reservation",
    description: "Reserve your unit with the developer, backed by a clear breakdown of fees and booking terms.",
  },
  {
    step: "04",
    title: "Sales Purchase Agreement",
    description: "Sign the RERA-registered SPA with full contract review and translation support.",
  },
  {
    step: "05",
    title: "Payment Plan & Construction",
    description: "Track milestone payments and construction progress with a dedicated point of contact.",
  },
  {
    step: "06",
    title: "Handover & Ownership Transfer",
    description: "Title deed transfer at the Dubai Land Department, plus post-handover support.",
  },
];

export default function BuyingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-eyebrow mb-4 text-gold">Buying Process</p>
          </Reveal>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
            <TextReveal lines={["A process built on", "clarity, not pressure."]} />
          </h2>
        </div>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-[15px] top-0 hidden h-full w-px bg-ink/10 md:block">
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="h-full w-full bg-gold"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.04}>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-[32px_1fr_2fr] md:items-start md:gap-10">
                  <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-gold bg-paper text-xs text-gold md:flex">
                    {step.step}
                  </div>
                  <p className="font-display text-xl italic text-ink md:pt-0.5 md:text-2xl">
                    {step.title}
                  </p>
                  <p className="max-w-xl text-sm leading-relaxed text-ink/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
