"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image"; // Ensure you use next/image for optimized images

export default function SystemsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans pt-32 px-6">
      <div className="max-w-5xl mx-auto space-y-24 pb-32">
        
        {/* Header */}
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
              IT, Dev & Systems
            </h1>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
              Bridging technical execution with operational needs through custom tools and UI/UX engineering.
            </p>
          </div>
        </div>

        {/* System 1: Dashboard */}
        <div className="space-y-12 pt-12 border-t border-neutral-200 dark:border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">TimePhoria Web Dashboard</h2>
                <p className="text-sm font-medium text-neutral-500">Workflow Automation & UI/UX</p>
              </div>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                Architected and developed an internal web-based editing dashboard for asset management and template customization. This tool was adopted by 10+ cross-functional team members, directly improving post-production velocity.
              </p>
              <div className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl inline-block">
                <div className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">20% Faster</div>
                <div className="text-sm text-neutral-500 mt-2 max-w-xs">Reduced per-video editing time from 60 to 50 minutes, scaling output without adding headcount.</div>
              </div>
            </div>

            {/* Massive UI Mockup Container */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl flex items-center justify-center">
               {/* Replace with your UI Screenshot */}
               {/* <Image src="/dashboard-ui.jpg" alt="UI Dashboard" fill className="object-cover" /> */}
               <span className="text-sm text-neutral-500">[ High-Res UI Mockup Image ]</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}