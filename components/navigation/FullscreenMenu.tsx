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
  isLightWorld?: boolean;
}

const navLinks = [
  { number: "01", label: "HOME & CLIMAX", targetId: "hero" },
  { number: "02", label: "INTRODUCTION", targetId: "intro" },
  { number: "03", label: "SELECTED WORK", targetId: "work" },
  { number: "04", label: "EXPERIENCE", targetId: "experience" },
  { number: "05", label: "RESEARCH", targetId: "research" },
  { number: "06", label: "TECHNICAL TAXONOMY", targetId: "stack" },
  { number: "07", label: "OUTSIDE THE SCREEN", targetId: "perspective" },
  { number: "08", label: "CONTACT & INQUIRY", targetId: "contact" },
];

export function FullscreenMenu({
  isOpen,
  onClose,
  onNavigate,
  activeSection,
  isLightWorld = false,
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

  const bgClass = isLightWorld ? "bg-[#F4F1E9] text-[#111111]" : "bg-[#07060B] text-[#F5F5F7]";
  const borderClass = isLightWorld ? "border-[#111111]/[0.08]" : "border-white/[0.1]";
  const subtextClass = isLightWorld ? "text-[#6F6B64]" : "text-[#A0A0B0]";
  const activeColor = isLightWorld ? "text-[#315C43]" : "text-[var(--accent)]";
  const hoverColor = isLightWorld
    ? "group-hover:text-[#315C43]"
    : "group-hover:text-[var(--accent)]";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed inset-0 z-50 flex flex-col justify-between p-6 md:p-12 lg:p-16 ${bgClass}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Menu */}
          <div className={`flex items-center justify-between border-b ${borderClass} pb-6`}>
            <div className="flex items-center gap-3">
              <span
                className={`w-2 h-2 rounded-full ${
                  isLightWorld
                    ? "bg-[#315C43]"
                    : "bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse"
                }`}
              />
              <span className={`font-mono text-xs uppercase tracking-widest ${subtextClass}`}>
                {siteConfig.name} — Directory
              </span>
            </div>

            <button
              onClick={onClose}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full border ${borderClass} hover:border-[#315C43] transition-colors duration-200 text-sm font-mono tracking-wider cursor-pointer`}
              aria-label="Close menu"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="my-auto py-8">
            <ul className="flex flex-col gap-2 md:gap-3">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.targetId;
                return (
                  <motion.li
                    key={link.targetId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.03 * idx,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <button
                      onClick={() => {
                        onNavigate(link.targetId);
                        onClose();
                      }}
                      className="group flex items-baseline gap-4 md:gap-8 text-left w-full cursor-pointer py-1.5 focus:outline-none"
                    >
                      <span
                        className={`font-mono text-xs md:text-sm tabular-nums transition-colors ${
                          isLightWorld ? "text-[#9A958B]" : "text-[#66667B]"
                        } ${hoverColor}`}
                      >
                        {link.number}
                      </span>
                      <span
                        className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight transition-all duration-300 ${
                          isActive
                            ? `${activeColor} translate-x-3 font-medium`
                            : `${hoverColor} group-hover:translate-x-3`
                        }`}
                      >
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 md:w-6 md:h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                          isLightWorld ? "text-[#315C43]" : "text-[var(--accent)]"
                        }`}
                      />
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Meta & Socials */}
          <div
            className={`flex flex-col md:flex-row items-start md:items-center justify-between pt-6 border-t ${borderClass} text-xs font-mono ${subtextClass} gap-4`}
          >
            <div>
              <span>
                BASED IN {siteConfig.location.city.toUpperCase()},{" "}
                {siteConfig.location.country.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={isLightWorld ? "hover:text-[#111111]" : "hover:text-[var(--accent)]"}
              >
                GITHUB
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={isLightWorld ? "hover:text-[#111111]" : "hover:text-[var(--accent)]"}
              >
                LINKEDIN
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className={isLightWorld ? "hover:text-[#111111]" : "hover:text-[var(--accent)]"}
              >
                EMAIL
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
