"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe } from "lucide-react"; // Import ikon Globe
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext"; // Import hook bahasa

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage, t } = useLanguage(); // Gunakan fungsi bahasa

  useEffect(() => setMounted(true), []);

  // Menu menggunakan fungsi terjemahan t()
  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.work"), path: "/work" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors">
      <Link href="/" className="text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight text-lg hover:opacity-70 transition-opacity">
        Aditya Satria Pratama
      </Link>
      
      <div className="flex items-center gap-6 md:gap-8">
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path} 
              className={`transition-colors ${
                pathname === link.path 
                  ? "text-neutral-900 dark:text-white" 
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Grup Tombol Kontrol */}
        {mounted && (
          <div className="flex items-center gap-2">
            {/* Tombol Ganti Bahasa */}
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-1 p-2 rounded-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:scale-105 transition-transform shadow-sm text-neutral-600 dark:text-neutral-400"
              title="Change Language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>

            {/* Tombol Tema (Dark/Light) */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="p-2 rounded-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:scale-105 transition-transform shadow-sm"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-neutral-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}