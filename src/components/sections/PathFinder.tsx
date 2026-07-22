"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const GOALS = ["Capital Growth", "Rental Income", "Golden Visa Eligibility", "A Family Home"];
const BUDGETS = ["Under AED 1.5M", "AED 1.5M – 3M", "AED 3M – 6M", "AED 6M+"];
const HORIZONS = ["Off-Plan (2028+)", "Ready to Move Now"];

const RECOMMENDATIONS: Record<string, { title: string; description: string; query: string }> = {
  "Capital Growth": {
    title: "Emerging Off-Plan Growth Corridors",
    description:
      "Early-phase off-plan launches in expanding master communities typically offer the strongest capital appreciation window before handover.",
    query: "status=off-plan",
  },
  "Rental Income": {
    title: "High-Yield Ready Communities",
    description:
      "Established, ready-to-move communities with strong rental demand and predictable service charges tend to deliver more stable yield.",
    query: "status=ready",
  },
  "Golden Visa Eligibility": {
    title: "Golden Visa–Qualifying Residences",
    description:
      "Properties above the AED 2M threshold can qualify investors for the UAE's 10-year Golden Visa — we'll shortlist eligible options.",
    query: "type=Villas",
  },
  "A Family Home": {
    title: "Family-Oriented Villa Communities",
    description:
      "Low-rise villa communities with schools, parks, and retail nearby — built for day-to-day family living, not just investment.",
    query: "type=Villas",
  },
};

export default function PathFinder() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [horizon, setHorizon] = useState<string | null>(null);

  const steps = [
    {
      label: "What's your investment goal?",
      options: GOALS,
      value: goal,
      set: setGoal,
    },
    {
      label: "What's your budget range?",
      options: BUDGETS,
      value: budget,
      set: setBudget,
    },
    {
      label: "When would you like to move in?",
      options: HORIZONS,
      value: horizon,
      set: setHorizon,
    },
  ];

  const done = step >= steps.length;
  const recommendation = goal ? RECOMMENDATIONS[goal] : null;

  function selectOption(setter: (v: string) => void, value: string) {
    setter(value);
    setTimeout(() => setStep((s) => s + 1), 350);
  }

  function reset() {
    setStep(0);
    setGoal(null);
    setBudget(null);
    setHorizon(null);
  }

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-eyebrow mb-4 text-gold">Investment Path Finder</p>
          </Reveal>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
            <TextReveal className="justify-center" lines={["Find the right investment", "path in under a minute."]} />
          </h2>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-sm border border-ink/10 bg-surface p-8 shadow-[0_30px_60px_-35px_rgba(20,21,29,0.3)] md:p-12">
            {!done && (
              <div className="mb-8 flex gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-gold" : "bg-ink/10"
                    }`}
                  />
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-eyebrow mb-2 text-ink/40">Step {step + 1} of {steps.length}</p>
                  <p className="font-display mb-6 text-2xl text-ink">{steps[step].label}</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {steps[step].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => selectOption(steps[step].set, opt)}
                        data-cursor="Select"
                        className={`rounded-sm border px-5 py-4 text-left text-sm transition-colors ${
                          steps[step].value === opt
                            ? "border-gold bg-gold/10 text-ink"
                            : "border-ink/12 text-ink/75 hover:border-gold/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-eyebrow mb-2 text-gold">Your Recommended Path</p>
                  <p className="font-display mb-3 text-2xl text-ink">{recommendation?.title}</p>
                  <p className="mb-8 text-sm leading-relaxed text-ink/60">{recommendation?.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`/buy?${recommendation?.query}`}
                      className="group flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-midnight transition-transform duration-300 hover:scale-105"
                    >
                      View Matching Properties
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <button
                      onClick={reset}
                      className="flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm text-ink/70 transition-colors hover:border-gold hover:text-ink"
                    >
                      <RotateCcw size={14} />
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
