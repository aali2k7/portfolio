"use client";

import { personalInterests, achievements } from "@/data/personal";
import { Waves, Sun, Music, Award, Trophy, Sparkles } from "lucide-react";

export function BeyondCodeSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "swimming":
        return <Waves className="w-5 h-5 text-[var(--accent)]" />;
      case "beaches":
        return <Sun className="w-5 h-5 text-[var(--accent)]" />;
      case "music":
        return <Music className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section
      id="personal"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 md:mb-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            07
          </span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)]">
            BEYOND CODE / HUMAN DIMENSIONS
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
          PERSONAL EXPLORATIONS
        </span>
      </div>

      {/* Narrative Headline */}
      <div className="mb-14">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight uppercase max-w-4xl">
          Code is how I build. Curiosity is how I live.
        </h2>
      </div>

      {/* 3 Editorial Interest Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {personalInterests.map((interest) => (
          <div
            key={interest.id}
            className="flex flex-col justify-between p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-6">
                {getIcon(interest.id)}
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  {interest.vibe}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                {interest.title}
              </h3>
              <p className="font-heading text-xs font-semibold text-[var(--accent)] mt-1 uppercase tracking-wider">
                {interest.tagline}
              </p>
              <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] mt-4 leading-relaxed">
                {interest.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Milestones & Achievements Banner */}
      <div className="bg-[var(--bg-secondary)] rounded-3xl p-8 sm:p-10 border border-[var(--border-subtle)]">
        <div className="flex items-center gap-3 pb-6 border-b border-[var(--border-subtle)] mb-6">
          <Trophy className="w-5 h-5 text-[var(--accent)]" />
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-primary)] font-bold">
            HONORS, CREDENTIALS & LEADERSHIP
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-6 rounded-2xl bg-[var(--bg-primary)] border transition-all ${
                ach.isPlaceholder
                  ? "border-dashed border-[var(--border-strong)] opacity-80"
                  : "border-[var(--border-subtle)]"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)] mb-2">
                <span>{ach.year}</span>
                {ach.isPlaceholder ? (
                  <span className="text-[var(--accent)] font-semibold uppercase">IN PROGRESS</span>
                ) : (
                  <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
                )}
              </div>
              <h4 className="font-heading font-bold text-base text-[var(--text-primary)]">
                {ach.title}
              </h4>
              <p className="font-mono text-xs text-[var(--accent)] mt-1">
                {ach.organization}
              </p>
              <p className="font-body text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
