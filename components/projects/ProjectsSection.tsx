"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const horizontalTrackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  // Measure dynamic horizontal scrollable width
  useEffect(() => {
    const calculateWidth = () => {
      if (!horizontalTrackRef.current) return;
      const trackWidth = horizontalTrackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      // Calculate total translation needed to show last card fully with margin
      const totalDistance = Math.max(0, trackWidth - viewportWidth + (viewportWidth > 768 ? 120 : 40));
      setMaxTranslateX(totalDistance);
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  // Track vertical scroll progress inside the section
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollableDistance;
      const progress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------------------------------------------------------------------
  // TIMELINE CALCULATIONS (0.0 -> 1.0)
  // ---------------------------------------------------------------------------

  // Phase A: Diagonal Entrance from Bottom-Right (0.0 -> 0.20)
  // Starts at x: 35vw, y: 50vh, opacity: 0.1 -> settles at x: 0, y: 0, opacity: 1.0
  const entranceProgress = Math.max(0, Math.min(1, scrollProgress / 0.20));
  // Smooth cubic ease-out
  const easedEntrance = 1 - Math.pow(1 - entranceProgress, 3);
  
  const entranceTranslateX = (1 - easedEntrance) * 36; // 36vw -> 0vw
  const entranceTranslateY = (1 - easedEntrance) * 48; // 48vh -> 0vh
  const entranceOpacity = 0.15 + easedEntrance * 0.85;
  const entranceScale = 0.94 + easedEntrance * 0.06;

  // Phase B: Pinned Horizontal Scrolling Sequence (0.20 -> 0.90)
  const horizontalProgress = Math.max(0, Math.min(1, (scrollProgress - 0.20) / 0.70));
  // Smooth easing for horizontal travel
  const currentTranslateX = horizontalProgress * maxTranslateX;

  // Active Project Indicator (1, 2, or 3)
  const activeIndex = useMemo(() => {
    if (horizontalProgress < 0.35) return 0;
    if (horizontalProgress < 0.70) return 1;
    return 2;
  }, [horizontalProgress]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full h-[400vh] bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] select-none overflow-x-clip"
    >
      {/* Pinned Sticky Viewport (100vh / 100dvh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER & SCRUB STATUS BAR                                         */}
        {/* ========================================================================= */}
        <div
          className="w-full max-w-[1600px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)] z-20 will-change-transform"
          style={{
            transform: `translate3d(${entranceTranslateX}vw, ${entranceTranslateY}vh, 0) scale(${entranceScale})`,
            opacity: entranceOpacity,
          }}
        >
          {/* Section Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
              03
            </span>
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)] font-semibold">
              SELECTED WORK / PROJECTS
            </span>
            <span className="hidden sm:inline-block text-[var(--border-subtle)]">•</span>
            <span className="hidden sm:inline-block font-mono text-xs text-[var(--text-muted)]">
              PRODUCT &amp; ARCHITECTURE
            </span>
          </div>

          {/* Dynamic Horizontal Scrub Tracker */}
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-muted)] tracking-wider">
            <span className="text-[var(--text-primary)] font-bold">
              PROJECT {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
              <span>SCROLL DOWN TO EXPLORE</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN HORIZONTAL PROJECT SHOWCASE TRACK                                    */}
        {/* ========================================================================= */}
        <div
          className="my-auto w-full z-10 will-change-transform py-4"
          style={{
            transform: `translate3d(${entranceTranslateX}vw, ${entranceTranslateY}vh, 0) scale(${entranceScale})`,
            opacity: entranceOpacity,
          }}
        >
          <div
            ref={horizontalTrackRef}
            className="flex flex-nowrap items-center gap-8 md:gap-12 will-change-transform pl-2 md:pl-4"
            style={{
              transform: `translate3d(-${currentTranslateX}px, 0, 0)`,
              transition: "transform 0.05s ease-out",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="shrink-0 w-[88vw] sm:w-[84vw] md:w-[80vw] lg:w-[76vw] max-w-[1150px]"
              >
                <ProjectCard project={project} isFlagship={index === 0 || project.featured} />
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM PROGRESS TRACKER BAR                                               */}
        {/* ========================================================================= */}
        <div
          className="w-full max-w-[1600px] mx-auto flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] z-20 font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-widest will-change-transform"
          style={{
            transform: `translate3d(${entranceTranslateX}vw, ${entranceTranslateY}vh, 0) scale(${entranceScale})`,
            opacity: entranceOpacity,
          }}
        >
          <span>[ 03 — INTERACTIVE SHOWCASE ]</span>

          {/* Visual scrub bar */}
          <div className="hidden sm:flex items-center gap-3">
            <span>SHOWCASE PROGRESS</span>
            <div className="w-36 h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent)] transition-all duration-75"
                style={{ width: `${Math.round(horizontalProgress * 100)}%` }}
              />
            </div>
            <span className="text-[var(--text-primary)] font-semibold">
              {Math.round(horizontalProgress * 100)}%
            </span>
          </div>

          <span className="text-[var(--text-secondary)]">
            {horizontalProgress >= 0.98 ? "COMPLETED ↓ SCROLL FOR EXPERIENCE" : "CONTINUE SCROLLING"}
          </span>
        </div>

      </div>
    </section>
  );
}
