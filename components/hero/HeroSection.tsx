"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";
import { SignatureReveal } from "@/components/signature/SignatureReveal";
import { ArrowDown, Sparkles, MapPin, GraduationCap, Cpu } from "lucide-react";

export function HeroSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Tracking inside pinned container
  useEffect(() => {
    const handleScroll = () => {
      const el = trackRef.current;
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

  // STAGE 1 & 2: Scroll-Driven Signature Drawing (0.10 -> 0.54)
  const sigDrawingRaw = Math.max(0, Math.min(1, (scrollProgress - 0.10) / 0.44));
  // Smooth cubic ease for natural drawing progression
  const sigProgress = Math.pow(sigDrawingRaw, 1.15);

  // STAGE 4: Hero Receding into Background Depth (0.58 -> 0.86)
  const heroRecedeProgress = Math.max(0, Math.min(1, (scrollProgress - 0.58) / 0.28));
  const heroScale = 1 - heroRecedeProgress * 0.12; // 1.0 -> 0.88
  const heroTranslateY = heroRecedeProgress * 40; // 0 -> 40px
  const heroOpacity = Math.max(0.12, 1 - heroRecedeProgress * 0.84); // 1.0 -> 0.16
  const heroBlur = heroRecedeProgress * 6; // 0 -> 6px
  const scrimOpacity = Math.min(0.9, heroRecedeProgress * 1.1); // 0 -> 0.90

  // STAGE 5: Personal Details Emerge in Foreground (0.64 -> 0.96)
  const detailsProgress = Math.max(0, Math.min(1, (scrollProgress - 0.64) / 0.30));
  const detailsOpacity = Math.min(1, detailsProgress * 1.3);
  const detailsTranslateY = (1 - Math.pow(detailsProgress, 0.75)) * 60; // 60px -> 0px

  // Top Eyebrow Bar Fade (0.50 -> 0.70)
  const topEyebrowOpacity = Math.max(0, 1 - (scrollProgress - 0.50) / 0.20);

  // Background Typography Parallax Shift
  const topTextScrollShift = -scrollProgress * 80;
  const bottomTextScrollShift = scrollProgress * 80;

  return (
    <div
      id="hero"
      ref={trackRef}
      className="relative w-full h-[400vh] bg-[var(--bg-primary)] select-none overflow-x-clip"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--bg-primary)] flex flex-col justify-between">
        
        {/* ========================================================================= */}
        {/* LAYER 1: DEEP NAVY / PURPLE ATMOSPHERE & GENERATIVE ORGANIC CONTOUR       */}
        {/* ========================================================================= */}
        <HeroBackgroundVideo />

        {/* Deep ambient center glow */}
        <div className="absolute inset-0 pointer-events-none ambient-glow-purple z-0" />
        <div className="absolute inset-0 pointer-events-none ambient-glow-neon opacity-40 z-0" />

        {/* ========================================================================= */}
        {/* LAYER 2: CONTINUOUS INFINITE MOVING MARQUEE TYPOGRAPHY (BEHIND PORTRAIT)  */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none overflow-hidden select-none will-change-transform gap-1 sm:gap-2 md:gap-3"
          style={{
            opacity: heroOpacity * 0.9,
            filter: `blur(${heroBlur * 0.6}px)`,
          }}
        >
          {/* ROW 1: Moves Continuously Right-to-Left (Infinite Marquee) */}
          <div
            className="w-full overflow-hidden whitespace-nowrap will-change-transform"
            style={{
              transform: `translate3d(${topTextScrollShift}px, 0, 0)`,
            }}
          >
            <div className="animate-marquee-left-slow flex items-center">
              {[...Array(4)].map((_, i) => (
                <span
                  key={`r1-${i}`}
                  className="font-display font-black text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7vw] leading-[0.82] tracking-tighter uppercase text-[#F5F5F7] opacity-90 drop-shadow-2xl mr-8 shrink-0"
                >
                  THE BEST SOLUTIONS DON&apos;T START WITH CODE. —
                </span>
              ))}
            </div>
          </div>

          {/* ROW 2: Moves Continuously Left-to-Right (Infinite Marquee Opposite Direction) */}
          <div
            className="w-full overflow-hidden whitespace-nowrap will-change-transform"
            style={{
              transform: `translate3d(${-topTextScrollShift * 0.5}px, 0, 0)`,
            }}
          >
            <div className="animate-marquee-right-slow flex items-center">
              {[...Array(4)].map((_, i) => (
                <span
                  key={`r2-${i}`}
                  className="font-display font-black text-[10.5vw] sm:text-[9vw] md:text-[7.6vw] lg:text-[6.6vw] leading-[0.82] tracking-tighter uppercase text-[#D4D4E2] opacity-80 mr-8 shrink-0"
                >
                  THEY START WITH A QUESTION. —
                </span>
              ))}
            </div>
          </div>

          {/* ROW 3: Moves Continuously Right-to-Left at Medium Velocity (Layered Depth) */}
          <div
            className="w-full overflow-hidden whitespace-nowrap will-change-transform"
            style={{
              transform: `translate3d(${bottomTextScrollShift}px, 0, 0)`,
            }}
          >
            <div className="animate-marquee-left-medium flex items-center">
              {[...Array(4)].map((_, i) => (
                <span
                  key={`r3-${i}`}
                  className="font-display font-black text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7vw] leading-[0.82] tracking-tighter uppercase text-[#A3A3B8] opacity-70 mr-8 shrink-0"
                >
                  PROBLEM-FIRST ARCHITECTURE — AALI RAHMAN —
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 3: CINEMATIC HERO SUBJECT (PORTRAIT + SCROLL-DRIVEN SIGNATURE)      */}
        {/* Recedes into depth during Stage 4 as user scrolls                         */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-20 flex flex-col justify-end items-center pointer-events-none will-change-transform"
          style={{
            transform: `scale(${heroScale}) translate3d(0, ${heroTranslateY}px, 0)`,
            opacity: heroOpacity,
            filter: `blur(${heroBlur}px)`,
            transformOrigin: "center 70%",
          }}
        >
          {/* Portrait Container with feathered base & sides */}
          <div className="relative w-[340px] sm:w-[440px] md:w-[540px] lg:w-[620px] h-[68vh] sm:h-[76vh] md:h-[84vh] max-h-[920px] flex items-end justify-center">
            <Image
              src="/images/portrait-cinematic.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 620px"
              className="object-contain object-bottom select-none"
            />

            {/* Bottom seamless shadow feathering into dark background */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(7,6,11,0.85)] to-transparent pointer-events-none" />

            {/* Signature Overlay (Tied directly to scroll progress) */}
            <div className="absolute inset-0 flex items-center justify-center -mt-16 sm:-mt-20 md:-mt-28 pointer-events-none">
              <SignatureReveal
                progress={sigProgress}
                isMassive
                glow
                className="drop-shadow-[0_0_24px_rgba(90,255,21,0.45)]"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 4: ATMOSPHERIC DIMMING SCRIM (Fades in over receding hero)          */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-25 pointer-events-none bg-gradient-to-b from-transparent via-[rgba(7,6,11,0.6)] to-[var(--bg-primary)]"
          style={{
            opacity: scrimOpacity,
          }}
        />

        {/* ========================================================================= */}
        {/* LAYER 5: FOREGROUND PERSONAL DETAILS & SPECIFICATIONS (Stage 5 Emergence)  */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-30 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pointer-events-none"
          style={{
            opacity: detailsOpacity,
            transform: `translate3d(0, ${detailsTranslateY}px, 0)`,
            pointerEvents: detailsProgress > 0.5 ? "auto" : "none",
          }}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
            
            {/* Left Column: Narrative Storytelling & Problem-First Philosophy */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">
                  CHAPTER 01 — THE HUMAN ARCHITECT
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-[var(--text-primary)] leading-[0.92] tracking-tight">
                I DON&apos;T START WITH CODE.
                <span className="block text-[var(--accent)] mt-2">
                  I START WITH THE PROBLEM.
                </span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-body">
                <p>
                  I am <strong className="text-[var(--text-primary)] font-semibold">{siteConfig.name}</strong>, a full-stack engineer and product builder driven by understanding the human friction before writing technical architecture.
                </p>
                <p>
                  Once the problem space is sharp, I engineer fast, resilient, and beautiful digital systems that solve it completely. Whether architecting AI intelligence engines or publishing security research, technology is my precision tool.
                </p>
              </div>

              {/* Pillars */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  FULL-STACK ARCHITECTURE
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  AI &amp; PRODUCT ENGINEERING
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  SYSTEM SECURITY RESEARCH
                </span>
              </div>
            </div>

            {/* Right Column: Structured Credentials & Fact Sheet */}
            <div className="lg:col-span-5 flex flex-col gap-5 bg-[var(--bg-card)]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] shadow-2xl">
              <div className="flex items-center gap-2 pb-4 border-b border-[var(--border-subtle)]">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-primary)] font-bold">
                  PROFILE SPECIFICATIONS
                </h3>
              </div>

              <div className="space-y-4 text-sm font-body">
                {/* Identity */}
                <div className="flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-[var(--accent)] mt-1 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-[var(--text-muted)] uppercase">Role</p>
                    <p className="font-heading font-semibold text-[var(--text-primary)] text-sm sm:text-base">
                      Full-Stack Developer • Product Builder • Security Researcher
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--accent)] mt-1 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-[var(--text-muted)] uppercase">Location</p>
                    <p className="font-heading font-semibold text-[var(--text-primary)] text-sm sm:text-base">
                      {siteConfig.location.city}, {siteConfig.location.country}
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[var(--accent)] mt-1 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-[var(--text-muted)] uppercase">Education</p>
                    <p className="font-heading font-semibold text-[var(--text-primary)] text-sm sm:text-base">
                      {siteConfig.education.institution}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                      {siteConfig.education.degree} ({siteConfig.education.specialization})
                    </p>
                    <p className="font-mono text-xs text-[var(--accent)] mt-0.5 font-bold">
                      {siteConfig.education.period}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* FOREGROUND TOP EYEBROW & BOTTOM SCROLL CUE                                */}
        {/* ========================================================================= */}
        <div className="relative z-40 w-full flex flex-col justify-between h-full pt-20 md:pt-24 pb-6 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pointer-events-none">
          {/* Top Eyebrow Status Bar */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 transition-opacity duration-300"
            style={{ opacity: topEyebrowOpacity }}
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_10px_var(--accent)]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                IDENTITY &amp; PHILOSOPHY / 2026
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[var(--text-muted)] tracking-wider">
              <span>{siteConfig.location.city.toUpperCase()}, {siteConfig.location.country.toUpperCase()}</span>
              <span>•</span>
              <span className="text-[var(--text-primary)] font-semibold">AVAILABLE FOR AMBITIOUS WORK</span>
            </div>
          </div>

          {/* Bottom Interactive Scroll Prompt */}
          <div className="flex items-end justify-between pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
            <div className="flex flex-col gap-1">
              <span className="text-[var(--text-primary)] font-bold">
                {scrollProgress < 0.55
                  ? "[ STAGE 01 — SIGN THE SCREEN ]"
                  : scrollProgress < 0.85
                  ? "[ STAGE 02 — HERO RECEDING ]"
                  : "[ STAGE 03 — PERSONAL PROFILE ]"}
              </span>
              <span className="hidden sm:inline text-xs text-[var(--text-muted)]">
                {scrollProgress < 0.55
                  ? "SCROLL TO DRAW SIGNATURE"
                  : scrollProgress < 0.85
                  ? "SCROLL FOR BIOGRAPHY & SPECIFICATIONS"
                  : "CONTINUE SCROLLING FOR SELECTED WORK"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>
                {scrollProgress < 0.85 ? "SCROLL DOWN" : "SCROLL TO PROJECTS"}
              </span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--accent)]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
