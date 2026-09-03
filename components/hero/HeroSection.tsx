"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";
import { SignatureReveal } from "@/components/signature/SignatureReveal";
import { ArrowDown, Sparkles } from "lucide-react";

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
  const sigProgress = Math.pow(sigDrawingRaw, 1.15);

  // STAGE 4: Hero Receding into Background Depth (0.58 -> 0.86)
  const heroRecedeProgress = Math.max(0, Math.min(1, (scrollProgress - 0.58) / 0.28));
  const heroScale = 1 - heroRecedeProgress * 0.12; // 1.0 -> 0.88
  const heroTranslateY = heroRecedeProgress * 40; // 0 -> 40px
  const heroOpacity = Math.max(0.08, 1 - heroRecedeProgress * 0.90); // 1.0 -> 0.10
  const heroBlur = heroRecedeProgress * 6; // 0 -> 6px
  const scrimOpacity = Math.min(0.94, heroRecedeProgress * 1.15); // 0 -> 0.94

  // STAGE 5: Chapter 01 — The Human Behind the Machine (Staggered Interpolation)
  // 0.62 -> 0.96
  const chapterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.62) / 0.32));
  
  // Staggered reveals for distinct storytelling layers
  const headlineOpacity = Math.min(1, Math.max(0, (chapterProgress - 0.05) / 0.35));
  const headlineTranslateY = (1 - Math.pow(Math.min(1, Math.max(0, (chapterProgress - 0.05) / 0.35)), 0.75)) * 25;

  const narrativeOpacity = Math.min(1, Math.max(0, (chapterProgress - 0.18) / 0.40));
  const narrativeTranslateY = (1 - Math.pow(Math.min(1, Math.max(0, (chapterProgress - 0.18) / 0.40)), 0.75)) * 20;

  const metadataOpacity = Math.min(1, Math.max(0, (chapterProgress - 0.28) / 0.45));
  const metadataTranslateY = (1 - Math.pow(Math.min(1, Math.max(0, (chapterProgress - 0.28) / 0.45)), 0.75)) * 20;

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
            <div className="absolute inset-0 flex items-center justify-center -mt-12 sm:-mt-16 md:-mt-20 pointer-events-none overflow-visible">
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
        {/* LAYER 4: ATMOSPHERIC DIMMING SCRIM (Ensures 100% Foreground Contrast)     */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-25 pointer-events-none bg-gradient-to-b from-[rgba(7,6,11,0.6)] via-[rgba(7,6,11,0.92)] to-[var(--bg-primary)]"
          style={{
            opacity: scrimOpacity,
          }}
        />

        {/* ========================================================================= */}
        {/* LAYER 5: CHAPTER 01 — THE HUMAN BEHIND THE MACHINE                        */}
        {/* Spacious, Editorial, Personal Narrative with Zero Boxed UI Clutter        */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-30 flex flex-col justify-center items-center px-6 sm:px-10 md:px-14 lg:px-16 max-w-7xl mx-auto pt-20 pb-20 pointer-events-none"
          style={{
            pointerEvents: chapterProgress > 0.4 ? "auto" : "none",
          }}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto">
            
            {/* LEFT SIDE: PRIMARY EDITORIAL STORY (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5">
              
              {/* Chapter Eyebrow Tag + Evolution Arc */}
              <div
                className="flex flex-wrap items-center justify-between gap-3 transition-transform will-change-transform"
                style={{
                  opacity: headlineOpacity,
                  transform: `translate3d(0, ${headlineTranslateY * 0.5}px, 0)`,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
                    CHAPTER 01 — THE HUMAN BEHIND THE MACHINE
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#77778A]">
                  <span className="text-[#D4D4E2]">CURIOSITY</span>
                  <span className="text-[var(--accent)]">→</span>
                  <span className="text-[#D4D4E2]">BUILDER</span>
                  <span className="text-[var(--accent)]">→</span>
                  <span className="text-[var(--accent)] font-semibold">SYSTEMS</span>
                </div>
              </div>

              {/* Editorial Headline in 2 Clean Lines with Breathing Room */}
              <div
                className="transition-transform will-change-transform"
                style={{
                  opacity: headlineOpacity,
                  transform: `translate3d(0, ${headlineTranslateY}px, 0)`,
                }}
              >
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold uppercase tracking-tight text-[#F5F5F7] leading-[1.02]">
                  BEHIND EVERY SYSTEM <br className="hidden sm:inline" />
                  IS A <span className="text-[var(--accent)]">QUESTION.</span>
                </h2>
              </div>

              {/* Personal Human Narrative */}
              <div
                className="space-y-3.5 text-sm sm:text-base md:text-[17px] text-[#A6A6B8] leading-relaxed font-body max-w-xl transition-transform will-change-transform"
                style={{
                  opacity: narrativeOpacity,
                  transform: `translate3d(0, ${narrativeTranslateY}px, 0)`,
                }}
              >
                <p>
                  I&apos;m <strong className="text-[#F5F5F7] font-semibold">{siteConfig.name}</strong> — a developer, builder, and engineering student driven by an insatiable curiosity about how technology works and how ideas become real systems.
                </p>
                <p>
                  For me, engineering is an act of translation. It begins with observing human friction, asking foundational questions, and building with rigor — from intelligent AI architectures and system security research to fluid digital products that feel effortless and alive.
                </p>
              </div>

              {/* Mobile-only Evolution Arc */}
              <div
                className="sm:hidden pt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#77778A]"
                style={{ opacity: narrativeOpacity }}
              >
                <span className="text-[#D4D4E2]">CURIOSITY</span>
                <span className="text-[var(--accent)]">→</span>
                <span className="text-[#D4D4E2]">BUILDER</span>
                <span className="text-[var(--accent)]">→</span>
                <span className="text-[var(--accent)] font-semibold">SYSTEMS</span>
              </div>
            </div>

            {/* RIGHT SIDE: EDITORIAL IDENTITY SIGNALS (5 cols — NO BOXED CARDS) */}
            <div
              className="lg:col-span-5 flex flex-col space-y-3.5 sm:space-y-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/[0.08] transition-transform will-change-transform"
              style={{
                opacity: metadataOpacity,
                transform: `translate3d(0, ${metadataTranslateY}px, 0)`,
              }}
            >
              {/* 01 / ORIGIN */}
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#66667A] block font-semibold">
                  01 / ORIGIN
                </span>
                <p className="font-heading font-medium text-base sm:text-lg text-[#EDEDF2]">
                  {siteConfig.location.city}, {siteConfig.location.country}
                </p>
                <p className="font-mono text-[11px] text-[#808095]">
                  Operating globally across digital environments
                </p>
              </div>

              {/* Hairline Divider */}
              <div className="h-px w-full bg-white/[0.08]" />

              {/* 02 / CURRENT FOCUS */}
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#66667A] block font-semibold">
                  02 / CURRENT FOCUS
                </span>
                <p className="font-heading font-medium text-sm sm:text-base text-[#EDEDF2] leading-snug">
                  Software Architecture • AI Systems • Product Engineering
                </p>
                <p className="font-mono text-[11px] text-[#808095]">
                  Translating ambiguous problems into fast, resilient software
                </p>
              </div>

              {/* Hairline Divider */}
              <div className="h-px w-full bg-white/[0.08]" />

              {/* 03 / EDUCATION */}
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#66667A] block font-semibold">
                  03 / EDUCATION
                </span>
                <p className="font-heading font-medium text-sm sm:text-base text-[#EDEDF2] leading-snug">
                  {siteConfig.education.degree}
                </p>
                <p className="text-xs sm:text-sm text-[#A6A6B8]">
                  {siteConfig.education.specialization}
                </p>
                <div className="flex items-center gap-2 pt-0.5 font-mono text-[11px]">
                  <span className="text-[var(--accent)] font-semibold">
                    {siteConfig.education.institution}
                  </span>
                  <span className="text-[#555566]">•</span>
                  <span className="text-[#808095]">{siteConfig.education.period}</span>
                </div>
              </div>

              {/* Hairline Divider */}
              <div className="h-px w-full bg-white/[0.08]" />

              {/* 04 / OPERATING PRINCIPLE */}
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#66667A] block font-semibold">
                  04 / OPERATING PRINCIPLE
                </span>
                <p className="font-heading font-medium text-sm sm:text-base text-[var(--accent)]">
                  Curiosity → Experimentation → Execution
                </p>
                <p className="font-mono text-[11px] text-[#808095]">
                  Observe first, architect cleanly, refine through human feedback
                </p>
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
                  : "[ CHAPTER 01 — THE HUMAN BEHIND THE MACHINE ]"}
              </span>
              <span className="hidden sm:inline text-xs text-[var(--text-muted)]">
                {scrollProgress < 0.55
                  ? "SCROLL TO DRAW SIGNATURE"
                  : scrollProgress < 0.85
                  ? "SCROLL FOR PERSONAL STORY"
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
