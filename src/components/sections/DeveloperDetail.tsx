import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/sections/FeaturedProjects";
import type { Developer } from "@/lib/data";
import { PROPERTIES } from "@/lib/data";

export default function DeveloperDetail({ developer }: { developer: Developer }) {
  const projects = PROPERTIES.filter((p) => p.developerSlug === developer.slug);

  return (
    <>
      <section className="relative flex h-[56svh] min-h-[420px] w-full items-center justify-center overflow-hidden bg-midnight pt-24 text-center">
        <img src={developer.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-midnight/50" />
        <div className="container-fluid relative z-10">
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-paper">
            {developer.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">{developer.blurb}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium text-midnight transition-transform duration-300 hover:scale-105"
            >
              Talk with an Expert
              <ArrowRight size={16} />
            </Link>
            <a
              href="#projects"
              className="rounded-full border border-paper/30 px-7 py-3 text-sm text-paper transition-colors hover:border-paper/60"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-fluid grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Developer Overview</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl text-ink md:text-3xl">About {developer.name}</h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {(developer.about ?? [developer.blurb]).map((para, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-base leading-relaxed text-ink/65">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {developer.keyFacts && (
            <Reveal delay={0.15} className="lg:self-start">
              <div className="rounded-sm border border-ink/10 bg-surface p-8">
                <p className="font-display mb-6 text-lg text-ink">Key Facts</p>
                <div className="space-y-4">
                  {developer.keyFacts.map((fact) => (
                    <div key={fact.label} className="border-b border-ink/8 pb-4 last:border-0 last:pb-0">
                      <p className="text-[11px] uppercase tracking-wide text-ink/40">{fact.label}</p>
                      <p className="mt-1 text-sm font-medium text-ink">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {projects.length > 0 && (
        <section id="projects" className="bg-paper-dim py-16 md:py-24">
          <div className="container-fluid">
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Projects by {developer.name}</p>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((property) => (
                <ProjectCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
