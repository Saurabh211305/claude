import { Gem, ShieldCheck, Compass, Users, KeyRound, Landmark } from "lucide-react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const VALUES = [
  {
    icon: Gem,
    title: "Uncompromising Craft",
    description:
      "Every residence is finished by master artisans using materials sourced from a vetted global supply chain — nothing standardised, nothing rushed.",
  },
  {
    icon: Compass,
    title: "Architectural Integrity",
    description:
      "We collaborate exclusively with award-winning architecture studios to ensure each design is site-specific, never templated.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Transparency",
    description:
      "RERA-compliant documentation, transparent pricing, and a legal team that walks you through every clause before you sign.",
  },
  {
    icon: KeyRound,
    title: "Limited by Design",
    description:
      "Fewer than twenty residences released each year, ensuring exclusivity, privacy, and long-term value appreciation for owners.",
  },
  {
    icon: Users,
    title: "Dedicated Concierge",
    description:
      "A single point of contact from first enquiry through years of ownership — for maintenance, resale, or your next acquisition.",
  },
  {
    icon: Landmark,
    title: "Proven Track Record",
    description:
      "18 years, 120+ residences, and a 98% client referral rate across nine of India's most sought-after locations.",
  },
];

export default function WhyTrixis() {
  return (
    <section className="bg-cream-deep py-28 text-ink md:py-40">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-eyebrow mb-6 text-clay">Why Trixis Homes</p>
          </Reveal>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
            <TextReveal
              className="text-ink"
              lines={["The difference is in", "what you don't see."]}
            />
          </h2>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group h-full bg-surface p-10 transition-colors duration-500 hover:bg-ink">
                <value.icon
                  className="text-clay transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-clay-soft"
                  size={30}
                  strokeWidth={1.25}
                />
                <p className="font-display mt-6 text-xl text-ink transition-colors duration-500 group-hover:text-cream">
                  {value.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-cream/60">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
