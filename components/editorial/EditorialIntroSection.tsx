"use client";

import { siteConfig } from "@/data/siteConfig";

export function EditorialIntroSection() {
  return (
    <section
      id="intro"
      className="relative w-full py-28 sm:py-36 md:py-48 px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      {/* Editorial Eyebrow Tag */}
      <div className="flex items-center gap-3 mb-10 sm:mb-14">
        <span className="w-2 h-2 rounded-full bg-[#315C43]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6F6B64] font-medium">
          AALI RAHMAN / ENGINEER / RESEARCHER
        </span>
      </div>

      {/* Large Statement with Generous Breathing Room */}
      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.08] max-w-4xl mb-14 sm:mb-20">
        I build software, <br />
        study intelligent systems, <br />
        and follow ideas <br />
        <span className="italic font-serif text-[#315C43]">
          until they become real.
        </span>
      </h1>

      {/* Grounded Factual Biography & Editorial Coordinates */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pt-10 border-t border-[#111111]/[0.08] items-start">
        <div className="md:col-span-8 space-y-6">
          <p className="font-body text-lg sm:text-xl md:text-2xl text-[#111111] leading-relaxed font-light">
            I am an undergraduate studying Computer Science Engineering with a specialization in Artificial Intelligence &amp; Machine Learning at Woxsen University (Batch 2029).
          </p>

          <p className="font-body text-base sm:text-lg text-[#6F6B64] leading-relaxed font-light">
            My work spans software engineering, applied AI/ML research, full-stack systems, product development, and technical leadership. Rather than treating code as an end in itself, I focus on building reliable software systems and exploring machine intelligence with architectural discipline.
          </p>
        </div>

        {/* Quiet Metadata Column */}
        <div className="md:col-span-4 space-y-6 pt-1 md:pt-2 border-t md:border-t-0 border-[#111111]/[0.08]">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A958B] block">
              ACADEMIC FOUNDATION
            </span>
            <p className="font-body text-sm font-medium text-[#111111]">
              {siteConfig.education.institution}
            </p>
            <p className="font-body text-xs text-[#6F6B64]">
              {siteConfig.education.degree} • AI &amp; ML ({siteConfig.education.period})
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A958B] block">
              CURRENT APPOINTMENTS
            </span>
            <p className="font-body text-sm font-medium text-[#111111]">
              AI Research Intern — AIRC
            </p>
            <p className="font-body text-xs text-[#6F6B64]">
              Team Lead — Entrepreneurship Cell
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A958B] block">
              COORDINATES
            </span>
            <p className="font-body text-xs text-[#6F6B64]">
              {siteConfig.location.city}, {siteConfig.location.country} • Operating Globally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
