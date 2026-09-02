"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { SignatureReveal } from "@/components/signature/SignatureReveal";
import { siteConfig } from "@/data/siteConfig";

export function PortraitChoreography() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) return;

      // Calculate progress from 0 (top of section) to 1 (bottom of section)
      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollableDistance;
      const progress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute interpolated visual properties based on 3 stages:
  // Stage 1: 0.0 -> 0.35 (Intro / Dominant)
  // Stage 2: 0.35 -> 0.70 (Immersion / Scaling / Desaturating)
  // Stage 3: 0.70 -> 1.0 (Transformation / Signature Reveal Takes Over)

  const portraitScale = Math.max(0.7, 1 - scrollProgress * 0.35);
  const portraitTranslateY = scrollProgress * 60; // moves slightly down
  const portraitOpacity = Math.max(0.15, 1 - scrollProgress * 0.9);
  const portraitGrayscale = Math.min(100, scrollProgress * 120);

  // Signature progress kicks in after 0.45
  const signatureProgress = Math.max(0, (scrollProgress - 0.45) / 0.5);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220vh] bg-transparent"
    >
      {/* Sticky Choreography Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
        
        {/* Stage 1 & 2: Centerpiece Portrait Composition */}
        <div
          className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-transform duration-75 ease-out will-change-transform border border-[rgba(10,10,10,0.08)] bg-[#EFEFEA]"
          style={{
            transform: `scale(${portraitScale}) translateY(${portraitTranslateY}px)`,
            opacity: portraitOpacity,
            filter: `grayscale(${portraitGrayscale}%)`,
          }}
        >
          <Image
            src="/images/portrait.jpg"
            alt={`${siteConfig.name} — Professional Portrait`}
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 450px"
            className="object-cover object-top"
          />

          {/* Vignette Overlay inside portrait frame */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.5)] via-transparent to-transparent" />

          {/* Bottom tag on portrait */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#F4F4F0] font-mono text-[11px] tracking-widest uppercase">
            <span>{siteConfig.name}</span>
            <span className="text-[var(--accent)] font-bold">2026</span>
          </div>
        </div>

        {/* Stage 3: Dynamic Signature Reveal (Transitions in over the receding portrait) */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-300"
          style={{
            opacity: scrollProgress > 0.4 ? Math.min(1, (scrollProgress - 0.4) * 2.2) : 0,
            transform: `scale(${0.85 + signatureProgress * 0.25})`,
          }}
        >
          <div className="pointer-events-auto bg-[rgba(244,244,240,0.85)] backdrop-blur-md p-6 md:p-10 rounded-3xl border border-[rgba(10,10,10,0.08)] shadow-xl">
            <SignatureReveal progress={signatureProgress} />
          </div>
        </div>

        {/* Floating Scroll Indicator Badge */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] transition-opacity duration-300 ${
            scrollProgress > 0.8 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce" />
          <span>SCROLL TO EXPLORE TRANSFORMATION</span>
        </div>
      </div>
    </div>
  );
}
