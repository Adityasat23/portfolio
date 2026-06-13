"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const categories = ["All", "Video & Motion", "Graphic & Photo", "UI/UX & Web", "3D Design"];

export default function WorkPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  // Data ini sebaiknya sama dengan data di halaman Detail nantinya
const projects = [
  // --- TIER 1: FEATURED (Impact Terbesar) ---
  { 
    id: "gemini", 
    title: "Google Gemini × Gracia Caroline", 
    category: "Video & Motion", 
    role: "Video Editor · Google Indonesia", 
    metrics: "21.7M+ Views", 
    thumb: "/thumbnails/thumb-gemini-45.png",
    badges: ["Tier-1", "TikTok Ads"]
  },
  { 
    id: "timephoria", 
    title: "TimePhoria Editor Tool", 
    category: "UI/UX & Web", 
    role: "UI Designer & Dev · Next.js", 
    metrics: "20% Efficiency", 
    thumb: "/thumbnails/thumb-timephoria-45.png", // Siapkan gambar ini nanti
    badges: ["Internal Tool", "Updated"]
  },
  { 
    id: "nore", 
    title: "CV. Nore Inovasi Scaling", 
    category: "Content Strategy", 
    role: "Content Specialist · Team Lead", 
    metrics: "310% YoY Growth", 
    thumb: "/thumbnails/thumb-nore-45.png", 
    badges: ["Data-driven", "Lead"]
  },
  { 
    id: "ob-herbal", 
    title: "Dr. Grace × OB Herbal", 
    category: "Video & Motion", 
    role: "Video Editor · Health Campaign", 
    metrics: "Tier-1 Client", 
    thumb: "/thumbnails/thumb-obherbal-45.png", 
    badges: ["Performance Creative"]
  },

  // --- TIER 2: SUPPORTING (Konteks Penting) ---
  { 
    id: "bem", 
    title: "BEM KBM Polines Digital", 
    category: "Content Strategy", 
    role: "Media Director · Institutional Branding", 
    metrics: "5M+ Total Views", 
    thumb: "/thumbnails/thumb-bem-45.png" 
  },
  { 
    id: "unreal", 
    title: "Interactive 3D Game (UE5)", 
    category: "3D Design", 
    role: "UE5 Developer · Game Design", 
    metrics: "Gold Medalist", 
    thumb: "/thumbnails/thumb-unreal-45.png" 
  },

  // --- TIER 3: FREELANCE COLLECTIVE (Digabung agar tidak penuh) ---
  { 
    id: "freelance-motion", 
    title: "Freelance — Motion & Branding", 
    category: "Video & Motion", 
    role: "Motion Graphics · Logo · Brand Visual", 
    metrics: "5-10 Clients", 
    thumb: "/thumbnails/thumb-freelance-motion.png",
    badges: ["Freelance"] 
  },
  { 
    id: "freelance-photo", 
    title: "Freelance — Photo & Videography", 
    category: "Photography", 
    role: "Event · Product Shoot", 
    metrics: "5+ Clients", 
    thumb: "/thumbnails/thumb-freelance-photo.png",
    badges: ["Freelance"]
  }
];

  const filteredProjects = projects.filter(project => 
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300 pt-32 pb-24 px-6 md:px-12">
      <main className="max-w-6xl mx-auto space-y-12">
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
            Work Archive
          </h1>
          
          {/* Active State Filter yang Dipertegas */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 shadow-md ring-2 ring-neutral-900 dark:ring-white ring-offset-2 ring-offset-neutral-50 dark:ring-offset-[#050505]" // Active State yang sangat jelas
                    : "bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
              >
                <Link href={`/work/${project.id}`} className="group block space-y-4">
                  {/* Visual Card Wajib Diisi */}
                  <div className="relative aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2">
                    
                    {/* Wajib Ganti dengan Image Komponen Next.js Nanti */}
                    {/* <Image src={project.thumb} alt={project.title} fill className="object-cover" /> */}
                    {/* Wajib Ganti dengan Image Komponen Next.js Nanti */}
                    <Image 
                      src={project.thumb} 
                      alt={project.title as string} 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-md">
                      {project.category}
                    </div>

                    {/* Impact Metric Hover */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white text-xs font-bold rounded-xl shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {project.metrics}
                    </div>

                    <div className="absolute bottom-4 right-4 p-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Meta Text */}
                  <div className="px-2">
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 transition-colors mt-0.5">{project.title}</h3>
                    <p className="text-sm text-neutral-500 mt-0.5">{project.role}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}