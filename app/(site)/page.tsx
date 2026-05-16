import CtaSection from "@/components/cta/CtaSection";
import HeroSection from "@/components/home/hero/HeroSection";
import FeaturedInventory from "@/components/inventory/FeaturedInventory";
import ProcessSection from "@/components/home/procesess/ProcessSection";
import FAQSection from "@/components/faq/FAQSection";

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
