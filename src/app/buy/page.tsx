import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import BuyListings from "@/components/sections/BuyListings";

export const metadata: Metadata = {
  title: "Buy Property in Dubai | Trixis Homes",
  description:
    "Browse Trixis Homes' curated selection of off-plan and ready-to-move properties across Dubai and Abu Dhabi's most sought-after communities.",
};

export default function BuyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pt-24 md:pt-28">
        <Suspense fallback={null}>
          <BuyListings />
        </Suspense>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
