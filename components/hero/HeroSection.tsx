"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/data/siteConfig";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";
import { PortraitChoreography } from "./PortraitChoreography";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-[var(--bg-primary)]">
      {/* LAYER 1 & 2: Dynamic Ambient Breathing Video Background Layer */}
      <HeroBackgroundVideo />

      {/* LAYER 3: Hero Opening Editorial Spread */}
      <div className="relative z-10 pt-28 md:pt-36 pb-12 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col justify-between min-h-[90vh]">
        
        {/* Top Eyebrow Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
              PORTFOLIO / 2026 EDITION
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] tracking-wider">
            <span>{siteConfig.location.city.toUpperCase()}, {siteConfig.location.country.toUpperCase()}</span>
            <span>•</span>
            <span className="text-[var(--text-primary)] font-medium">AVAILABLE FOR AMBITIOUS PROJECTS</span>
          </div>
        </div>

        {/* Massive Editorial Hero Typography */}
        <div className="my-auto py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-hero-title text-[var(--text-primary)] tracking-tighter uppercase font-extrabold select-none">
              AALI
              <span className="block text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-500">
                RAHMAN
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
          >
            <div className="md:col-span-8">
              <p className="font-heading text-editorial-sub text-[var(--text-secondary)] font-medium max-w-3xl">
                {siteConfig.philosophy.hero}
              </p>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <div className="flex flex-col gap-1 font-mono text-xs text-[var(--text-muted)]">
                <span className="text-[var(--accent)] font-bold">FULL-STACK ARCHITECTURE</span>
                <span>AI & PRODUCT ENGINEERING</span>
                <span>SYSTEM SECURITY RESEARCH</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]">
          <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">
            [ 01 — IDENTITY TRANSFORMATION ]
          </span>

          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-primary)] tracking-wider">
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--accent)]" />
          </div>
        </div>
      </div>

      {/* LAYER 4: Cinematic Scroll-Driven Portrait Transformation & Signature Reveal */}
      <PortraitChoreography />
    </section>
  );
}
