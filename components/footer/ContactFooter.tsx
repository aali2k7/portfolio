"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Copy, Check, Clock, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/common/Icons";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: siteConfig.location.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#050408] text-[#F4F4F0] pt-28 md:pt-40 pb-16 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Ambient background depth lighting */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[400px] ambient-glow-neon opacity-10 pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[500px] ambient-glow-purple opacity-20 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-20 md:mb-28">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
              [07 / 07]
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#8A8F98] font-semibold">
              DIRECT DISPATCH &amp; COLLABORATE
            </span>
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#8A8F98]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" />
            <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>HYDERABAD, IN: {time || "12:30 PM"}</span>
          </div>
        </div>

        {/* Big Editorial CTA */}
        <div className="mb-20 md:mb-28 space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">
            HAVE AN AMBITIOUS PROBLEM?
          </p>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88]">
            GOT A PROBLEM
            <span className="block text-[var(--accent)]">WORTH SOLVING?</span>
            <span className="block text-white/30 hover:text-white transition-colors duration-500 cursor-default">
              LET&apos;S TALK.
            </span>
          </h2>
        </div>

        {/* Interactive Email Action Banner */}
        <div className="studio-card flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 sm:p-12 md:p-14 rounded-3xl md:rounded-4xl mb-24">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F98]">
              DIRECT ENCRYPTED INBOX
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white hover:text-[var(--accent)] transition-colors"
            >
              {siteConfig.email}
            </a>
            <p className="font-body text-xs sm:text-sm text-[#8A8F98]">
              Typically responds within 24 hours for engineering consultations, advisory, and contracts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="roll-btn group flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.3] text-xs font-mono tracking-wider font-semibold text-white transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-[var(--accent)]">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[var(--accent)]" />
                  <span className="roll-text">
                    <span data-text="COPY EMAIL">COPY EMAIL</span>
                  </span>
                </>
              )}
            </button>

            <a
              href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20%E2%80%94%20Let's%20Collaborate`}
              className="roll-btn group flex items-center gap-2.5 px-7 py-4 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] hover:shadow-[0_0_35px_rgba(90,255,21,0.4)] text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span className="roll-text">
                <span data-text="START A PROJECT">START A PROJECT</span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
        </div>

        {/* Social Links Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/[0.08]">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group studio-card flex items-center justify-between p-6 sm:p-7 rounded-2xl transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--accent)]">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-white group-hover:text-[var(--accent)] transition-colors">GitHub</p>
                <p className="font-mono text-xs text-[#8A8F98]">@aali2k7</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#707070] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group studio-card flex items-center justify-between p-6 sm:p-7 rounded-2xl transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--accent)]">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-white group-hover:text-[var(--accent)] transition-colors">LinkedIn</p>
                <p className="font-mono text-xs text-[#8A8F98]">in/aalirahman</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#707070] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group studio-card flex items-center justify-between p-6 sm:p-7 rounded-2xl transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--accent)]">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-white group-hover:text-[var(--accent)] transition-colors">Instagram</p>
                <p className="font-mono text-xs text-[#8A8F98]">@aali_ciao</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#707070] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>

        {/* Bottom Colophon & Back To Top */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#707070] gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <p className="text-[var(--accent)] font-semibold hidden md:block">
            DESIGNED &amp; ENGINEERED FOR HIGH-IMPACT PROBLEM SOLVING.
          </p>
          <button
            onClick={scrollToTop}
            className="roll-btn group flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <span className="roll-text">
              <span data-text="BACK TO TOP ↑">BACK TO TOP ↑</span>
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
