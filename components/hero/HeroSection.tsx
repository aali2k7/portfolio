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
  // CHOREOGRAPHY TIMELINE CALCULATIONS (0.0 -> 1.0)
  // ---------------------------------------------------------------------------

  // Phase 1 (0.0 -> 0.35): Initial visual impact & signature draw
  // Phase 2 (0.35 -> 0.70): Typographic separation & depth parallax
  // Phase 3 (0.70 -> 1.00): Signature sweep & dimensional activation

  // Parallax shifts for the massive typography behind the portrait
  const topTextShiftX = -scrollProgress * 95; // Top line drifts left
  const bottomTextShiftX = scrollProgress * 95; // Bottom line drifts right
  const typoDepthBlur = Math.min(6, Math.max(0, (scrollProgress - 0.5) * 12));
  const typoOpacity = Math.max(0.2, 1 - Math.max(0, scrollProgress - 0.7) * 3);

  // Portrait scale & subtle elevation
  const portraitScale = 1 + scrollProgress * 0.08;
  const portraitTranslateY = scrollProgress * 25;
  const portraitOpacity = Math.max(0, 1 - Math.max(0, scrollProgress - 0.78) * 4);

  // Signature emergence and takeover
  const sigRevealProgress = Math.min(1, scrollProgress * 2.8 + 0.35);
  const sigScale = 1 + Math.max(0, scrollProgress - 0.45) * 1.8;
  const sigTranslateX = Math.max(0, scrollProgress - 0.72) * 120; // sweeps right on exit
  const sigOpacity = Math.max(0, 1 - Math.max(0, scrollProgress - 0.88) * 8);

  // Foreground UI fade
  const uiOpacity = Math.max(0, 1 - scrollProgress * 2.5);

  return (
    <div
      id="hero"
      ref={trackRef}
      className="relative w-full h-[320vh] bg-[var(--bg-primary)] select-none overflow-x-clip"
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
        {/* LAYER 2: MASSIVE TYPOGRAPHY (GENUINELY BEHIND PORTRAIT & OVERSIZED)        */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none overflow-hidden select-none will-change-transform"
          style={{
            opacity: typoOpacity,
            filter: `blur(${typoDepthBlur}px)`,
          }}
        >
          {/* Top Line 1: Extends beyond left/right edges */}
          <div
            className="w-full flex justify-center whitespace-nowrap will-change-transform"
            style={{
              transform: `translate3d(${topTextShiftX}px, 0, 0)`,
            }}
          >
            <span className="font-display font-black text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] leading-[0.82] tracking-tighter uppercase text-[#F5F5F7] opacity-90 drop-shadow-2xl">
              THE BEST SOLUTIONS
            </span>
          </div>

          {/* Middle Line 2: Heavy bold statement */}
          <div
            className="w-full flex justify-center whitespace-nowrap my-1 md:my-2 will-change-transform"
            style={{
              transform: `translate3d(${-topTextShiftX * 0.6}px, 0, 0)`,
            }}
          >
            <span className="font-display font-black text-[12vw] sm:text-[10vw] md:text-[8.8vw] lg:text-[7.8vw] leading-[0.82] tracking-tighter uppercase text-[#D4D4E2] opacity-80">
              DON&apos;T START WITH CODE.
            </span>
          </div>

          {/* Bottom Line 3: Resolution */}
          <div
            className="w-full flex justify-center whitespace-nowrap will-change-transform"
            style={{
              transform: `translate3d(${bottomTextShiftX}px, 0, 0)`,
            }}
          >
            <span className="font-display font-black text-[13.5vw] sm:text-[11.5vw] md:text-[10vw] lg:text-[9vw] leading-[0.82] tracking-tighter uppercase text-[#A3A3B8] opacity-70">
              THEY START WITH A QUESTION.
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 3: CINEMATIC MONOCHROME PORTRAIT (Sits on top of Typography)        */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none pb-0 will-change-transform"
          style={{
            opacity: portraitOpacity,
            transform: `scale(${portraitScale}) translate3d(0, ${portraitTranslateY}px, 0)`,
          }}
        >
          {/* Portrait Container with feathered base & sides */}
          <div className="relative w-[340px] sm:w-[440px] md:w-[540px] lg:w-[620px] h-[68vh] sm:h-[76vh] md:h-[84vh] max-h-[920px]">
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
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 4: HANDWRITTEN NEON LIME SIGNATURE (Prominently Stamped on Top)      */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none will-change-transform"
          style={{
            opacity: sigOpacity,
            transform: `translate3d(${sigTranslateX}px, 0, 0) scale(${sigScale})`,
          }}
        >
          {/* Signature overlay positioned across portrait & typography */}
          <div className="relative -mt-12 sm:-mt-16 md:-mt-20">
            <SignatureReveal
              progress={sigRevealProgress}
              isMassive
              glow
              className="drop-shadow-[0_0_24px_rgba(90,255,21,0.45)]"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAYER 5: FOREGROUND EDITORIAL MICRO-UI & SCROLL CUES                       */}
        {/* ========================================================================= */}
        <div
          className="relative z-40 w-full flex flex-col justify-between h-full pt-20 md:pt-24 pb-6 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pointer-events-none"
          style={{
            opacity: uiOpacity,
          }}
        >
          {/* Top Eyebrow Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_10px_var(--accent)]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                IDENTITY TRANSFORMATION / 2026
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[var(--text-muted)] tracking-wider">
              <span>{siteConfig.location.city.toUpperCase()}, {siteConfig.location.country.toUpperCase()}</span>
              <span>•</span>
              <span className="text-[var(--text-primary)] font-semibold">ENGINEERING &amp; AI SYSTEMS</span>
            </div>
          </div>

          {/* Bottom Philosophy Cue & Scroll Prompt */}
          <div className="flex items-end justify-between pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
            <div className="flex flex-col gap-1">
              <span className="text-[var(--text-primary)] font-bold">[ PHILOSOPHY CORE ]</span>
              <span className="hidden sm:inline text-xs text-[var(--text-muted)]">
                PROBLEM-FIRST ARCHITECTURE
              </span>
            </div>

            <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>SCROLL TO UNLEASH SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--accent)]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
