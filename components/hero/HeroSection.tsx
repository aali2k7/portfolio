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

  // -------------------------------------------------------------
  // CHOREOGRAPHY TIMELINE CALCULATIONS (0.0 -> 1.0)
  // -------------------------------------------------------------

  // Phase 1 -> 2: Text Fade Out (0.12 -> 0.32)
  const textFadeProgress = Math.max(0, Math.min(1, (scrollProgress - 0.10) / 0.22));
  const textOpacity = Math.max(0, 1 - textFadeProgress);
  const textTranslateY = -textFadeProgress * 36;
  const textBlur = textFadeProgress * 3;

  // Phase 2 -> 3: Portrait Shift to Center & Fade (0.15 -> 0.55)
  const portraitCenterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.12) / 0.28));
  const portraitFadeProgress = Math.max(0, Math.min(1, (scrollProgress - 0.32) / 0.22));
  
  // Portrait transform values
  const portraitXOffset = (1 - portraitCenterProgress) * 22; // moves from right +22vw towards center 0
  const portraitScale = 1 - portraitFadeProgress * 0.3;
  const portraitOpacity = Math.max(0, 1 - portraitFadeProgress * 1.2);
  const portraitGrayscale = Math.min(100, portraitFadeProgress * 120);

  // Phase 3 -> 4: Signature Emergence & Massive Takeover (0.35 -> 0.75)
  const sigEmergeProgress = Math.max(0, Math.min(1, (scrollProgress - 0.35) / 0.20));
  const sigDominanceProgress = Math.max(0, Math.min(1, (scrollProgress - 0.52) / 0.22));
  
  const signatureOpacity = Math.min(1, sigEmergeProgress * 1.5);
  // Signature scale: from 0.6 -> 1.0 (emerge), then 1.0 -> 2.4 (takeover)
  const signatureScale = 0.6 + sigEmergeProgress * 0.4 + sigDominanceProgress * 1.4;

  // Phase 5: Screen Split Transition (0.75 -> 1.00)
  const splitProgressRaw = Math.max(0, Math.min(1, (scrollProgress - 0.74) / 0.24));
  // Smooth cubic acceleration for split
  const splitEased = Math.pow(splitProgressRaw, 1.4);
  const splitTranslateX = splitEased * 105; // moves from 0% to 105% offscreen

  // Revealed Layer Underneath Split Panels (0.74 -> 1.00)
  const revealProgress = Math.max(0, Math.min(1, (scrollProgress - 0.74) / 0.26));
  const revealScale = 0.94 + revealProgress * 0.06;
  const revealTranslateY = (1 - revealProgress) * 40;
  const revealOpacity = Math.min(1, revealProgress * 1.8);

  return (
    <div
      id="hero"
      ref={trackRef}
      className="relative w-full h-[380vh] bg-[var(--bg-primary)] select-none"
    >
      {/* Pinned Sticky Viewport (100vh / 100dvh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--bg-primary)]">
        
        {/* ========================================================================= */}
        {/* LAYER 0: UNDERLYING REVEALED CONTENT (Visible as Screen Splits)           */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-0 flex flex-col justify-center items-center px-6 md:px-16 text-center pointer-events-none"
          style={{
            transform: `scale(${revealScale}) translateY(${revealTranslateY}px)`,
            opacity: revealOpacity,
          }}
        >
          {/* Subtle background for reveal */}
          <div className="absolute inset-0 bg-[var(--bg-primary)] opacity-95" />
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                CHAPTER 02 — THE PHILOSOPHY
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] leading-[0.92]">
              THE BEST SOLUTIONS
              <span className="block text-[var(--accent)] mt-2">DON&apos;T START WITH CODE.</span>
              <span className="block text-[var(--text-secondary)] text-2xl sm:text-4xl md:text-5xl mt-4 font-heading font-semibold">
                THEY START WITH A QUESTION.
              </span>
            </h2>

            <p className="mt-8 font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">
              ↓ ENTERING PORTFOLIO EXPERIENCE
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SPLIT SCREEN CONTAINER (LEFT HALF & RIGHT HALF PANELS)                     */}
        {/* ========================================================================= */}

        {/* --- LEFT SPLIT PANEL (Moves Left during Phase 5) --- */}
        <div
          className="absolute inset-0 z-20 w-full h-full pointer-events-none will-change-transform"
          style={{
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
            transform: `translate3d(-${splitTranslateX}%, 0, 0)`,
          }}
        >
          {/* Background within Left Panel */}
          <HeroBackgroundVideo />

          {/* Left Half Massive Signature Takeover Layer */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: signatureOpacity,
              transform: `scale(${signatureScale})`,
            }}
          >
            <SignatureReveal isMassive progress={sigEmergeProgress} />
          </div>
        </div>

        {/* --- RIGHT SPLIT PANEL (Moves Right during Phase 5) --- */}
        <div
          className="absolute inset-0 z-20 w-full h-full pointer-events-none will-change-transform"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
            transform: `translate3d(${splitTranslateX}%, 0, 0)`,
          }}
        >
          {/* Background within Right Panel */}
          <HeroBackgroundVideo />

          {/* Right Half Massive Signature Takeover Layer */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: signatureOpacity,
              transform: `scale(${signatureScale})`,
            }}
          >
            <SignatureReveal isMassive progress={sigEmergeProgress} />
          </div>
        </div>

        {/* Seam Line Indicator during initial split motion */}
        {splitProgressRaw > 0.02 && splitProgressRaw < 0.98 && (
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[var(--accent)] z-30 pointer-events-none opacity-80"
            style={{
              opacity: 1 - splitProgressRaw,
            }}
          />
        )}

        {/* ========================================================================= */}
        {/* LAYER 1: UNIFIED SCENE (Phases 1 - 3: Two-Column Text + Portrait)         */}
        {/* Fades smoothly out as Signature Takeover and Screen Split take over       */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-30 w-full h-full flex flex-col justify-between pt-24 md:pt-28 pb-8 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1500px] mx-auto pointer-events-none"
          style={{
            opacity: Math.max(0, 1 - sigDominanceProgress * 1.5),
          }}
        >
          {/* Top Eyebrow Bar (Fades with text) */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 transition-transform duration-75"
            style={{
              opacity: textOpacity,
              transform: `translate3d(0, ${textTranslateY * 0.5}px, 0)`,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                PORTFOLIO / 2026 EDITION
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[var(--text-muted)] tracking-wider">
              <span>{siteConfig.location.city.toUpperCase()}, {siteConfig.location.country.toUpperCase()}</span>
              <span>•</span>
              <span className="text-[var(--text-primary)] font-semibold">AVAILABLE FOR AMBITIOUS PROJECTS</span>
            </div>
          </div>

          {/* MAIN TWO-COLUMN HERO STAGING */}
          <div className="relative my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[62vh] md:min-h-[70vh]">
            
            {/* ------------------------------------------------------------- */}
            {/* LEFT COLUMN: Overlapping Massive Editorial Typography (z-20)  */}
            {/* ------------------------------------------------------------- */}
            <div
              className="lg:col-span-7 xl:col-span-8 z-20 flex flex-col justify-center pointer-events-auto"
              style={{
                opacity: textOpacity,
                transform: `translate3d(0, ${textTranslateY}px, 0)`,
                filter: `blur(${textBlur}px)`,
              }}
            >
              {/* Primary Name Headline (Overlaps toward the right photograph) */}
              <h1 className="font-display text-hero-title text-[var(--text-primary)] tracking-tighter uppercase font-extrabold select-none leading-[0.86]">
                AALI
                <span className="block text-[var(--text-primary)] relative">
                  RAHMAN<span className="text-[var(--accent)]">.</span>
                </span>
              </h1>

              {/* Problem-First Positioning Tagline */}
              <div className="mt-6 md:mt-8 max-w-2xl">
                <p className="font-heading text-lg sm:text-2xl md:text-3xl text-[var(--text-primary)] font-semibold leading-tight tracking-tight">
                  I DON&apos;T START WITH CODE.
                  <span className="block text-[var(--accent)]">I START WITH THE PROBLEM.</span>
                </p>
              </div>

              {/* Supporting Metadata & Pillars */}
              <div className="mt-6 md:mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] sm:text-xs text-[var(--text-secondary)] font-medium">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[var(--accent)]" />
                  <span>FULL-STACK ARCHITECTURE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" />
                  <span>AI &amp; PRODUCT ENGINEERING</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" />
                  <span>SYSTEM SECURITY RESEARCH</span>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Dominant Portrait Staging (z-10)                */}
            {/* ------------------------------------------------------------- */}
            <div
              className="lg:col-span-5 xl:col-span-4 z-10 flex justify-center lg:justify-end will-change-transform pointer-events-none"
              style={{
                transform: `translate3d(${portraitXOffset}vw, 0, 0) scale(${portraitScale})`,
                opacity: portraitOpacity,
                filter: `grayscale(${portraitGrayscale}%)`,
              }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-[rgba(10,10,10,0.08)] bg-[#EFEFEA]">
                {/* Portrait Photo */}
                <Image
                  src="/images/portrait.jpg"
                  alt={`${siteConfig.name} — Professional Portrait`}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 48vw, 550px"
                  className="object-cover object-top"
                />

                {/* Subtle internal vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.45)] via-transparent to-transparent" />

                {/* Bottom tag on portrait */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#F4F4F0] font-mono text-[11px] tracking-widest uppercase">
                  <span className="font-semibold">{siteConfig.name}</span>
                  <span className="text-[var(--accent)] font-bold">2026</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Scroll Cue */}
          <div
            className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]"
            style={{
              opacity: textOpacity,
              transform: `translate3d(0, ${textTranslateY * 0.5}px, 0)`,
            }}
          >
            <span>[ 01 — IDENTITY TRANSFORMATION ]</span>
            <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--accent)]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
