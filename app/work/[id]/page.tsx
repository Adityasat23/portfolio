"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, LayoutGrid, CheckCircle2, Maximize } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// --- MASTER DATA PROJECT BILINGUAL ---
const projectsData: Record<string, any> = {
  // 1. GOOGLE GEMINI
  "gemini": {
    title: { en: "Google Gemini Student Promo", id: "Promo Mahasiswa Google Gemini" },
    meta: { role: "Video Editor", client: "Google Indonesia", platform: "TikTok & IG Reels", period: "2024", category: "Video & Motion" },
    heroMedia: { type: 'local', src: '/hero-gemini.mp4', fallback: '/thumb-gemini.webp' },
    metrics: [
      { label: { en: "Total Views", id: "Total Penayangan" }, value: "21.7M+" },
      { label: { en: "Brand Compliance", id: "Kepatuhan Brand" }, value: "100%" },
      { label: { en: "Watch-Through", id: "Tingkat Retensi" }, value: "High" }
    ],
    overview: {
      en: "Produced promotional video content balancing 100% compliance with Google's strict multinational brand guidelines while executing viral-focused edits to maximize watch-through rates.",
      id: "Memproduksi konten video promosi yang menyeimbangkan kepatuhan 100% pada panduan brand multinasional Google dengan pengeditan bergaya viral untuk memaksimalkan retensi penonton."
    },
    execution: [
      {
        title: { en: "Hook Optimization", id: "Optimasi Hook 3 Detik" },
        desc: { en: "Engineered platform-native pacing in the first 3 seconds to prevent scrolling.", id: "Merancang pacing native-platform di 3 detik pertama untuk menghentikan audiens scrolling." },
        visual: "/proses-gemini-1.webp" 
      },
      {
        title: { en: "Brand Safety Review", id: "Review Keamanan Brand" },
        desc: { en: "Strict color grading and font selection matching Google's exact hex codes.", id: "Color grading dan pemilihan font ketat yang sesuai dengan kode hex resmi Google." },
        visual: "/proses-gemini-2.webp" 
      }
    ],
    gallery: [ { type: 'image', src: '/thumb-gemini.webp' } ],
    nextProject: { id: "timephoria", title: "TimePhoria Dashboard" }
  },

  // 2. TIMEPHORIA
  "timephoria": {
    title: { en: "TimePhoria Web Dashboard", id: "Dashboard Web TimePhoria" },
    meta: { role: "UI Designer & Developer", client: "Skintific Group", platform: "Web Application", period: "2025", category: "UI/UX & Web" },
    heroMedia: { type: 'image', src: '/thumb-timephoria.webp' },
    metrics: [
      { label: { en: "Time Reduction", id: "Reduksi Waktu" }, value: "20%" },
      { label: { en: "Active Editors", id: "Editor Aktif" }, value: "10+" },
      { label: { en: "Tech Stack", id: "Teknologi" }, value: "Next.js" }
    ],
    overview: {
      en: "Architected and developed an internal web-based editing dashboard for asset management and template customization, enabling the team to scale output without adding headcount.",
      id: "Membangun dan mengembangkan dashboard editing internal berbasis web untuk manajemen aset, memungkinkan tim untuk meningkatkan output tanpa harus merekrut orang baru."
    },
    execution: [
      {
        title: { en: "Workflow Audit", id: "Audit Alur Kerja" },
        desc: { en: "Interviewed editors to find bottlenecks in asset retrieval.", id: "Mewawancarai editor untuk menemukan hambatan utama dalam pencarian aset." },
        visual: "/proses-timephoria-1.webp" 
      }
    ],
    gallery: [ { type: 'image', src: '/thumb-timephoria.webp' } ],
    nextProject: { id: "nore", title: "Nore Inovasi Scaling" }
  },

  // 3. NORE INOVASI
  "nore": {
    title: { en: "CV. Nore Inovasi Social Scaling", id: "Pertumbuhan Sosial Nore Inovasi" },
    meta: { role: "Content Specialist", client: "CV. Nore Inovasi", platform: "Instagram", period: "2024-2025", category: "Content Strategy" },
    heroMedia: { type: 'image', src: '/thumb-nore.webp' },
    metrics: [
      { label: { en: "YoY Growth", id: "Pertumbuhan YoY" }, value: "310%" },
      { label: { en: "Total Views", id: "Total Penayangan" }, value: "393K+" },
      { label: { en: "Link Clicks", id: "Klik Tautan" }, value: "+348%" }
    ],
    overview: {
      en: "Directed multimedia interns and scaled Instagram performance across multiple company accounts through data-driven content strategy.",
      id: "Mengarahkan mahasiswa magang multimedia dan meningkatkan performa Instagram di berbagai akun perusahaan melalui strategi konten berbasis data."
    },
    execution: [
      {
        title: { en: "Data-Driven Strategy", id: "Strategi Berbasis Data" },
        desc: { en: "Analyzed performance data to identify growth opportunities and establish new daily production workflows.", id: "Menganalisis data performa untuk mengidentifikasi peluang pertumbuhan dan membentuk alur kerja produksi harian baru." },
        visual: "/proses-nore-1.webp" 
      }
    ],
    gallery: [ { type: 'image', src: '/thumb-nore.webp' } ],
    nextProject: { id: "bem", title: "BEM KBM Polines" }
  },

  // 4. BEM KBM POLINES (Karya Masterpiece Baru)
  "bem": {
    title: { en: "BEM KBM Polines Digital Scaling", id: "Pertumbuhan Digital BEM KBM Polines" },
    meta: { role: "Media Director", client: "BEM KBM Polines", platform: "IG, TikTok, LinkedIn", period: "2024-2025", category: "Content Strategy" },
    heroMedia: { type: 'image', src: '/thumb-bem.webp' },
    metrics: [
      { label: { en: "Total Views", id: "Total Penayangan" }, value: "5M+" },
      { label: { en: "New Followers", id: "Pengikut Baru" }, value: "4.2K+" },
      { label: { en: "Total Likes", id: "Total Suka" }, value: "145K+" }
    ],
    overview: {
      en: "Led the communication strategy for an organization serving 4,500+ students. Modernized fragmented digital channels and utilized FOMO-driven content calendars to achieve explosive, record-breaking growth.",
      id: "Memimpin strategi komunikasi untuk organisasi yang melayani 4.500+ mahasiswa. Memodernisasi kanal digital yang terpecah dan menggunakan kalender konten berbasis FOMO untuk mencapai pertumbuhan yang masif."
    },
    execution: [
      {
        title: { en: "Ecosystem Expansion", id: "Ekspansi Ekosistem" },
        desc: { en: "Established a consistent brand identity and launched 3 new channels (LinkedIn, Spotify, WhatsApp).", id: "Membangun identitas brand yang konsisten dan meluncurkan 3 kanal baru (LinkedIn, Spotify, WhatsApp)." },
        visual: "/proses-bem-1.webp"
      },
      {
        title: { en: "FOMO Marketing", id: "Pemasaran FOMO" },
        desc: { en: "Designed high-engagement daily content driving record-breaking interactions among students.", id: "Merancang konten harian berinteraksi tinggi yang memecahkan rekor interaksi di kalangan mahasiswa." },
        visual: "/proses-bem-2.webp"
      }
    ],
    gallery: [ { type: 'image', src: '/thumb-bem.webp' } ],
    nextProject: { id: "freelance-photo", title: "Event & Freelance Content" }
  },

  // 5. EVENT & FREELANCE COLLECTIVE (Menampung GMD, ECC, Effection)
  "freelance-photo": {
    title: { en: "Event & Community Content Strategy", id: "Strategi Konten Event & Komunitas" },
    meta: { role: "Content Specialist", client: "ECC, GMD Jateng, Effection", platform: "Multi-platform", period: "2022-2024", category: "Photography" },
    heroMedia: { type: 'image', src: '/thumb-freelancephoto.webp' },
    metrics: [
      { label: { en: "Clients/Events", id: "Klien/Event" }, value: "5+" },
      { label: { en: "Disciplines", id: "Disiplin Ilmu" }, value: "3" },
      { label: { en: "Content Variety", id: "Variasi Konten" }, value: "High" }
    ],
    overview: {
      en: "Handled end-to-end content production and social media strategy for massive community events including Electro Charity Concert, Gerakan Mengajar Desa Jateng, and Effection Polines.",
      id: "Menangani produksi konten dari hulu ke hilir serta strategi media sosial untuk event komunitas masif termasuk Electro Charity Concert, Gerakan Mengajar Desa Jateng, dan Effection Polines."
    },
    execution: [
      {
        title: { en: "End-to-End Production", id: "Produksi Hulu ke Hilir" },
        desc: { en: "Managed visual direction from pre-event teasers, live documentation, to post-event recaps.", id: "Mengelola arahan visual dari teaser pra-acara, dokumentasi langsung, hingga rekap pasca-acara." },
        visual: "/proses-freelance-1.webp"
      }
    ],
    gallery: [ { type: 'image', src: '/thumb-freelancephoto.webp' } ],
    nextProject: { id: "gemini", title: "Google Gemini Promo" }
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const { language } = useLanguage();
  const projectId = params.id as string;
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-medium">Project Not Found</h1>
          <Link href="/work" className="text-neutral-400 hover:text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4"/> Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans pt-24 pb-24">
      
      {/* A. HERO VISUAL (Wajib Ada) */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> {language === 'en' ? 'Back to Archive' : 'Kembali ke Arsip'}
        </Link>
        
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-neutral-200 dark:bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50">
          {project.heroMedia.type === 'local' ? (
            <video src={project.heroMedia.src} autoPlay loop muted playsInline className="w-full h-full object-cover" poster={project.heroMedia.fallback} />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
              {/* Gunakan tag <Image> Next.js di sini pada production */}
              Upload {project.heroMedia.src}
            </div>
          )}
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* HEADER & META STRIP (B) */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight">
            {project.title[language]}
          </h1>
          
          {/* Meta Strip */}
          <div className="flex flex-wrap items-center gap-y-4 gap-x-8 py-6 border-y border-neutral-200 dark:border-neutral-800 text-sm">
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Role</div>
              <div className="font-medium text-neutral-900 dark:text-neutral-100">{project.meta.role}</div>
            </div>
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Client</div>
              <div className="font-medium text-neutral-900 dark:text-neutral-100">{project.meta.client}</div>
            </div>
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Platform</div>
              <div className="font-medium text-neutral-900 dark:text-neutral-100">{project.meta.platform}</div>
            </div>
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Period</div>
              <div className="font-medium text-neutral-900 dark:text-neutral-100">{project.meta.period}</div>
            </div>
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Category</div>
              <div className="inline-flex px-2.5 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-md text-xs font-semibold">
                {project.meta.category}
              </div>
            </div>
          </div>
        </div>

        {/* IMPACT METRICS (C) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.metrics.map((metric: any, index: number) => (
            <div key={index} className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl shadow-sm">
              <div className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">{metric.value}</div>
              <div className="text-sm font-medium text-neutral-500 mt-2">{metric.label[language]}</div>
            </div>
          ))}
        </section>

        {/* OVERVIEW (D) */}
        <section className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
             Overview & Challenge
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.overview[language]}
          </p>
        </section>

        {/* EXECUTION / PROCESS VISUAL (E) */}
        <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
            {language === 'en' ? 'Execution Process' : 'Proses Eksekusi'}
          </h2>
          
          <div className="space-y-16">
            {project.execution.map((step: any, index: number) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className={`md:col-span-5 space-y-3 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">{step.title[language]}</h3>
                  </div>
                  <p className="text-base leading-relaxed pl-11 text-neutral-600 dark:text-neutral-400">{step.desc[language]}</p>
                </div>
                
                {/* Visual Pendamping Langkah (Wajib Ada) */}
                <div className={`md:col-span-7 aspect-video bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 shadow-md relative ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                   <div className="absolute inset-0 flex items-center justify-center text-sm text-neutral-500">Upload {step.visual}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUTPUT GALLERY (F) */}
        <section className="space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
            {language === 'en' ? 'Final Output' : 'Hasil Akhir'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.gallery.map((media: any, index: number) => (
              <div key={index} className="relative aspect-square md:aspect-[4/5] bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg group">
  
                {/* MASUKKAN IMAGE DI SINI, HAPUS DIV TULISAN UPLOAD SEBELUMNYA */}
                <Image 
                  src={media.src} 
                  alt="Gallery Output" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                   <Maximize className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEXT PROJECT LINK (G) */}
        <div className="pt-16 pb-12 flex justify-center">
          <Link href={`/work/${project.nextProject.id}`} className="group inline-flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
              {language === 'en' ? 'Next Project' : 'Proyek Selanjutnya'}
            </span>
            <span className="text-2xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:opacity-70 transition-opacity flex items-center gap-4">
              {project.nextProject.title} <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </span>
          </Link>
        </div>

      </main>
    </div>
  );
}