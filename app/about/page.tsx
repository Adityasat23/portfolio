"use client";

import { Download } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-24">
      
      {/* Bio Section */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">About Me</h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I bridge the gap between creative storytelling and logical systems. My background in Informatics Engineering shapes how I approach video production and design—not just making things look good, but building workflows that are efficient and data-driven.
        </p>
        <a href="/CV ADITYA SATRIA PRATAMA 2026.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-full hover:scale-105 transition-transform">
          <Download className="w-4 h-4" /> Download PDF Resume
        </a>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-12">
        <h2 className="text-2xl font-medium">Experience</h2>
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-sm text-neutral-500 font-medium">Dec 2025 - Present</div>
            <div className="md:col-span-3 space-y-2">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Creative Video Producer</h3>
              <p className="text-sm font-medium text-neutral-500">TimePhoria - Skintific</p>
              <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1 mt-2">
                <li>Architected an internal web-based editing dashboard, reducing post-production time by 20%.</li>
                <li>Produced short-form TikTok ad creatives ensuring hook visibility in the first 3 seconds.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-sm text-neutral-500 font-medium">Sept 2024 - Present</div>
            <div className="md:col-span-3 space-y-2">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Video Editor</h3>
              <p className="text-sm font-medium text-neutral-500">Angkasa Management</p>
              <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1 mt-2">
                <li>Optimized 10+ performance campaigns for Tier-1 clients totaling 21.7M+ views.</li>
                <li>Engineered platform-native pacing optimizing watch-through and scroll-stop rates.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-sm text-neutral-500 font-medium">Sept 2024 - Nov 2025</div>
            <div className="md:col-span-3 space-y-2">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Creative Content Specialist</h3>
              <p className="text-sm font-medium text-neutral-500">CV. Nore Inovasi</p>
              <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1 mt-2">
                <li>Scaled Instagram performance driving 310.9% YoY growth.</li>
                <li>Managed video and graphic production for 5+ client accounts simultaneously.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-12">
        <h2 className="text-2xl font-medium">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-sm text-neutral-500 font-medium">Graduated</div>
          <div className="md:col-span-3 space-y-2">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Informatics Engineering</h3>
            <p className="text-sm font-medium text-neutral-500">Semarang State Polytechnic (GPA: 3.71/4.00)</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Final thesis: Developed an interactive 3D game in Unreal Engine (Gold Medalist Intl. Invention Expo 2025).</p>
          </div>
        </div>
      </section>

    </main>
  );
}