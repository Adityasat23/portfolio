"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VaultPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans pt-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16 pb-24">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            The Vault
          </h1>
          <p className="text-lg max-w-2xl">
            An archive of 3D environments, graphic design, and organizational documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-900">
          
          {/* Unreal Engine Item */}
          <div className="group aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-6 text-center transition-colors hover:border-neutral-400">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Interactive 3D Game</h3>
            <p className="text-xs mt-2">Unreal Engine • Gold Medalist Indonesia Intl. Invention Expo 2025</p>
          </div>

          {/* ECC Polines Item */}
          <div className="group aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-6 text-center transition-colors hover:border-neutral-400">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">ECC Polines</h3>
            <p className="text-xs mt-2">Design & Event Documentation • Charity Concert 2024</p>
          </div>

          {/* GMD Jateng Item */}
          <div className="group aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-6 text-center transition-colors hover:border-neutral-400">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Gerakan Mengajar Desa</h3>
            <p className="text-xs mt-2">Content Calendar & Graphic Asset Management</p>
          </div>

        </div>

      </div>
    </div>
  );
}