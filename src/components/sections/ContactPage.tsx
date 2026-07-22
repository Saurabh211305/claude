"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const CONTACT_CARDS = [
  { icon: Phone, label: "Call Us", value: "+971 4 000 0000" },
  { icon: MessageCircle, label: "WhatsApp", value: "+971 50 000 0000" },
  { icon: Mail, label: "Email", value: "hello@trixishomes.com" },
  { icon: MapPin, label: "Office", value: "Business Bay, Dubai, UAE" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container-fluid py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-eyebrow mb-4 text-gold">Contact</p>
        </Reveal>
        <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] text-ink">
          <TextReveal className="justify-center" lines={["Let's talk about your", "next investment."]} />
        </h1>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {CONTACT_CARDS.map((c) => (
            <Reveal key={c.label}>
              <div className="flex items-center gap-4 rounded-sm border border-ink/10 bg-surface p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                  <c.icon size={17} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-ink/45">{c.label}</p>
                  <p className="text-sm font-medium text-ink">{c.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-sm border border-ink/10 bg-surface p-8 md:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-[360px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-midnight">
                  <Check size={26} />
                </div>
                <p className="font-display text-2xl text-ink">Message sent.</p>
                <p className="mt-3 max-w-xs text-sm text-ink/60">
                  A Trixis Homes specialist will respond within 24 hours.
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
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Full Name"
                    className="w-full border-b border-ink/15 bg-transparent py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  />
                  <input
                    required
                    placeholder="Phone / WhatsApp"
                    className="w-full border-b border-ink/15 bg-transparent py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-ink/15 bg-transparent py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full resize-none border-b border-ink/15 bg-transparent py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-sm bg-gold px-8 py-4 text-sm font-medium tracking-wide text-midnight transition-transform duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
