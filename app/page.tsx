import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import OurCommitment from "@/components/OurCommitment";
import PremiumGrooming from "@/components/PremiumGrooming";
import ServicePrices from "@/components/ServicePrices";
import Testimonials from "@/components/Testimonials";

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
      < CTA />
    </main>

  );
}
