"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Video, PenTool, Layout, Code, Box, Cuboid } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import { useLanguage } from "@/context/LanguageContext";

// Animasi Variants
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const textRevealContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const textRevealItem: Variants = { hidden: { opacity: 0, y: 40, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

// Data Ikon Antigravity
const softwareIcons = [
  { icon: Video, label: "Premiere", href: "/work" },
  { icon: PenTool, label: "Photoshop", href: "/work" },
  { icon: Layout, label: "Figma", href: "/work" },
  { icon: Code, label: "Next.js", href: "/work" },
  { icon: Box, label: "Blender", href: "/work" },
  { icon: Cuboid, label: "Unreal", href: "/work" },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300">
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24 space-y-32">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 md:pt-48 min-h-[75vh] flex flex-col justify-center border border-transparent overflow-visible">
          <ParticleBackground />

          <motion.div 
            variants={textRevealContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-start w-full max-w-4xl pointer-events-none"
          >
            {/* Icon Wave */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16 ml-0 sm:ml-4 pointer-events-auto min-h-[4rem] w-full max-w-[100vw] pr-4">
              {softwareIcons.map((item, index) => {
                const Icon = item.icon;
                const translateY = Math.sin(index) * 12; 
                return (
                  <Link href={item.href} key={index} style={{ transform: `translateY(${translateY}px)` }} className="group relative flex items-center h-14 w-14 hover:w-36 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
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

            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1] max-w-4xl">
              {t("hero.title")} <br/>
              <span className="text-neutral-400 dark:text-neutral-500">{t("hero.subtitle")}</span>
            </h1>
            
            <motion.p variants={textRevealItem} className="mt-6 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
              {t("hero.description")}
            </motion.p>
            
            <motion.div variants={textRevealItem} className="mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link href="/work" className="flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                {t("btn.explore")}
              </Link>
              <a href="/CV_ADITYA_SATRIA_PRATAMA_2026.pdf" download className="flex items-center justify-center gap-2 px-8 py-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md text-neutral-900 dark:text-neutral-100 font-medium rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300">
                {t("btn.downloadCV")} <Download className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-12 border-t border-neutral-200/50 dark:border-neutral-800/50 pt-16 relative z-10">
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">{t("section.experience")}</h2>
            <p className="text-neutral-500 dark:text-neutral-400">{t("section.experience.desc")}</p>
          </motion.div>
          {/* Timeline Mapping... */}
        </motion.section>

        {/* SELECTED WORKS */}
        <motion.section id="work" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-12 relative z-10 pt-16">
          <div className="flex items-end justify-between">
            <motion.h2 variants={fadeUp} className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">{t("section.works")}</motion.h2>
            <motion.div variants={fadeUp}>
              <Link href="/work" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-2 transition-colors">
                {t("section.works.viewAll")} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
          {/* Grid Projects... */}
        </motion.section>

      </main>
    </div>
  );
}