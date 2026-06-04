"use client";

import { Download, Award, GraduationCap, Briefcase, Users, LayoutGrid, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image"; // Pastikan import Image

const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function AboutPage() {
  const { t } = useLanguage();
  const isAvailable = true;

  // Data Experience memanggil translator
  const experiences = [
    {
      date: "Dec 2025 - Present",
      company: "TimePhoria - Skintific",
      role: t("exp.timephoria.role" as any),
      desc: t("exp.timephoria.desc" as any)
    },
    {
      date: "Sept 2024 - Present",
      company: "Angkasa Management",
      role: t("exp.angkasa.role" as any),
      desc: t("exp.angkasa.desc" as any)
    },
    {
      date: "Sept 2024 - Nov 2025",
      company: "CV. Nore Inovasi",
      role: t("exp.nore.role" as any),
      desc: t("exp.nore.desc" as any)
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300 pt-32 pb-24 px-6 md:px-12">
      <main className="max-w-5xl mx-auto space-y-24">
        
        {/* 1. HERO PROFILE: Foto (Kiri) + Info (Kanan) */}
        <motion.section variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* FOTO PROFIL (Wajib ganti src dengan foto Anda di folder public) */}
          <motion.div variants={fadeUp} className="md:col-span-4 aspect-[4/5] relative rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 shadow-xl">
             {/* <Image src="/foto-aditya.jpg" alt="Aditya Satria Pratama" fill className="object-cover" /> */}
             <div className="absolute inset-0 flex items-center justify-center text-sm text-neutral-500">Upload foto-aditya.jpg</div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="md:col-span-8 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                Aditya Satria Pratama
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xl font-medium text-neutral-500">{t("about.role" as any)}</span>
                
                {/* Badge Availability */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full w-fit">
                  <span className="relative flex h-2.5 w-2.5">
                    {isAvailable && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isAvailable ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                  </span>
                  <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                    {isAvailable ? t("status.available" as any) : t("status.unavailable" as any)}
                  </span>
                </div>
              </div>
            </div>

            {/* Intro Paragraph (Bilingual) */}
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-2xl">
              {t("about.intro" as any)}
            </p>

            {/* Download CV Button dipindah ke atas */}
            <div className="pt-2">
              <a href="/CV_ADITYA_SATRIA_PRATAMA_2026.pdf" download className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-md">
                <Download className="w-4 h-4" /> {t("btn.download" as any)}
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* 2. EXPERIENCE TIMELINE (Konsisten dengan Homepage) */}
        <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-neutral-400" /> {t("section.exp" as any)}
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-sm font-medium text-neutral-400 dark:text-neutral-500 md:pt-1">{exp.date}</div>
                <div className="md:col-span-3 space-y-1">
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">{exp.role}</h3>
                  <p className="text-sm font-medium text-neutral-500 pb-2">{exp.company}</p>
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SKILLS & TOOLS GRID */}
        <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
            <LayoutGrid className="w-5 h-5 text-neutral-400" /> {t("about.skills" as any)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">Creative Strategy</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Retention Optimization</li>
                <li>Performance Marketing</li>
                <li>Conversion Editing</li>
                <li>Content Strategy</li>
              </ul>
            </div>
            <div className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">Technical</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Internal Tool Dev</li>
                <li>Workflow Automation</li>
                <li>Vibe Coding</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4">Software</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Premiere Pro & After Effects</li>
                <li>DaVinci Resolve</li>
                <li>Figma & Canva</li>
                <li>Blender & Unreal Engine</li>
              </ul>
            </div>
            <div className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-200/50 dark:border-emerald-800/30">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-900 dark:text-emerald-100 mb-4">Certification</h3>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">TOEIC 795</div>
              <p className="text-sm text-emerald-700/70 dark:text-emerald-400/70 mt-1">English Proficiency (ETS)</p>
            </div>
          </div>
        </section>

        {/* 4. EDUCATION & ACHIEVEMENTS */}
        <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-neutral-400" /> {t("about.edu" as any)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-sm font-medium text-neutral-400 dark:text-neutral-500 md:pt-1">Graduated 2025</div>
            <div className="md:col-span-3 space-y-4">
              <div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Informatics Engineering</h3>
                <p className="text-sm font-medium text-neutral-500">Semarang State Polytechnic &nbsp;•&nbsp; GPA: 3.71 / 4.00</p>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mt-2">
                  {t("about.edu.thesis" as any)}
                </p>
              </div>
              
              {/* Badge Achievements */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-medium rounded-full"><Award className="w-3.5 h-3.5"/> Gold Medalist IIIE 2025</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full"><CheckCircle2 className="w-3.5 h-3.5"/> Best Presentation KMIPN V</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-full">Finalist KMIPN VI (Animation)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ORGANIZATIONS */}
        <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
            <Users className="w-5 h-5 text-neutral-400" /> {t("about.org" as any)}
          </h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-sm font-medium text-neutral-400 dark:text-neutral-500 md:pt-1">Jul 2024 - Jul 2025</div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">BEM KBM Polines</h3>
                <p className="text-sm font-medium text-neutral-500 pb-2">Deputy of Communication & Media Dept</p>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Founded and managed the department, scaling digital presence to <strong>5M+ total views</strong> and <strong>+4.2K new followers</strong>. Launched 3 new organizational channels to expand institutional reach.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-sm font-medium text-neutral-400 dark:text-neutral-500 md:pt-1">May 2023 - May 2024</div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">HME POLINES</h3>
                <p className="text-sm font-medium text-neutral-500 pb-2">Head of Minat & Bakat Dept</p>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">Led a 9-person team delivering 20 student development programs with a 95% completion rate.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}