"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { FullscreenMenu } from "./FullscreenMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightWorld, setIsLightWorld] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect if user has crossed into World 02
      const world02El = document.getElementById("world-02");
      if (world02El) {
        const rect = world02El.getBoundingClientRect();
        // Once the top of World 02 reaches near the top of the viewport (or slightly below header)
        setIsLightWorld(rect.top <= 80);
      }

      // Active section detection
      const sections = [
        "hero",
        "intro",
        "work",
        "experience",
        "research",
        "stack",
        "perspective",
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
    handleScroll();

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
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-500 ${
          isLightWorld
            ? "backdrop-blur-md bg-[rgba(244,241,233,0.92)] border-b border-[rgba(17,17,17,0.08)] py-3.5 text-[#111111]"
            : isScrolled
            ? "backdrop-blur-md bg-[rgba(7,6,11,0.85)] border-b border-[rgba(255,255,255,0.08)] py-3.5 text-[#F5F5F7]"
            : "bg-transparent text-[#F5F5F7]"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavigate("hero")}
            className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
            aria-label="Scroll to top"
          >
            {/* Small status dot: acid green callback */}
            <span
              className={`w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${
                isLightWorld
                  ? "bg-[#5AFF15] shadow-[0_0_6px_rgba(90,255,21,0.8)] border border-[#315C43]/20"
                  : "bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
              }`}
            />
            <span
              className={`font-heading font-normal text-sm sm:text-base tracking-tight transition-colors ${
                isLightWorld ? "text-[#111111]" : "text-[#F5F5F7]"
              }`}
            >
              {siteConfig.name.toUpperCase()}
            </span>
            <span
              className={`hidden sm:inline font-mono text-[11px] tracking-wider border-l pl-2.5 transition-colors ${
                isLightWorld
                  ? "text-[#6F6B64] border-[rgba(17,17,17,0.12)]"
                  : "text-[var(--text-muted)] border-[rgba(255,255,255,0.15)]"
              }`}
            >
              ENGINEER / RESEARCHER
            </span>
          </button>

          {/* Right Menu Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => handleNavigate("contact")}
              className={`group hidden sm:inline-flex items-center text-xs font-mono tracking-wider font-medium px-4 py-2 rounded-full border transition-all cursor-pointer ${
                isLightWorld
                  ? "border-[#111111]/[0.15] text-[#111111] hover:border-[#315C43] hover:text-[#315C43] hover:bg-[#111111]/[0.02]"
                  : "border-white/[0.15] text-[#F5F5F7] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              <span>LET&apos;S TALK</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className={`group flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-mono text-xs tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer ${
                isLightWorld
                  ? "bg-[#315C43] text-[#F4F1E9] hover:bg-[#254633] shadow-sm"
                  : "bg-[var(--accent)] text-[var(--accent-contrast)] hover:shadow-[0_0_20px_rgba(90,255,21,0.4)]"
              }`}
              aria-expanded={isMenuOpen}
              aria-label="Open Navigation Menu"
            >
              <span>MENU</span>
              <Menu className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
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
        isLightWorld={isLightWorld}
      />
    </>
  );
}
