"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VaultPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans pt-32 px-6">
      <div className="max-w-7xl mx-auto space-y-16 pb-32">
        
        {/* Header */}
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
              The Vault
            </h1>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
              An archive of 3D environments, graphic design, and organizational documentation.
            </p>
          </div>
        </div>

        {/* Behance-Style Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-neutral-200 dark:border-neutral-900">
          
          {/* Gallery Item 1: UE5 3D Game (Landscape) */}
          <div className="group relative col-span-1 md:col-span-2 aspect-video bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-lg">
             {/* <video src="/ue5-gameplay.mp4" autoPlay loop muted className="w-full h-full object-cover" /> */}
             <span className="text-sm text-neutral-500">[ UE5 Video / Screenshot ]</span>
             
             {/* Hover Information Overlay */}
             <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-medium text-white">Interactive 3D Game</h3>
                <p className="text-sm text-neutral-300 mt-1">Unreal Engine • Gold Medalist 2025</p>
             </div>
          </div>

          {/* Gallery Item 2: ECC Polines Poster (Portrait) */}
          <div className="group relative col-span-1 aspect-[3/4] bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-lg">
             {/* <Image src="/ecc-poster.jpg" fill className="object-cover" /> */}
             <span className="text-sm text-neutral-500">[ Poster Design ]</span>
             <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-medium text-white">ECC Polines</h3>
                <p className="text-sm text-neutral-300 mt-1">Charity Concert Design</p>
             </div>
          </div>

          {/* Gallery Item 3: GMD Jateng Content (Square) */}
          <div className="group relative col-span-1 aspect-square bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-lg">
             {/* <Image src="/gmd-content.jpg" fill className="object-cover" /> */}
             <span className="text-sm text-neutral-500">[ IG Feed Design ]</span>
             <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-medium text-white">GMD Jateng</h3>
                <p className="text-sm text-neutral-300 mt-1">Content Management</p>
             </div>
          </div>

           {/* Gallery Item 4: Extra Slot */}
           <div className="group relative col-span-1 md:col-span-2 aspect-video bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-lg">
             <span className="text-sm text-neutral-500">[ Video Editing Reel / Misc Work ]</span>
             <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-medium text-white">Video Editing Archive</h3>
                <p className="text-sm text-neutral-300 mt-1">Premiere Pro & After Effects</p>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}