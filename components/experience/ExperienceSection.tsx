"use client";

import { experiences } from "@/data/experience";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 md:mb-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            04
          </span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)]">
            EXPERIENCE & LEADERSHIP
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
          CHRONOLOGY
        </span>
      </div>

      {/* Editorial Timeline Container */}
      <div className="space-y-8 md:space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group relative bg-[var(--bg-secondary)] rounded-3xl p-6 sm:p-8 md:p-10 border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-300"
          >
            {/* Top Bar inside Experience Item */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--accent)] font-bold">
                  {exp.number}
                </span>
                <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {exp.period}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Main Role & Company Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-start">
              <div className="lg:col-span-5">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                  {exp.company}
                </h3>
                <p className="font-heading text-base sm:text-lg font-semibold text-[var(--accent)] mt-1">
                  {exp.role}
                </p>

                {exp.companyUrl && (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-primary)] hover:text-[var(--accent)] mt-4 font-semibold transition-colors"
                  >
                    <span>VISIT {exp.company.toUpperCase()}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <div className="lg:col-span-7 space-y-3">
                {exp.description.map((point, idx) => (
                  <p
                    key={idx}
                    className="font-body text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed"
                  >
                    {point}
                  </p>
                ))}

                {/* Skills tags */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-3 py-1 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
