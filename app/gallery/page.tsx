"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react"; // Pastikan sudah install lucide-react

// DATA MASTER GALLERY
const galleryItems = [
  { id: 1, src: "/thumbnails/thumb-gemini-916.webp", category: "Video & Motion", alt: "Gemini Vertical Edit", format: "aspect-[9/16]" },
  { id: 2, src: "/thumbnails/thumb-gemini-45.png", category: "Video & Motion", alt: "Gemini Promo", format: "aspect-[4/5]" },
  // Tambahkan foto/desain Anda di sini... contoh:
  // { id: 3, src: "/gallery/foto-event.jpg", category: "Photography", alt: "Event Shoot", format: "aspect-[3/2]" },
  // { id: 4, src: "/gallery/logo-design.png", category: "Design", alt: "Logo Brand", format: "aspect-square" },
];

const categories = ["All", "Video & Motion", "Photography", "Design", "3D & Render"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Filter logika
  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <main className="max-w-7xl mx-auto space-y-10">
        
        {/* Header & Filter */}
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

        {/* Masonry Grid (Enteng via CSS Columns) */}
        {/* Masonry Grid (Otomatis deteksi rasio + Efek Hover Responsive) */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setLightboxImage(item.src)}
            className="break-inside-avoid mb-4 relative rounded-2xl overflow-hidden group cursor-zoom-in border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm bg-neutral-100 dark:bg-neutral-900"
          >
            {/* 1. Gambar Asli (Tinggi menyesuaikan otomatis) */}
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
            />

            {/* 2. OVERLAY TEKS (Gradient & Detail Foto) */}
            <div 
              className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                        opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1">
                {item.category}
              </span>
              <h3 className="text-white text-sm sm:text-base font-medium leading-tight">
                {item.alt}
              </h3>
            </div>

          </div>
        ))}
      </div>
      </main>

      {/* LIGHTBOX MODAL (Interaktif Pop-up) */}
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