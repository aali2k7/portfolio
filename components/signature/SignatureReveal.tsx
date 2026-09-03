"use client";

import { useMemo } from "react";

interface SignatureRevealProps {
  progress?: number; // 0 (hidden) -> 1 (fully drawn)
  isMassive?: boolean;
  className?: string;
  glow?: boolean;
}

export function SignatureReveal({
  progress = 0,
  isMassive = false,
  className = "",
  glow = true,
}: SignatureRevealProps) {
  // Clamp progress between 0 and 1
  const p = Math.max(0, Math.min(1, progress));

  // Stroke Progress Segments (0 -> 1)
  // Stroke 1: Capital 'A' Letterform (0.05 -> 0.30)
  const p1 = Math.max(0, Math.min(1, (p - 0.05) / 0.25));
  // Stroke 2: Cursive 'ali' & dot (0.24 -> 0.50)
  const p2 = Math.max(0, Math.min(1, (p - 0.24) / 0.26));
  // Stroke 3: Grand Outer Loop (0.44 -> 0.78)
  const p3 = Math.max(0, Math.min(1, (p - 0.44) / 0.34));
  // Stroke 4: Flourish Underline (0.72 -> 0.96)
  const p4 = Math.max(0, Math.min(1, (p - 0.72) / 0.24));

  // Active glowing pen spark position tracking the leading stroke
  const penTip = useMemo(() => {
    if (p < 0.04 || p >= 0.97) return null;

    if (p < 0.26) {
      // Stroke 1: 'A'
      const t = p1;
      const x = 339 + (t < 0.5 ? -t * 6 : (t - 0.5) * 52);
      const y = t < 0.5 ? 480 - t * 640 : 160 + (t - 0.5) * 640;
      return { x, y };
    } else if (p < 0.46) {
      // Stroke 2: 'ali'
      const t = p2;
      const x = 370 + t * 190;
      const y = t < 0.6 ? 410 - Math.sin(t * Math.PI) * 230 : 365 + Math.sin((t - 0.6) * Math.PI * 2) * 20;
      return { x, y };
    } else if (p < 0.74) {
      // Stroke 3: Outer Loop
      const t = p3;
      if (t < 0.5) {
        // Upward diagonal to apex (700, 148)
        const x = 158 + (t / 0.5) * 542;
        const y = 414 - (t / 0.5) * 266;
        return { x, y };
      } else {
        // Downward return curve
        const t2 = (t - 0.5) / 0.5;
        const x = 700 - t2 * 542;
        const y = 148 + t2 * 299;
        return { x, y };
      }
    } else {
      // Stroke 4: Flourish
      const t = p4;
      const x = 530 + t * 494;
      const y = 395 - t * 50;
      return { x, y };
    }
  }, [p, p1, p2, p3, p4]);

  // Overall signature opacity based on progress
  const containerOpacity = p > 0.02 ? Math.min(1, p * 8) : 0;
  const isComplete = p >= 0.96;

  return (
    <div
      className={`relative select-none pointer-events-none will-change-transform ${className}`}
      style={{
        transform: "rotate(-8.5deg)",
        transformOrigin: "center center",
        opacity: containerOpacity,
        transition: "opacity 0.15s ease-out",
      }}
    >
      {/* Dynamic Ambient Glow Aura */}
      {glow && (
        <div
          className="absolute inset-0 -m-8 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: Math.min(0.85, p * 0.95),
            filter: "blur(28px)",
            background:
              "radial-gradient(ellipse at center, rgba(90, 255, 21, 0.45) 0%, rgba(90, 255, 21, 0.12) 55%, transparent 80%)",
          }}
        />
      )}

      {/* SVG Container with Padded ViewBox for Zero-Clipping & Complete Unbroken Reveal */}
      <div
        className="relative overflow-visible"
        style={{
          filter: glow
            ? "drop-shadow(0 0 14px rgba(90, 255, 21, 0.75)) drop-shadow(0 0 32px rgba(90, 255, 21, 0.35))"
            : "none",
        }}
      >
        <svg
          viewBox="-40 -40 1104 656"
          className={`overflow-visible ${isMassive
              ? "w-[78vw] sm:w-[68vw] md:w-[54vw] lg:w-[46vw] max-w-[880px]"
              : "w-[52vw] sm:w-[40vw] md:w-[30vw] max-w-[440px]"
            } h-auto`}
        >
          <defs>
            {/* Scroll-Driven Sequential Stroke Mask with Generous Bounds */}
            <mask
              id="scroll-handwriting-mask-fixed"
              maskUnits="userSpaceOnUse"
              x="-100"
              y="-100"
              width="1300"
              height="850"
            >
              {/* Black background */}
              <rect x="-100" y="-100" width="1300" height="850" fill="black" />

              {/* STROKE 1: Capital 'A' Letterform (Full Apex Coverage at 339, 155) */}
              <path
                d="M 342 480 L 339 150 L 365 480 M 260 395 L 440 370"
                fill="none"
                stroke="white"
                strokeWidth="130"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="950"
                strokeDashoffset={isComplete ? 0 : 950 * (1 - p1)}
              />

              {/* STROKE 2: Cursive 'ali' & Dot (Full Stem Coverage at 518, 185) */}
              <path
                d="M 365 420 C 375 330, 420 330, 450 370 C 475 320, 505 175, 518 190 L 522 365 C 535 370, 555 365, 570 370 M 545 290 L 575 325"
                fill="none"
                stroke="white"
                strokeWidth="125"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="900"
                strokeDashoffset={isComplete ? 0 : 900 * (1 - p2)}
              />

              {/* STROKE 3: Grand Outer Loop (Diagonal Swipe to 700, 148 -> Turnaround -> Return Arc) */}
              <path
                d="M 158 414 L 300 300 L 480 215 L 700 145 C 755 145, 775 190, 755 250 C 730 310, 660 350, 560 395 C 400 450, 220 460, 158 447 Z"
                fill="none"
                stroke="white"
                strokeWidth="150"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2700"
                strokeDashoffset={isComplete ? 0 : 2700 * (1 - p3)}
              />

              {/* STROKE 3B: Bottom Loop Reinforcement */}
              <path
                d="M 750 375 C 600 395, 450 425, 300 445 L 158 447"
                fill="none"
                stroke="white"
                strokeWidth="140"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="900"
                strokeDashoffset={isComplete ? 0 : 900 * (1 - p3)}
              />

              {/* STROKE 4: Flourish Underline (Across to 1024, 345) */}
              <path
                d="M 530 395 L 750 370 L 1024 345"
                fill="none"
                stroke="white"
                strokeWidth="135"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="750"
                strokeDashoffset={isComplete ? 0 : 750 * (1 - p4)}
              />
            </mask>
          </defs>

          {/* Render the Authentic Signature Masked by the Scroll-Driven Path */}
          <image
            href="/images/signature.png"
            x="0"
            y="0"
            width="1024"
            height="576"
            mask={isComplete ? undefined : "url(#scroll-handwriting-mask-fixed)"}
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Glowing Active Pen Tip Spark during Scroll */}
          {penTip && (
            <g transform={`translate(${penTip.x}, ${penTip.y})`}>
              <circle r="14" fill="rgba(90, 255, 21, 0.45)" filter="blur(4px)" />
              <circle r="6" fill="#5AFF15" />
              <circle r="3" fill="#FFFFFF" />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
