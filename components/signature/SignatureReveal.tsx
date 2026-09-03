"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface SignatureRevealProps {
  progress?: number; // 0 (hidden) to 1 (fully drawn & focused)
  isMassive?: boolean;
  className?: string;
  glow?: boolean;
}

export function SignatureReveal({
  progress = 1,
  isMassive = false,
  className = "",
  glow = true,
}: SignatureRevealProps) {
  // Clamp progress between 0 and 1
  const p = Math.max(0, Math.min(1, progress));

  // Mask clip width based on progress (reveals from left to right)
  const clipWidth = Math.min(100, Math.max(0, p * 115));

  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        transform: "rotate(-8.5deg)",
        transformOrigin: "center center",
      }}
    >
      {/* Glow Aura Layer */}
      {glow && (
        <div
          className="absolute inset-0 -m-8 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: Math.min(0.8, p * 0.9),
            filter: "blur(24px)",
            background:
              "radial-gradient(ellipse at center, rgba(90, 255, 21, 0.35) 0%, rgba(90, 255, 21, 0.1) 50%, transparent 80%)",
          }}
        />
      )}

      {/* SVG Stroke Path Animation + Authentic Signature Overlay */}
      <div
        className="relative overflow-visible"
        style={{
          filter: glow
            ? "drop-shadow(0 0 14px rgba(90, 255, 21, 0.55)) drop-shadow(0 0 35px rgba(90, 255, 21, 0.25))"
            : "none",
        }}
      >
        {/* Animated Reveal Container */}
        <div
          className="relative transition-all duration-100 ease-out"
          style={{
            clipPath: `polygon(0% 0%, ${clipWidth}% 0%, ${clipWidth}% 100%, 0% 100%)`,
          }}
        >
          {isMassive ? (
            <div className="relative w-[75vw] sm:w-[65vw] md:w-[50vw] lg:w-[42vw] max-w-[820px] aspect-[1024/576]">
              <Image
                src="/images/signature.png"
                alt="Aali Rahman Signature"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 820px"
                className="object-contain object-center will-change-transform"
              />
            </div>
          ) : (
            <div className="relative w-[50vw] sm:w-[38vw] md:w-[28vw] max-w-[420px] aspect-[1024/576]">
              <Image
                src="/images/signature.png"
                alt="Aali Rahman Signature"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 420px"
                className="object-contain object-center will-change-transform"
              />
            </div>
          )}
        </div>

        {/* Dynamic Pen/Spark Point at reveal edge */}
        {p > 0.05 && p < 0.96 && (
          <motion.div
            className="absolute top-1/2 w-3 h-3 -translate-y-1/2 rounded-full bg-[#5AFF15] shadow-[0_0_12px_#5AFF15,0_0_24px_#5AFF15]"
            style={{
              left: `${clipWidth}%`,
            }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        )}
      </div>
    </div>
  );
}
