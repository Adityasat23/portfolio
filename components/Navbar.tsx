"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", path: "/" }, // Tab Home ditambahkan untuk UX
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors">
      <Link href="/" className="text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight text-lg hover:opacity-70 transition-opacity">
        Aditya Satria Pratama
      </Link>
      
      <div className="flex items-center gap-6 md:gap-10">
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

        {mounted && (
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:scale-105 transition-transform shadow-sm">
            {theme === 'dark' ? <Sun className="w-4 h-4 text-neutral-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
          </button>
        )}
      </div>
    </nav>
  );
}