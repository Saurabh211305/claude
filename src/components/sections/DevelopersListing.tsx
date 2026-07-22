"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import { DEVELOPERS } from "@/lib/data";

const STATS = [
  { value: 398, prefix: "AED ", suffix: "M+", label: "In Transactions" },
  { value: 199, suffix: "+", label: "Happy Clients" },
  { value: 348, suffix: "+", label: "Properties Sold" },
];

export default function DevelopersListing() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => DEVELOPERS.filter((d) => d.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="container-fluid py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-eyebrow mb-4 text-gold">Developers</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] text-ink">
            Real Estate Developers in <span className="text-gold">Dubai &amp; The UAE</span>
          </h1>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-sm border border-ink/10 bg-surface px-4 py-5 text-center">
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} className="font-display block text-lg text-ink" />
            <p className="mt-1 text-[10px] uppercase tracking-wide text-ink/45">{s.label}</p>
          </div>
        ))}
        <div className="rounded-sm border border-ink/10 bg-surface px-4 py-5 text-center">
          <p className="font-display text-lg text-ink">RERA</p>
          <p className="mt-1 text-[10px] uppercase tracking-wide text-ink/45">Certified</p>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-8 flex max-w-lg items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-3">
        <Search size={16} className="text-gold" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search developers..."
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
      </Reveal>

      <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((dev) => (
          <StaggerItem key={dev.slug}>
            <Link
              href={`/developers/${dev.slug}`}
              data-cursor="View"
              className="group block overflow-hidden rounded-sm border border-ink/10 bg-surface transition-colors hover:border-gold/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg text-ink">{dev.name}</p>
                  <ArrowUpRight size={16} className="text-ink/40 transition-colors group-hover:text-gold" />
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-ink/55">{dev.blurb}</p>
                <p className="mt-3 text-xs text-ink/40">
                  Est. {dev.founded} · {dev.projectsLabel}
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
