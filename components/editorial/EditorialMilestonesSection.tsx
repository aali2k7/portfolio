"use client";

import { editorialMilestones } from "@/data/personal";

export function EditorialMilestonesSection() {
  return (
    <section
      id="milestones"
      className="relative w-full py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-[#111111]/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 mb-10 sm:mb-14 border-b border-[#111111]/[0.08]">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6F6B64] font-medium block">
            CREDENTIALS
          </span>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-normal text-[#111111] tracking-tight">
            Verified milestones.
          </h2>
        </div>
        <p className="font-body text-xs sm:text-sm text-[#9A958B]">
          Documented academic and institutional records.
        </p>
      </div>

      {/* Restrained 4-item list */}
      <div className="divide-y divide-[#111111]/[0.08] border-b border-[#111111]/[0.08]">
        {editorialMilestones.map((item, idx) => (
          <div
            key={idx}
            className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
          >
            <div className="md:col-span-2">
              <span className="font-heading text-lg sm:text-xl font-light text-[#315C43] tabular-nums">
                {item.year}
              </span>
            </div>

            <div className="md:col-span-5">
              <h3 className="font-body text-base sm:text-lg font-medium text-[#111111]">
                {item.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#6F6B64]">
                {item.organization}
              </p>
            </div>

            <div className="md:col-span-5">
              <p className="font-body text-xs sm:text-sm text-[#6F6B64] font-light">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
