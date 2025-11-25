"use client";

import { HeroSection, PartnersSection, ProjectsSection, StatsSection } from "@/components/sections";
import { FeatureSlideshow } from "@/components/ui/feature-slideshow";

export default function HomePage() {
  return (
    <>
      {/* Panel 1: Hero Section */}
      <HeroSection />

      {/* Panel 2: Community Partners */}
      <PartnersSection />

      {/* Panel 3: Stats Section */}
      <StatsSection />

      {/* Panel 4: Feature Slideshow (Community, Blog, Contribution) */}
      <FeatureSlideshow />

      {/* Panel 5: Projects Section */}
      <ProjectsSection />
    </>
  );
}
