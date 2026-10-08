"use client";

import { researchPublications } from "@/data/research";
import { BookOpen, ShieldCheck, Lock, Terminal, ArrowUpRight, Cpu, CheckCircle } from "lucide-react";

export function ResearchSection() {
  const paper = researchPublications[0];

  return (
    <section
      id="research"
      className="relative w-full py-28 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Ambient background depth lighting */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] ambient-glow-neon opacity-10 pointer-events-none blur-3xl" />

      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-20 md:mb-28 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            [04 / 06]
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#8A8F98] font-semibold">
            ACADEMIC RESEARCH & SECURITY
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F98]">
          <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>PEER-REVIEWED PUBLICATION</span>
        </div>
      </div>

      {/* Section Headline */}
      <div className="mb-16 md:mb-24 space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold block">
          FORMAL CYBERSECURITY RESEARCH
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F1F2F0] leading-none">
          CRYPTOGRAPHY &amp; <span className="text-[var(--accent)]">SYSTEM RIGOR.</span>
        </h2>
      </div>

      {/* Editorial Research Showcase */}
      {paper && (
        <div className="relative studio-card rounded-3xl md:rounded-4xl p-8 sm:p-12 md:p-16 transition-all duration-300">

          {/* Top Journal Badge & DOI Link */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 md:pb-10 border-b border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] block">
                  PEER-REVIEWED JOURNAL
                </span>
                <span className="font-display text-sm sm:text-base font-bold text-white tracking-tight">
                  {paper.journal}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] font-bold text-[var(--accent)]">
                PUBLISHED — {paper.year}
              </span>

              {paper.doiUrl && (
                <a
                  href={paper.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="roll-btn group flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black hover:bg-[var(--accent)] hover:text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer"
                >
                  <span className="roll-text">
                    <span data-text="VIEW DOI PAPER">VIEW DOI PAPER</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              )}
            </div>
          </div>

          {/* Research Headline & Abstract */}
          <div className="my-10 md:my-14 space-y-6">
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F1F2F0] tracking-tight leading-tight">
              {paper.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-6">
              {/* Executive Abstract */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <p className="font-mono text-xs uppercase tracking-widest text-[#8A8F98] font-semibold">
                    EXECUTIVE ABSTRACT
                  </p>
                </div>
                <p className="font-body text-sm sm:text-base md:text-lg text-[#CBD0D8] leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Cryptographic Radar Telemetry Widget */}
              <div className="lg:col-span-5 p-7 rounded-2xl bg-black/50 border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                    <span className="font-mono text-xs uppercase tracking-wider font-bold">
                      VERIFICATION TELEMETRY
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded border border-[var(--accent)]/20">
                    AUDITED
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#8A8F98]">JCA/JCE Architecture</span>
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)]" /> Formalized
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#8A8F98]">Primitive Verification</span>
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)]" /> AES-256 / SHA
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#8A8F98]">Deserialization Vectors</span>
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)]" /> Categorized
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#8A8F98]">AI-Assisted Static Analysis</span>
                    <span className="text-[var(--accent)] font-semibold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)]" /> Synthesized
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Topic Tags */}
          <div className="pt-8 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8F98] mr-3">
                RESEARCH DOMAINS:
              </span>
              {paper.topics.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-[#CBD0D8] hover:border-[var(--accent)] hover:text-white transition-all cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
