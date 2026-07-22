import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { DEVELOPERS } from "@/lib/data";

export default function PartnerDevelopers() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Partner Developers</p>
            </Reveal>
            <h2 className="font-display max-w-lg text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
              <TextReveal lines={["Trusted names across", "Dubai & the UAE."]} />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/developers"
              data-cursor="View"
              className="group flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
            >
              View all developers
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {DEVELOPERS.map((dev) => (
            <StaggerItem key={dev.slug}>
              <Link
                href={`/developers/${dev.slug}`}
                data-cursor="View"
                className="group flex h-full flex-col justify-between rounded-sm border border-ink/10 bg-surface p-6 transition-colors hover:border-gold/50"
              >
                <p className="font-display text-lg text-ink">{dev.name}</p>
                <p className="mt-6 text-xs text-ink/40">
                  Est. {dev.founded} · {dev.projectsLabel}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
