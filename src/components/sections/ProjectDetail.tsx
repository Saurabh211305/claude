"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Calendar, Check, MapPin, Phone, TrendingUp, Wallet } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import type { Property } from "@/lib/data";

export default function ProjectDetail({ property }: { property: Property }) {
  const [submitted, setSubmitted] = useState(false);

  const stats = [
    { icon: Wallet, label: "Starting Price", value: property.price },
    { icon: TrendingUp, label: "Est. ROI", value: property.roi },
    { icon: Calendar, label: "Handover", value: property.handover },
    { icon: Wallet, label: "Payment Plan", value: property.paymentPlan },
    { icon: Building2, label: "Developer", value: property.developerName },
    { icon: MapPin, label: "Location", value: property.location },
  ];

  return (
    <>
      <section className="relative flex h-[80svh] min-h-[560px] w-full items-end overflow-hidden bg-paper pt-24">
        <img
          src={property.heroImage}
          alt={property.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/25 to-transparent" />

        <div className="container-fluid relative z-10 pb-16 text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-surface/70 px-4 py-1.5 text-xs text-ink backdrop-blur-sm">
              <MapPin size={12} className="text-gold" />
              {property.location}
            </span>
          </div>
          <h1 className="font-display mx-auto max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-light leading-[1.05] text-ink">
            <TextReveal className="justify-center" lines={[property.name]} />
          </h1>
          <p className="mt-4 text-ink/70">by {property.developerName}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="#enquire"
                data-cursor="Register"
                className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-105"
              >
                Register Interest
              </a>
            </MagneticButton>
            <a
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-ink/25 px-7 py-3 text-sm text-ink transition-colors hover:border-ink/45"
            >
              <Phone size={14} />
              Request a Callback
            </a>
          </div>
        </div>
      </section>

      <div className="border-b border-ink/10 bg-paper-dim">
        <div className="container-fluid grid grid-cols-2 gap-6 py-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <s.icon size={14} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-ink/45">{s.label}</p>
                <p className="text-sm font-medium text-ink">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-fluid grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                About <span className="text-gold">{property.name}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-lg font-medium text-ink">{property.tagline}</p>
            </Reveal>
            <div className="mt-6 space-y-5">
              {property.about.map((para, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-base leading-relaxed text-ink/65">{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-10">
              <p className="text-eyebrow mb-4 text-gold">Amenities</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-ink/70">
                    <Check size={15} className="text-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div id="enquire" className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.15}>
              <div className="rounded-sm border border-ink/10 bg-paper-dim p-8 text-ink">
                <p className="text-eyebrow mb-3 text-gold">Interested in this project?</p>
                <p className="font-display text-2xl leading-snug text-ink">
                  Speak with a Dubai property expert
                </p>
                <p className="mt-3 text-sm text-ink/60">
                  Get real pricing, floor plans, and payment plan details — no obligation.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 flex items-center gap-3 rounded-sm border border-gold/30 bg-gold/10 p-4 text-sm text-ink"
                  >
                    <Check size={18} className="text-gold" />
                    Thank you — we&apos;ll be in touch shortly.
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-6 space-y-3"
                  >
                    <button
                      type="submit"
                      className="w-full rounded-sm bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.02]"
                    >
                      Register Interest
                    </button>
                    <a
                      href="https://wa.me/"
                      className="block w-full rounded-sm border border-ink/20 px-6 py-3.5 text-center text-sm text-ink transition-colors hover:border-ink/40"
                    >
                      Chat on WhatsApp
                    </a>
                  </form>
                )}

                <div className="mt-6 border-t border-ink/10 pt-6">
                  <p className="text-eyebrow text-ink/40">Starting From</p>
                  <p className="font-display mt-1 text-2xl text-ink">{property.price}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim py-16 text-center md:py-24">
        <div className="container-fluid">
          <h2 className="font-display mx-auto max-w-2xl text-[clamp(1.6rem,3.5vw,2.5rem)] font-light leading-[1.15] text-ink">
            Ready to make {property.name} yours?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/60">
            Talk to our Dubai property experts today for pricing, availability, and payment plans.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-105"
            >
              Talk to an Expert
            </Link>
            <a
              href="https://wa.me/"
              className="rounded-full border border-ink/25 px-7 py-3 text-sm text-ink transition-colors hover:border-ink/45"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
