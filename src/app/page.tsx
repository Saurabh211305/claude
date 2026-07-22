import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Hero from "@/components/sections/Hero";
import WhyTrixis from "@/components/sections/WhyTrixis";
import SmartSearch from "@/components/sections/SmartSearch";
import PathFinder from "@/components/sections/PathFinder";
import PartnerDevelopers from "@/components/sections/PartnerDevelopers";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import DubaiBenefits from "@/components/sections/DubaiBenefits";
import Communities from "@/components/sections/Communities";
import MarketDashboard from "@/components/sections/MarketDashboard";
import RoiCalculator from "@/components/sections/RoiCalculator";
import CompareTool from "@/components/sections/CompareTool";
import SuccessStories from "@/components/sections/SuccessStories";
import BuyingProcess from "@/components/sections/BuyingProcess";
import MarketInsights from "@/components/sections/MarketInsights";
import MediaGrid from "@/components/sections/MediaGrid";
import Faq from "@/components/sections/Faq";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyTrixis />
        <SmartSearch />
        <PathFinder />
        <PartnerDevelopers />
        <FeaturedProjects />
        <DubaiBenefits />
        <Communities />
        <MarketDashboard />
        <RoiCalculator />
        <CompareTool />
        <SuccessStories />
        <BuyingProcess />
        <MarketInsights />
        <MediaGrid />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
