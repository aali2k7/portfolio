"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
  return (
    <article
      id={`project-${project.id}`}
      className={`relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 ${project.environmentalBg} transition-colors duration-700 select-none overflow-hidden ${
        !isLast ? "border-b border-white/[0.08]" : ""
      }`}
    >
      {/* Ambient background depth lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] ambient-glow-blue opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] ambient-glow-neon opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20 sm:space-y-28 md:space-y-36">

        {/* ========================================================================= */}
        {/* STAGE 01: PROJECT IDENTITY & SCALE TYPOGRAPHY                             */}
        {/* ========================================================================= */}
        <header className="space-y-6 sm:space-y-8">
          {/* Top Identifier & Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
                {project.number}
              </span>
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#8A8F98] font-semibold">
                SELECTED WORK / FLAGSHIP CHAPTER
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#A6A9AD]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)] animate-pulse" />
              <span>{project.status}</span>
            </div>
          </div>

          {/* Massive Display Title */}
          <div className="space-y-2">
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#F1F2F0] leading-[0.88]">
              {project.name}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 pt-3">
              <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[var(--accent)]">
                {project.thesisLead}
              </span>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#8A8F98]">
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
          className="relative w-full rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden bg-[#080C14] border border-white/[0.08] shadow-[0_25px_80px_rgba(0,0,0,0.7)] group"
        >
          {/* Subtle top glare reflection */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.image}
              alt={`${project.name} Product Interface`}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority={project.number === "01"}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>

          {/* Bottom subtle shadow vignette */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080C14]/80 to-transparent pointer-events-none" />
        </section>

        {/* ========================================================================= */}
        {/* STAGE 04: PROJECT STORY (THE PROBLEM vs THE RESPONSE)                     */}
        {/* ========================================================================= */}
        <section className="space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: The Problem */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6F747B] font-semibold block">
                01 // THE PROBLEM
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#F1F2F0] tracking-tight leading-tight">
                {project.problemTitle}
              </h3>
              <p className="font-body text-sm sm:text-base md:text-lg text-[#A6A9AD] leading-relaxed">
                {project.problemDescription}
              </p>
            </div>

            {/* Right: The Response */}
            <div className="lg:col-span-6 space-y-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block">
                02 // THE RESPONSE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#F1F2F0] tracking-tight leading-tight">
                {project.responseTitle}
              </h3>
              <p className="font-body text-sm sm:text-base md:text-lg text-[#A6A9AD] leading-relaxed">
                {project.responseDescription}
              </p>
            </div>
          </div>

          {/* Trinity Pillars */}
          {project.trinityPillars.length > 0 && (
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4 sm:gap-8 font-display text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider text-[#CBD0D8]">
              {project.trinityPillars.map((pillar, idx) => (
                <div key={pillar} className="flex items-center gap-4">
                  <span className="hover:text-[var(--accent)] transition-colors">
                    {pillar}
                  </span>
                  {idx < project.trinityPillars.length - 1 && (
                    <span className="text-white/20">•</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* STAGE 05: CORE CAPABILITIES (LARGE SEQUENTIAL CONCEPTS)                   */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] font-semibold">
              CORE CAPABILITIES // SEQUENTIAL CONCEPTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {project.capabilities.map((cap) => (
              <div key={cap.num} className="space-y-3 pt-2">
                <span className="font-mono text-xs text-[var(--accent)] font-bold">
                  {cap.num}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-extrabold uppercase text-[#F1F2F0] tracking-tight">
                  {cap.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#A6A9AD] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STAGE 06: ARCHITECTURE & SYSTEM ROLES                                     */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-8 border-t border-white/[0.08]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] font-semibold block">
            ENGINEERING ARCHITECTURE // SYSTEM ROLES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.architecture.map((item) => (
              <div
                key={item.tech}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all space-y-1"
              >
                <p className="font-mono text-xs font-bold text-[#F1F2F0]">
                  {item.tech}
                </p>
                <p className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-wider">
                  — {item.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STAGE 07: PROJECT ACTIONS & CTAS                                          */}
        {/* ========================================================================= */}
        <footer className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] block">
              EXPLORE THE SYSTEM
            </span>
            <p className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F1F2F0] mt-1">
              Ready for production evaluation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] hover:bg-[var(--accent-green-bright)] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_16px_rgba(155,232,112,0.20)] cursor-pointer"
              >
                <span>LIVE PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/[0.14] hover:border-white/[0.35] hover:text-white font-mono text-xs uppercase tracking-wider font-semibold text-[#CBD0D8] transition-all cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>REPOSITORY</span>
              </a>
            )}
          </div>
        </footer>

      </div>
    </article>
  );
}
