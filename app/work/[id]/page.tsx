"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play, LayoutGrid, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// 1. MASTER DATA PROYEK (Bisa Anda pindahkan ke file terpisah nanti)
const projectsData = {
  "gemini": {
    title: "Google Gemini Student Promo x Gracia Caroline",
    role: "Video Editor",
    client: "Google Indonesia (via Angkasa Management)",
    category: "Video & Motion",
    overview: "Memproduksi konten video promosi untuk Google Gemini. Tantangan utamanya adalah menyeimbangkan aturan brand guideline Google yang ketat (100% compliance) dengan kebutuhan editing gaya TikTok yang viral dan dinamis.",
    metrics: [
      { label: "Cumulative Views", value: "21.7M+" },
      { label: "Brand Compliance", value: "100%" },
      { label: "Platform", value: "TikTok & IG Reels" }
    ],
    workflow: [
      "Menganalisis brand guideline Google untuk batasan warna, font, dan safe-zone.",
      "Membuat struktur pacing yang memiliki visual hook kuat di 3 detik pertama.",
      "Menerapkan transisi dinamis dan sound design yang native dengan algoritma TikTok.",
      "Review berlapis untuk memastikan tidak ada pelanggaran aset korporat."
    ],
    // Mendukung 'local', 'youtube', 'tiktok', atau 'image'
    media: [
      { type: 'local', src: '/gemini-preview.mp4', aspect: 'aspect-[9/16]' }, 
      // Contoh jika pakai YouTube: { type: 'youtube', src: 'https://www.youtube.com/embed/ID_VIDEO', aspect: 'aspect-video' }
    ]
  },
  "timephoria": {
    title: "TimePhoria Web-Based Editing Dashboard",
    role: "UI Designer & Developer",
    client: "Skintific Group",
    category: "UI/UX & Web",
    overview: "Merancang dan membangun dashboard internal untuk manajemen aset video dan kustomisasi template. Bertujuan untuk mempercepat alur kerja tim pasca-produksi.",
    metrics: [
      { label: "Waktu Edit Berkurang", value: "20%" },
      { label: "User Adoption", value: "10+ Editors" },
      { label: "Tech Stack", value: "Next.js, Tailwind" }
    ],
    workflow: [
      "Riset UX dengan mewawancarai 10+ video editor terkait bottleneck saat mencari aset.",
      "Wireframing dan Prototyping menggunakan Figma dengan sistem desain komponen.",
      "Pengembangan frontend menggunakan Next.js dan Tailwind CSS.",
      "Testing dan deployment dashboard ke server internal perusahaan."
    ],
    media: [
      { type: 'image', src: '/dashboard-ui.jpg', aspect: 'aspect-video' },
    ]
  },
  "nore": {
    title: "Nore Inovasi Social Media Scaling",
    role: "Creative Content Specialist",
    client: "CV. Nore Inovasi",
    category: "Graphic & Photo",
    overview: "Mengambil alih akun media sosial klien dan internal perusahaan, mengubah strategi konten organik berbasis data untuk menghasilkan pertumbuhan yang masif.",
    metrics: [
      { label: "YoY Growth", value: "310.9%" },
      { label: "Total Views", value: "200K+" },
      { label: "Link Clicks", value: "+134%" }
    ],
    workflow: [
      "Audit konten sebelumnya menggunakan Google Analytics dan Instagram Insights.",
      "Mengembangkan pilar konten baru berbasis edukasi dan FOMO.",
      "Produksi end-to-end (Shooting, Graphic Design, Motion Graphics).",
      "A/B Testing pada jam tayang dan format copywriting."
    ],
    media: [
      { type: 'image', src: '/nore-feed.jpg', aspect: 'aspect-square' },
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  
  // Mengambil data berdasarkan URL /work/[id]
  // @ts-ignore
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
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans pt-32 pb-24 px-6">
      <main className="max-w-6xl mx-auto space-y-16">
        
        {/* 1. HEADER (KEMBALI & JUDUL) */}
        <div className="space-y-8">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Archive
          </Link>
          
          <div className="space-y-4 max-w-4xl">
            <div className="inline-block px-3 py-1 bg-neutral-200 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-full text-xs font-semibold tracking-wide">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 font-medium">
              Role: <span className="text-neutral-900 dark:text-neutral-200">{project.role}</span> &nbsp;•&nbsp; Client: {project.client}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-neutral-200 dark:border-neutral-900 pt-16">
          
          {/* 2. KOLOM KIRI (TEKS & ANALISIS) */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-neutral-400" /> Overview
              </h2>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                {project.overview}
              </p>
            </section>

            {/* Metrics Glassmorphism Grid */}
            <section className="grid grid-cols-2 gap-4">
              {project.metrics.map((metric: any, index: number) => (
                <div key={index} className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">{metric.value}</div>
                  <div className="text-xs md:text-sm text-neutral-500 mt-1">{metric.label}</div>
                </div>
              ))}
            </section>

            {/* Editing Flow / Workflow */}
            <section className="space-y-6">
              <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-neutral-400" /> Execution Flow
              </h2>
              <div className="space-y-4">
                {project.workflow.map((step: string, index: number) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-900 dark:text-neutral-100 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* 3. KOLOM KANAN (MEDIA VIEWER DINAMIS) */}
          <div className="lg:col-span-7 space-y-6">
            {project.media.map((media: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative w-full ${media.aspect} bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl group`}
              >
                {/* RENDERER MEDIA BERDASARKAN TIPE */}
                {media.type === 'local' && (
                  <>
                    <video src={media.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white/80" fill="currentColor" />
                    </div>
                  </>
                )}

                {media.type === 'image' && (
                  // Ganti img dengan <Image fill /> dari Next.js untuk production
                  <img src={media.src} alt="Project Preview" className="w-full h-full object-cover" />
                )}

                {media.type === 'youtube' && (
                  <iframe 
                    src={media.src} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}

                {media.type === 'tiktok' && (
                  // TikTok embed khusus bisa ditaruh di sini
                  <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-white">
                    <p className="text-sm">TikTok Embed: {media.src}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}