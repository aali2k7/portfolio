"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Cpu, Terminal, Shield, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

export interface ProjectChapterData {
  id: string;
  number: string;
  name: string;
  thesisLead: string;
  thesisSub: string;
  status: string;
  image: string;
  problemTitle: string;
  problemDescription: string;
  responseTitle: string;
  responseDescription: string;
  trinityPillars: string[];
  capabilities: {
    num: string;
    title: string;
    description: string;
  }[];
  architecture: {
    tech: string;
    role: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  environmentalBg: string;
}

interface ProjectChapterProps {
  project: ProjectChapterData;
  isLast?: boolean;
}

export function ProjectChapter({ project, isLast = false }: ProjectChapterProps) {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <article
      id={`project-${project.id}`}
      className={`relative w-full py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 lg:px-16 ${project.environmentalBg} transition-colors duration-700 select-none overflow-hidden ${
        !isLast ? "border-b border-white/[0.08]" : ""
      }`}
    >
      {/* Ambient background depth lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] ambient-glow-purple opacity-25 pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] ambient-glow-neon opacity-15 pointer-events-none blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-24 sm:space-y-32 md:space-y-40">

        {/* ========================================================================= */}
        {/* STAGE 01: PROJECT IDENTITY & SCALE TYPOGRAPHY                             */}
        {/* ========================================================================= */}
        <header className="space-y-8">
          {/* Top Identifier & Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold tracking-wider">
                [{project.number} / 03]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#8A8F98] font-semibold">
                FLAGSHIP ENGINEERING CHAPTER
              </span>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-xs uppercase tracking-wider text-[#A6A9AD]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-widest text-[var(--accent)]">{project.status}</span>
            </div>
          </div>

          {/* Massive Display Title */}
          <div className="space-y-4">
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#F1F2F0] leading-[0.85]">
              {project.name}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 pt-2">
              <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--accent)]">
                {project.thesisLead}
              </span>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#8A8F98]">
                {project.thesisSub}
              </span>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* STAGE 02 & 03: FULL PRODUCT IMMERSION (HERO INTERFACE VISUAL)             */}
        {/* ========================================================================= */}
        <section
          aria-label={`${project.name} Product Interface`}
          className="relative w-full rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden studio-card group"
        >
          {/* Mock Browser/Terminal Frame Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-black/40 border-b border-white/[0.08] backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] font-mono text-[11px] text-[#A6A9AD]">
              <span className="text-white/40">https://</span>
              <span className="text-white font-medium">{project.id}.systems</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[var(--accent)]">
              <Sparkles className="w-3 h-3" />
              <span>LIVE TELEMETRY</span>
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full bg-[#080C14]">
            <Image
              src={project.image}
              alt={`${project.name} Product Interface`}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority={project.number === "01"}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Bottom subtle shadow vignette & status indicator */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080C14] to-transparent pointer-events-none" />
        </section>

        {/* ========================================================================= */}
        {/* STAGE 04: PROJECT STORY (THE PROBLEM vs THE RESPONSE)                     */}
        {/* ========================================================================= */}
        <section className="space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: The Problem */}
            <div className="lg:col-span-6 space-y-4 p-8 rounded-3xl bg-white/[0.015] border border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-red-400/90 font-semibold block">
                  01 // THE PROBLEM
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#F1F2F0] tracking-tight leading-tight">
                {project.problemTitle}
              </h3>
              <p className="font-body text-sm sm:text-base text-[#A6A9AD] leading-relaxed">
                {project.problemDescription}
              </p>
            </div>

            {/* Right: The Response */}
            <div className="lg:col-span-6 space-y-4 p-8 rounded-3xl bg-white/[0.025] border border-[var(--accent)]/20 shadow-[0_0_30px_rgba(90,255,21,0.04)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block">
                  02 // THE RESPONSE
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#F1F2F0] tracking-tight leading-tight">
                {project.responseTitle}
              </h3>
              <p className="font-body text-sm sm:text-base text-[#A6A9AD] leading-relaxed">
                {project.responseDescription}
              </p>
            </div>
          </div>

          {/* Trinity Pillars */}
          {project.trinityPillars.length > 0 && (
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 sm:gap-10 font-display text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider text-[#CBD0D8]">
              {project.trinityPillars.map((pillar, idx) => (
                <div key={pillar} className="flex items-center gap-4 sm:gap-6">
                  <span className="hover:text-[var(--accent)] transition-colors cursor-default">
                    {pillar}
                  </span>
                  {idx < project.trinityPillars.length - 1 && (
                    <span className="text-white/20 select-none">•</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* STAGE 05: INTERACTIVE CORE CAPABILITIES                                   */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] font-semibold">
                CORE CAPABILITIES // SEQUENTIAL EXECUTION
              </span>
            </div>
            <span className="font-mono text-xs text-[#8A8F98] hidden sm:inline">
              CLICK TO INSPECT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {project.capabilities.map((cap, idx) => {
              const isSelected = activeCapability === idx;
              return (
                <div
                  key={cap.num}
                  onClick={() => setActiveCapability(idx)}
                  className={`p-7 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
                    isSelected
                      ? "bg-white/[0.05] border-[var(--accent)] shadow-[0_0_24px_rgba(90,255,21,0.12)]"
                      : "bg-white/[0.015] border-white/[0.06] hover:border-white/[0.18]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? "text-[var(--accent)]" : "text-white/40"
                      }`}
                    >
                      {cap.num}
                    </span>
                    {isSelected && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full border border-[var(--accent)]/20">
                        ACTIVE SPEC
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-extrabold uppercase text-[#F1F2F0] tracking-tight mb-2">
                    {cap.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#A6A9AD] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STAGE 06: ARCHITECTURE & SYSTEM ROLES                                     */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-8 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] font-semibold block">
              ENGINEERING ARCHITECTURE // SYSTEM ROLES
            </span>
            <span className="font-mono text-xs text-white/40 hidden sm:inline">
              STACK SPECS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.architecture.map((item) => (
              <div
                key={item.tech}
                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs font-bold text-[#F1F2F0] group-hover:text-[var(--accent)] transition-colors">
                    {item.tech}
                  </p>
                  <Cpu className="w-3.5 h-3.5 text-white/30 group-hover:text-[var(--accent)] transition-colors" />
                </div>
                <p className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-wider">
                  — {item.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STAGE 07: DECISIVE PROJECT ACTIONS & CTAS                                 */}
        {/* ========================================================================= */}
        <footer className="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] block">
              DEPLOYMENT STATE
            </span>
            <p className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F1F2F0] mt-1">
              Production Validated & Engineered for Scale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="roll-btn group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] hover:shadow-[0_0_30px_rgba(90,255,21,0.35)] font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
              >
                <span className="roll-text">
                  <span data-text="EXPLORE SYSTEM">EXPLORE SYSTEM</span>
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="roll-btn group flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/[0.14] hover:border-white/[0.4] hover:bg-white/[0.04] text-[#CBD0D8] hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="roll-text">
                  <span data-text="SOURCE CODE">SOURCE CODE</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
              </a>
            )}
          </div>
        </footer>

      </div>
    </article>
  );
}
