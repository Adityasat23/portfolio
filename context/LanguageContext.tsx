"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "id";

// Kamus Bahasa (Dictionary)
const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Home Page
    "hero.title": "Hi, I'm Aditya Satria Pratama.",
    "hero.subtitle": "A Creative Video Producer & Designer with a strong foundation in Informatics.",
    "hero.description": "Operating at the intersection of high-end video production, 3D environments, and operational UI/UX efficiency.",
    "btn.explore": "Explore Selected Works",
    "btn.downloadCV": "Download CV",
    "section.experience": "Professional Experience",
    "section.experience.desc": "A timeline of operational integration and creative execution.",
    "section.works": "Selected Works",
    "section.works.viewAll": "View all projects",
  },
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.work": "Karya",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    
    // Home Page
    "hero.title": "Halo, saya Aditya Satria Pratama.",
    "hero.subtitle": "Produser Video Kreatif & Desainer dengan fondasi kuat di bidang Informatika.",
    "hero.description": "Beroperasi di persimpangan antara produksi video kualitas tinggi, lingkungan 3D, dan efisiensi UI/UX operasional.",
    "btn.explore": "Jelajahi Karya",
    "btn.downloadCV": "Unduh CV",
    "section.experience": "Pengalaman Profesional",
    "section.experience.desc": "Lini masa integrasi operasional dan eksekusi kreatif.",
    "section.works": "Karya Pilihan",
    "section.works.viewAll": "Lihat semua proyek",
  }
};

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = (key: TranslationKey) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};