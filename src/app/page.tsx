import { BrandStory } from "@/components/brand-story/BrandStory";
import { CTASection } from "@/components/cta-section/CTASection";
import { FeaturedMenu } from "@/components/featured-menu/FeaturedMenu";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#FDFAE7]">
      <main className="flex-1">
        <Hero />
        <FeaturedMenu />
        <BrandStory />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
