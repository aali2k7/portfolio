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
      const totalDistance = Math.max(0, trackWidth - viewportWidth + (viewportWidth > 768 ? 140 : 40));
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
  // HORIZONTAL CHOREOGRAPHY TIMELINE (0.0 -> 1.0)
  // ---------------------------------------------------------------------------

  // Phase 1: Projects Canvas Enters DIRECTLY from the FAR RIGHT (0.0 -> 0.16)
  // Strictly horizontal (x: 100vw -> 0vw, y: 0)
  const entranceProgress = Math.max(0, Math.min(1, scrollProgress / 0.16));
  // Cubic ease-out for immediate horizontal glide
  const easedEntrance = 1 - Math.pow(1 - entranceProgress, 3);
  const canvasTranslateX = (1 - easedEntrance) * 100; // +100vw -> 0vw

  // Phase 2: Horizontal Project Gallery Scrub (0.16 -> 0.94)
  // Begins ONLY once canvas has fully arrived at 0vw
  const galleryProgress = Math.max(0, Math.min(1, (scrollProgress - 0.16) / 0.78));
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
      className="relative w-full h-[400vh] bg-[var(--bg-primary)] select-none overflow-x-clip border-t border-[var(--border-subtle)]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
        
        {/* Subtle background atmosphere in Projects realm */}
        <div className="absolute inset-0 pointer-events-none ambient-glow-purple opacity-30 z-0" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 ambient-glow-neon opacity-20 pointer-events-none z-0" />

        {/* ========================================================================= */}
        {/* HORIZONTAL PROJECTS CANVAS (Enters strictly along horizontal axis)        */}
        {/* ========================================================================= */}
        <div
          className="relative z-10 w-full h-full flex flex-col justify-between will-change-transform"
          style={{
            transform: `translate3d(${canvasTranslateX}vw, 0, 0)`,
          }}
        >
          {/* Top Section Header & Status Tracker */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
                02
              </span>
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                SELECTED WORK / FLAGSHIP SYSTEMS
              </span>
              <span className="hidden sm:inline-block text-[var(--border-subtle)]">•</span>
              <span className="hidden sm:inline-block font-mono text-xs text-[var(--text-muted)]">
                AI &amp; SECURITY ARCHITECTURE
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-muted)] tracking-wider">
              <span className="text-[var(--text-primary)] font-bold">
                PROJECT {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                <span>SCROLL HORIZONTALLY</span>
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
                transition: "transform 0.04s ease-out",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="shrink-0 w-[88vw] sm:w-[84vw] md:w-[80vw] lg:w-[76vw] max-w-[1180px]"
                >
                  <ProjectCard project={project} isFlagship={index === 0 || project.featured} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Progress Tracker Bar */}
          <div className="w-full flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[var(--accent)]" />
              <span>[ 02 — CINEMATIC GALLERY ]</span>
            </div>

            {/* Visual scrub bar */}
            <div className="hidden sm:flex items-center gap-3">
              <span>EXPLORATION PROGRESS</span>
              <div className="w-40 h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden border border-[var(--border-subtle)]">
                <div
                  className="h-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] transition-all duration-75"
                  style={{ width: `${Math.round(galleryProgress * 100)}%` }}
                />
              </div>
              <span className="text-[var(--text-primary)] font-semibold">
                {Math.round(galleryProgress * 100)}%
              </span>
            </div>

            <span className="text-[var(--text-secondary)]">
              {galleryProgress >= 0.98 ? "COMPLETED ↓ SCROLL FOR BIOGRAPHY" : "CONTINUE SCROLLING"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
