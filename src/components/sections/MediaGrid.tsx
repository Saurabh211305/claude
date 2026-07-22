import { Instagram } from "@/components/icons/SocialIcons";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

const IMAGES = [
  "/images/property-canopies.svg",
  "/images/community-damac-hills.svg",
  "/images/developer-emaar.svg",
  "/images/property-golf-trails.svg",
  "/images/community-jumeirah-islands.svg",
  "/images/property-al-ghadeer.svg",
];

export default function MediaGrid() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Media</p>
            </Reveal>
            <h2 className="font-display max-w-lg text-[clamp(1.9rem,3.6vw,2.75rem)] font-light leading-[1.1] text-ink">
              <TextReveal lines={["Follow the latest listings", "and market moments."]} />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <a
              href="https://instagram.com"
              data-cursor="Follow"
              className="flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram size={16} />
              @trixishomes
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {IMAGES.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden">
              <img
                src={src}
                alt="Trixis Homes media"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-midnight/0 transition-colors duration-300 group-hover:bg-midnight/30">
                <Instagram
                  size={20}
                  className="text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
