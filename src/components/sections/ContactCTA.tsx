"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, TrendingUp } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import AmbientBackground from "@/components/motion/AmbientBackground";

const CHECKLIST = [
  "1:1 curation with a specialist",
  "Personalized ROI analysis",
  "Full support — from contract to management",
];

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-paper-dim py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <img src="/images/contact-texture.svg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-dim/70 via-paper-dim/85 to-paper-dim" />
      </div>
      <AmbientBackground />

      <div className="container-fluid relative grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="text-eyebrow mb-6 text-gold">Exclusive Service</p>
          </Reveal>
          <h2 className="font-display max-w-lg text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] text-ink">
            <TextReveal
              lines={[
                "Ready to build your",
                <span key="l2">
                  wealth in <span className="text-gold">Dubai</span>?
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={0.15} className="mt-8 max-w-md text-base leading-relaxed text-ink/60">
            Receive a personalized selection of the best investment
            opportunities, tailored to your profile and budget.
          </Reveal>

          <Reveal delay={0.25} className="mt-10 space-y-4">
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-center gap-3 text-ink/75">
                <TrendingUp size={16} className="text-gold" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-sm border border-ink/10 bg-surface/90 p-8 backdrop-blur-md md:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-[340px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink">
                  <Check size={26} />
                </div>
                <p className="font-display text-2xl text-ink">Thank you.</p>
                <p className="mt-3 max-w-xs text-sm text-ink/60">
                  A Dubai property specialist will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <input
                  required
                  placeholder="Full name"
                  className="w-full rounded-sm border border-ink/15 bg-transparent px-4 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none input-glow"
                />
                <input
                  required
                  placeholder="WhatsApp"
                  className="w-full rounded-sm border border-ink/15 bg-transparent px-4 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none input-glow"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-sm border border-ink/15 bg-transparent px-4 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none input-glow"
                />
                <textarea
                  rows={3}
                  placeholder="What kind of investment are you looking for?"
                  className="w-full resize-none rounded-sm border border-ink/15 bg-transparent px-4 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none input-glow"
                />
                <MagneticButton className="block w-full">
                  <button
                    type="submit"
                    data-cursor="Send"
                    className="group flex w-full items-center justify-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-medium tracking-wide text-ink transition-transform duration-300 hover:scale-[1.02]"
                  >
                    Request my personalized strategy
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </MagneticButton>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
