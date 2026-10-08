"use client";

import { useState } from "react";
import { researchPublication } from "@/data/research";
import { ArrowUpRight, ChevronDown, BookOpen } from "lucide-react";

export function EditorialResearchSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const paper = researchPublication;

  return (
    <section
      id="research"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-[#111111]/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 mb-14 sm:mb-20 border-b border-[#111111]/[0.08]">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6F6B64] font-medium block">
            ACADEMIC RESEARCH
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight">
            Peer-reviewed inquiry &amp; systems security.
          </h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#6F6B64]">
          <BookOpen className="w-3.5 h-3.5 text-[#315C43]" />
          <span>IJCST 2026 • DOI REGISTERED</span>
        </div>
      </div>

      {/* Main Research Showcase Container */}
      <div className="bg-[#FAF8F3] border border-[#111111]/[0.08] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 transition-all duration-300">
        {/* Publication Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#111111]/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-3 py-1 rounded bg-[#315C43]/10 text-[#315C43] font-semibold">
              {paper.year}
            </span>
            <span className="font-mono text-xs text-[#6F6B64]">
              {paper.publicationType}
            </span>
          </div>

          <span className="font-mono text-xs text-[#9A958B]">
            DOI: {paper.doi}
          </span>
        </div>

        {/* Paper Title & Journal */}
        <div className="space-y-4 mb-8">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] leading-snug">
            {paper.title}
          </h3>
          <p className="font-serif italic text-base sm:text-lg text-[#315C43]">
            {paper.journal}
          </p>
        </div>

        {/* One-Sentence Abstract */}
        <div className="space-y-2 mb-10 max-w-4xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A958B] block">
            ABSTRACT
          </span>
          <p className="font-body text-base sm:text-lg text-[#6F6B64] leading-relaxed font-light">
            {paper.abstract}
          </p>
        </div>

        {/* Action Controls: Read Paper / Expand Details */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#111111]/[0.08]">
          <div className="flex items-center gap-4">
            <a
              href={paper.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#F4F1E9] hover:bg-[#315C43] font-mono text-xs font-medium transition-colors"
            >
              <span>Read Paper</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#111111]/[0.15] text-[#111111] hover:border-[#111111] font-mono text-xs transition-colors cursor-pointer"
            >
              <span>{isExpanded ? "Hide Details" : "Examine Research Details"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <span className="font-mono text-xs text-[#9A958B]">
            {paper.referenceCount} Academic References
          </span>
        </div>

        {/* Progressive Disclosure: Deep Structural Pillars & Overview */}
        {isExpanded && (
          <div className="mt-10 pt-10 border-t border-[#111111]/[0.08] space-y-8 animate-in fade-in duration-300">
            <p className="font-body text-sm sm:text-base text-[#6F6B64] leading-relaxed font-light max-w-3xl">
              {paper.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {paper.keyPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#F4F1E9] border border-[#111111]/[0.06] space-y-1.5"
                >
                  <span className="font-mono text-xs text-[#315C43] font-semibold block">
                    0{idx + 1} // {pillar.title}
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[#6F6B64] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              <span className="font-mono text-xs text-[#9A958B] mr-2 self-center">
                Scope:
              </span>
              {paper.topics.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-[11px] px-3 py-1 rounded bg-[#F4F1E9] border border-[#111111]/[0.06] text-[#6F6B64]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
