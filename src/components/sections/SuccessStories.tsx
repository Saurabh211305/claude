import { Quote } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import Counter from "@/components/motion/Counter";
import { TESTIMONIALS } from "@/lib/data";

const PROOF = [
  { value: 40, suffix: "+", label: "Countries Represented" },
  { value: 199, suffix: "+", label: "Happy Clients" },
  { value: 4.5, decimals: 1, suffix: "★", label: "Average Rating" },
  { value: 348, suffix: "+", label: "Properties Sold" },
];

export default function SuccessStories() {
  const testimonial = TESTIMONIALS[0];

  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow mb-4 text-center text-gold">
            Real Investor Success Stories
          </p>
        </Reveal>
        <h2 className="font-display mx-auto max-w-2xl text-center text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
          <TextReveal className="justify-center" lines={["Investors shaping their future", "through Dubai real estate."]} />
        </h2>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl text-center">
          <Quote className="mx-auto mb-6 text-gold/40" size={36} strokeWidth={1} />
          <p dir="rtl" className="font-display text-2xl italic leading-relaxed text-ink">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm tracking-wide text-gold">
            {testimonial.name} <span className="text-ink/50">— {testimonial.role}</span>
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-ink/10 pt-12 sm:grid-cols-4">
          {PROOF.map((p) => (
            <div key={p.label} className="text-center">
              <Counter
                value={p.value}
                suffix={p.suffix}
                decimals={"decimals" in p ? p.decimals : 0}
                className="font-display block text-2xl text-gold md:text-3xl"
              />
              <p className="mt-1.5 text-xs uppercase tracking-wide text-ink/50">{p.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
