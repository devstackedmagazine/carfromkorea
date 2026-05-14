import CtaSection from "@/components/cta/CtaSection";
import HeroSection from "@/components/hero/HeroSection";
import FeaturedInventory from "@/components/inventory/FeaturedInventory";
import ProcessSection from "@/components/procesess/ProcessSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedInventory />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}
