"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Check, FileCheck, Megaphone, Users } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const BENEFITS = [
  {
    icon: BarChart3,
    title: "Data-Backed Valuation",
    description: "A realistic price range based on live comparables, not an inflated listing price.",
  },
  {
    icon: Megaphone,
    title: "Professional Marketing",
    description: "Your property presented to our full network of qualified, pre-vetted buyers and investors.",
  },
  {
    icon: Users,
    title: "Vetted Buyer Network",
    description: "Clients across 40+ countries, so your listing reaches serious, ready-to-transact buyers.",
  },
  {
    icon: FileCheck,
    title: "RERA-Compliant Paperwork",
    description: "Every contract, NOC, and transfer document handled by our licensed consultants.",
  },
];

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-midnight pb-20 pt-32 text-paper md:pb-28 md:pt-40">
        <div className="container-fluid grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Sell Your Property</p>
            </Reveal>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-light leading-[1.05] text-paper">
              <TextReveal lines={["Sell with confidence,", "not guesswork."]} />
            </h1>
            <Reveal delay={0.15} className="mt-6 max-w-md text-base leading-relaxed text-paper/65">
              From valuation to Dubai Land Department transfer, our team
              manages the entire resale process with the same rigour we bring
              to every purchase.
            </Reveal>

            <StaggerGroup className="mt-10 space-y-6">
              {BENEFITS.map((b) => (
                <StaggerItem key={b.title} className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/5 text-gold">
                    <b.icon size={17} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-medium text-paper">{b.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-paper/55">{b.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-sm border border-paper/10 bg-paper/[0.04] p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[400px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-midnight">
                    <Check size={26} />
                  </div>
                  <p className="font-display text-2xl text-paper">Thank you.</p>
                  <p className="mt-3 max-w-xs text-sm text-paper/60">
                    Our resale team will contact you within 24 hours with a valuation window.
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
                  <p className="text-eyebrow mb-1 text-gold">Get a Free Valuation</p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Full Name"
                      className="w-full rounded-sm border border-paper/15 bg-transparent px-4 py-3.5 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
                    />
                    <input
                      required
                      placeholder="Phone / WhatsApp"
                      className="w-full rounded-sm border border-paper/15 bg-transparent px-4 py-3.5 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-sm border border-paper/15 bg-transparent px-4 py-3.5 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
                  />
                  <input
                    required
                    placeholder="Property Location (e.g. Damac Hills, Downtown Dubai)"
                    className="w-full rounded-sm border border-paper/15 bg-transparent px-4 py-3.5 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
                  />
                  <textarea
                    rows={3}
                    placeholder="Tell us about your property"
                    className="w-full resize-none rounded-sm border border-paper/15 bg-transparent px-4 py-3.5 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-sm bg-gold px-8 py-4 text-sm font-medium tracking-wide text-midnight transition-transform duration-300 hover:scale-[1.02]"
                  >
                    Request My Free Valuation
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
