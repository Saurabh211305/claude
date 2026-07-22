import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Reveal from "@/components/motion/Reveal";
import { INSIGHT_ARTICLES } from "@/lib/data";

export function generateStaticParams() {
  return INSIGHT_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: `${article.title} | Trixis Homes Insights`, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pt-24 md:pt-28">
        <article className="container-fluid max-w-3xl py-16 md:py-20">
          <Reveal>
            <p className="text-eyebrow mb-4 text-gold">
              {article.category} · {article.readTime}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-light leading-[1.1] text-ink">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="relative mt-10 aspect-[16/9] overflow-hidden">
            <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={0.15} className="mt-10 space-y-5 text-base leading-relaxed text-ink/70">
            <p>{article.excerpt}</p>
            <p>
              This article is part of the Trixis Homes Insights series,
              designed to help investors make informed decisions in the Dubai
              and Abu Dhabi property market. Talk to a Trixis Homes specialist
              for guidance specific to your situation.
            </p>
          </Reveal>
        </article>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
