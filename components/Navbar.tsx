"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: t("nav.home" as any), path: "/" },
    { name: t("nav.work" as any), path: "/work" },
    { name: "Gallery", path: "/gallery" },
    { name: t("nav.about" as any), path: "/about" },
    { name: t("nav.contact" as any), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight text-lg hover:opacity-70 transition-opacity">
          Aditya Satria Pratama
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Menu */}
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

          {/* Action Buttons (Language, Theme, Hire Me, Mobile Menu Toggle) */}
          <div className="flex items-center gap-3">
            {mounted && (
              <>
                <button onClick={toggleLanguage} className="flex items-center gap-1 p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:scale-105 transition-transform text-neutral-600 dark:text-neutral-400" title="Change Language">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase hidden sm:inline-block">{language}</span>
                </button>
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:scale-105 transition-transform" title="Toggle Theme">
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-neutral-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
                </button>
              </>
            )}
            
            {/* Desktop "Hire Me" Button */}
            <Link href="/contact" className="hidden sm:inline-flex px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
              {t("nav.hire" as any)}
            </Link>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 shadow-xl px-6 py-6 flex flex-col gap-4 transition-all animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium py-3 border-b border-neutral-200/50 dark:border-neutral-800/50 last:border-0 ${
                pathname === link.path
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-center py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
          >
            {t("nav.hire" as any)}
          </Link>
        </div>
      )}
    </nav>
  );
}