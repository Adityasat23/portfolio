"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Commercial", "UGC", "Product", "AI Video", "Social Content", "UI/UX"];

export default function GalleryClient({ galleryItems }: { galleryItems: any[] }) {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <main className="max-w-7xl mx-auto space-y-10">
        
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
            Visual Archive
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === cat 
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-black" 
                    : "bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800/50 dark:text-neutral-400 dark:hover:bg-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="break-inside-avoid mb-4 relative rounded-2xl overflow-hidden group border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm bg-neutral-100 dark:bg-neutral-900"
          >
            <div className="cursor-zoom-in" onClick={() => setLightboxImage(item.src)}>
              {item.src && (
                <img 
                  src={item.src} 
                  alt={item.title || "Gallery Item"} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              )}
            </div>

            <div 
              className="absolute pointer-events-none inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                        opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1">
                {item.category || "Uncategorized"}
              </span>
              <div className="flex items-center justify-between pointer-events-auto">
                <h3 className="text-white text-sm sm:text-base font-medium leading-tight cursor-default">
                  {item.title}
                </h3>
                
                {/* Kalau ada relatedProject, kita kasih link ke sana */}
                {item.relatedProjectUrl && (
                  <Link href={item.relatedProjectUrl} className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </main>

      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
             <Image 
                src={lightboxImage} 
                alt="Enlarged" 
                fill 
                className="object-contain" 
                sizes="100vw"
             />
          </div>
        </div>
      )}
    </div>
  );
}
