import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import DeveloperDetail from "@/components/sections/DeveloperDetail";
import { DEVELOPERS } from "@/lib/data";

export function generateStaticParams() {
  return DEVELOPERS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const developer = DEVELOPERS.find((d) => d.slug === slug);
  if (!developer) return {};
  return {
    title: `${developer.name} | Trixis Homes`,
    description: developer.blurb,
  };
}

export default async function DeveloperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const developer = DEVELOPERS.find((d) => d.slug === slug);
  if (!developer) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper">
        <DeveloperDetail developer={developer} />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
