"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { FullscreenMenu } from "./FullscreenMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = [
        "hero",
        "projects",
        "about",
        "experience",
        "research",
        "stack",
        "personal",
        "contact",
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-[rgba(7,6,11,0.85)] border-b border-[rgba(255,255,255,0.08)] py-3.5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavigate("hero")}
            className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
            aria-label="Scroll to top"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] group-hover:scale-125 transition-transform" />
            <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-[var(--text-primary)]">
              {siteConfig.name.toUpperCase()}
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-[var(--text-muted)] tracking-wider border-l border-[rgba(255,255,255,0.15)] pl-2.5">
              DEV / PRODUCT
            </span>
          </button>

          {/* Right Menu Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavigate("contact")}
              className="hidden sm:inline-flex items-center text-xs font-mono tracking-wider font-semibold px-4 py-2 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-pointer text-[var(--text-primary)]"
            >
              LET&apos;S TALK
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 shadow-[0_0_12px_rgba(90,255,21,0.25)] transition-all duration-200 cursor-pointer text-xs font-mono tracking-widest uppercase font-bold"
              aria-expanded={isMenuOpen}
              aria-label="Open Navigation Menu"
            >
              <span>MENU</span>
              <Menu className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />
    </>
  );
}
