import AboutHero from "@/components/about/AboutHero";
import AboutLegacy from "@/components/about/AboutLegacy";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import AdvantagesSection from "@/components/about/AdvantagesSection";
import CtaSection from "@/components/cta/CtaSection";
import "../../globals.css";

export default function AboutPage() {
  return (
    <main className="min-h-screen about-gradient">
      <AboutHero />
      <AboutLegacy />
      <CoreValuesSection />
      <AdvantagesSection />
      <CtaSection />
    </main>
  );
}
