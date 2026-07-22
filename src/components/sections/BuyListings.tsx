"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/sections/FeaturedProjects";
import { PROPERTIES } from "@/lib/data";

const STATUS_FILTERS = ["All", "Off Plan", "Ready to Move"] as const;

export default function BuyListings() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<(typeof STATUS_FILTERS)[number]>(
    searchParams.get("status") === "off-plan" ? "Off Plan" : "All"
  );
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [location, setLocation] = useState("All locations");

  const locations = useMemo(
    () => ["All locations", ...Array.from(new Set(PROPERTIES.map((p) => p.location)))],
    []
  );

  const filtered = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (status !== "All" && p.status !== status) return false;
      if (location !== "All locations" && p.location !== location) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.developerName.toLowerCase().includes(q) &&
          !p.location.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [status, location, query]);

  return (
    <div className="container-fluid py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] text-ink">
            Find Your Perfect Property <span className="text-gold">in Dubai</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-4 text-base text-ink/60">
          Browse our curated selection of off-plan and ready-to-move
          properties across Dubai&apos;s most sought-after communities.
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-4xl">
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setStatus(f)}
              className={`rounded-full px-5 py-2 text-sm transition-colors ${
                status === f ? "bg-gold text-midnight" : "border border-ink/12 text-ink/70 hover:border-gold/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 rounded-sm border border-ink/10 bg-surface p-3 shadow-sm md:flex-row">
          <div className="flex flex-1 items-center gap-2 px-3">
            <Search size={16} className="text-gold" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search project, developer or community"
              className="w-full bg-transparent py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
            />
          </div>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-sm border border-ink/10 bg-transparent px-3 py-2.5 text-sm text-ink focus:outline-none md:border-0"
          >
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </Reveal>

      <p className="mt-8 text-sm text-ink/50">
        Showing <span className="font-medium text-ink">{filtered.length}</span> of {PROPERTIES.length} properties
      </p>

      <StaggerGroup className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((property) => (
          <StaggerItem key={property.id}>
            <ProjectCard property={property} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink/50">
          No properties match your filters right now — try broadening your search.
        </p>
      )}
    </div>
  );
}
