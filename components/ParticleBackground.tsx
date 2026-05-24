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

    const canvasSize = { width: window.innerWidth, height: window.innerHeight };
    
    // Track mouse position
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

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
      baseX: number;
      baseY: number;
      speedX: number;
      speedY: number;
      color: string;
      density: number;

      constructor() {
        this.x = Math.random() * canvasSize.width;
        this.y = Math.random() * canvasSize.height;
        this.baseX = this.x;
        this.baseY = this.y;
        // Increased size for better visibility
        this.size = Math.random() * 2.5 + 1; 
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.density = (Math.random() * 30) + 1;
        
        // Increased opacity for visibility, kept the Antigravity colors
        const colors = theme === 'dark' 
          ? ['rgba(255,255,255,0.4)', 'rgba(59,130,246,0.5)', 'rgba(239,68,68,0.3)']
          : ['rgba(0,0,0,0.3)', 'rgba(37,99,235,0.4)', 'rgba(220,38,38,0.2)'];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Normal drift
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around
        if (this.baseX > canvasSize.width) this.baseX = 0;
        else if (this.baseX < 0) this.baseX = canvasSize.width;
        if (this.baseY > canvasSize.height) this.baseY = 0;
        else if (this.baseY < 0) this.baseY = canvasSize.height;

        // Mouse interaction (Repulsion effect)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to base position smoothly
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
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
      // Increased density of particles
      const numberOfParticles = Math.floor((canvasSize.width * canvasSize.height) / 8000);
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-0"
      aria-hidden="true"
    />
  );
}