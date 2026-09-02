"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/data/siteConfig";
import { Sparkles, MapPin, GraduationCap, Cpu } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 md:mb-24">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            02
          </span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)]">
            ABOUT / PHILOSOPHY
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
          THE HUMAN BEHIND THE SYSTEM
        </span>
      </div>

      {/* Editorial Quote Manifesto */}
      <div className="mb-20 md:mb-28">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-section-title text-[var(--text-primary)] tracking-tight uppercase"
        >
          &ldquo;THE BEST SOLUTIONS DON&apos;T START WITH CODE.{" "}
          <span className="text-[var(--accent)]">THEY START WITH A QUESTION.</span>&rdquo;
        </motion.blockquote>
      </div>

      {/* Editorial Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Narrative Storytelling */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-body">
          <p>
            I am <strong className="text-[var(--text-primary)] font-semibold">{siteConfig.name}</strong>, a full-stack engineer and product builder driven by understanding the human problem before designing technical architecture.
          </p>
          <p>
            Too much software is built backward: starting with an arbitrary framework or complex infrastructure, then searching for a problem to apply it to. My methodology begins with real human friction — studying workflows, uncovering bottlenecks, and asking why things are broken.
          </p>
          <p>
            Once the problem space is sharp, I engineer fast, resilient, and beautiful digital systems that solve it completely. Whether architecting AI intelligence engines or publishing security research, technology is my precision tool.
          </p>
        </div>

        {/* Right Column: Structured Credentials & Fact Sheet */}
        <div className="lg:col-span-5 flex flex-col gap-6 bg-[var(--bg-secondary)] p-8 md:p-10 rounded-3xl border border-[var(--border-subtle)] shadow-sm">
          <div className="flex items-center gap-2 pb-4 border-b border-[var(--border-subtle)]">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-primary)] font-bold">
              PROFILE SPECIFICATIONS
            </h3>
          </div>

          <div className="space-y-5 text-sm font-body">
            {/* Identity */}
            <div className="flex items-start gap-3">
              <Cpu className="w-4 h-4 text-[var(--accent)] mt-1 shrink-0" />
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase">Role</p>
                <p className="font-heading font-semibold text-[var(--text-primary)] text-base">
                  Full-Stack Developer • Product Builder • Security Researcher
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[var(--accent)] mt-1 shrink-0" />
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase">Location</p>
                <p className="font-heading font-semibold text-[var(--text-primary)] text-base">
                  {siteConfig.location.city}, {siteConfig.location.country}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 text-[var(--accent)] mt-1 shrink-0" />
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase">Education</p>
                <p className="font-heading font-semibold text-[var(--text-primary)] text-base">
                  {siteConfig.education.institution}
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  {siteConfig.education.degree} ({siteConfig.education.specialization})
                </p>
                <p className="font-mono text-xs text-[var(--accent)] mt-0.5 font-bold">
                  {siteConfig.education.period}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
