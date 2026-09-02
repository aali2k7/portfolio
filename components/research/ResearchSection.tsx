"use client";

import { researchPublications } from "@/data/research";
import { BookOpen, ShieldCheck, Lock, Key, Terminal } from "lucide-react";

export function ResearchSection() {
  const paper = researchPublications[0];

  return (
    <section
      id="research"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 md:mb-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
            05
          </span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)]">
            ACADEMIC RESEARCH & SECURITY
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
          PEER-REVIEWED PUBLICATION
        </span>
      </div>

      {/* Editorial Research Showcase */}
      {paper && (
        <div className="relative bg-[var(--bg-secondary)] rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-12 lg:p-14 border border-[var(--border-subtle)] shadow-sm">
          
          {/* Top Journal Badge & DOI Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 md:pb-8 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <BookOpen className="w-4 h-4 text-[var(--accent)]" />
              <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[var(--text-primary)] font-bold">
                {paper.journal}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] font-bold text-[var(--accent)]">
                PUBLISHED — {paper.year}
              </span>

              {paper.doiUrl && (
                <a
                  href={paper.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent)] font-mono text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>DOI: 10.59256/indjcst...</span>
                  <BookOpen className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Research Headline & Abstract */}
          <div className="my-8 md:my-10">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-snug">
              {paper.title}
            </h3>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                  EXECUTIVE ABSTRACT:
                </p>
                <p className="font-body text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              <div className="lg:col-span-4 bg-[var(--bg-primary)] p-6 rounded-2xl border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 mb-4 text-[var(--text-primary)]">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold">
                    CORE DOMAINS
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {paper.topics.map((topic) => (
                    <span
                      key={topic}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Architectural Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[var(--border-subtle)]">
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <Key className="w-4 h-4 text-[var(--accent)] mb-2" />
              <p className="font-heading font-bold text-sm text-[var(--text-primary)]">
                Cryptographic Primitives
              </p>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                AES, RSA, SHA-256 Analysis
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <Lock className="w-4 h-4 text-[var(--accent)] mb-2" />
              <p className="font-heading font-bold text-sm text-[var(--text-primary)]">
                Vulnerability Vectors
              </p>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                Deserialization & SQL Injection
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <Terminal className="w-4 h-4 text-[var(--accent)] mb-2" />
              <p className="font-heading font-bold text-sm text-[var(--text-primary)]">
                Emerging Paradigms
              </p>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                AI-Assisted & Cloud-Native Security
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
