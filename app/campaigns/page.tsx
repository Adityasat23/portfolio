"use client";

import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function CampaignsPage() {
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
              Performance Campaigns
            </h1>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
              Producing high-impact content for Tier-1 brands and scaling corporate channels through data-driven strategies.
            </p>
          </div>
        </div>

        {/* Case Study 1: Gemini */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-neutral-200 dark:border-neutral-900">
          <div className="lg:col-span-5 space-y-6 sticky top-32">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">Google Gemini Student Promo</h2>
              <p className="text-sm font-medium text-neutral-500">Video Editor (via Angkasa Management)</p>
            </div>
            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
              Produced promotional video content balancing two conflicting objectives: maintaining 100% compliance with Google's strict multinational brand guidelines while simultaneously executing viral-focused edits to maximize watch-through rates.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl">
                <div className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">21.7M+</div>
                <div className="text-sm text-neutral-500 mt-1">Cumulative Views</div>
              </div>
              <div className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl">
                <div className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">100%</div>
                <div className="text-sm text-neutral-500 mt-1">Brand Compliance</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Local Video Player Example (Vertical/TikTok style) */}
            <div className="relative aspect-[9/16] bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl group">
              {/* Replace src with your actual local file e.g., src="/gemini-tiktok-1.mp4" */}
              <video src="" autoPlay loop muted playsInline className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-12 h-12 text-white/80" fill="currentColor" />
              </div>
              <span className="absolute bottom-4 left-4 text-xs font-medium bg-black/50 text-white px-3 py-1.5 rounded-full backdrop-blur-md">Local Video</span>
            </div>

            {/* YouTube/External Embed Example */}
            <div className="relative aspect-[9/16] bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl flex items-center justify-center">
               {/* Paste YouTube Short iframe here, or keep as a second local video */}
               <span className="text-sm text-neutral-500">[ Embed / Video 2 ]</span>
            </div>
          </div>
        </div>

        {/* Case Study 2: Nore / BEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-neutral-200 dark:border-neutral-900">
          <div className="lg:col-span-5 space-y-6 sticky top-32 order-2 lg:order-1">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">Social Media Scaling</h2>
              <p className="text-sm font-medium text-neutral-500">Comm & Media / Content Specialist</p>
            </div>
            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
              Analyzed performance data to identify growth opportunities and established a consistent brand identity. Managed content production for 5+ client accounts simultaneously.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl">
                <div className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">310%</div>
                <div className="text-sm text-neutral-500 mt-1">YoY Growth (Nore)</div>
              </div>
              <div className="p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl">
                <div className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">5M+</div>
                <div className="text-sm text-neutral-500 mt-1">Total Views (BEM)</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Standard 16:9 Landscape Video/Image Placeholder */}
            <div className="relative w-full aspect-video bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl flex items-center justify-center">
              {/* Add <Image fill src="/your-image.jpg" className="object-cover" /> here */}
              <span className="text-sm text-neutral-500">[ 16:9 Image or Video Showcase ]</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}