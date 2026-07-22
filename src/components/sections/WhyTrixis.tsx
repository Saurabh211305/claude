import { CheckCircle2, Globe2, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { TESTIMONIALS, WHY_TRIXIS } from "@/lib/data";

const ICONS = [ShieldCheck, TrendingUp, CheckCircle2, Globe2, Zap];

export default function WhyTrixis() {
  const testimonial = TESTIMONIALS[0];

  return (
    <section className="bg-midnight py-24 text-paper md:py-32">
      <div className="container-fluid grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-eyebrow mb-4 text-gold">Why Trixis</p>
          </Reveal>
          <h2 className="font-display max-w-md text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.08] text-paper">
            <TextReveal lines={["Why Investors Choose", "Trixis Homes"]} />
          </h2>
          <Reveal delay={0.15} className="mt-6 max-w-md text-base leading-relaxed text-paper/60">
            From first consultation to resale, our team combines local market
            intelligence with a global investor mindset, so every decision is
            backed by data, not sales pressure.
          </Reveal>

          <StaggerGroup className="mt-10 space-y-7">
            {WHY_TRIXIS.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <StaggerItem key={item.title} className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/5 text-gold">
                    <Icon size={17} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-medium text-paper">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-paper/55">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        <div>
          <Reveal delay={0.1}>
            <p className="text-eyebrow mb-4 text-gold">Who Invests With Trixis</p>
          </Reveal>
          <h3 className="font-display max-w-md text-[clamp(1.6rem,3vw,2.25rem)] font-light leading-[1.15] text-paper">
            <TextReveal lines={["Investors Shaping Their Future", "Through Dubai Real Estate."]} />
          </h3>

          <Reveal delay={0.2} className="mt-8 rounded-sm border border-paper/10 bg-paper/[0.04] p-8">
            <p dir="rtl" className="font-display text-xl italic leading-relaxed text-paper">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm tracking-wide text-gold">
              {testimonial.name} <span className="text-paper/50">— {testimonial.role}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
