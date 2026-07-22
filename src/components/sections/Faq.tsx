"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const FAQS = [
  {
    q: "Can foreigners buy property in Dubai?",
    a: "Yes. International buyers can own freehold property outright in Dubai's designated investment zones, including Downtown Dubai, Dubai Marina, Palm Jumeirah, and Dubai South.",
  },
  {
    q: "What does 'off-plan' mean?",
    a: "An off-plan property is purchased directly from the developer before, or during, construction — typically at a lower entry price and with a staged payment plan through to handover.",
  },
  {
    q: "What is a payment plan like 55/45 or 80/20?",
    a: "These numbers represent the split between payments made during construction and payments due at or after handover. A 55/45 plan means 55% is paid before handover and 45% after.",
  },
  {
    q: "Do I need to be a UAE resident to buy?",
    a: "No. UAE residency is not required to purchase freehold property in Dubai, though it may affect financing options.",
  },
  {
    q: "Can non-residents get a mortgage in Dubai?",
    a: "Yes, several UAE banks offer mortgages to non-resident buyers, typically with a higher down payment requirement than for residents.",
  },
  {
    q: "What is the Golden Visa property threshold?",
    a: "Property investments of AED 2 million or more can qualify buyers for the UAE's 10-year Golden Visa, subject to standard eligibility criteria.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-eyebrow mb-4 text-gold">FAQ</p>
          </Reveal>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
            <TextReveal className="justify-center" lines={["Common questions,", "answered plainly."]} />
          </h2>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg text-ink md:text-xl">{item.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-400 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink/60">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
