"use client";

import Image from "next/image";
import { editorialPerspectives } from "@/data/personal";

export function EditorialPerspectiveSection() {
  return (
    <section
      id="perspective"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-[#111111]/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 mb-14 sm:mb-20 border-b border-[#111111]/[0.08]">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6F6B64] font-medium block">
            HUMAN PERSPECTIVE
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight">
            Outside the screen.
          </h2>
        </div>
        <p className="font-body text-xs sm:text-sm text-[#6F6B64] max-w-xs">
          The disciplines and environments that shape clarity, cadence, and focus.
        </p>
      </div>

      {/* 3 Quiet Editorial Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {editorialPerspectives.map((item) => (
          <div key={item.id} className="space-y-6 group">
            {/* Fine Art Editorial Image */}
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#EAE6DC] border border-[#111111]/[0.08]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover grayscale contrast-110 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Column Editorial Typography */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#315C43] font-semibold block">
                {item.number} // {item.title}
              </span>
              <h3 className="font-serif italic text-lg sm:text-xl text-[#111111]">
                &ldquo;{item.quote}&rdquo;
              </h3>
              <p className="font-body text-sm text-[#6F6B64] leading-relaxed font-light pt-1">
                {item.reflection}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
