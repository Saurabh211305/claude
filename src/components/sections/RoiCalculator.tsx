"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

function formatAED(n: number) {
  return `AED ${Math.round(n).toLocaleString()}`;
}

export default function RoiCalculator() {
  const [price, setPrice] = useState(1650000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rentalYield, setRentalYield] = useState(7);
  const [appreciation, setAppreciation] = useState(8);
  const [years, setYears] = useState(5);

  const results = useMemo(() => {
    const downPayment = price * (downPaymentPct / 100);
    const annualRent = price * (rentalYield / 100);
    const totalRentOverPeriod = annualRent * years;
    const futureValue = price * Math.pow(1 + appreciation / 100, years);
    const capitalGain = futureValue - price;
    const totalReturn = capitalGain + totalRentOverPeriod;
    const roiOnDownPayment = downPayment > 0 ? (totalReturn / downPayment) * 100 : 0;

    return { downPayment, annualRent, totalRentOverPeriod, futureValue, capitalGain, totalReturn, roiOnDownPayment };
  }, [price, downPaymentPct, rentalYield, appreciation, years]);

  return (
    <section className="bg-midnight py-24 text-paper md:py-32">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-eyebrow mb-4 text-gold">ROI Calculator</p>
          </Reveal>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-paper">
            <TextReveal lines={["Model your return", "before you invest."]} />
          </h2>
        </div>

        <Reveal delay={0.15} className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-7">
            <SliderField
              label="Property Price"
              value={price}
              onChange={setPrice}
              min={500000}
              max={10000000}
              step={50000}
              format={(v) => formatAED(v)}
            />
            <SliderField
              label="Down Payment"
              value={downPaymentPct}
              onChange={setDownPaymentPct}
              min={10}
              max={100}
              step={5}
              format={(v) => `${v}%`}
            />
            <SliderField
              label="Expected Rental Yield"
              value={rentalYield}
              onChange={setRentalYield}
              min={2}
              max={12}
              step={0.5}
              format={(v) => `${v}%`}
            />
            <SliderField
              label="Expected Annual Appreciation"
              value={appreciation}
              onChange={setAppreciation}
              min={0}
              max={20}
              step={0.5}
              format={(v) => `${v}%`}
            />
            <SliderField
              label="Holding Period"
              value={years}
              onChange={setYears}
              min={1}
              max={10}
              step={1}
              format={(v) => `${v} year${v > 1 ? "s" : ""}`}
            />
          </div>

          <div className="rounded-sm border border-paper/10 bg-paper/[0.04] p-8">
            <p className="text-eyebrow mb-6 text-paper/50">Estimated Outcome</p>
            <div className="space-y-5">
              <ResultRow label="Down Payment Required" value={formatAED(results.downPayment)} />
              <ResultRow label="Estimated Annual Rental Income" value={formatAED(results.annualRent)} />
              <ResultRow
                label={`Total Rental Income (${years}yr)`}
                value={formatAED(results.totalRentOverPeriod)}
              />
              <ResultRow label="Projected Property Value" value={formatAED(results.futureValue)} />
              <ResultRow label="Estimated Capital Gain" value={formatAED(results.capitalGain)} />
              <div className="mt-6 border-t border-paper/10 pt-6">
                <p className="text-eyebrow mb-2 text-gold">Total Estimated ROI on Down Payment</p>
                <p className="font-display text-4xl text-gold">
                  {results.roiOnDownPayment.toFixed(0)}%
                </p>
                <p className="mt-2 text-xs leading-relaxed text-paper/40">
                  Illustrative estimate based on your assumptions — not a
                  guarantee of future performance. Actual returns depend on
                  service charges, financing costs, and market conditions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-sm text-paper/70">{label}</label>
        <span className="font-display text-lg text-gold">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-paper/15 accent-[#dd8a3b]"
      />
    </div>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-paper/55">{label}</span>
      <span className="font-medium tabular-nums text-paper">{value}</span>
    </div>
  );
}
