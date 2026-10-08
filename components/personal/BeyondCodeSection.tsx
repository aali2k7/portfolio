"use client";

import { personalInterests, achievements } from "@/data/personal";
import { Waves, Compass, Music, Trophy, Sparkles, ArrowUpRight } from "lucide-react";

export function BeyondCodeSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "swimming":
        return <Waves className="w-5 h-5 text-[var(--accent)]" />;
      case "beaches":
        return <Compass className="w-5 h-5 text-[var(--accent)]" />;
      case "music":
        return <Music className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section
      id="personal"
      className="relative w-full py-28 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Ambient background depth lighting */}
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] ambient-glow-purple opacity-15 pointer-events-none blur-3xl" />

      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-20 md:mb-28 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            [06 / 06]
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#8A8F98] font-semibold">
            BEYOND CODE / HUMAN DIMENSIONS
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F98]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>PHILOSOPHY & PURSUITS</span>
        </div>
      </div>

      {/* Narrative Headline */}
      <div className="mb-16 md:mb-24 space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold block">
          HUMAN PERSPECTIVE
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F1F2F0] leading-none max-w-5xl">
          CODE IS HOW I BUILD. <span className="text-[var(--accent)]">CURIOSITY</span> IS HOW I LIVE.
        </h2>
      </div>

      {/* 3 Editorial Interest Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
        {personalInterests.map((interest, idx) => (
          <div
            key={interest.id}
            className="group studio-card flex flex-col justify-between p-8 sm:p-10 rounded-3xl transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-[var(--accent)]/40 transition-colors">
                  {getIcon(interest.id)}
                </div>
                <span className="font-mono text-xs text-white/30 font-bold">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F1F2F0] tracking-tight group-hover:text-white transition-colors">
                {interest.title}
              </h3>
              <p className="font-heading text-xs font-semibold text-[var(--accent)] mt-1.5 uppercase tracking-wider">
                {interest.tagline}
              </p>
              <p className="font-body text-xs sm:text-sm text-[#A6A9AD] mt-5 leading-relaxed">
                {interest.description}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.06]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8F98]">
                {interest.vibe}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Key Milestones & Achievements Banner */}
      <div className="studio-card rounded-3xl md:rounded-4xl p-8 sm:p-12 border border-white/[0.08]">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#F1F2F0] font-bold">
              VERIFIED MILESTONES & HONORS
            </h3>
          </div>
          <span className="font-mono text-xs text-[#8A8F98]">
            ACADEMIC &amp; COMMUNITY HONORS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] transition-all space-y-2"
            >
              <span className="font-mono text-xs text-[var(--accent)] font-bold">
                {item.year}
              </span>
              <h4 className="font-display text-base font-bold text-white tracking-tight">
                {item.title}
              </h4>
              <p className="font-mono text-xs text-[#8A8F98]">
                {item.organization}
              </p>
              <p className="font-body text-xs text-[#A6A9AD] pt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
