import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import BrandStory from "@/components/sections/BrandStory";
import Properties from "@/components/sections/Properties";
import WhyTrixis from "@/components/sections/WhyTrixis";
import Journey from "@/components/sections/Journey";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <BrandStory />
        <Properties />
        <WhyTrixis />
        <Journey />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
