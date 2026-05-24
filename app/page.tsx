"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Sun, Moon, ChevronDown, Video, PenTool, Layout, Code, Box, Cuboid } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";

// ... keep fadeUp, staggerContainer, textRevealContainer, textRevealItem variants from before ...
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const textRevealContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const textRevealItem: Variants = { hidden: { opacity: 0, y: 40, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

// Data for the minimalist icon wave
const softwareIcons = [
  { icon: Video, label: "Premiere" },
  { icon: PenTool, label: "Photoshop" },
  { icon: Layout, label: "Figma" },
  { icon: Code, label: "Next.js" },
  { icon: Box, label: "Blender" },
  { icon: Cuboid, label: "Unreal" },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300">
      
      {/* 1. GLASSMORPHISM NAVBAR WITH DROPDOWNS */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/60 dark:bg-[#050505]/60 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors">
        <div className="text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight">
          Aditya Satria Pratama
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            
            {/* Dropdown 1 */}
            <div className="group relative py-4">
              <button className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                Creative <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-[-8px] w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col p-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl shadow-xl">
                  <Link href="/vault" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Video Editing</Link>
                  <Link href="/vault" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Design</Link>
                  <Link href="/vault" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Photography</Link>
                </div>
              </div>
            </div>

            {/* Dropdown 2 */}
            <div className="group relative py-4">
              <button className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                IT & Dev <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-[-8px] w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col p-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl shadow-xl">
                  <Link href="/systems" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">UI & UX</Link>
                  <Link href="/systems" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Website Development</Link>
                </div>
              </div>
            </div>

            {/* Dropdown 3 */}
            <div className="group relative py-4">
              <button className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                3D <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-[-8px] w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col p-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl shadow-xl">
                  <Link href="/vault" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Blender</Link>
                  <Link href="/vault" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Unreal Engine 5</Link>
                </div>
              </div>
            </div>

          </div>
          
          {mounted && (
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:scale-105 transition-transform shadow-sm">
              {theme === 'dark' ? <Sun className="w-4 h-4 text-neutral-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-40">
        
        {/* 2. ANTIGRAVITY HERO SECTION */}
        <section className="relative pt-20 md:pt-32 min-h-[75vh] flex flex-col justify-center border border-transparent overflow-visible">
          
          <ParticleBackground />

          <motion.div 
            variants={textRevealContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-start w-full max-w-4xl pointer-events-none"
          >
            {/* Minimalist Icon Wave (Like Screenshot 2) */}
            <div className="flex items-center gap-4 mb-16 ml-4">
              {softwareIcons.map((item, index) => {
                const Icon = item.icon;
                // Create a slight sine wave positioning effect
                const translateY = Math.sin(index) * 12; 
                return (
                  <motion.div 
                    key={index}
                    variants={fadeUp}
                    className="flex items-center justify-center w-14 h-14 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm text-neutral-600 dark:text-neutral-400 pointer-events-auto hover:scale-110 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 cursor-pointer"
                    style={{ transform: `translateY(${translateY}px)` }}
                    title={item.label}
                  >
                    <Icon strokeWidth={1.5} className="w-6 h-6" />
                  </motion.div>
                );
              })}
            </div>

            {/* Antigravity Introduction Text (Like Screenshot 1) */}
            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1] max-w-3xl">
              Aditya Satria Pratama is a creative technologist, allowing brands to scale in the agent-first era.
            </h1>
            
            <motion.p 
              variants={textRevealItem}
              className="mt-6 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              Operating at the intersection of high-end video production, 3D environments, and operational UI/UX efficiency.
            </motion.p>
            
            <motion.div variants={textRevealItem} className="mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link href="#work" className="flex items-center justify-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                Explore case studies
              </Link>
              <a href="/Aditya_Satria_Pratama_Resume.pdf" download className="flex items-center justify-center gap-2 px-8 py-3 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md text-neutral-900 dark:text-neutral-100 font-medium rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300">
                Download CV <Download className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ... KEEP YOUR "FEATURED HIGHLIGHTS" & FOOTER SECTION EXACTLY AS THEY WERE ... */}

        {/* 3. FEATURED HIGHLIGHTS (THE 10-SECOND HOOK) */}
        <motion.section 
          id="work"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Highlight 1: Systems */}
          <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="z-10 space-y-3">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">Operational System</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Custom Web Dashboard saving TimePhoria editors 20% in post-production time.
              </p>
            </div>
            <Link href="/systems" className="z-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:gap-3 transition-all">
              Read Case Study <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neutral-200 dark:bg-neutral-800 rounded-xl rotate-12 opacity-50 group-hover:rotate-6 transition-transform duration-500" />
          </motion.div>

          {/* Highlight 2: Campaigns */}
          <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="z-10 space-y-3">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">Performance Campaigns</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                21.7M+ cumulative views for Google Gemini and OB Herbal using retention-driven hooks.
              </p>
            </div>
            <Link href="/campaigns" className="z-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:gap-3 transition-all">
              Read Case Study <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neutral-200 dark:bg-neutral-800 rounded-full opacity-50 scale-90 group-hover:scale-100 transition-transform duration-500" />
          </motion.div>

          {/* Highlight 3: 3D / Unreal */}
          <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="z-10 space-y-3">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">Unreal Engine 3D</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Award-winning interactive 3D game developed for final thesis at campus.
              </p>
            </div>
            <Link href="/vault" className="z-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:gap-3 transition-all">
              See Detail <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neutral-200 dark:bg-neutral-800 rounded-lg -rotate-12 opacity-50 group-hover:rotate-0 transition-transform duration-500" />
          </motion.div>

        </motion.section>
      </main>

      {/* 4. FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#050505] transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight max-w-sm leading-tight">
              Let&apos;s build scalable creative operations.
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <a 
                href="/Aditya_Satria_Pratama_Resume.pdf" 
                download
                className="flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:bg-neutral-800 dark:hover:bg-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV PDF
              </a>
              <div className="flex items-center gap-4">
                
                <a 
                  href="mailto:adityasatriapratama29@gmail.com" 
                  className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                
                <span className="text-neutral-300 dark:text-neutral-800">•</span>
                
                <a 
                  href="https://linkedin.com/in/YOUR-LINKEDIN-URL" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>

                <span className="text-neutral-300 dark:text-neutral-800">•</span>
                
                <a 
                  href="https://github.com/Adityasat23" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  GitHub
                </a>

              </div>
            </div>
          </div>
          
          <p className="text-sm text-neutral-400 dark:text-neutral-600">
            © {new Date().getFullYear()} Aditya Satria Pratama. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}