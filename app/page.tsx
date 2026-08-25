import { Hero } from "@/components/sections/hero";
import { JerseyShowcase } from "@/components/sections/jersey-showcase";
import { SponsorshipSection } from "@/components/sections/sponsorship-section";
import { UniformPreview } from "@/components/sections/uniform-preview";
import { Lookbook } from "@/components/sections/lookbook";
import { ProcessSection } from "@/components/sections/process-section";
import { AboutSection } from "@/components/sections/about-section";
import { SocialSection } from "@/components/sections/social-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <JerseyShowcase />
      <SponsorshipSection />
      <UniformPreview />
      <Lookbook />
      <ProcessSection />
      <AboutSection />
      <SocialSection />
      <FinalCta />
    </>
  );
}
