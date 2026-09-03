"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroBackgroundVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Generative fluid organic contour canvas ("The deep space is breathing")
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
    const numCurves = 8;

    const render = () => {
      time += 0.003; // Slow, hypnotic breathing pace
      ctx.clearRect(0, 0, width, height);

      // Deep Navy/Purple Base Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "rgba(7, 6, 11, 1)");
      bgGrad.addColorStop(0.5, "rgba(13, 10, 24, 1)");
      bgGrad.addColorStop(1, "rgba(7, 6, 11, 1)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Deep purple / violet ambient radial glow
      const radialGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        50,
        width * 0.5,
        height * 0.45,
        width * 0.6
      );
      radialGlow.addColorStop(0, "rgba(75, 45, 130, 0.18)");
      radialGlow.addColorStop(0.5, "rgba(35, 20, 70, 0.08)");
      radialGlow.addColorStop(1, "rgba(7, 6, 11, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Render subtle breathing contour lines
      for (let i = 0; i < numCurves; i++) {
        ctx.beginPath();
        const baseHeight = (height / (numCurves + 1)) * (i + 1);
        const waveSpeed = time * (0.6 + i * 0.12);
        const opacity = 0.04 + (i % 3) * 0.02;

        ctx.strokeStyle = `rgba(160, 140, 220, ${opacity})`;
        ctx.lineWidth = 1.0;

        for (let x = 0; x <= width; x += 20) {
          const yOffset =
            Math.sin(x * 0.002 + waveSpeed + i * 1.1) * 45 +
            Math.cos(x * 0.001 - waveSpeed * 0.6 + i) * 30 +
            Math.sin(time * 0.4 + i) * 15;

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
      {/* Generative Organic Breathing Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Deep Atmosphere Vignette & Film Grain Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[rgba(7,6,11,0.4)] to-[rgba(7,6,11,0.95)]" />
      <div className="absolute inset-0 bg-grain opacity-60 mix-blend-overlay" />
    </div>
  );
}
