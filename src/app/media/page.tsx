import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import MediaGrid from "@/components/sections/MediaGrid";

export const metadata: Metadata = {
  title: "Media | Trixis Homes",
  description: "Photos, project moments, and social updates from Trixis Homes.",
};

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pt-24 md:pt-28">
        <MediaGrid />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
