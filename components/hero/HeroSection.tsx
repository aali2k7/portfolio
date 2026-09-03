"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/data/siteConfig";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";
import { SignatureReveal } from "@/components/signature/SignatureReveal";
import { ArrowDown, Sparkles, ArrowUpRight, X } from "lucide-react";

type ModuleType = "who" | "build" | "journey" | "currently" | null;

const modules = [
  { id: "who" as const, num: "01", label: "WHO I AM", tag: "IDENTITY // CURIOSITY" },
  { id: "build" as const, num: "02", label: "WHAT I BUILD", tag: "CRAFT // SYSTEMS" },
  { id: "journey" as const, num: "03", label: "MY JOURNEY", tag: "TIMELINE // EVOLUTION" },
  { id: "currently" as const, num: "04", label: "CURRENTLY", tag: "FOCUS // EDUCATION" },
];

export function HeroSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeModule, setActiveModule] = useState<ModuleType>(null);

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

  // Keyboard shortcut: Escape to close active overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModule(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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

  // STAGE 5: Chapter 01 / About — Minimalist Interactive Interface (0.62 -> 0.96)
  const chapterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.62) / 0.32));

  const contentOpacity = Math.min(1, Math.max(0, (chapterProgress - 0.08) / 0.38));
  const contentTranslateY = (1 - Math.pow(Math.min(1, Math.max(0, (chapterProgress - 0.08) / 0.38)), 0.75)) * 25;

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
        {/* LAYER 5: CHAPTER 01 / ABOUT — MINIMALIST INTERACTIVE IDENTITY INTERFACE   */}
        {/* Minimal Initial Screen + 4 Interactive Information Modules                 */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 z-30 flex flex-col justify-center items-center px-6 sm:px-10 md:px-14 lg:px-16 max-w-7xl mx-auto pt-20 pb-20 pointer-events-none"
          style={{
            pointerEvents: chapterProgress > 0.35 ? "auto" : "none",
          }}
        >
          <div
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto transition-transform will-change-transform"
            style={{
              opacity: contentOpacity,
              transform: `translate3d(0, ${contentTranslateY}px, 0)`,
            }}
          >
            {/* LEFT SIDE: MINIMAL PRIMARY IDENTITY STATEMENT (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">

              {/* Chapter Eyebrow Tag */}
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
                  CHAPTER 01 / ABOUT
                </span>
              </div>

              {/* Bold Minimal Identity Heading */}
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#F5F5F7] leading-[0.92]">
                AALI <br />
                RAHMAN<span className="text-[var(--accent)]">.</span>
              </h2>

              {/* Single Core Philosophical Narrative */}
              <p className="font-body text-base sm:text-lg md:text-xl text-[#9E9EAF] max-w-lg leading-relaxed pt-1">
                Building systems, exploring ideas, and figuring out what comes next.
              </p>

              {/* Minimal Invitation Cue */}
              <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#66667A] tracking-wider pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-80" />
                <span>CHOOSE AN AREA TO DISCOVER</span>
              </div>
            </div>

            {/* RIGHT SIDE: 4 INTERACTIVE INFORMATION MODULES (5 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-2 sm:space-y-3 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/[0.08]">
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className="group relative flex items-center justify-between w-full py-4 sm:py-5 border-b border-white/[0.08] text-left cursor-pointer transition-all duration-300 hover:border-[var(--accent)]/50 focus:outline-none"
                  aria-label={`Open information module ${mod.label}`}
                >
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-mono text-xs text-[#66667A] group-hover:text-[var(--accent)] transition-colors duration-200">
                      {mod.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-display text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#EDEDF2] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200">
                        {mod.label}
                      </span>
                      <span className="font-mono text-[10px] text-[#707085] tracking-widest uppercase mt-0.5">
                        {mod.tag}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/[0.1] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/10 flex items-center justify-center transition-all duration-200 shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-[#808095] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* CINEMATIC OVERLAY: IMMERSIVE AALI OS INTERFACE LAYER                       */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {activeModule && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#07060B]/85 backdrop-blur-2xl"
              onClick={() => setActiveModule(null)}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: 12 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-[#0B0916]/95 border border-white/[0.12] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                {/* Background Ambient Glow inside panel */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#88889A] font-semibold">
                      AALI OS // IDENTITY // MODULE{" "}
                      {modules.find((m) => m.id === activeModule)?.num}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModule(null)}
                    className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.15] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer text-xs font-mono tracking-wider text-[#A0A0B0]"
                    aria-label="Close information module"
                  >
                    <span>CLOSE</span>
                    <X className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-90" />
                  </button>
                </div>

                {/* Module Dynamic Content */}
                <div className="space-y-6">
                  {/* ---------------- 01: WHO I AM ---------------- */}
                  {activeModule === "who" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest">
                          01 — WHO I AM
                        </span>
                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-[#F5F5F7]">
                          THE HUMAN BEHIND THE MACHINE.
                        </h3>
                      </div>

                      <div className="space-y-4 text-base sm:text-lg text-[#A6A6B8] font-body leading-relaxed">
                        <p>
                          I&apos;m <strong className="text-[#F5F5F7] font-semibold">{siteConfig.name}</strong> — a software developer, builder, and engineering student driven by an insatiable curiosity about how technology works under the surface.
                        </p>
                        <p>
                          I thrive on turning raw ideas into working digital systems. Whether analyzing system architectures or questioning defaults, I treat code as a precision tool for crafting fast, resilient software.
                        </p>
                        <p className="text-sm sm:text-base text-[#888899]">
                          Beyond programming, I value human simplicity, deep technical focus, and tools that feel effortless to those who rely on them.
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-3 font-mono text-xs text-[var(--accent)]">
                        <span>ORIGIN: {siteConfig.location.city.toUpperCase()}, {siteConfig.location.country.toUpperCase()}</span>
                        <span>•</span>
                        <span>OPERATING GLOBALLY</span>
                      </div>
                    </div>
                  )}

                  {/* ---------------- 02: WHAT I BUILD ---------------- */}
                  {activeModule === "build" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest">
                          02 — WHAT I BUILD
                        </span>
                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-[#F5F5F7]">
                          SYSTEMS, INTERFACES &amp; INTELLIGENCE.
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                          <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                            01 / FULL-STACK SYSTEMS
                          </span>
                          <p className="font-heading font-medium text-sm sm:text-base text-[#EDEDF2]">
                            High-performance web applications, responsive architectures, and fluid interactive frontends.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                          <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                            02 / AI &amp; INTELLIGENCE
                          </span>
                          <p className="font-heading font-medium text-sm sm:text-base text-[#EDEDF2]">
                            Context-aware AI workflows, generative agents, and neural pipelines that augment human thought.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                          <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                            03 / PRODUCT ENGINEERING
                          </span>
                          <p className="font-heading font-medium text-sm sm:text-base text-[#EDEDF2]">
                            Human-first software where visual elegance, micro-animations, and engineering rigor unite.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                          <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                            04 / SYSTEM SECURITY
                          </span>
                          <p className="font-heading font-medium text-sm sm:text-base text-[#EDEDF2]">
                            Low-level vulnerability research, JVM memory safety, and published security frameworks.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ---------------- 03: MY JOURNEY ---------------- */}
                  {activeModule === "journey" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest">
                          03 — MY JOURNEY
                        </span>
                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-[#F5F5F7]">
                          THE TIMELINE OF A BUILDER.
                        </h3>
                      </div>

                      {/* Minimalist Vertical Timeline */}
                      <div className="relative pl-6 space-y-8 border-l border-white/[0.12] my-4">
                        {/* 2025 Node */}
                        <div className="relative space-y-1">
                          <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/40 border-2 border-[#0B0916]" />
                          <span className="font-mono text-xs text-[#888899] font-semibold">2025</span>
                          <p className="font-heading font-semibold text-base text-[#EDEDF2]">
                            Started Computer Science &amp; Engineering
                          </p>
                          <p className="text-sm text-[#A6A6B8]">
                            Began formal engineering foundation, quickly transitioning curiosity into real software systems and research.
                          </p>
                        </div>

                        {/* NOW Node */}
                        <div className="relative space-y-1">
                          <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] border-2 border-[#0B0916]" />
                          <span className="font-mono text-xs text-[var(--accent)] font-bold">NOW</span>
                          <p className="font-heading font-semibold text-base text-[#EDEDF2]">
                            Building, Architecting &amp; Shipping
                          </p>
                          <p className="text-sm text-[#A6A6B8]">
                            Developing full-scale products (Priora, CypherGuard, Synapse OS), exploring intelligent AI architectures, and publishing security research.
                          </p>
                        </div>

                        {/* NEXT Node */}
                        <div className="relative space-y-1">
                          <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-[#0B0916]" />
                          <span className="font-mono text-xs text-[#66667A]">NEXT</span>
                          <p className="font-heading font-semibold text-base text-[#A0A0B2]">
                            Still Being Written.
                          </p>
                          <p className="text-sm text-[#77778A]">
                            Pushing the boundaries of what software and human-machine intelligence can accomplish.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ---------------- 04: CURRENTLY ---------------- */}
                  {activeModule === "currently" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest">
                          04 — CURRENTLY
                        </span>
                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-[#F5F5F7]">
                          CURRENT FOCUS &amp; FOUNDATION.
                        </h3>
                      </div>

                      <div className="space-y-5">
                        <div className="space-y-2">
                          <span className="font-mono text-xs text-[#808095] uppercase tracking-widest block">
                            CURRENTLY EXPLORING
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {["Software Engineering", "Artificial Intelligence", "Product Architecture", "System Security"].map((item) => (
                              <span
                                key={item}
                                className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#EDEDF2] border border-white/[0.08]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="h-px w-full bg-white/[0.08]" />

                        <div className="space-y-1.5">
                          <span className="font-mono text-xs text-[#808095] uppercase tracking-widest block">
                            ACADEMIC FOUNDATION
                          </span>
                          <p className="font-heading font-semibold text-base sm:text-lg text-[#EDEDF2]">
                            {siteConfig.education.degree}
                          </p>
                          <p className="text-sm text-[#A6A6B8]">
                            {siteConfig.education.specialization}
                          </p>
                          <p className="font-mono text-xs text-[var(--accent)] pt-0.5">
                            {siteConfig.education.institution} • {siteConfig.education.period}
                          </p>
                        </div>

                        <div className="h-px w-full bg-white/[0.08]" />

                        <div className="space-y-1">
                          <span className="font-mono text-xs text-[#808095] uppercase tracking-widest block">
                            OPERATING PRINCIPLE
                          </span>
                          <p className="font-heading font-medium text-base text-[var(--accent)]">
                            Curiosity → Experimentation → Execution
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                    : "[ CHAPTER 01 / ABOUT ]"}
              </span>
              <span className="hidden sm:inline text-xs text-[var(--text-muted)]">
                {scrollProgress < 0.55
                  ? "SCROLL TO DRAW SIGNATURE"
                  : scrollProgress < 0.85
                    ? "SCROLL FOR PERSONAL IDENTITY"
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
