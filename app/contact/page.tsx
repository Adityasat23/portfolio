"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrasi penanganan formulir sesuai kebutuhan arsitektur Anda
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300 pt-32 pb-24 px-6 md:px-12">
      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Kolom Informasi Hubungan Langsung */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Let&apos;s talk.
          </h1>
          <p className="text-lg leading-relaxed text-neutral-500 max-w-xs">
            Saat ini terbuka untuk posisi penuh waktu korporat maupun proyek kolaborasi jangka pendek terarah.
          </p>
          
          <div className="space-y-4 pt-6">
            <a href="mailto:adityasatriaprwork@gmail.com" className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 hover:opacity-70 transition-opacity font-medium">
              <Mail className="w-5 h-5 text-neutral-400" /> adityasatriaprwork@gmail.com
            </a>
            <a href="https://linkedin.com/in/aditysat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 hover:opacity-70 transition-opacity font-medium">
              LinkedIn Profile <ExternalLink className="w-4 h-4 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Kolom Formulir Interaktif Fokus Halus */}
        <div className="lg:col-span-7 p-8 md:p-10 bg-white/60 dark:bg-neutral-900/30 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-sm"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Message</label>
              <textarea 
                rows={5}
                required
                className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-sm resize-none"
                placeholder="Tell me about your project or open opportunity..."
              />
            </div>

            <button 
              type="submit"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-md text-sm"
            >
              Send Message 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}