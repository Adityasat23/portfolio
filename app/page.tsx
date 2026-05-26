"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Video, PenTool, Layout, Code, Box, Cuboid } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import { useLanguage } from "@/context/LanguageContext";

// Animasi
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const textRevealContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const textRevealItem: Variants = { hidden: { opacity: 0, y: 40, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

// Data Ikon Interaktif Antigravity
const softwareIcons = [
  { icon: Video, label: "Premiere", href: "/work" },
  { icon: PenTool, label: "Photoshop", href: "/work" },
  { icon: Layout, label: "Figma", href: "/work" },
  { icon: Code, label: "Next.js", href: "/work" },
  { icon: Box, label: "Blender", href: "/work" },
  { icon: Cuboid, label: "Unreal", href: "/work" },
];

// Data Experience (Dari CV)
const experienceData = [
  {
    company: "TimePhoria - Skintific",
    role: "Creative Video Producer",
    date: "Dec 2025 - Present",
    description: "Architected an internal web-based editing dashboard, reducing per-video post-production time by 20% (60 to 50 min). Produced retention-driven TikTok ad campaigns."
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
    description: "Promoted from intern to team lead. Scaled Instagram performance to 200K+ views and 148K+ reach, driving 310.9% YoY growth."
  }
];

export default function Home() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
      
      {/* 1. HERO SECTION (ANTIGRAVITY STYLE + CV DOWNLOAD) */}
      <section className="relative min-h-[75vh] flex flex-col justify-center border border-transparent overflow-visible">
        
        {/* Background Partikel Interaktif */}
        <ParticleBackground />

        <motion.div 
          variants={textRevealContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start w-full max-w-4xl pointer-events-none"
        >
          {/* Icon Wave Interaktif (Slide & Pop) */}
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

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1] max-w-4xl">
            Hi, I'm Aditya Satria Pratama. <br/>
            <span className="text-neutral-400 dark:text-neutral-500">A Creative Video Producer & Designer with a strong foundation in Informatics.</span>
          </h1>
          
          <motion.p variants={textRevealItem} className="mt-6 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Operating at the intersection of high-end video production, 3D environments, and operational UI/UX efficiency.
          </motion.p>
          
          {/* Call to Action & Download CV */}
          <motion.div variants={textRevealItem} className="mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
            <Link href="/work" className="flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
              Explore Selected Works
            </Link>
            <a href="/CV ADITYA SATRIA PRATAMA 2026.pdf" download className="flex items-center justify-center gap-2 px-8 py-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md text-neutral-900 dark:text-neutral-100 font-medium rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300">
              Download CV <Download className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. EXPERIENCE TIMELINE SECTION */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 border-t border-neutral-200/50 dark:border-neutral-800/50 pt-16 relative z-10"
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
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12 p-8 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl transition-colors hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm"
            >
              <div className="md:w-1/3 space-y-1">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{exp.company}</h3>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{exp.date}</p>
              </div>
              <div className="md:w-2/3 space-y-2 mt-2 md:mt-0">
                <h4 className="text-xl font-medium text-neutral-800 dark:text-neutral-200">{exp.role}</h4>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. SELECTED WORKS (GLASSMORPHISM CARDS) */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 relative z-10 pt-16"
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
          <motion.div variants={fadeUp} className="group">
            <Link href="/work/gemini" className="block space-y-4">
              <div className="aspect-[4/5] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-sm text-neutral-500">[ Video / Image Thumbnail ]</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Google Gemini Campaign</h3>
                <p className="text-sm text-neutral-500">Video Editor • 21.7M+ Views</p>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="group">
            <Link href="/work/timephoria" className="block space-y-4">
              <div className="aspect-[4/5] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-sm text-neutral-500">[ UI Mockup Thumbnail ]</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">TimePhoria Dashboard</h3>
                <p className="text-sm text-neutral-500">UI/UX & Frontend Development</p>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="group">
            <Link href="/work/nore" className="block space-y-4">
              <div className="aspect-[4/5] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-sm text-neutral-500">[ Poster / IG Thumbnail ]</span>
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
  );
}