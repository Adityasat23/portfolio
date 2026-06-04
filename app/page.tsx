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

  // Data ini dimasukkan ke dalam komponen agar fungsi t() bisa merender ulang saat bahasa diganti
  const experienceData = [
    {
      company: "TimePhoria - Skintific",
      role: t("exp.timephoria.role" as any),
      date: "Dec 2025 - Present",
      description: t("exp.timephoria.desc" as any)
    },
    {
      company: "Angkasa Management",
      role: t("exp.angkasa.role" as any),
      date: "Sept 2024 - Present",
      description: t("exp.angkasa.desc" as any)
    },
    {
      company: "CV. Nore Inovasi",
      role: t("exp.nore.role" as any),
      date: "Sept 2024 - Nov 2025",
      description: t("exp.nore.desc" as any)
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300">
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24 space-y-32">
        
        {/* 1. HERO SECTION */}
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

            {/* Headline yang sudah support bahasa */}
            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1] max-w-4xl">
              {t("hero.title" as any)} <br/>
              <span className="text-neutral-400 dark:text-neutral-500">{t("hero.subtitle" as any)}</span>
            </h1>
            
            <motion.p variants={textRevealItem} className="mt-6 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
              {t("hero.desc" as any)}
            </motion.p>
            
            <motion.div variants={textRevealItem} className="mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link href="/work" className="flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                {t("btn.explore" as any)}
              </Link>
              <a href="/CV_ADITYA_SATRIA_PRATAMA_2026.pdf" download className="flex items-center justify-center gap-2 px-8 py-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md text-neutral-900 dark:text-neutral-100 font-medium rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300">
                {t("btn.download" as any)} <Download className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. EXPERIENCE SECTION */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 border-t border-neutral-200/50 dark:border-neutral-800/50 pt-16 relative z-10"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">{t("section.exp" as any)}</h2>
            <p className="text-neutral-500 dark:text-neutral-400">{t("section.exp.desc" as any)}</p>
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

        {/* 3. SELECTED WORKS */}
        <motion.section 
          id="work"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 relative z-10 pt-16"
        >
          <div className="flex items-end justify-between">
            <motion.h2 variants={fadeUp} className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">{t("section.work" as any)}</motion.h2>
            <motion.div variants={fadeUp}>
              <Link href="/work" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-2 transition-colors">
                {t("section.work.viewAll" as any)} <ArrowRight className="w-4 h-4" />
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
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">{t("work.gemini.title" as any)}</h3>
                  <p className="text-sm text-neutral-500">{t("work.gemini.desc" as any)}</p>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="group">
              <Link href="/work/timephoria" className="block space-y-4">
                <div className="aspect-[4/5] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-sm text-neutral-500">[ UI Mockup Thumbnail ]</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">{t("work.timephoria.title" as any)}</h3>
                  <p className="text-sm text-neutral-500">{t("work.timephoria.desc" as any)}</p>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="group">
              <Link href="/work/nore" className="block space-y-4">
                <div className="aspect-[4/5] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-sm text-neutral-500">[ Poster / IG Thumbnail ]</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">{t("work.nore.title" as any)}</h3>
                  <p className="text-sm text-neutral-500">{t("work.nore.desc" as any)}</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}