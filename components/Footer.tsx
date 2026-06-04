"use client";

import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; 

export default function Footer() {
  const { t } = useLanguage(); 
  const isAvailable = true; // Ubah ke false jika sedang tidak menerima proyek

  return (
    <footer className="border-t border-neutral-200/50 dark:border-neutral-800/50 bg-white dark:bg-[#050505] transition-colors mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-8">
          
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight max-w-sm leading-tight">
            {t("footer.title" as any)}
          </h2>

          {/* Availability Status (NEW) */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full w-fit">
            <span className="relative flex h-2.5 w-2.5">
              {isAvailable && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isAvailable ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
            </span>
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
              {isAvailable ? t("status.available" as any) : t("status.unavailable" as any)}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="mailto:adityasatriaprwork@gmail.com" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium">
              <Mail className="w-4 h-4" /> Email
            </a>
            <span className="text-neutral-300 dark:text-neutral-800">•</span>
            <a href="https://linkedin.com/in/aditysat" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium">
               LinkedIn
            </a>
            <span className="text-neutral-300 dark:text-neutral-800">•</span>
            <a href="https://behance.net/aditysat" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors flex items-center gap-2 text-sm font-medium">
               Behance
            </a>
          </div>
        </div>
        
        <p className="text-sm text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Aditya Satria Pratama. {t("footer.rights" as any)}
        </p>
        
      </div>
    </footer>
  );
}