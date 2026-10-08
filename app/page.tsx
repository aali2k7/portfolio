import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";
import { Header } from "@/components/navigation/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { EditorialIntroSection } from "@/components/editorial/EditorialIntroSection";
import { EditorialProjectsSection } from "@/components/editorial/EditorialProjectsSection";
import { EditorialExperienceSection } from "@/components/editorial/EditorialExperienceSection";
import { EditorialResearchSection } from "@/components/editorial/EditorialResearchSection";
import { EditorialStackSection } from "@/components/editorial/EditorialStackSection";
import { EditorialPerspectiveSection } from "@/components/editorial/EditorialPerspectiveSection";
import { EditorialMilestonesSection } from "@/components/editorial/EditorialMilestonesSection";
import { EditorialContactSection } from "@/components/editorial/EditorialContactSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)]">
        {/* Dynamic Navigation (World 01: Dark/Neon -> World 02: Warm Ivory/Editorial) */}
        <Header />

        <main className="relative flex flex-col">
          {/* ========================================================================= */}
          {/* WORLD 01: CINEMATIC DARK HERO & SCROLL-DRIVEN SIGNATURE CLIMAX            */}
          {/* Builds to peak intensity -> Flashbang overexposure -> Settles in #F4F1E9  */}
          {/* ========================================================================= */}
          <HeroSection />

          {/* ========================================================================= */}
          {/* WORLD 02: WARM IVORY / MINIMAL / HUMAN / EDITORIAL / PREMIUM              */}
          {/* ========================================================================= */}
          <div
            id="world-02"
            className="relative z-20 bg-[#F4F1E9] text-[#111111] transition-colors duration-500 overflow-hidden"
          >
            {/* Subtle paper-like grain texture for World 02 editorial warmth */}
            <div className="absolute inset-0 bg-grain opacity-20 mix-blend-multiply pointer-events-none" />

            {/* Section 01: Human Editorial Introduction */}
            <EditorialIntroSection />

            {/* Section 02: Selected Work (Editorial Index + Deep Visual Showcase) */}
            <EditorialProjectsSection />

            {/* Section 03: Experience & Leadership Timeline (AIRC, E-Cell, Council, Advisory) */}
            <EditorialExperienceSection />

            {/* Section 04: Academic Research & INDJCST Java Security Publication */}
            <EditorialResearchSection />

            {/* Section 05: Calm Technical Taxonomy */}
            <EditorialStackSection />

            {/* Section 06: Human Perspective — "Outside the screen" (Swimming, Coastlines, Music) */}
            <EditorialPerspectiveSection />

            {/* Section 07: Verified Milestones */}
            <EditorialMilestonesSection />

            {/* Section 08 & Footer: Contact, Colophon & Directory */}
            <EditorialContactSection />
          </div>
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
