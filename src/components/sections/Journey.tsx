"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { JOURNEY_STEPS } from "@/lib/data";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section id="journey" className="bg-cream py-28 md:py-40">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-eyebrow mb-6 text-clay">The Acquisition Journey</p>
          </Reveal>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-ink">
            <TextReveal lines={["A process built on", "clarity, not pressure."]} />
          </h2>
        </div>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-[15px] top-0 hidden h-full w-px bg-line md:block">
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="h-full w-full bg-clay"
            />
          </div>

          <div className="flex flex-col gap-14 md:gap-20">
            {JOURNEY_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[32px_1fr_2fr] md:items-start md:gap-10">
                  <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-clay bg-cream text-xs text-clay md:flex">
                    {step.step}
                  </div>
                  <p className="font-display text-2xl italic text-ink md:pt-0.5 md:text-3xl">
                    {step.title}
                  </p>
                  <p className="max-w-xl text-base leading-relaxed text-ink/60">
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
