"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50">
      <Link href="/" className="text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight text-lg hover:opacity-70 transition-opacity">
        Aditya Satria Pratama
      </Link>
      
      <div className="flex items-center gap-6 md:gap-10 text-sm font-medium">
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
    </nav>
  );
}