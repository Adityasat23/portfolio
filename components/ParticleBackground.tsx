"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    // Use a safe reference object for dimensions that TS can trust inside the class
    const canvasSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvasSize.width = canvas.width;
      canvasSize.height = canvas.height;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvasSize.width;
        this.y = Math.random() * canvasSize.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        
        const colors = theme === 'dark' 
          ? ['rgba(255,255,255,0.15)', 'rgba(59,130,246,0.3)', 'rgba(239,68,68,0.2)']
          : ['rgba(0,0,0,0.1)', 'rgba(37,99,235,0.2)', 'rgba(220,38,38,0.15)'];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasSize.width) this.x = 0;
        else if (this.x < 0) this.x = canvasSize.width;
        
        if (this.y > canvasSize.height) this.y = 0;
        else if (this.y < 0) this.y = canvasSize.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      const numberOfParticles = Math.floor((canvasSize.width * canvasSize.height) / 12000);
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}