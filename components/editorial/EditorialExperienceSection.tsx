"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";

export function EditorialExperienceSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-[#111111]/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 mb-14 sm:mb-20 border-b border-[#111111]/[0.08]">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6F6B64] font-medium block">
            EXPERIENCE &amp; LEADERSHIP
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight">
            Practice, platforms &amp; responsibility.
          </h2>
        </div>
        <p className="font-body text-xs sm:text-sm text-[#6F6B64] max-w-xs">
          Chronology of technical research, university initiatives, and advisory.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* VERTICAL EDITORIAL MAGAZINE TIMELINE                                      */}
      {/* ========================================================================= */}
      <div className="divide-y divide-[#111111]/[0.08] border-b border-[#111111]/[0.08]">
        {experiences.map((exp) => {
          const isHovered = hoveredId === exp.id;
          return (
            <div
              key={exp.id}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group py-10 sm:py-14 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                {/* Year & Period Column (3 cols) */}
                <div className="md:col-span-3 space-y-1">
                  <span className="font-heading text-3xl sm:text-4xl font-light text-[#111111] tabular-nums block">
                    {exp.year}
                  </span>
                  <span className="font-mono text-xs text-[#9A958B] tracking-wide block">
                    {exp.period}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6F6B64] block pt-1">
                    {exp.location}
                  </span>
                </div>

                {/* Role & Organization Column (5 cols) */}
                <div className="md:col-span-5 space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#315C43] font-semibold block">
                      {exp.type}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-normal text-[#111111] tracking-tight group-hover:text-[#315C43] transition-colors">
                      {exp.organization}
                    </h3>
                    <p className="font-body text-sm sm:text-base font-medium text-[#111111]">
                      {exp.role}
                    </p>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#6F6B64] leading-relaxed font-light">
                    {exp.summary}
                  </p>

                  {/* Quiet Metric (for AIRC / Woxsen Leap) */}
                  {exp.metric && (
                    <div className="pt-3 pb-1">
                      <div className="inline-flex items-baseline gap-2.5 px-4 py-2 rounded-lg bg-[#FAF8F3] border border-[#111111]/[0.06]">
                        <span className="font-heading text-lg sm:text-xl font-normal text-[#315C43] tabular-nums">
                          {exp.metric.value}
                        </span>
                        <span className="font-body text-xs text-[#6F6B64]">
                          {exp.metric.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Initiatives / Smooth Expanded Details Column (4 cols) */}
                <div className="md:col-span-4 space-y-3 pt-2 md:pt-0 border-t md:border-t-0 border-[#111111]/[0.06]">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A958B] block">
                    KEY INITIATIVES &amp; FOCUS
                  </span>
                  <ul className="space-y-2">
                    {exp.initiatives.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        className="font-body text-xs sm:text-sm text-[#6F6B64] flex items-start gap-2.5 font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#315C43]/60 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#111111]/[0.03] text-[#6F6B64]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
