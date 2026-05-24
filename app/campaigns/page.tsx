"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function CampaignsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans pt-32 px-6">
      <div className="max-w-4xl mx-auto space-y-16 pb-24">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            Performance Campaigns
          </h1>
          <p className="text-lg max-w-2xl">
            Producing high-impact content for Tier-1 brands and scaling corporate channels through data-driven strategies.
          </p>
        </div>

        {/* Case Study 1 */}
        <div className="space-y-6 pt-8 border-t border-neutral-200 dark:border-neutral-900">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">Google Gemini Student Promo x Gracia Caroline</h2>
            <p className="text-sm font-medium text-neutral-500">Role: Video Editor (via Angkasa Management)</p>
          </div>
          <p className="leading-relaxed">
            Produced promotional video content balancing two conflicting objectives: maintaining 100% compliance with Google's strict multinational brand guidelines while simultaneously executing viral-focused edits to maximize watch-through rates.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">21.7M+</div>
              <div className="text-xs text-neutral-500">Cumulative Views</div>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">100%</div>
              <div className="text-xs text-neutral-500">Brand Compliance</div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="space-y-6 pt-8 border-t border-neutral-200 dark:border-neutral-900">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">BEM KBM Polines & CV Nore Inovasi Growth</h2>
            <p className="text-sm font-medium text-neutral-500">Role: Comm & Media / Content Specialist</p>
          </div>
          <p className="leading-relaxed">
            Analyzed performance data to identify growth opportunities and established a consistent brand identity using FOMO methods. Managed content production for 5+ client accounts simultaneously.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">310.9%</div>
              <div className="text-xs text-neutral-500">YoY Growth (Nore)</div>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">5M+</div>
              <div className="text-xs text-neutral-500">Total Views (BEM)</div>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">+4.2K</div>
              <div className="text-xs text-neutral-500">New Followers</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}