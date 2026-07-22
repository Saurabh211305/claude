import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { PROPERTIES } from "@/lib/data";

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);
  if (!property) return {};
  return {
    title: `${property.name} | Trixis Homes`,
    description: property.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper">
        <ProjectDetail property={property} />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
