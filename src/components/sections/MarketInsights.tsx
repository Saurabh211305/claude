import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { INSIGHT_ARTICLES } from "@/lib/data";

export default function MarketInsights() {
  return (
    <section className="bg-midnight py-24 text-paper md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Latest Market Insights</p>
            </Reveal>
            <h2 className="font-display max-w-xl text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-paper">
              <TextReveal lines={["Read before you", "invest."]} />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/insights"
              className="group flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
            >
              View all insights
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {INSIGHT_ARTICLES.map((a) => (
            <StaggerItem key={a.slug}>
              <Link href={`/insights/${a.slug}`} data-cursor="Read" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-wide text-gold">{a.category} · {a.readTime}</p>
                <p className="font-display mt-2 text-xl leading-snug text-paper">{a.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{a.excerpt}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
