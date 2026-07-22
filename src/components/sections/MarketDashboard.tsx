"use client";

import { useState } from "react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import Counter from "@/components/motion/Counter";

const GROWTH_DATA = [
  { area: "Dubai South", value: 11.2 },
  { area: "Yas Island", value: 9.6 },
  { area: "Damac Hills", value: 8.4 },
  { area: "JVC", value: 7.8 },
  { area: "Downtown Dubai", value: 6.1 },
];

const KPIS = [
  { value: 398, prefix: "AED ", suffix: "M+", label: "Transactions Facilitated" },
  { value: 348, suffix: "+", label: "Properties Sold" },
  { value: 8, decimals: 1, suffix: "+ yrs", label: "Years of Market Experience" },
];

export default function MarketDashboard() {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = Math.max(...GROWTH_DATA.map((d) => d.value));

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Market Performance</p>
            </Reveal>
            <h2 className="font-display max-w-xl text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
              <TextReveal lines={["Where the market", "is moving."]} />
            </h2>
          </div>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {KPIS.map((kpi) => (
            <StaggerItem key={kpi.label}>
              <div className="rounded-sm border border-ink/10 bg-surface p-6">
                <Counter
                  value={kpi.value}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  decimals={"decimals" in kpi ? kpi.decimals : 0}
                  className="font-display block text-2xl text-ink md:text-3xl"
                />
                <p className="mt-1.5 text-xs uppercase tracking-wide text-ink/50">{kpi.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15} className="mt-6 rounded-sm border border-ink/10 bg-surface p-8">
          <div className="mb-6 flex items-baseline justify-between">
            <p className="text-sm font-medium text-ink">
              Average Annual Price Growth by Area
            </p>
            <p className="text-xs text-ink/40">Illustrative market indicator, % YoY</p>
          </div>

          <div className="space-y-4">
            {GROWTH_DATA.map((d, i) => (
              <div
                key={d.area}
                className="group"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-ink/75">{d.area}</span>
                  <span
                    className={`font-medium tabular-nums transition-colors ${
                      hovered === i ? "text-gold" : "text-ink/50"
                    }`}
                  >
                    +{d.value.toFixed(1)}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-ink/8">
                  <div
                    className="h-full rounded-full bg-gold transition-all duration-700 ease-out"
                    style={{ width: `${(d.value / max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
