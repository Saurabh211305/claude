import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { INSIGHT_ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Market Insights | Trixis Homes",
  description: "Dubai real estate market insights, buyer education, and investment guides from Trixis Homes.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pt-24 md:pt-28">
        <div className="container-fluid py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-eyebrow mb-4 text-gold">Insights</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] text-ink">
                Market Insights &amp; <span className="text-gold">Buyer Education</span>
              </h1>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {INSIGHT_ARTICLES.map((a) => (
              <StaggerItem key={a.slug}>
                <Link href={`/insights/${a.slug}`} data-cursor="Read" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-wide text-gold">
                    {a.category} · {a.readTime}
                  </p>
                  <p className="font-display mt-2 text-xl leading-snug text-ink">{a.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{a.excerpt}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
