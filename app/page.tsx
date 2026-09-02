import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";
import { Header } from "@/components/navigation/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ResearchSection } from "@/components/research/ResearchSection";
import { TechStackSection } from "@/components/stack/TechStackSection";
import { BeyondCodeSection } from "@/components/personal/BeyondCodeSection";
import { ContactFooter } from "@/components/footer/ContactFooter";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-white">
        {/* Persistent Floating Minimalist Navigation */}
        <Header />

        <main className="relative z-10 flex flex-col">
          {/* Section 01: Dynamic Hero, Breathing Background, Portrait Transformation & Signature */}
          <HeroSection />

          {/* Section 02: Editorial Biography & Problem-First Philosophy */}
          <AboutSection />

          {/* Section 03: Selected Work & PRIORA Flagship Showcase */}
          <ProjectsSection />

          {/* Section 04: Experience & Leadership Chronology (AIRC, RiseInRise, Woxsen) */}
          <ExperienceSection />

          {/* Section 05: Academic Research & INDJCST Java Security Publication */}
          <ResearchSection />

          {/* Section 06: Kinetic Typography Technical Capabilities Stack */}
          <TechStackSection />

          {/* Section 07: Beyond Code Human Explorations & Achievements */}
          <BeyondCodeSection />
        </main>

        {/* Section 08: Decisive High-Contrast Contact Footer & Social Directory */}
        <ContactFooter />
      </div>
    </SmoothScrollProvider>
  );
}
