"use client";

import { useState } from "react";
import { techStackCategories } from "@/data/stack";
import { Terminal, Sparkles, Cpu, Layers } from "lucide-react";

export function TechStackSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    techStackCategories[0].id
  );

  const activeCategory =
    techStackCategories.find((c) => c.id === activeCategoryId) ||
    techStackCategories[0];

  const marqueeSkills = [
    "NEXT.JS 16",
    "TYPESCRIPT",
    "PYTHON",
    "FASTAPI",
    "POSTGRESQL",
    "AGENTIC AI",
    "JAVA SECURITY",
    "DOCKER",
    "TAILWIND CSS",
    "REST & WEBSOCKETS",
    "VECTOR EMBEDDINGS",
    "DISTRIBUTED SYSTEMS",
  ];

  return (
    <section
      id="stack"
      className="relative w-full py-28 md:py-40 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Ambient background depth lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] ambient-glow-neon opacity-10 pointer-events-none blur-3xl" />

      {/* Kinetic Infinite Marquee Bar */}
      <div className="w-full pb-16 md:pb-24 border-b border-white/[0.08] overflow-hidden">
        <div className="animate-marquee-left-slow flex items-center gap-8 whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white/[0.08] hover:text-[var(--accent)] transition-colors cursor-default tracking-tighter">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-16 md:pt-24">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-20 md:mb-28 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
              [05 / 06]
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#8A8F98] font-semibold">
              TECHNICAL CAPABILITIES
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F98]">
            <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>PRODUCTION ENGINEERING STACK</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-16 md:mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold block">
            VERIFIED PROFICIENCIES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F1F2F0] leading-none">
            ARCHITECTURAL <span className="text-[var(--accent)]">DISCIPLINES.</span>
          </h2>
        </div>

        {/* Kinetic Category Tabs */}
        <div className="flex flex-wrap gap-2.5 md:gap-3 mb-12">
          {techStackCategories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] shadow-[0_0_24px_rgba(90,255,21,0.35)]"
                    : "bg-white/[0.02] text-[#8A8F98] border-white/[0.08] hover:border-white/[0.25] hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Active Category Presentation */}
        <div className="studio-card rounded-3xl md:rounded-4xl p-8 sm:p-12 md:p-16 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F1F2F0] tracking-tight">
                {activeCategory.name}
              </h3>
              <p className="font-heading text-sm sm:text-base text-[var(--accent)] font-medium mt-1">
                {activeCategory.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#8A8F98]">
              <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{activeCategory.skills.length} VERIFIED COMPETENCIES</span>
            </div>
          </div>

          {/* Dynamic Editorial Words Cloud */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--accent)] hover:bg-white/[0.04] transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] group-hover:scale-125 transition-transform" />
                  <span className="font-display text-base font-bold text-[#F1F2F0] tracking-tight group-hover:text-white">
                    {skill.name}
                  </span>
                </div>

                {skill.featured && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                    CORE
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
