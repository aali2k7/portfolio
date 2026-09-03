"use client";

import Image from "next/image";

interface SignatureRevealProps {
  isMassive?: boolean;
  className?: string;
  glow?: boolean;
}

export function SignatureReveal({
  isMassive = false,
  className = "",
  glow = true,
}: SignatureRevealProps) {
  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        transform: "rotate(-8.5deg)",
        transformOrigin: "center center",
      }}
    >
      {/* Subtle Glow Aura Layer */}
      {glow && (
        <div
          className="absolute inset-0 -m-8 pointer-events-none"
          style={{
            opacity: 0.75,
            filter: "blur(28px)",
            background:
              "radial-gradient(ellipse at center, rgba(90, 255, 21, 0.38) 0%, rgba(90, 255, 21, 0.12) 50%, transparent 80%)",
          }}
        />
      )}

      {/* Static Crisp Authentic Signature */}
      <div
        className="relative overflow-visible"
        style={{
          filter: glow
            ? "drop-shadow(0 0 16px rgba(90, 255, 21, 0.65)) drop-shadow(0 0 36px rgba(90, 255, 21, 0.3))"
            : "none",
        }}
      >
        <div
          className={`relative aspect-[1024/576] ${
            isMassive
              ? "w-[78vw] sm:w-[68vw] md:w-[54vw] lg:w-[46vw] max-w-[880px]"
              : "w-[52vw] sm:w-[40vw] md:w-[30vw] max-w-[440px]"
          }`}
        >
          <Image
            src="/images/signature.png"
            alt="Aali Rahman Signature"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 880px"
            className="object-contain object-center will-change-transform"
          />
        </div>
      </div>
    </div>
  );
}
