"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

const QUICK_FILTERS = ["Off Plan", "Ready to Move", "Villas", "Apartments"];

export default function SmartSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(query ? `/buy?q=${encodeURIComponent(query)}` : "/buy");
  }

  return (
    <section className="relative z-20 bg-paper px-4">
      <Reveal className="container-fluid -mt-16 md:-mt-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-sm border border-paper/10 bg-surface p-3 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)] md:flex-row md:items-center md:p-4"
        >
          <div className="flex flex-1 items-center gap-3 px-3">
            <Search size={18} className="shrink-0 text-gold" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Smart Search — project, developer, or community"
              className="w-full bg-transparent py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
            />
          </div>
          <div className="hidden items-center gap-2 border-l border-ink/10 pl-4 md:flex">
            {QUICK_FILTERS.map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => router.push(`/buy?type=${encodeURIComponent(f)}`)}
                className="rounded-full border border-ink/12 px-3.5 py-2 text-xs text-ink/70 transition-colors hover:border-gold hover:text-ink"
              >
                {f}
              </button>
            ))}
          </div>
          <button
            type="submit"
            data-cursor="Search"
            className="shrink-0 rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.02]"
          >
            Search
          </button>
        </form>
      </Reveal>
    </section>
  );
}
