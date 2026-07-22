import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import DevelopersListing from "@/components/sections/DevelopersListing";

export const metadata: Metadata = {
  title: "Real Estate Developers in Dubai & the UAE | Trixis Homes",
  description:
    "Explore the developers Trixis Homes partners with across Dubai and Abu Dhabi, including Aldar, Emaar, Damac, Binghatti, and Beyond.",
};

export default function DevelopersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pt-24 md:pt-28">
        <DevelopersListing />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
