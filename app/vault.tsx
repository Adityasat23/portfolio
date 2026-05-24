"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans pt-32 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            The Vault
          </h1>
          <p className="text-lg max-w-2xl">
            An archive of motion graphics, design experiments, and past projects.
          </p>
        </div>

        {/* Add your Behance-style Grid here later */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Grid Item */}
          <div className="aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
            <span className="text-sm">Project Archive 1</span>
          </div>
        </div>

      </div>
    </div>
  );
}