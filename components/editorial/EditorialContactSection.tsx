"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Copy, Check, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export function EditorialContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full py-28 sm:py-36 md:py-48 px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-[#111111]/[0.08]"
    >
      {/* Spacious, Confident Heading */}
      <div className="space-y-6 mb-16 sm:mb-20">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6F6B64] font-medium block">
          CONTACT &amp; INQUIRY
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-[#111111] tracking-tight">
          Have something worth building?
        </h2>
        <p className="font-body text-base sm:text-lg text-[#6F6B64] font-light max-w-lg">
          Software engineering, AI/ML, research, product work. Open for ambitious conversations and collaboration.
        </p>
      </div>

      {/* Direct Email Display & Action Row */}
      <div className="pb-16 sm:pb-24 border-b border-[#111111]/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-6 sm:gap-10 mb-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-heading text-2xl sm:text-4xl md:text-5xl font-light text-[#111111] hover:text-[#315C43] transition-colors"
          >
            {siteConfig.email}
          </a>

          <button
            onClick={handleCopyEmail}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#111111]/[0.12] text-[#6F6B64] hover:text-[#111111] hover:border-[#111111] font-mono text-xs transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#315C43]" />
                <span className="text-[#315C43]">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons: EMAIL ME / GITHUB / LINKEDIN */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-[#F4F1E9] hover:bg-[#315C43] font-mono text-xs uppercase tracking-wider font-medium transition-colors"
          >
            <span>Email Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#111111]/[0.15] text-[#111111] hover:border-[#111111] hover:bg-[#111111]/[0.02] font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#111111]/[0.15] text-[#111111] hover:border-[#111111] hover:bg-[#111111]/[0.02] font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MINIMAL FOOTER                                                            */}
      {/* ========================================================================= */}
      <div className="pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-[#6F6B64]">
        <div className="space-y-1">
          <p className="font-body text-sm font-medium text-[#111111]">
            Aali Rahman
          </p>
          <p className="text-[#9A958B]">
            Hyderabad, India • Operating Globally
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-[#111111] transition-colors"
          >
            Email
          </a>
        </div>

        <div className="flex items-center gap-6 self-end md:self-auto">
          <span className="italic font-serif text-[#6F6B64] font-normal">
            &ldquo;Building carefully. Staying curious.&rdquo;
          </span>
          <span className="text-[#9A958B]">© 2026</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#111111] hover:text-[#315C43] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
