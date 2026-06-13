"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Efek transparan/blur saat website di-scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home" as any), path: "/" },
    { name: t("nav.work" as any), path: "/work" },
    { name: "Gallery", path: "/gallery" },
    { name: t("nav.about" as any), path: "/about" },
    { name: t("nav.contact" as any), path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo / Nama */}
        <Link 
          href="/" 
          className="text-lg font-medium text-neutral-900 dark:text-white transition-opacity hover:opacity-80"
        >
          Aditya Satria Pratama
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-white ${
                pathname === link.path
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center gap-4">
          
          {/* CATATAN: Masukkan komponen tombol Tema (Dark Mode) dan Bahasa Anda di dalam div ini */}
          <div className="flex items-center gap-2">
            {/* <LanguageToggle /> */}
            {/* <ThemeToggle /> */}
          </div>

          {/* Hire Me Button (Desktop Only) */}
          <Link 
            href="/contact" 
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-[#050505] text-sm font-medium rounded-full transition-transform hover:scale-105"
          >
            Hire me
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 shadow-xl px-6 py-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  pathname === link.path
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <hr className="border-neutral-200 dark:border-neutral-800" />
          
          {/* Hire Me Button (Mobile Only) */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-[#050505] text-base font-medium rounded-full active:scale-95 transition-transform"
          >
            Hire me
          </Link>
        </div>
      )}
    </header>
  );
}