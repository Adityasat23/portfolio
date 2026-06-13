"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { language } = useLanguage();

  // Data contoh untuk galeri (Bisa dicampur foto, desain UI, dan render 3D)
  const galleryItems = [
    { src: "/thumb-gemini.webp", alt: "Gemini", aspect: "aspect-[4/5]" },
    { src: "/thumb-nore.webp", alt: "Nore", aspect: "aspect-[3/4]" },
    { src: "/thumb-timephoria.webp", alt: "Timephoria", aspect: "aspect-square" },
    { src: "/thumb-unreal.webp", alt: "Unreal Engine", aspect: "aspect-video" },
    // Tambahkan gambar freelance Anda di sini sebanyak-banyaknya...
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] pt-32 pb-24 px-6 md:px-12 font-sans transition-colors duration-300">
      <main className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
            Visual Archive
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg">
            {language === 'en' 
              ? "A visual archive of edits, motion, photography, and creative work — things that don't fit neatly into a case study." 
              : "Arsip visual karya editan, motion, fotografi, dan konten kreatif di luar format case study."}
          </p>
        </div>

        {/* Masonry Layout (Pinterest Style) */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <div key={index} className={`relative w-full ${item.aspect} bg-neutral-200 dark:bg-neutral-900 rounded-2xl overflow-hidden break-inside-avoid group border border-neutral-200/50 dark:border-neutral-800/50`}>
              {/* Jika menggunakan gambar asli, hapus komentar di bawah ini */}
              {/* <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /> */}
              
              <div className="absolute inset-0 flex items-center justify-center text-sm text-neutral-500">Upload {item.src}</div>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Behance CTA */}
        <div className="pt-16 flex justify-center border-t border-neutral-200 dark:border-neutral-800">
          <a href="https://behance.net/aditysat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-full hover:scale-105 transition-transform">
            View Full Portfolio on Behance <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

      </main>
    </div>
  );
}