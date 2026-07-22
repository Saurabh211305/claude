import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import SellPage from "@/components/sections/SellPage";

export const metadata: Metadata = {
  title: "Sell Your Property in Dubai | Trixis Homes",
  description:
    "List your Dubai or Abu Dhabi property with Trixis Homes for a data-backed valuation, professional marketing, and a vetted buyer network.",
};

export default function Sell() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper">
        <SellPage />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
