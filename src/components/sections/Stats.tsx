import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";

const STATS = [
  { value: 120, suffix: "+", label: "Residences Delivered" },
  { value: 4200, suffix: " Cr", prefix: "₹", label: "Portfolio Value" },
  { value: 98, suffix: "%", label: "Client Referral Rate" },
  { value: 9, suffix: "", label: "Signature Locations" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-line bg-cream-deep py-20">
      <div className="container-fluid grid grid-cols-2 gap-10 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center md:text-left">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              className="font-display block text-[clamp(2rem,4vw,3.25rem)] text-clay"
            />
            <p className="mt-2 text-xs tracking-[0.15em] text-ink/55 md:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
