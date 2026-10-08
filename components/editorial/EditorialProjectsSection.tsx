"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, EditorialProject } from "@/data/projects";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

export function EditorialProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);

  const activeProject: EditorialProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section
      id="work"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-[#111111]/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 mb-12 sm:mb-16 border-b border-[#111111]/[0.08]">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6F6B64] font-medium block">
            SELECTED WORK
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight">
            Systems, platforms &amp; intelligence.
          </h2>
        </div>
        <p className="font-body text-xs sm:text-sm text-[#6F6B64] max-w-xs">
          Engineered for high-stakes problem spaces with architectural discipline.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* THE EDITORIAL PROJECT INDEX                                               */}
      {/* ========================================================================= */}
      <div className="divide-y divide-[#111111]/[0.08] border-b border-[#111111]/[0.08] mb-16 sm:mb-24">
        {projects.map((item) => {
          const isSelected = item.id === activeProjectId;
          return (
            <button
              key={item.id}
              onClick={() => setActiveProjectId(item.id)}
              className={`group w-full py-6 sm:py-8 text-left transition-all duration-300 flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer focus:outline-none ${
                isSelected ? "opacity-100" : "opacity-75 hover:opacity-100"
              }`}
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-mono text-xs sm:text-sm text-[#9A958B] tabular-nums font-medium group-hover:text-[#315C43] transition-colors">
                  {item.number}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-heading text-xl sm:text-2xl md:text-3xl font-normal tracking-tight transition-colors ${
                        isSelected
                          ? "text-[#111111] font-medium"
                          : "text-[#111111] group-hover:text-[#315C43]"
                      }`}
                    >
                      {item.name}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#315C43]" />
                    )}
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#6F6B64] font-light">
                    {item.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10 pl-12 md:pl-0">
                <span className="font-mono text-xs text-[#9A958B] hidden lg:inline">
                  {item.technologies.slice(0, 3).join(" • ")}
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#111111]/[0.04] text-[#6F6B64]">
                  {item.year}
                </span>
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isSelected
                      ? "border-[#315C43] bg-[#315C43] text-[#F4F1E9]"
                      : "border-[#111111]/[0.12] text-[#6F6B64] group-hover:border-[#315C43] group-hover:text-[#315C43]"
                  }`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* THE DRAMATIC PROJECT VISUAL SHOWCASE (ACTIVE PROJECT)                     */}
      {/* ========================================================================= */}
      <div className="bg-[#FAF8F3] border border-[#111111]/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 transition-all duration-300">
        {/* Showcase Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 mb-8 border-b border-[#111111]/[0.08]">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#315C43] font-semibold">
              PROJECT CASE // {activeProject.number}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111]">
              {activeProject.name}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#315C43] text-[#F4F1E9] hover:bg-[#254633] font-mono text-xs font-medium transition-colors"
              >
                <span>Live Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {activeProject.githubUrl && (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#111111]/[0.15] text-[#111111] hover:border-[#111111] font-mono text-xs transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Large Product Screenshot / Interface View */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] md:aspect-[21/10] rounded-xl sm:rounded-2xl overflow-hidden border border-[#111111]/[0.08] bg-[#EBE7DD] mb-10 shadow-sm">
          <Image
            src={activeProject.image}
            alt={activeProject.name}
            fill
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
          />
        </div>

        {/* 3-Part Concise Editorial Breakdown: Problem • Response • What I Built */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4 border-t border-[#111111]/[0.08]">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315C43] font-semibold block">
              01 / THE PROBLEM
            </span>
            <p className="font-body text-sm sm:text-base text-[#6F6B64] leading-relaxed font-light">
              {activeProject.problem}
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315C43] font-semibold block">
              02 / THE RESPONSE
            </span>
            <p className="font-body text-sm sm:text-base text-[#6F6B64] leading-relaxed font-light">
              {activeProject.response}
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315C43] font-semibold block">
              03 / WHAT I BUILT
            </span>
            <p className="font-body text-sm sm:text-base text-[#111111] leading-relaxed font-light">
              {activeProject.whatIBuilt}
            </p>
          </div>
        </div>

        {/* Technologies footer */}
        <div className="mt-10 pt-6 border-t border-[#111111]/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#9A958B]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="uppercase text-[#6F6B64] mr-2">Technologies:</span>
            {activeProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#111111]/[0.04] text-[#111111] text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
          <span>Status: {activeProject.status}</span>
        </div>
      </div>
    </section>
  );
}
