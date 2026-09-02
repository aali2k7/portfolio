"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const flagshipProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== flagshipProject?.id);

  return (
    <section
      id="projects"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 md:mb-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            03
          </span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)]">
            SELECTED WORK / PROJECTS
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
          PRODUCT & ENGINEERING
        </span>
      </div>

      {/* Flagship Highlight */}
      {flagshipProject && (
        <div className="mb-12 md:mb-16">
          <ProjectCard project={flagshipProject} isFlagship={true} />
        </div>
      )}

      {/* Secondary Projects Grid */}
      {otherProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFlagship={false} />
          ))}
        </div>
      )}
    </section>
  );
}
