"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Video, PenTool, Layout, Code, Box, Cuboid, Star, Trophy, Target, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

  const experienceData = [
    {
      company: "TimePhoria",
      role: t("exp.timephoria.role" as any),
      date: "Dec 2025 - Present",
      description: t("exp.timephoria.desc" as any),
      logo: "/logos/logo-timephoria.png" // Siapkan logo di folder public
    },
    {
      company: "Angkasa Management",
      role: t("exp.angkasa.role" as any),
      date: "Sept 2024 - Present",
      description: t("exp.angkasa.desc" as any),
      logo: "/logos/logo-angkasa.png"
    },
    {
      company: "CV. Nore Inovasi",
      role: t("exp.nore.role" as any),
      date: "Sept 2024 - Nov 2025",
      description: t("exp.nore.desc" as any),
      logo: "/logos/logo-nore.png"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300">
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24 space-y-20">
        
        {/* 1. HERO SECTION DENGAN SHOWREEL */}
        <section className="relative pt-32 md:pt-48 pb-24 min-h-[85vh] flex flex-col justify-center border border-transparent overflow-hidden rounded-b-[3rem]">

          {/* Autoplay Showreel Video (Muted Loop) */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            {/* Hapus komentar di bawah ini setelah Anda memasukkan showreel.mp4 ke folder public */}
            {/* <video src="/showreel.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 dark:opacity-30" /> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50 dark:to-[#050505]"></div>
          </div>

          <ParticleBackground />

          <motion.div variants={textRevealContainer} initial="hidden" animate="visible" className="relative z-10 flex flex-col items-start w-full max-w-4xl pointer-events-none">
            
            {/* Icon Wave (Tools/Stack Strip) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 ml-0 sm:ml-4 pointer-events-auto min-h-[4rem] w-full max-w-[100vw] pr-4">
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

            {/* Headline Bilingual */}
            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-[1.1] max-w-4xl">
              {t("hero.title" as any)}
            </h1>
            <motion.p variants={textRevealItem} className="mt-6 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed font-medium">
              {t("hero.desc" as any)}
            </motion.p>
            
            {/* Buttons & Stats Strip */}
            <motion.div variants={textRevealItem} className="mt-12 flex flex-col items-start gap-8 pointer-events-auto w-full">
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/work" className="flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform shadow-lg">
                  {t("btn.explore" as any)}
                </Link>
              <a 
                href="/documents/cv-aditya.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                download="CV_Aditya_Satria_Pratama.pdf" 
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <Download className="w-4 h-4" /> {t("btn.download" as any)}
              </a>
              </div>

              {/* NEW: Stats Strip */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-12 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50 w-full max-w-2xl">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">21.7M+</span>
                  <span className="text-xs uppercase tracking-wider font-medium text-neutral-500">{t("stat.views" as any)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">310%</span>
                  <span className="text-xs uppercase tracking-wider font-medium text-neutral-500">{t("stat.growth" as any)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">3</span>
                  <span className="text-xs uppercase tracking-wider font-medium text-neutral-500">{t("stat.brands" as any)}</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </section>

        {/* 2. EXPERIENCE SECTION WITH LOGOS */}
        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-12 relative z-10">
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">{t("section.exp" as any)}</h2>
            <p className="text-neutral-500 dark:text-neutral-400">{t("section.exp.desc" as any)}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {experienceData.map((exp, index) => (
              <motion.div key={index} variants={fadeUp} className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 p-8 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl transition-colors hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm group">
                
                {/* Brand Logo & Meta */}
                <div className="md:w-1/3 flex items-start gap-4">
                  {/* Brand Logo Box */}
                  <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={exp.logo} 
                      alt={exp.company} 
                      fill
                      className="object-cover" // Ganti dari 'object-contain p-2' menjadi 'object-cover'
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{exp.company}</h3>
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{exp.date}</p>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-2">
                  <h4 className="text-xl font-medium text-neutral-800 dark:text-neutral-200">{exp.role}</h4>
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. SELECTED WORKS (MUST FILL THUMBNAILS) */}
        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-12 relative z-10 pt-8">
          <div className="flex items-end justify-between">
            <motion.h2 variants={fadeUp} className="text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">{t("section.work" as any)}</motion.h2>
            <motion.div variants={fadeUp}>
              <Link href="/work" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-2 transition-colors">
                {t("section.work.viewAll" as any)} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Gemini */}
            <motion.div variants={fadeUp} className="group">
              <Link href="/work/gemini" className="block space-y-4">
                <div className="aspect-[4/5] bg-neutral-200 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                  {/* WAJIB GANTI src DI BAWAH INI DENGAN GAMBAR ASLI ANDA */}
                  {<Image src="/thumbnails/thumb-gemini.png" alt="Google Gemini" fill className="object-cover" />}
                  {/* Category Badge & 1 Impact Metric */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-md">Video Editor</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
                    {t("work.gemini.title" as any)}
                  </h3>
                  <p className="text-sm text-neutral-500">{t("work.gemini.desc" as any)}</p>
                </div>
              </Link>
            </motion.div>

            {/* Card 2: TimePhoria */}
            <motion.div variants={fadeUp} className="group">
              <Link href="/work/timephoria" className="block space-y-4">
                <div className="aspect-[4/5] bg-neutral-200 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                  {<Image src="/thumb-timephoria.png" alt="TimePhoria" fill className="object-cover" />}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">Upload thumb-timephoria.jpg</div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-md">UI/UX & Dev</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                    {t("work.timephoria.title" as any)}
                  </h3>
                  <p className="text-sm text-neutral-500">{t("work.timephoria.desc" as any)}</p>
                </div>
              </Link>
            </motion.div>

            {/* Card 3: Nore */}
            <motion.div variants={fadeUp} className="group">
              <Link href="/work/nore" className="block space-y-4">
                <div className="aspect-[4/5] bg-neutral-200 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                  {<Image src="/thumb-nore.png" alt="Nore Inovasi" fill className="object-cover" />}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">Upload thumb-nore.jpg</div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-md">Content Strategy</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                    {t("work.nore.title" as any)}
                  </h3>
                  <p className="text-sm text-neutral-500">{t("work.nore.desc" as any)}</p>
                </div>
              </Link>
            </motion.div>

          </div>
        </motion.section>

        {/* 4. NEW: ACHIEVEMENT STRIP */}
        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-8 relative z-10 pt-16">
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">{t("section.achievements" as any)}</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <motion.div variants={fadeUp} className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl flex flex-col items-start gap-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500 rounded-lg">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">Gold Medalist</div>
                <div className="text-xs text-neutral-500 mt-0.5">IIIE 2025</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl flex flex-col items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 rounded-lg">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">TOEIC 795</div>
                <div className="text-xs text-neutral-500 mt-0.5">English Proficiency</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl flex flex-col items-start gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-500 rounded-lg">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">Best Presentation</div>
                <div className="text-xs text-neutral-500 mt-0.5">KMIPN V (2023)</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl flex flex-col items-start gap-3">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-500 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">5M+ Views</div>
                <div className="text-xs text-neutral-500 mt-0.5">BEM Digital Scaling</div>
              </div>
            </motion.div>

          </div>
        </motion.section>

      </main>
    </div>
  );
}