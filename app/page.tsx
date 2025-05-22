import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import ExpertStylists from "@/components/ExpertStylists";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import OurCommitment from "@/components/OurCommitment";
import PremiumGrooming from "@/components/PremiumGrooming";
import ServicePrices from "@/components/ServicePrices";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <PremiumGrooming />
      <OurCommitment />
      <Testimonials />
      <ServicePrices />
      <Gallery />
      <ExpertStylists />
      <Location />
      < CTA />
    </main>

  );
}
