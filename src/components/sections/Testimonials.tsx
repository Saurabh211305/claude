"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { PARTNERS, TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(delta: number) {
    setDirection(delta);
    setIndex((prev) => (prev + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const active = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="bg-cream py-28 md:py-40">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow mb-6 text-center text-clay">
            In Their Words
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-3xl text-center">
          <Quote className="mx-auto mb-8 text-clay/40" size={40} strokeWidth={1} />

          <div className="relative min-h-[220px] md:min-h-[180px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <p className="font-display text-2xl italic leading-relaxed text-ink md:text-3xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <p className="mt-8 text-sm tracking-wide text-clay">
                  {active.name}
                </p>
                <p className="mt-1 text-xs text-ink/50">{active.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              data-cursor="Prev"
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-clay hover:text-clay"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-clay" : "w-1.5 bg-line-strong"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              data-cursor="Next"
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-clay hover:text-clay"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-28 overflow-hidden border-y border-line py-8">
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
          {[...PARTNERS, ...PARTNERS].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl italic text-ink/35"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
