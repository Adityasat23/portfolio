"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Sun, Moon, ChevronDown, Video, PenTool, Layout, Code, Box, Cuboid } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";

// Animation Variants
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const textRevealContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const textRevealItem: Variants = { hidden: { opacity: 0, y: 40, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

// Data for Icon Wave with routing
const softwareIcons = [
  { icon: Video, label: "Premiere", href: "/vault" },
  { icon: PenTool, label: "Photoshop", href: "/vault" },
  { icon: Layout, label: "Figma", href: "/systems" },
  { icon: Code, label: "Next.js", href: "/systems" },
  { icon: Box, label: "Blender", href: "/vault" },
  { icon: Cuboid, label: "Unreal", href: "/vault" },
];

// Experience Data from CV
const experienceData = [
  {
    company: "TimePhoria",
    role: "Creative Video Editor",
    date: "Dec 2025 - Present",
    description: "Produced retention-driven TikTok ad campaigns. Architected an internal web-based editing dashboard, reducing per-video post-production time by 20% (60 to 50 min)."
  },
  {
    company: "Angkasa Management",
    role: "Video Editor",
    date: "Sept 2024 - Present",
    description: "Edited 10+ performance campaigns for Tier 1 clients (Google Gemini, OB Herbal) totaling 21.7M+ views. Engineered platform-native pacing optimizing hook effectiveness."
  },
  {
    company: "CV. Nore Inovasi",
    role: "PIC Creative Content Specialist",
    date: "Sept 2024 - Nov 2025",
    description: "Promoted from intern to team lead. Scaled Instagram performance to 200K+ views and 148K+ reach, driving 310.9% YoY growth. Managed content production for 5+ client accounts."
  },
  {
    company: "BEM KBM Polines",
    role: "Deputy of Comm & Media Dept",
    date: "Jul 2024 - Jul 2025",
    description: "Scaled digital presence to 5M+ total views and 4.2K+ new followers. Launched 3 new organizational channels (LinkedIn, Spotify, WhatsApp Broadcast)."
  }
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-white/60 dark:bg-[#050505]/60 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors">
        <div className="text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight text-sm md:text-base">
          Aditya Satria Pratama
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            
            <div className="group relative py-4">
              <button className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                Creative <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-[-8px] w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col p-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl shadow-xl">
                  <Link href="/campaigns" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Video Editing</Link>
                  <Link href="/vault" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Design</Link>
                  <Link href="/vault" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Photography</Link>
                </div>
              </div>
            </div>

            <div className="group relative py-4">
              <button className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                IT & Dev <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 md:left-0 mt-[-8px] w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col p-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl shadow-xl">
                  <Link href="/systems" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">UI & UX</Link>
                  <Link href="/systems" className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300 transition-colors">Website Development</Link>
                </div>
              </div>
            </div>

            <div className="group relative py-4">
              <button className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                3D <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              {/* Fixed Right-0 overflow issue */}
              <div className="absolute top-full right-0 mt-[-8px] w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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

      {/* Tightened global spacing (space-y-24) */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-24">
        
        {/* HERO SECTION */}
        <section className="relative pt-20 md:pt-32 min-h-[75vh] flex flex-col justify-center border border-transparent overflow-visible">
          <ParticleBackground />

          <motion.div 
            variants={textRevealContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-start w-full max-w-4xl pointer-events-none"
          >
            {/* Mobile-safe Icon Wave */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16 ml-0 sm:ml-4 pointer-events-auto min-h-[4rem] w-full max-w-[100vw] pr-4">
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

            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1] max-w-3xl">
              Aditya Satria Pratama is a Lorem Ipsum.
            </h1>
            
            <motion.p 
              variants={textRevealItem}
              className="mt-6 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
            >
              Lorem ipsum dolor sit amet.
            </motion.p>
            
            <motion.div variants={textRevealItem} className="mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link href="#work" className="flex items-center justify-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                Explore case studies
              </Link>
              <a href="/CV ADITYA SATRIA PRATAMA 2026.pdf" download className="flex items-center justify-center gap-2 px-8 py-3 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md text-neutral-900 dark:text-neutral-100 font-medium rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300">
                Download CV <Download className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 border-t border-neutral-200 dark:border-neutral-900 pt-16"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">Professional Experience</h2>
            <p className="text-neutral-500 dark:text-neutral-400">A timeline of operational integration and creative execution.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {experienceData.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12 p-8 bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-3xl transition-colors hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                <div className="md:w-1/3 space-y-1">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{exp.company}</h3>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{exp.date}</p>
                </div>
                <div className="md:w-2/3 space-y-2 mt-2 md:mt-0">
                  <h4 className="text-xl font-medium text-neutral-800 dark:text-neutral-200">{exp.role}</h4>
                  <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CASE STUDIES HIGHLIGHTS */}
        <motion.section 
          id="work"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 pt-16"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">Featured Work</h2>
            <p className="text-neutral-500 dark:text-neutral-400">System architecture, 3D environments, and campaign performance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
              <div className="z-10 space-y-3">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">TimePhoria System Architecture</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Architected custom Web Dashboard adopted by 10+ team members, reducing post-production time by 20%.
                </p>
              </div>
              <Link href="/systems" className="z-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:gap-3 transition-all">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
              <div className="z-10 space-y-3">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">Performance Campaigns</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  21.7M+ cumulative views for Google Gemini and OB Herbal ensuring 100% brand compliance.
                </p>
              </div>
              <Link href="/campaigns" className="z-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:gap-3 transition-all">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="group relative flex flex-col justify-between p-8 h-[400px] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
              <div className="z-10 space-y-3">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">Unreal Engine 3D Interactive</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  First UE-based thesis implementation in faculty history. Gold Medalist at Intl. Invention Expo 2025.
                </p>
              </div>
              <Link href="/vault" className="z-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:gap-3 transition-all">
                See Detail <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#050505] transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight max-w-sm leading-tight">
              Let&apos;s build scalable creative operations.
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <a href="mailto:adityasatriapratama29@gmail.com" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium">
                  <Mail className="w-4 h-4" /> Email
                </a>
                <span className="text-neutral-300 dark:text-neutral-800">•</span>
                <a href="https://linkedin.com/in/aditysat" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium">
                   LinkedIn
                </a>
                <span className="text-neutral-300 dark:text-neutral-800">•</span>
                <a href="https://behance.net/aditysat" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium">
                   Behance
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