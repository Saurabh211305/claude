"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { COMMUNITIES, DEVELOPERS } from "@/lib/data";

type Mode = "developers" | "communities";

export default function CompareTool() {
  const [mode, setMode] = useState<Mode>("developers");
  const [aIndex, setAIndex] = useState(0);
  const [bIndex, setBIndex] = useState(1);

  const list = mode === "developers" ? DEVELOPERS : COMMUNITIES;
  const a = list[aIndex];
  const b = list[bIndex];

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Compare</p>
            </Reveal>
            <h2 className="font-display max-w-xl text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
              <TextReveal lines={["Compare communities", "& developers side by side."]} />
            </h2>
          </div>

          <Reveal delay={0.1} className="flex gap-2 rounded-full border border-ink/10 p-1">
            {(["developers", "communities"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setAIndex(0);
                  setBIndex(1);
                }}
                className={`rounded-full px-4 py-2 text-xs capitalize transition-colors ${
                  mode === m ? "bg-gold text-midnight" : "text-ink/60 hover:text-ink"
                }`}
              >
                {m}
              </button>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <CompareCard
            list={list}
            selected={aIndex}
            onSelect={setAIndex}
            item={a}
          />
          <CompareCard
            list={list}
            selected={bIndex}
            onSelect={setBIndex}
            item={b}
          />
        </Reveal>
      </div>
    </section>
  );
}

function CompareCard({
  list,
  selected,
  onSelect,
  item,
}: {
  list: (typeof DEVELOPERS | typeof COMMUNITIES)[number][];
  selected: number;
  onSelect: (i: number) => void;
  item: (typeof DEVELOPERS | typeof COMMUNITIES)[number];
}) {
  const isDeveloper = "founded" in item;

  return (
    <div className="overflow-hidden rounded-sm border border-ink/10 bg-surface">
      <div className="relative aspect-[16/9] w-full">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <select
          value={selected}
          onChange={(e) => onSelect(Number(e.target.value))}
          className="mb-4 w-full rounded-sm border border-ink/15 bg-transparent px-3 py-2 text-sm text-ink focus:outline-none"
        >
          {list.map((l, i) => (
            <option key={l.slug} value={i}>
              {l.name}
            </option>
          ))}
        </select>

        {isDeveloper ? (
          <div className="space-y-3 text-sm">
            <Row label="Founded" value={(item as (typeof DEVELOPERS)[number]).founded} />
            <Row label="Portfolio" value={(item as (typeof DEVELOPERS)[number]).projectsLabel} />
            <p className="pt-2 text-ink/60">{(item as (typeof DEVELOPERS)[number]).blurb}</p>
          </div>
        ) : (
          <p className="text-sm text-ink/60">
            {(item as (typeof COMMUNITIES)[number]).description ??
              "Detailed community profile available on request."}
          </p>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-ink/8 pb-2">
      <span className="text-ink/45">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </div>
  );
}
