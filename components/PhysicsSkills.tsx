"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const SKILLS = [
  "Next.js", "Video Production", "Unreal Engine 5", 
  "UI/UX Design", "Framer Motion", "Tailwind CSS",
  "Performance Marketing", "Creative Operations"
];

export default function PhysicsSkills() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !sceneRef.current) return;

    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    // 1. Setup Engine & Antigravity (Negative Y gravity)
    const engine = Engine.create({
      gravity: { x: 0, y: -0.2, scale: 0.001 } // Negative Y makes them float up!
    });
    engineRef.current = engine;

    const container = sceneRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 2. Setup invisible renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent'
      }
    });
    renderRef.current = render;

    // 3. Create Boundaries (Walls, Ceiling, Floor)
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -50, width, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions);

    // 4. Create Skill Pills (Bodies)
    const bodies = SKILLS.map((_, index) => {
      // Random starting positions near the bottom
      const x = Math.random() * (width - 200) + 100;
      const y = height + (Math.random() * 200); 
      return Bodies.rectangle(x, y, 160, 48, { // Approximate size of the HTML pills
        chamfer: { radius: 24 },
        restitution: 0.6, // Bounciness
        frictionAir: 0.01,
        render: { visible: false } // We hide the canvas objects to show HTML instead
      });
    });

    Composite.add(engine.world, [ground, ceiling, leftWall, rightWall, ...bodies]);

    // 5. Add Mouse Interaction (Drag them around)
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Composite.add(engine.world, mouseConstraint);

    // Keep the mouse in sync with scrolling
    render.mouse = mouse;

    // 6. Sync HTML elements to Physics Bodies
    const htmlElements = Array.from(container.querySelectorAll('.skill-pill')) as HTMLElement[];
    
    Matter.Events.on(engine, 'afterUpdate', () => {
      bodies.forEach((body, i) => {
        const el = htmlElements[i];
        if (el) {
          // Translate and rotate HTML elements to match physics bodies
          el.style.transform = `translate(${body.position.x - 80}px, ${body.position.y - 24}px) rotate(${body.angle}rad)`;
        }
      });
    });

    // Run the engine
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Cleanup on unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div ref={sceneRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
      {/* HTML Elements mapped to physics bodies */}
      {SKILLS.map((skill, i) => (
        <div 
          key={i}
          className="skill-pill absolute top-0 left-0 flex items-center justify-center px-6 h-12 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-full font-medium text-sm text-neutral-900 dark:text-neutral-100 shadow-sm select-none cursor-grab active:cursor-grabbing backdrop-blur-sm"
          style={{ width: '160px' }} // Fixed width matches the physics body
        >
          {skill}
        </div>
      ))}
    </div>
  );
}