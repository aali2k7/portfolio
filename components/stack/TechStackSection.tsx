"use client";

import { useState } from "react";
import { techStackCategories } from "@/data/stack";
import { Terminal, Sparkles } from "lucide-react";

export function TechStackSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    techStackCategories[0].id
  );

  const activeCategory =
    techStackCategories.find((c) => c.id === activeCategoryId) ||
    techStackCategories[0];

  return (
    <section
      id="stack"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 md:mb-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            06
          </span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)]">
            TECHNICAL CAPABILITIES
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
          ENGINEERING STACK
        </span>
      </div>

      {/* Kinetic Category Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
        {techStackCategories.map((cat) => {
          const isActive = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer border ${isActive
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-md"
                  : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--text-primary)]"
                }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Active Category Editorial Presentation */}
      <div className="bg-[var(--bg-secondary)] rounded-3xl md:rounded-4xl p-8 sm:p-10 md:p-14 border border-[var(--border-subtle)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {activeCategory.name}
            </h3>
            <p className="font-heading text-sm sm:text-base text-[var(--accent)] font-medium mt-1">
              {activeCategory.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
            <Terminal className="w-4 h-4 text-[var(--accent)]" />
            <span>{activeCategory.skills.length} VERIFIED COMPETENCIES</span>
          </div>
        </div>

        {/* Dynamic Editorial Words Cloud */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
          {activeCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-between p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] font-bold">
                  0{idx + 1}
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)] group-hover:translate-x-1 transition-transform">
                  {skill.name}
                </span>
              </div>

              {skill.featured && (
                <span className="flex items-center gap-1 font-mono text-[10px] text-[var(--accent)] uppercase font-bold tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  CORE
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
