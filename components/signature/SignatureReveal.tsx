"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface SignatureRevealProps {
  progress?: number; // Optional external scroll progression override (0 -> 1)
  isMassive?: boolean;
  className?: string;
  glow?: boolean;
  mouseOffset?: { x: number; y: number };
  scrollInertia?: { y: number; rotate: number };
}

export function SignatureReveal({
  progress,
  isMassive = false,
  className = "",
  glow = true,
  mouseOffset = { x: 0, y: 0 },
  scrollInertia = { y: 0, rotate: 0 },
}: SignatureRevealProps) {
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    // When mounted, complete the handwriting sequence after 2.4s
    const timer = setTimeout(() => {
      setIsDrawn(true);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative select-none pointer-events-none transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y + scrollInertia.y}px, 0) rotate(${-8.5 + scrollInertia.rotate}deg)`,
        transformOrigin: "center center",
      }}
    >
      {/* Outer Floating & Breathing Wrapper (Active continuously after draw or always subtly moving) */}
      <div className={isDrawn ? "animate-signature-idle" : ""}>
        
        {/* Glow Aura Layer */}
        {glow && (
          <div
            className="absolute inset-0 -m-8 pointer-events-none transition-opacity duration-1000"
            style={{
              opacity: 0.75,
              filter: "blur(28px)",
              background:
                "radial-gradient(ellipse at center, rgba(90, 255, 21, 0.38) 0%, rgba(90, 255, 21, 0.12) 50%, transparent 80%)",
            }}
          />
        )}

        {/* SVG Container with Mask for Authentic Handwriting Reveal */}
        <div
          className="relative overflow-visible"
          style={{
            filter: glow
              ? "drop-shadow(0 0 16px rgba(90, 255, 21, 0.65)) drop-shadow(0 0 36px rgba(90, 255, 21, 0.3))"
              : "none",
          }}
        >
          <svg
            viewBox="0 0 1024 576"
            className={`overflow-visible ${
              isMassive
                ? "w-[78vw] sm:w-[68vw] md:w-[54vw] lg:w-[46vw] max-w-[880px]"
                : "w-[52vw] sm:w-[40vw] md:w-[30vw] max-w-[440px]"
            } h-auto`}
          >
            <defs>
              {/* Natural Handwriting Sequential Stroke Mask */}
              <mask id="handwriting-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1024" height="576">
                {/* Black background hides all */}
                <rect x="0" y="0" width="1024" height="576" fill="black" />

                {/* STROKE 1: Outer Oval Loop (Bottom-Left -> Clockwise -> Top-Right -> Loop Bottom) */}
                <motion.path
                  d="M 140 430 C 120 380, 200 180, 360 140 C 560 90, 780 130, 740 230 C 700 330, 480 430, 260 450 C 180 460, 120 440, 160 380"
                  fill="none"
                  stroke="white"
                  strokeWidth="58"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress !== undefined ? Math.min(1, progress * 3) : 1 }}
                  transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                />

                {/* STROKE 2: Ascending 'A' loop and cross */}
                <motion.path
                  d="M 340 480 L 335 160 Q 380 320 410 430 M 270 390 Q 360 375 440 370"
                  fill="none"
                  stroke="white"
                  strokeWidth="50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress !== undefined ? Math.min(1, Math.max(0, (progress - 0.25) * 3)) : 1 }}
                  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
                />

                {/* STROKE 3: Cursive 'ali' letterforms and dot */}
                <motion.path
                  d="M 390 380 Q 420 340 450 370 Q 480 340 495 210 Q 515 360 550 365 M 560 310 L 565 310"
                  fill="none"
                  stroke="white"
                  strokeWidth="48"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress !== undefined ? Math.min(1, Math.max(0, (progress - 0.5) * 3)) : 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 1.2 }}
                />

                {/* STROKE 4: Underline flourish sweeping across to the right */}
                <motion.path
                  d="M 560 395 C 600 350, 720 370, 850 360 L 1024 345"
                  fill="none"
                  stroke="white"
                  strokeWidth="54"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress !== undefined ? Math.min(1, Math.max(0, (progress - 0.7) * 3.3)) : 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
                />
              </mask>
            </defs>

            {/* Render the Authentic Signature Masked by the Handwriting Path */}
            <image
              href="/images/signature.png"
              x="0"
              y="0"
              width="1024"
              height="576"
              mask="url(#handwriting-mask)"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>

          {/* Active Glowing Writing Sparkle (visible during initial draw) */}
          {!isDrawn && progress === undefined && (
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-[#5AFF15] shadow-[0_0_16px_#5AFF15,0_0_32px_#5AFF15] pointer-events-none"
              initial={{ opacity: 1, scale: 1.2, top: "72%", left: "15%" }}
              animate={{
                top: ["72%", "25%", "65%", "60%"],
                left: ["15%", "65%", "40%", "95%"],
                opacity: [1, 1, 1, 0],
                scale: [1.2, 1.6, 1.3, 0],
              }}
              transition={{ duration: 2.3, ease: "easeInOut" }}
            />
          )}
        </div>

      </div>
    </div>
  );
}
