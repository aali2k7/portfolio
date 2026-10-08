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
  //
  // 0.00 -> 0.15 : Opening title sequence (dark, typography moving, portrait anchored)
  // 0.15 -> 0.65 : Signature drawing builds progressively; ambient green aura rises
  // 0.65 -> 0.78 : Climax hold (signature fully drawn, peak green glow, visual intensity)
  // 0.78 -> 1.00 : Cinematic Flashbang overexposure transition settling into #F4F1E9
  // ---------------------------------------------------------------------------

  // Signature drawing progress (0.12 -> 0.64)
  const sigDrawingRaw = Math.max(0, Math.min(1, (scrollProgress - 0.12) / 0.52));
  const sigProgress = Math.pow(sigDrawingRaw, 1.15);

  // Green ambient intensity (rises from 0.15 -> peaks at 0.65-0.78)
  const isClimaxHold = scrollProgress >= 0.65 && scrollProgress < 0.78;
  const greenGlowPeak =
    scrollProgress < 0.15
      ? 0.15
      : scrollProgress < 0.65
      ? 0.15 + ((scrollProgress - 0.15) / 0.50) * 0.75 // 0.15 -> 0.90
      : isClimaxHold
      ? 1.0 // peak intensity hold
      : Math.max(0, 1.0 - (scrollProgress - 0.78) / 0.12); // dissolves into white bloom

  // Marquee typography parallax shift
  const topTextScrollShift = -scrollProgress * 90;
  const bottomTextScrollShift = scrollProgress * 90;

  // ---------------------------------------------------------------------------
  // THE FLASHBANG / OVEREXPOSURE TRANSITION (0.76 -> 1.00)
  // ---------------------------------------------------------------------------
  const flashProgress = Math.max(0, Math.min(1, (scrollProgress - 0.76) / 0.24));

  // Dark world fade out (washes out into overexposure by flashProgress ~0.55 / scrollProgress ~0.89)
  const darkWorldOpacity = Math.max(0, 1 - Math.pow(flashProgress, 1.4) * 2.0);

  // Blur on dark world during overexposure bloom
  const flashBlur = flashProgress * 12;

  // Expanding bloom aura: scale 1 -> 3.8
  const bloomScale = 1 + Math.pow(flashProgress, 1.3) * 2.8;

  // Bloom intensity: peaks early (flashProgress 0.15 -> 0.45), then washes out into warm ivory
  const bloomOpacity =
    flashProgress <= 0
      ? 0
      : flashProgress < 0.35
      ? flashProgress / 0.35 // 0 -> 1.0
      : Math.max(0, 1 - (flashProgress - 0.35) / 0.55); // dissolves into solid warm ivory

  // Final Warm Ivory settling background (#F4F1E9):
  // Starts emerging under the bloom and settles into 100% solid warm off-white at the bottom
  const ivoryOpacity = Math.min(1, Math.max(0, (flashProgress - 0.15) / 0.75));

  // Top and bottom HUD bars fade out as transition starts
  const hudOpacity = Math.max(0, 1 - (scrollProgress - 0.70) / 0.10);

  return (
    <div
      id="hero"
      ref={trackRef}
      className="relative w-full h-[380vh] bg-[var(--bg-primary)] select-none overflow-x-clip"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--bg-primary)] flex flex-col justify-between">

        {/* ========================================================================= */}
        {/* WORLD 01: CINEMATIC DARK HERO LAYER                                       */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-10 pointer-events-none will-change-transform"
          style={{
            opacity: darkWorldOpacity,
            filter: flashBlur > 0.5 ? `blur(${flashBlur}px)` : "none",
          }}
        >
          {/* LAYER 1: DEEP NAVY / PURPLE ATMOSPHERE & GENERATIVE ORGANIC CONTOUR */}
          <HeroBackgroundVideo />

          {/* Deep ambient center glow */}
          <div className="absolute inset-0 ambient-glow-purple z-0" />

          {/* Dynamic Green Climax Radial Aura (Peaks as signature completes) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(55% 50% at 50% 60%, rgba(90, 255, 21, ${
                greenGlowPeak * 0.35
              }) 0%, rgba(90, 255, 21, ${greenGlowPeak * 0.08}) 50%, transparent 100%)`,
            }}
          />

          {/* LAYER 2: CONTINUOUS INFINITE MOVING MARQUEE TYPOGRAPHY (BEHIND PORTRAIT) */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none overflow-hidden select-none will-change-transform gap-1 sm:gap-2 md:gap-3 opacity-90">
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

          {/* LAYER 3: CINEMATIC HERO SUBJECT (PORTRAIT + SCROLL-DRIVEN SIGNATURE) */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pointer-events-none will-change-transform">
            {/* Portrait Container with feathered base */}
            <div className="relative w-[340px] sm:w-[440px] md:w-[540px] lg:w-[620px] h-[68vh] sm:h-[76vh] md:h-[84vh] max-h-[920px] flex items-end justify-center">
              <Image
                src="/images/portrait-isolated.png"
                alt={siteConfig.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 620px"
                className="object-contain object-bottom select-none"
              />

              {/* Bottom seamless shadow feathering into dark background */}
              <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(7,6,11,0.85)] to-transparent pointer-events-none" />

              {/* Signature Overlay (Tied directly to scroll progress) */}
              <div
                className="absolute inset-0 flex items-center justify-center -mt-12 sm:-mt-16 md:-mt-20 pointer-events-none overflow-visible will-change-transform"
                style={{
                  filter: isClimaxHold
                    ? "drop-shadow(0 0 35px rgba(90,255,21,0.95)) drop-shadow(0 0 70px rgba(90,255,21,0.5))"
                    : greenGlowPeak > 0.4
                    ? `drop-shadow(0 0 ${20 + greenGlowPeak * 15}px rgba(90,255,21,${greenGlowPeak * 0.8}))`
                    : "drop-shadow(0 0 15px rgba(90,255,21,0.3))",
                }}
              >
                <SignatureReveal
                  progress={sigProgress}
                  isMassive
                  glow
                  className="transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE FLASHBANG OVEREXPOSURE TRANSITION (ACT I CLIMAX -> WORLD 02)          */}
        {/* ========================================================================= */}

        {/* Bloom Flare Layer (Radiant Green/White expansion) */}
        <div
          className="absolute inset-0 z-30 pointer-events-none will-change-transform"
          style={{
            opacity: bloomOpacity,
            transform: `scale(${bloomScale})`,
            transformOrigin: "center 60%",
            background:
              "radial-gradient(circle at 50% 60%, rgba(255, 255, 255, 1) 0%, rgba(235, 255, 220, 0.95) 25%, rgba(90, 255, 21, 0.75) 50%, rgba(244, 241, 233, 0.9) 80%, transparent 100%)",
            filter: "blur(24px)",
          }}
          aria-hidden="true"
        />

        {/* Blinding White Exposure Layer */}
        <div
          className="absolute inset-0 z-35 pointer-events-none transition-opacity will-change-transform"
          style={{
            opacity: flashProgress > 0 ? Math.min(1, flashProgress * 2.2) : 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(254, 252, 246, 0.98) 60%, rgba(244, 241, 233, 0.95) 100%)",
            filter: flashProgress > 0 && flashProgress < 0.7 ? "brightness(1.4)" : "none",
          }}
          aria-hidden="true"
        />

        {/* Settling Warm Ivory Layer (#F4F1E9): Becomes 100% solid, welcoming World 02 */}
        <div
          className="absolute inset-0 z-40 pointer-events-none will-change-opacity"
          style={{
            opacity: ivoryOpacity,
            backgroundColor: "#F4F1E9",
          }}
          aria-hidden="true"
        >
          {/* Subtle noise grain texture on warm ivory */}
          <div className="absolute inset-0 bg-grain opacity-25 mix-blend-multiply pointer-events-none" />

          {/* Soft vignette for warm editorial depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, transparent 40%, rgba(228, 222, 208, 0.4) 100%)",
            }}
          />
        </div>

        {/* ========================================================================= */}
        {/* FOREGROUND STATUS BARS (HUD)                                              */}
        {/* ========================================================================= */}
        <div
          className="relative z-50 w-full flex flex-col justify-between h-full pt-20 md:pt-24 pb-6 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pointer-events-none transition-opacity duration-300"
          style={{ opacity: hudOpacity }}
        >
          {/* Top Eyebrow Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
            <div className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isClimaxHold
                    ? "bg-[var(--accent)] shadow-[0_0_16px_var(--accent)] scale-125"
                    : "bg-[var(--accent)] animate-pulse shadow-[0_0_10px_var(--accent)]"
                }`}
              />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                {isClimaxHold
                  ? "CLIMAX REACHED // ACT I CONCLUDED"
                  : "IDENTITY & PHILOSOPHY / 2026"}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[var(--text-muted)] tracking-wider">
              <span>
                {siteConfig.location.city.toUpperCase()},{" "}
                {siteConfig.location.country.toUpperCase()}
              </span>
              <span>•</span>
              <span className="text-[var(--text-primary)] font-semibold">
                {isClimaxHold ? "PREPARING CUT TO WHITE" : "AVAILABLE FOR AMBITIOUS WORK"}
              </span>
            </div>
          </div>

          {/* Bottom Interactive Scroll Prompt */}
          <div className="flex items-end justify-between pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
            <div className="flex flex-col gap-1">
              <span className="text-[var(--text-primary)] font-bold">
                {scrollProgress < 0.65
                  ? `[ STAGE 01 — SIGN THE SCREEN (${Math.round(sigProgress * 100)}%) ]`
                  : isClimaxHold
                  ? "[ CLIMAX // SIGNATURE SEALED ]"
                  : "[ THE THRESHOLD // FLASH TO WHITE ]"}
              </span>
              <span className="hidden sm:inline text-xs text-[var(--text-muted)]">
                {scrollProgress < 0.65
                  ? "SCROLL TO DRAW SIGNATURE"
                  : isClimaxHold
                  ? "SCROLL TO TRIGGER OVEREXPOSURE TRANSITION"
                  : "ENTERING WORLD 02 — EDITORIAL PUBLICATION"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>
                {scrollProgress < 0.78 ? "SCROLL DOWN" : "CONTINUE SCROLLING"}
              </span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--accent)]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
