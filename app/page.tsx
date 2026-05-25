"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Video, PenTool, Layout, Code, Box, Cuboid } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";

// Animasi Antigravity
const textRevealContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const textRevealItem: Variants = { hidden: { opacity: 0, y: 40, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// Icon Wave Data
const softwareIcons = [
  { icon: Video, label: "Premiere", href: "/work" },
  { icon: PenTool, label: "Photoshop", href: "/work" },
  { icon: Layout, label: "Figma", href: "/work" },
  { icon: Code, label: "Next.js", href: "/work" },
  { icon: Box, label: "Blender", href: "/work" },
  { icon: Cuboid, label: "Unreal", href: "/work" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300">
      
      {/* Spacer untuk Navbar Global */}
      <div className="h-24"></div>

      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-32">
        
        {/* 1. ANTIGRAVITY HERO SECTION */}
        <section className="relative min-h-[70vh] flex flex-col justify-center border border-transparent overflow-visible">
          
          {/* Background Partikel Tetap Ada */}
          <ParticleBackground />

          <motion.div 
            variants={textRevealContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-start w-full max-w-4xl pointer-events-none"
          >
            {/* Interactive "Slide & Pop" Icon Wave Tetap Ada */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 ml-0 sm:ml-4 pointer-events-auto min-h-[4rem] w-full max-w-[100vw] pr-4">
              {softwareIcons.map((item, index) => {
                const Icon = item.icon;
                const translateY = Math.sin(index) * 12; 
                return (
                  <Link 
                    href={item.href}
                    key={index}
                    style={{ transform: `translateY(${translateY}px)` }}
                    className="group relative flex items-center h-14 w-14 hover:w-36 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    <div className="absolute left-0 w-14 h-full flex items-center justify-center transition-transform duration-500 group-hover:-translate-x-1">
                      <Icon strokeWidth={1.5} className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                    </div>
                    <span className="absolute left-11 whitespace-nowrap text-sm font-medium text-neutral-900 dark:text-white opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Headline Baru */}
            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1] max-w-4xl">
              Hi, I'm Aditya Satria Pratama. <br/>
              <span className="text-neutral-400 dark:text-neutral-500">A Creative Video Producer & Designer with a strong foundation in Informatics.</span>
            </h1>
            
            <motion.div variants={textRevealItem} className="mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link href="/work" className="flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                Explore Selected Works
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. SELECTED WORKS (GLASSMORPHISM CARDS) */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 relative z-10"
        >
          <div className="flex items-end justify-between">
            <motion.h2 variants={fadeUp} className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">Selected Works</motion.h2>
            <motion.div variants={fadeUp}>
              <Link href="/work" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-2 transition-colors">
                View all projects <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="group">
              <Link href="/work/gemini" className="block space-y-4">
                <div className="aspect-[4/5] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center">
                  <span className="text-sm text-neutral-500">[ Video / Image Thumbnail ]</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Google Gemini Campaign</h3>
                  <p className="text-sm text-neutral-500">Video Editor • 21.7M+ Views</p>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="group">
              <Link href="/work/timephoria" className="block space-y-4">
                <div className="aspect-[4/5] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center">
                  <span className="text-sm text-neutral-500">[ UI Mockup Thumbnail ]</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">TimePhoria Dashboard</h3>
                  <p className="text-sm text-neutral-500">UI/UX & Frontend Development</p>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="group">
              <Link href="/work/nore" className="block space-y-4">
                <div className="aspect-[4/5] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center">
                  <span className="text-sm text-neutral-500">[ Poster / IG Feed Thumbnail ]</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Nore Inovasi Scaling</h3>
                  <p className="text-sm text-neutral-500">Content Strategy • 310% Growth</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}