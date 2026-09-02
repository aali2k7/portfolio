"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroBackgroundVideoProps {
  videoSrcWebm?: string;
  videoSrcMp4?: string;
}

export function HeroBackgroundVideo({
  videoSrcWebm = "/video/ambient-contour.webm",
  videoSrcMp4 = "/video/ambient-contour.mp4",
}: HeroBackgroundVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Generative fluid organic contour canvas ("The website is breathing")
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;
    const numCurves = 7;

    const render = () => {
      time += 0.0035; // Slow, breathing pace
      ctx.clearRect(0, 0, width, height);

      // Subtle base gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "rgba(244, 244, 240, 1)");
      bgGrad.addColorStop(0.5, "rgba(238, 238, 232, 1)");
      bgGrad.addColorStop(1, "rgba(244, 244, 240, 1)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render breathing contour waves
      for (let i = 0; i < numCurves; i++) {
        ctx.beginPath();
        const baseHeight = (height / (numCurves + 1)) * (i + 1);
        const waveSpeed = time * (0.8 + i * 0.15);
        const opacity = 0.035 + (i % 3) * 0.015;

        ctx.strokeStyle = `rgba(10, 10, 10, ${opacity})`;
        ctx.lineWidth = 1.25;

        for (let x = 0; x <= width; x += 15) {
          const yOffset =
            Math.sin(x * 0.0025 + waveSpeed + i * 1.2) * 55 +
            Math.cos(x * 0.0012 - waveSpeed * 0.7 + i) * 35 +
            Math.sin(time * 0.5 + i) * 20;

          const y = baseHeight + yOffset;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* LAYER 1: Generative Organic Breathing Contour Canvas (Always Active / Fallback) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* LAYER 1B: Ambient Looping Video (If available and motion enabled) */}
      {!prefersReducedMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-1000 ${
            videoLoaded ? "opacity-25" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <source src={videoSrcWebm} type="video/webm" />
          <source src={videoSrcMp4} type="video/mp4" />
        </video>
      )}

      {/* LAYER 2: Subtle Contrast Mask & Grain Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[rgba(244,244,240,0.3)] to-[rgba(244,244,240,0.85)]" />
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
    </div>
  );
}
