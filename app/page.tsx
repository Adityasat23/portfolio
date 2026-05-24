"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import PhysicsSkills from "@/components/PhysicsSkills";

// Reusable premium animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-900 transition-colors">
        <div className="text-neutral-900 dark:text-neutral-100 font-medium tracking-tight text-sm">
          Aditya Satria Pratama
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* Navigating to the new sub-page architecture */}
            <Link href="/systems" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">Systems</Link>
            <Link href="/campaigns" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">Campaigns</Link>
            <Link href="/vault" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">Vault</Link>
          </div>
          
          {/* Theme Toggle Button */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-neutral-400 hover:text-neutral-100" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-600 hover:text-neutral-900" />
              )}
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* 2. HERO SECTION WITH ANTIGRAVITY */}
        <section className="relative pt-12 md:pt-24 h-[55vh] flex flex-col justify-center border border-transparent">
          
          {/* Antigravity Physics Engine Background */}
          <PhysicsSkills />

          {/* Static, Readable Text on Top */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 pointer-events-none"
          >
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tighter leading-[1.1] max-w-3xl"
            >
              Creative technologist and video producer.
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              Operating at the intersection of creative execution and operational efficiency. Building internal systems and producing campaigns with 21.7M+ views.
            </motion.p>
          </motion.div>
        </section>

        {/* 3. FEATURED HIGHLIGHTS (THE 10-SECOND HOOK) */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Highlight 1: Systems */}
          <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="z-10 space-y-3">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">Operational System</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Custom Web Dashboard saving TimePhoria editors 20% in post-production time.
              </p>
            </div>
            <Link href="/systems" className="z-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:gap-3 transition-all">
              Read Case Study <ArrowRight className="w-4 h-4" />
            </Link>
            {/* Background Hint (Placeholder) */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neutral-200 dark:bg-neutral-800 rounded-xl rotate-12 opacity-50 group-hover:rotate-6 transition-transform duration-500" />
          </motion.div>

          {/* Highlight 2: Campaigns */}
          <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
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
          <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
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
                className="flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-white transition-colors"
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
                  href="https://linkedin.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
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