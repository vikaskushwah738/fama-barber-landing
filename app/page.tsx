import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import OurCommitment from "@/components/OurCommitment";
import PremiumGrooming from "@/components/PremiumGrooming";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <PremiumGrooming />
      <OurCommitment />
      <Testimonials />
      < CTA />
    </main>

  );
}
