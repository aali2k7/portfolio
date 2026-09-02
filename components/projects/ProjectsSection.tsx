"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const horizontalTrackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  // Measure dynamic horizontal track translation distance
  useEffect(() => {
    const calculateWidth = () => {
      if (!horizontalTrackRef.current) return;
      const trackWidth = horizontalTrackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      // Calculate total translation needed to display the last project card comfortably
      const totalDistance = Math.max(0, trackWidth - viewportWidth + (viewportWidth > 768 ? 120 : 40));
      setMaxTranslateX(totalDistance);
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  // Track scroll progress inside the section
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
  // CHOREOGRAPHY TIMELINE (0.0 -> 1.0)
  // ---------------------------------------------------------------------------

  // Phase 1: Philosophy Launchpad -> Rupture & Slide Left (0.0 -> 0.22)
  // Statement stays anchored initially (0.0 -> 0.06), then slides left (0.06 -> 0.22)
  const statementExitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.04) / 0.18));
  const statementTranslateX = -statementExitProgress * 110; // 0vw -> -110vw (exits left)
  const statementOpacity = Math.max(0, 1 - statementExitProgress * 1.4);
  const statementScale = 1 + statementExitProgress * 0.15;

  // Phase 2: Projects Canvas Enters DIRECTLY from the RIGHT (0.05 -> 0.24)
  // Strictly horizontal (x: 100vw -> 0vw, y: 0)
  const projectsEntranceProgress = Math.max(0, Math.min(1, (scrollProgress - 0.05) / 0.19));
  // Smooth cubic ease-out for horizontal arrival
  const easedProjectsEntrance = 1 - Math.pow(1 - projectsEntranceProgress, 3);
  const projectsCanvasTranslateX = (1 - easedProjectsEntrance) * 100; // +100vw -> 0vw

  // Phase 3: Dedicated Horizontal Project Gallery Scrub (0.24 -> 0.90)
  // Begins ONLY after the projects canvas has fully settled at x: 0vw
  const galleryProgress = Math.max(0, Math.min(1, (scrollProgress - 0.24) / 0.66));
  const currentTranslateX = galleryProgress * maxTranslateX;

  // Active Project Indicator (1, 2, or 3)
  const activeIndex = useMemo(() => {
    if (galleryProgress < 0.35) return 0;
    if (galleryProgress < 0.70) return 1;
    return 2;
  }, [galleryProgress]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full h-[450vh] bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] select-none overflow-x-clip"
    >
      {/* Pinned Sticky Viewport (100vh / 100dvh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
        
        {/* ========================================================================= */}
        {/* LAYER 1: PHILOSOPHY STATEMENT LAUNCHPAD (Anchored, then exits to Left)    */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 md:px-16 text-center pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(${statementTranslateX}vw, 0, 0) scale(${statementScale})`,
            opacity: statementOpacity,
          }}
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Launchpad Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                02 — THE PHILOSOPHY / CATALYST
              </span>
            </div>

            {/* Massive Statement with Accent Highlight */}
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] leading-[0.92]">
              THE BEST SOLUTIONS
              <span className="block text-[var(--text-primary)] mt-2">DON&apos;T START WITH CODE.</span>
              <span className="block text-[var(--accent)] mt-3">
                THEY START WITH A QUESTION.
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>SCROLL TO UNLEASH SELECTED WORK →</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 2: SELECTED WORK / PROJECTS CANVAS (Enters DIRECTLY from RIGHT)     */}
        {/* ========================================================================= */}
        <div
          className="relative z-20 w-full h-full flex flex-col justify-between will-change-transform"
          style={{
            transform: `translate3d(${projectsCanvasTranslateX}vw, 0, 0)`,
          }}
        >
          {/* Top Section Header & Scrub Status Bar (Grid-aligned) */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
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

            <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-muted)] tracking-wider">
              <span className="text-[var(--text-primary)] font-bold">
                PROJECT {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                <span>SCROLL TO NAVIGATE</span>
                <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main Horizontal Showcase Track */}
          <div className="my-auto w-full py-2">
            <div
              ref={horizontalTrackRef}
              className="flex flex-nowrap items-center gap-8 md:gap-12 will-change-transform"
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

          {/* Bottom Progress Tracker Bar */}
          <div className="w-full flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-widest">
            <span>[ 03 — DEDICATED GALLERY ]</span>

            {/* Visual scrub bar */}
            <div className="hidden sm:flex items-center gap-3">
              <span>GALLERY EXPLORATION</span>
              <div className="w-36 h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--accent)] transition-all duration-75"
                  style={{ width: `${Math.round(galleryProgress * 100)}%` }}
                />
              </div>
              <span className="text-[var(--text-primary)] font-semibold">
                {Math.round(galleryProgress * 100)}%
              </span>
            </div>

            <span className="text-[var(--text-secondary)]">
              {galleryProgress >= 0.98 ? "COMPLETED ↓ SCROLL FOR EXPERIENCE" : "CONTINUE SCROLLING"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
