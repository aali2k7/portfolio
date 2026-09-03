"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Copy, Check, Clock, Mail } from "lucide-react";
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

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0A0A0A] text-[#F4F4F0] pt-24 md:pt-36 pb-16 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-[rgba(255,255,255,0.12)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[rgba(255,255,255,0.12)] mb-16 md:mb-24">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
              08
            </span>
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#A0A0A0]">
              GET IN TOUCH / COLLABORATE
            </span>
          </div>
          
          <div className="flex items-center gap-2 font-mono text-xs text-[#A0A0A0]">
            <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>HYDERABAD, IN: {time || "07:30 PM"}</span>
          </div>
        </div>

        {/* Big Editorial CTA */}
        <div className="mb-20 md:mb-28">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4 font-bold">
            HAVE AN AMBITIOUS VISION?
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white leading-none">
            GOT A PROBLEM
            <span className="block text-[var(--accent)]">WORTH SOLVING?</span>
            <span className="block text-[#707070] hover:text-white transition-colors duration-500">
              LET&apos;S TALK.
            </span>
          </h2>
        </div>

        {/* Interactive Email Action Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 md:p-12 rounded-3xl bg-[#141414] border border-[rgba(255,255,255,0.1)] mb-20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#808080]">
              DIRECT INBOX
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-[var(--accent)] transition-colors mt-1"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#202020] hover:bg-[#2A2A2A] border border-[rgba(255,255,255,0.15)] text-xs font-mono tracking-wider font-semibold transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[var(--accent)]" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>SEND MESSAGE</span>
            </a>
          </div>
        </div>

        {/* Social Links Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-[rgba(255,255,255,0.12)]">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-[#141414] border border-[rgba(255,255,255,0.08)] hover:border-[var(--accent)] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <GithubIcon className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <p className="font-heading font-bold text-sm text-white">GitHub</p>
                <p className="font-mono text-xs text-[#808080]">@aali2k7</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#707070] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-[#141414] border border-[rgba(255,255,255,0.08)] hover:border-[var(--accent)] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <LinkedinIcon className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <p className="font-heading font-bold text-sm text-white">LinkedIn</p>
                <p className="font-mono text-xs text-[#808080]">in/aalirahman</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#707070] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-[#141414] border border-[rgba(255,255,255,0.08)] hover:border-[var(--accent)] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <InstagramIcon className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <p className="font-heading font-bold text-sm text-white">Instagram</p>
                <p className="font-mono text-xs text-[#808080]">@aali_ciao</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#707070] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#707070] gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <p className="text-[var(--accent)] font-semibold">
            DESIGNED & ENGINEERED FOR HIGH-IMPACT PROBLEM SOLVING.
          </p>
        </div>
      </div>
    </footer>
  );
}
