"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uVelocity;
varying vec2 vUv;

// Simplex / FBM noise
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.04 + vec2(1.6, 9.2);
    a *= 0.5;
  }
  return v;
}

void main() {
  float aspect = uRes.x / max(uRes.y, 1.0);
  vec2 p = (vUv - 0.5) * vec2(aspect, 1.0);
  vec2 m = uMouse * 0.5 * vec2(aspect, 1.0);
  float t = uTime * 0.08;

  // Liquid warp displacement
  vec2 w = vec2(
    fbm(p * 1.4 + vec2(t, -t * 0.6)),
    fbm(p * 1.4 + vec2(-t * 0.7, t) + 5.2)
  ) - 0.5;

  // Mouse interaction swirl
  vec2 dm = p - m;
  float dist = dot(dm, dm);
  float infl = exp(-dist * 6.0);
  p += w * (0.12 + 0.18 * uVelocity);
  p += normalize(dm + 0.0001) * infl * 0.08;

  // Deep space base gradient
  vec3 bgVoid = vec3(0.02, 0.024, 0.043); // #07060B
  vec3 deepNavy = vec3(0.04, 0.07, 0.22);
  vec3 accentLime = vec3(0.35, 1.0, 0.08); // #5AFF15
  vec3 skyBlue = vec3(0.08, 0.55, 0.95);

  float flow = fbm(p * 1.8 + t * 0.5);
  vec3 col = mix(bgVoid, deepNavy, smoothstep(0.3, 0.8, flow));

  // Neon subtle ripples
  float edge = smoothstep(0.68, 0.75, flow) * (1.0 - smoothstep(0.75, 0.82, flow));
  col += accentLime * edge * 0.35;
  col += skyBlue * infl * 0.4;

  // Vignette
  float vign = smoothstep(1.3, 0.3, length(p));
  col *= mix(0.35, 1.0, vign);

  gl_FragColor = vec4(col, 0.85);
}
`;

export function FluidShaderCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);

    const dom = renderer.domElement;
    dom.style.width = "100%";
    dom.style.height = "100%";
    dom.style.display = "block";
    dom.style.pointerEvents = "none";
    container.appendChild(dom);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uVelocity: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w * dpr, h * dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let prevX = 0;
    let prevY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentVel = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = nx;
      targetY = ny;

      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      const speed = Math.hypot(dx, dy);
      currentVel = Math.min(1.0, currentVel + speed * 0.05);
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "100px" }
    );
    intersectionObserver.observe(container);

    let animId: number;
    let lastTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      uniforms.uTime.value += dt;

      // Mouse smoothing
      uniforms.uMouse.value.x += (targetX - uniforms.uMouse.value.x) * 0.08;
      uniforms.uMouse.value.y += (targetY - uniforms.uMouse.value.y) * 0.08;

      // Velocity decay
      currentVel *= 0.94;
      uniforms.uVelocity.value = currentVel;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("mousemove", handlePointerMove);
      material.dispose();
      geometry.dispose();
      renderer.dispose();
      dom.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-45 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
