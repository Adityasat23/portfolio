"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const categories = ["All", "Video & Motion", "Graphic & Photo", "UI/UX & Web", "3D Design"];

const projects = [
  { id: "gemini", title: "Google Gemini Promo", category: "Video & Motion", role: "Video Editor via Angkasa Management" },
  { id: "timephoria", title: "TimePhoria Dashboard", category: "UI/UX & Web", role: "UI Designer & Developer" },
  { id: "nore", title: "Nore Inovasi Social Media", category: "Graphic & Photo", role: "Content Specialist" },
  { id: "unreal", title: "Interactive 3D Game", category: "3D Design", role: "Unreal Engine Developer" },
  { id: "ecc", title: "ECC Polines Charity", category: "Graphic & Photo", role: "Design & Event Documentation" },
  { id: "ob-herbal", title: "OB Herbal Campaign", category: "Video & Motion", role: "Video Editor" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300 pt-32 pb-24 px-6">
      
      <main className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
            Work Archive
          </h1>
          
          {/* Antigravity Pill Filters */}
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

        {/* Masonry/Grid Layout with Framer Motion Layout Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key={project.id}
              >
                <Link href={`/work/${project.id}`} className="group block space-y-4">
                  {/* Glassmorphism Card */}
                  <div className="aspect-[4/3] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl overflow-hidden relative shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                     <span className="text-sm text-neutral-500">[ Visual Thumbnail ]</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                    <p className="text-sm text-neutral-500">{project.role}</p>
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