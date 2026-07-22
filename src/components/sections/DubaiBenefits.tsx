import { Building2, Globe, Landmark, Percent, ShieldCheck, TrendingUp } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const BENEFITS = [
  {
    icon: Percent,
    title: "Zero Property & Capital Gains Tax",
    description: "No annual property tax and no tax on capital gains from resale — returns stay yours.",
  },
  {
    icon: TrendingUp,
    title: "High Rental Yields",
    description: "Dubai yields regularly outperform London, New York, and Singapore, averaging 5–9% gross.",
  },
  {
    icon: Landmark,
    title: "Golden Visa Eligibility",
    description: "Property investments from AED 2M can qualify buyers for the UAE's 10-year Golden Visa.",
  },
  {
    icon: Globe,
    title: "100% Foreign Ownership",
    description: "Freehold ownership for international buyers across Dubai's designated investment zones.",
  },
  {
    icon: Building2,
    title: "World-Class Infrastructure",
    description: "Best-in-class connectivity, safety, and lifestyle infrastructure across every major community.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated & Transparent",
    description: "Every transaction is overseen by RERA and the Dubai Land Department for full legal protection.",
  },
];

export default function DubaiBenefits() {
  return (
    <section className="bg-paper-dim py-24 text-ink md:py-32">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-eyebrow mb-4 text-gold">Dubai Investment Benefits</p>
          </Reveal>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
            <TextReveal lines={["Why global investors", "keep choosing Dubai."]} />
          </h2>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/8 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="h-full bg-surface p-8">
                <b.icon className="text-gold" size={26} strokeWidth={1.5} />
                <p className="mt-5 font-medium text-ink">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{b.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
