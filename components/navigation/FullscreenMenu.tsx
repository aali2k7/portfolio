"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const navLinks = [
  { number: "01", label: "HOME / IDENTITY", targetId: "hero" },
  { number: "02", label: "SELECTED WORK", targetId: "projects" },
  { number: "03", label: "ABOUT & PHILOSOPHY", targetId: "about" },
  { number: "04", label: "EXPERIENCE", targetId: "experience" },
  { number: "05", label: "RESEARCH", targetId: "research" },
  { number: "06", label: "TECH STACK", targetId: "stack" },
  { number: "07", label: "BEYOND CODE", targetId: "personal" },
  { number: "08", label: "CONTACT", targetId: "contact" },
];

export function FullscreenMenu({
  isOpen,
  onClose,
  onNavigate,
  activeSection,
}: FullscreenMenuProps) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#07060B] text-[#F5F5F7] p-6 md:p-12 lg:p-16"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#A0A0B0]">
                {siteConfig.name} — Directory
              </span>
            </div>

            <button
              onClick={onClose}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 text-sm font-mono tracking-wider cursor-pointer"
              aria-label="Close menu"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="my-auto py-8">
            <ul className="flex flex-col gap-2 md:gap-4">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.targetId;
                return (
                  <motion.li
                    key={link.targetId}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.04 * idx,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <button
                      onClick={() => {
                        onNavigate(link.targetId);
                        onClose();
                      }}
                      className="group flex items-baseline gap-4 md:gap-8 text-left w-full cursor-pointer py-1"
                    >
                      <span className="font-mono text-xs md:text-sm text-[#66667B] group-hover:text-[var(--accent)] transition-colors">
                        {link.number}
                      </span>
                      <span
                        className={`font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300 ${
                          isActive
                            ? "text-[var(--accent)] translate-x-3"
                            : "text-[#E5E5EA] group-hover:text-[var(--accent)] group-hover:translate-x-3"
                        }`}
                      >
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--accent)]" />
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Meta & Socials */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.1)] text-xs font-mono text-[#808095] gap-4">
            <div>
              <span>BASED IN {siteConfig.location.city.toUpperCase()}, {siteConfig.location.country.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                GITHUB
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
