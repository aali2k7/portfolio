"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";
import { SignatureReveal } from "@/components/signature/SignatureReveal";
import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse Parallax Offsets (Normalized -1 to 1)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });

  // Scroll Inertia & Velocity Tracking
  const [scrollInertia, setScrollInertia] = useState({ y: 0, rotate: 0 });
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const scrollVelocityRef = useRef(0);

  // Smooth RAF loop for mouse lerp & scroll inertia decay
  useEffect(() => {
    let animId: number;

    const tick = () => {
      // Mouse lerp (0.08 smoothing factor)
      currentMouseRef.current.x += (targetMouseRef.current.x - currentMouseRef.current.x) * 0.08;
      currentMouseRef.current.y += (targetMouseRef.current.y - currentMouseRef.current.y) * 0.08;
      setMouseOffset({
        x: currentMouseRef.current.x,
        y: currentMouseRef.current.y,
      });

      // Scroll velocity decay (0.92 damping)
      scrollVelocityRef.current *= 0.92;
      if (Math.abs(scrollVelocityRef.current) < 0.01) {
        scrollVelocityRef.current = 0;
      }
      setScrollInertia({
        y: Math.max(-25, Math.min(25, -scrollVelocityRef.current * 18)),
        rotate: Math.max(-3, Math.min(3, scrollVelocityRef.current * 2.2)),
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Mouse Move Listener for Desktop Parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width < 768) return; // Disable intense mouse parallax on touch devices

    const normX = (e.clientX - width / 2) / (width / 2); // -1 to 1
    const normY = (e.clientY - height / 2) / (height / 2); // -1 to 1
    targetMouseRef.current = { x: normX, y: normY };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Scroll Progress & Velocity Tracking
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

      // Calculate instantaneous scroll velocity
      const now = performance.now();
      const dt = Math.max(1, now - lastScrollTimeRef.current);
      const dy = window.scrollY - lastScrollYRef.current;
      const velocity = dy / dt; // pixels per ms

      scrollVelocityRef.current = Math.max(-2.5, Math.min(2.5, velocity));
      lastScrollYRef.current = window.scrollY;
      lastScrollTimeRef.current = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------------------------------------------------------------------
  // TIMELINE CALCULATIONS FOR TRANSITION INTO PROJECTS (0.0 -> 1.0)
  // ---------------------------------------------------------------------------

  // Typographic Parallax Shifts (additional layer on top of continuous infinite marquee)
  const topTextScrollShift = -scrollProgress * 90;
  const bottomTextScrollShift = scrollProgress * 90;
  const typoDepthBlur = Math.min(5, Math.max(0, (scrollProgress - 0.5) * 10));
  const typoOpacity = Math.max(0.18, 1 - Math.max(0, scrollProgress - 0.72) * 3.5);

  // Portrait scale & scroll elevation
  const portraitScale = 1 + scrollProgress * 0.08;
  const portraitTranslateY = scrollProgress * 25;
  const portraitOpacity = Math.max(0, 1 - Math.max(0, scrollProgress - 0.78) * 4);

  // Signature transition takeover
  const sigScale = 1 + Math.max(0, scrollProgress - 0.45) * 1.8;
  const sigTranslateX = Math.max(0, scrollProgress - 0.72) * 120;
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
        {/* LAYER 2: CONTINUOUS INFINITE MOVING MARQUEE TYPOGRAPHY (BEHIND PORTRAIT)  */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none overflow-hidden select-none will-change-transform gap-1 sm:gap-2 md:gap-3"
          style={{
            opacity: typoOpacity,
            filter: `blur(${typoDepthBlur}px)`,
            transform: `translate3d(${mouseOffset.x * -16}px, ${mouseOffset.y * -10}px, 0)`,
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
              {/* Duplicated for seamless loop */}
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
              {/* Duplicated for seamless loop */}
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
              {/* Duplicated for seamless loop */}
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
        {/* LAYER 3: CINEMATIC MONOCHROME PORTRAIT (Sits on top of Typography)        */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none pb-0 will-change-transform"
          style={{
            opacity: portraitOpacity,
            transform: `scale(${portraitScale}) translate3d(${mouseOffset.x * 10}px, ${portraitTranslateY + mouseOffset.y * 6}px, 0)`,
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
        {/* LAYER 4: HANDWRITTEN NEON LIME SIGNATURE (Alive, Floating & Responsive)   */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none will-change-transform"
          style={{
            opacity: sigOpacity,
            transform: `translate3d(${sigTranslateX}px, 0, 0) scale(${sigScale})`,
          }}
        >
          {/* Signature overlay positioned across portrait & typography with mouse parallax & scroll inertia */}
          <div className="relative -mt-12 sm:-mt-16 md:-mt-20">
            <SignatureReveal
              isMassive
              glow
              mouseOffset={{
                x: mouseOffset.x * 24,
                y: mouseOffset.y * 16,
              }}
              scrollInertia={scrollInertia}
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
