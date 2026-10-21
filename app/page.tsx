import { Hero } from "@/components/sections/hero";
import { SponsorshipSection } from "@/components/sections/sponsorship-section";
import { JerseyGallery } from "@/components/sections/jersey-gallery";
import { OurProducts } from "@/components/sections/our-products";
import { ProcessSection } from "@/components/sections/process-section";
import { AboutSection } from "@/components/sections/about-section";
import { SocialSection } from "@/components/sections/social-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SponsorshipSection />
      <JerseyGallery />
      <OurProducts />
      <ProcessSection />
      <AboutSection />
      <SocialSection />
      <FinalCta />
    </>
  );
}
