"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="story"
      ref={ref}
      className="relative bg-ink py-28 md:py-40"
    >
      <div className="container-fluid grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <Reveal>
            <p className="text-eyebrow mb-6 text-gold">Our Philosophy</p>
          </Reveal>

          <h2 className="font-display max-w-lg text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-paper">
            <TextReveal
              lines={["Every home we build", "is an argument for", "slowing down."]}
            />
          </h2>

          <Reveal delay={0.15} className="mt-8 max-w-md space-y-5 text-paper/65">
            <p className="text-base leading-relaxed">
              Trixis Homes was founded on a simple conviction: true luxury
              isn&apos;t louder, it&apos;s quieter. It&apos;s the weight of a
              hand-finished door, the way light falls across a 14-foot
              ceiling at 5pm, the silence of a home built to outlast trends.
            </p>
            <p className="text-base leading-relaxed">
              For over a decade, we have partnered with the world&apos;s
              finest architects, landscape designers, and master craftsmen to
              deliver fewer than twenty residences a year — each one
              considered, not manufactured.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 flex items-center gap-10 border-t border-line pt-8">
            <div>
              <p className="font-display text-3xl text-gold">18</p>
              <p className="mt-1 text-xs tracking-wide text-paper/50">Years of Craft</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">120+</p>
              <p className="mt-1 text-xs tracking-wide text-paper/50">Residences Delivered</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">9</p>
              <p className="mt-1 text-xs tracking-wide text-paper/50">Signature Locations</p>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <motion.div
              className="absolute inset-0 origin-bottom bg-ink"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              style={{ zIndex: 10 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ scale: imageScale, y: imageY }}
            >
              <img
                src="/images/story-courtyard.svg"
                alt="Architectural line study of a Trixis Homes residence courtyard"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
          <p className="mt-4 text-xs tracking-wide text-paper/40">
            The Meridian Residence &mdash; Alibaug, 2023
          </p>
        </div>
      </div>
    </section>
  );
}
