"use client";

import Image from "next/image";
import { Project } from "@/types/portfolio";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

interface ProjectCardProps {
  project: Project;
  isFlagship?: boolean;
}

export function ProjectCard({ project, isFlagship = false }: ProjectCardProps) {
  if (isFlagship) {
    return (
      <div className="group relative w-full bg-[var(--bg-secondary)] rounded-3xl md:rounded-4xl p-5 sm:p-7 md:p-8 lg:p-9 border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-300 shadow-sm">
        {/* Top Flagship Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 md:pb-5 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[var(--accent)] font-bold">
              {project.number}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
              FLAGSHIP SHOWCASE
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">
              {project.status === "in-development" ? "ACTIVE DEVELOPMENT" : "COMPLETED"}
            </span>
          </div>
        </div>

        {/* Flagship Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-4 md:my-6">
          
          {/* Left Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight uppercase">
                {project.name}
              </h3>
              <p className="font-heading text-base sm:text-lg font-medium text-[var(--accent)] mt-2">
                {project.tagline}
              </p>
              <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-4 space-y-1.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    KEY CAPABILITIES:
                  </p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <Sparkles className="w-3 h-3 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent)] font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
                >
                  <span>EXPLORE PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border-strong)] hover:border-[var(--text-primary)] font-mono text-xs uppercase tracking-wider font-semibold text-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6 relative aspect-[16/10] w-full max-h-[36vh] rounded-2xl md:rounded-3xl overflow-hidden bg-[#0A0A0A] shadow-xl border border-[var(--border-subtle)] group-hover:scale-[1.01] transition-transform duration-500">
            <Image
              src={project.image}
              alt={`${project.name} Interface Showcase`}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    );
  }

  // Standard Project Card
  return (
    <div className="group flex flex-col justify-between bg-[var(--bg-secondary)] rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-300">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-4">
          <span className="font-mono text-xs text-[var(--accent)] font-bold">
            {project.number}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
            {project.year} • {project.status.toUpperCase()}
          </span>
        </div>

        {/* Thumbnail */}
        {project.image && (
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0A0A0A] mb-6 border border-[var(--border-subtle)]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight uppercase">
          {project.name}
        </h3>
        <p className="font-heading text-sm font-semibold text-[var(--accent)] mt-1">
          {project.tagline}
        </p>
        <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent)] font-semibold transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent)] font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
