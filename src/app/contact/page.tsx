import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ContactPage from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact Trixis Homes | Dubai Real Estate",
  description:
    "Get in touch with a Trixis Homes property specialist for buying, selling, or investing in Dubai and Abu Dhabi real estate.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pt-24 md:pt-28">
        <ContactPage />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
