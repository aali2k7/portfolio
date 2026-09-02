"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/data/siteConfig";

interface SignatureRevealProps {
  progress?: number; // 0 (hidden) to 1 (fully drawn & focused)
}

export function SignatureReveal({ progress = 1 }: SignatureRevealProps) {
  // Clamp progress between 0 and 1
  const p = Math.max(0, Math.min(1, progress));

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-4">
      {/* Editorial Declaration Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[var(--text-muted)]">
          IDENTITY / SIGNATURE
        </span>
      </div>

      {/* SVG Signature Canvas */}
      <div className="w-full aspect-[600/220] relative flex items-center justify-center">
        <svg
          viewBox="0 0 600 240"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-[var(--text-primary)]"
        >
          {/* Main Name Signature Stroke 1 */}
          <motion.path
            d="M 60 180 C 75 140, 110 50, 135 60 C 150 65, 125 170, 115 190 C 130 170, 180 130, 200 135 C 215 138, 195 185, 185 190 C 195 175, 230 145, 250 145 C 265 145, 250 185, 245 190"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: p >= 0.2 ? 1 : p * 5 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Cross stroke */}
          <motion.path
            d="M 85 130 Q 155 125 210 120"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: p >= 0.4 ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Rahman Stroke 2 */}
          <motion.path
            d="M 280 185 C 290 140, 310 90, 330 95 C 345 100, 325 180, 320 190 C 335 160, 380 120, 420 125 C 450 130, 430 190, 410 195 C 440 160, 510 110, 560 100"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: p >= 0.6 ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          {/* Secondary flourish */}
          <motion.path
            d="M 380 145 Q 460 140 540 135"
            strokeWidth="3.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: p >= 0.75 ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Accent Underline Flourish */}
          <motion.path
            d="M 80 215 C 200 210, 420 220, 570 195 C 520 225, 340 235, 120 230"
            stroke="var(--accent)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: p >= 0.85 ? 1 : 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Signature Caption */}
      <div className="mt-2 text-center">
        <p className="font-display font-bold text-sm tracking-tight uppercase text-[var(--text-primary)]">
          {siteConfig.name}
        </p>
        <p className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider">
          HYDERABAD, IN • 2026
        </p>
      </div>
    </div>
  );
}
