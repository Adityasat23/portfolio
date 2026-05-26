"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Video & Motion", "Graphic & Photo", "UI/UX & Web", "3D Design"];

const projects = [
  { id: "gemini", title: "Google Gemini Student Promo", category: "Video & Motion", role: "Video Editor", metrics: "21.7M+ Views" },
  { id: "timephoria", title: "TimePhoria Web Dashboard", category: "UI/UX & Web", role: "UI Designer & Dev", metrics: "20% Efficiency" },
  { id: "nore", title: "Nore Inovasi Social Media", category: "Graphic & Photo", role: "Content Specialist", metrics: "310.9% Growth" },
  { id: "unreal", title: "Interactive 3D Game Thesis", category: "3D Design", role: "UE5 Developer", metrics: "Gold Medalist" },
  { id: "bem", title: "BEM KBM Polines Media", category: "Graphic & Photo", role: "Deputy Director", metrics: "5M+ Total Views" }
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

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
          
          {/* Sistem Filter Antigravity */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 shadow-md scale-105"
                    : "bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid dengan Animasi Tata Letak Luar */}
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
                  {/* Kartu Proyek Teraugmentasi */}
                  <div className="relative aspect-[4/3] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:border-neutral-400 dark:group-hover:border-neutral-600">
                    <span className="text-sm text-neutral-400 dark:text-neutral-500">[ Visual Thumbnail ]</span>
                    
                    {/* Badge Metrik Performa Kerja */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 dark:bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-md border border-white/10">
                      {project.metrics}
                    </div>

                    {/* Indikator Interaksi Mikro Mikro Panah Keluar */}
                    <div className="absolute bottom-4 right-4 p-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="px-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">{project.category}</span>
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