"use client";

import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0, active: false });
  const particlesRef = useRef([]);
  const ambientRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    // Handle high DPI screens
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse move
    const handleMouseMove = (e) => {
      const mouse = mouseRef.current;
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      const dx = mouse.x - mouse.px;
      const dy = mouse.y - mouse.py;
      const speed = Math.sqrt(dx * dx + dy * dy);

      mouse.active = true;

      // Spawn trail particles based on mouse movement speed
      if (speed > 1) {
        const count = Math.min(Math.floor(speed / 4) + 1, 4);
        for (let i = 0; i < count; i++) {
          spawnTrailParticle(mouse.x, mouse.y, dx * 0.1, dy * 0.1);
        }
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Emerald/Jade green color palette
    const colors = [
      "rgba(16, 185, 129, ",   // emerald-500
      "rgba(52, 211, 153, ",   // emerald-400
      "rgba(5, 150, 105, ",    // emerald-600
      "rgba(110, 231, 183, ",  // emerald-300
      "rgba(6, 78, 59, ",      // emerald-900
      "rgba(0, 245, 160, ",    // bright neon jade
    ];

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const spawnTrailParticle = (x, y, vxBase, vyBase) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.2 + 0.2;
      
      particlesRef.current.push({
        x,
        y,
        // Drift outwards + trail direction
        vx: Math.cos(angle) * speed + vxBase * 0.4,
        vy: Math.sin(angle) * speed + vyBase * 0.4 - 0.15, // slight upward float
        size: Math.random() * 2.2 + 1.2, // starting size (very small pixels)
        maxSize: Math.random() * 2.2 + 1.2,
        alpha: 0.95,
        decay: Math.random() * 0.02 + 0.02, // decay rate (tighter trails)
        color: getRandomColor(),
      });
    };

    // Spawn ambient background drifting particles
    const spawnAmbientParticles = () => {
      const maxAmbient = 25;
      while (ambientRef.current.length < maxAmbient) {
        ambientRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height + height, // Spawn below screen edge
          vx: (Math.random() - 0.5) * 0.15,
          vy: -Math.random() * 0.3 - 0.08, // Very slow float up
          size: Math.random() * 1.6 + 0.8, // Tiny stars
          alpha: Math.random() * 0.35 + 0.05,
          color: getRandomColor(),
        });
      }
    };

    // Pre-populate ambient particles across the screen
    for (let i = 0; i < 25; i++) {
      ambientRef.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.3 - 0.08,
        size: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.35 + 0.05,
        color: getRandomColor(),
      });
    }

    // Helper: Draw a sharp square pixel on the canvas
    const drawPixel = (p, currentAlpha) => {
      ctx.save();
      ctx.fillStyle = `${p.color}${currentAlpha})`;
      const renderSize = Math.max(1, Math.round(p.size));
      // Floor coords and round size to align perfectly to screen pixels (no blur)
      ctx.fillRect(
        Math.floor(p.x - renderSize / 2),
        Math.floor(p.y - renderSize / 2),
        renderSize,
        renderSize
      );
      ctx.restore();
    };

    // Animation Loop
    const update = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Process trail particles
      const activeParticles = [];
      const trail = particlesRef.current;
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size = p.maxSize * (p.alpha); // shrink

        if (p.alpha > 0 && p.size > 0.4 && p.x >= 0 && p.x <= width && p.y >= 0 && p.y <= height) {
          drawPixel(p, p.alpha);
          activeParticles.push(p);
        }
      }
      particlesRef.current = activeParticles;

      // 2. Process ambient particles
      spawnAmbientParticles();
      const activeAmbient = [];
      const ambient = ambientRef.current;
      for (let i = 0; i < ambient.length; i++) {
        const p = ambient[i];
        p.x += p.vx;
        p.y += p.vy;

        // If it floats off the top, reset to bottom
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        drawPixel(p, p.alpha);
        activeAmbient.push(p);
      }
      ambientRef.current = activeAmbient;

      animationId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity: 0.8 }}
    />
  );
}
