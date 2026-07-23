"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import TextReveal from "@/components/motion/TextReveal";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";
import AmbientBackground from "@/components/motion/AmbientBackground";
import { HOME_STATS } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[105svh] w-full flex-col justify-end overflow-hidden bg-paper pb-28 pt-32 md:pt-40"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src="/images/hero-dubai.svg"
          alt="Dubai skyline in daylight, illustrative artwork"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/10 via-paper/20 to-paper" />
      </motion.div>

      <AmbientBackground className="z-[1]" />

      <motion.div style={{ opacity: contentOpacity }} className="container-fluid relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 self-center rounded-full border border-ink/12 bg-surface/70 px-4 py-2 text-xs text-ink/80 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-gold" />
          Premium consultancy for international investors
        </motion.div>

        <h1 className="font-display max-w-4xl text-[clamp(2.5rem,6.5vw,5.5rem)] font-light leading-[1.02] text-ink">
          <TextReveal
            delay={2.1}
            className="flex flex-col items-center"
            lines={[
              "Trusted Real Estate",
              <span key="line2">
                Company In <span className="text-gold">Dubai</span>
              </span>,
            ]}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg text-ink/65"
        >
          We Help You Make Smarter Property Decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.65, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <a
              href="/buy"
              data-cursor="Explore"
              className="group flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300"
            >
              Explore Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              Talk to a Specialist
              <ArrowRight size={16} />
            </a>
          </MagneticButton>
        </motion.div>

        <Reveal delay={0.1} className="mt-16 grid w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {HOME_STATS.map((stat) => (
            <div
              key={stat.sublabel}
              className="rounded-sm border border-ink/10 bg-surface/70 px-4 py-6 text-center backdrop-blur-sm"
            >
              {stat.isBadge ? (
                <p className="font-display text-lg text-ink md:text-xl">{stat.label}</p>
              ) : (
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  className="font-display block text-xl text-ink md:text-2xl"
                />
              )}
              <p className="mt-1.5 text-[11px] uppercase tracking-wide text-ink/50">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </Reveal>
      </motion.div>
    </section>
  );
}
