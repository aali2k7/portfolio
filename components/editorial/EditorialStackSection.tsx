"use client";

import { technicalTaxonomy } from "@/data/stack";

export function EditorialStackSection() {
  return (
    <section
      id="stack"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-[#111111]/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 mb-14 sm:mb-20 border-b border-[#111111]/[0.08]">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6F6B64] font-medium block">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight">
            Calm technical taxonomy.
          </h2>
        </div>
        <p className="font-body text-xs sm:text-sm text-[#6F6B64] max-w-xs">
          A disciplined index of languages, application layers, machine intelligence, and systems tooling.
        </p>
      </div>

      {/* Editorial Taxonomy Index */}
      <div className="divide-y divide-[#111111]/[0.08] border-b border-[#111111]/[0.08]">
        {technicalTaxonomy.map((group) => (
          <div
            key={group.category}
            className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-baseline transition-colors"
          >
            {/* Category Name Column */}
            <div className="md:col-span-4 flex items-baseline gap-4">
              <span className="font-mono text-xs text-[#9A958B] tabular-nums">
                {group.number}
              </span>
              <div>
                <h3 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#111111] font-semibold">
                  {group.category}
                </h3>
                <p className="font-body text-xs text-[#6F6B64] mt-0.5 font-light">
                  {group.description}
                </p>
              </div>
            </div>

            {/* Skills Editorial String Column */}
            <div className="md:col-span-8 pl-8 md:pl-0">
              <p className="font-body text-base sm:text-lg md:text-xl text-[#111111] font-light leading-relaxed">
                {group.skills.join("  /  ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
