"use client";

import { experiences } from "@/data/experience";
import { ArrowUpRight, Calendar, MapPin, Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Ambient background depth lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] ambient-glow-purple opacity-20 pointer-events-none blur-3xl" />

      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-20 md:mb-28 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            [03 / 06]
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#8A8F98] font-semibold">
            EXPERIENCE & LEADERSHIP
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F98]">
          <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>CHRONOLOGY & IMPACT</span>
        </div>
      </div>

      {/* Section Headline */}
      <div className="mb-16 md:mb-24 space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold block">
          PRACTICE & LEADERSHIP
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F1F2F0] leading-none">
          SYSTEMS. TEAMS. <span className="text-[var(--accent)]">EXECUTION.</span>
        </h2>
      </div>

      {/* Editorial Timeline Container */}
      <div className="space-y-10 md:space-y-14 relative">
        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className="group relative studio-card rounded-3xl p-7 sm:p-10 md:p-12 transition-all duration-300"
          >
            {/* Top Bar inside Experience Item */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs text-[var(--accent)] font-bold px-2.5 py-1 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                  {exp.number}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white font-semibold">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8A8F98]">
                <span className="flex items-center gap-1.5 text-[#CBD0D8]">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {exp.period}
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 text-[#CBD0D8]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Main Role & Company Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
              <div className="lg:col-span-5 space-y-2">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F1F2F0] tracking-tight">
                  {exp.company}
                </h3>
                <p className="font-heading text-base sm:text-lg font-semibold text-[var(--accent)]">
                  {exp.role}
                </p>

                {exp.companyUrl && (
                  <div className="pt-4">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="roll-btn group/link inline-flex items-center gap-2 font-mono text-xs text-[#CBD0D8] hover:text-white font-semibold transition-colors py-1.5"
                    >
                      <span className="roll-text">
                        <span data-text={`VISIT ${exp.company.toUpperCase()}`}>
                          VISIT {exp.company.toUpperCase()}
                        </span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)] transition-transform duration-300 group-hover/link:rotate-45" />
                    </a>
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 space-y-4">
                {exp.description.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                    <p className="font-body text-sm sm:text-base text-[#A6A9AD] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Pills */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8F98] mr-2">
                  DISCIPLINES:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.08] text-[#CBD0D8] hover:border-[var(--accent)] hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
