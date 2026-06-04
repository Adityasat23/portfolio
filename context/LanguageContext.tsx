"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "id";

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Home Page - Hero
    "hero.title": "Hi, I'm Aditya Satria Pratama.",
    "hero.subtitle": "A Creative Video Producer & Designer with a strong foundation in Informatics.",
    "hero.desc": "Operating at the intersection of high-end video production, 3D environments, and operational UI/UX efficiency.",
    "btn.explore": "Explore Selected Works",
    "btn.download": "Download CV",
    
    // Home Page - Sections
    "section.exp": "Professional Experience",
    "section.exp.desc": "A timeline of operational integration and creative execution.",
    "section.work": "Selected Works",
    "section.work.viewAll": "View all projects",
    
    // Experience Data
    "exp.timephoria.role": "Creative Video Producer",
    "exp.timephoria.desc": "Architected an internal web-based editing dashboard, reducing per-video post-production time by 20% (60 to 50 min). Produced retention-driven TikTok ad campaigns.",
    "exp.angkasa.role": "Video Editor",
    "exp.angkasa.desc": "Edited 10+ performance campaigns for Tier 1 clients (Google Gemini, OB Herbal) totaling 21.7M+ views. Engineered platform-native pacing optimizing hook effectiveness.",
    "exp.nore.role": "PIC Creative Content Specialist",
    "exp.nore.desc": "Promoted from intern to team lead. Scaled Instagram performance to 200K+ views and 148K+ reach, driving 310.9% YoY growth.",
    
    // Selected Works Data
    "work.gemini.title": "Google Gemini Campaign",
    "work.gemini.desc": "Video Editor • 21.7M+ Views",
    "work.timephoria.title": "TimePhoria Dashboard",
    "work.timephoria.desc": "UI/UX & Frontend Development",
    "work.nore.title": "Nore Inovasi Scaling",
    "work.nore.desc": "Content Strategy • 310% Growth"
  },
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.work": "Karya",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    
    // Home Page - Hero
    "hero.title": "Halo, saya Aditya Satria Pratama.",
    "hero.subtitle": "Produser Video Kreatif & Desainer dengan fondasi kuat di bidang Informatika.",
    "hero.desc": "Beroperasi di persimpangan antara produksi video kualitas tinggi, lingkungan 3D, dan efisiensi UI/UX operasional.",
    "btn.explore": "Jelajahi Karya",
    "btn.download": "Unduh CV",
    
    // Home Page - Sections
    "section.exp": "Pengalaman Profesional",
    "section.exp.desc": "Lini masa integrasi operasional dan eksekusi kreatif.",
    "section.work": "Karya Pilihan",
    "section.work.viewAll": "Lihat semua proyek",
    
    // Experience Data
    "exp.timephoria.role": "Produser Video Kreatif",
    "exp.timephoria.desc": "Membangun arsitektur dashboard editing internal berbasis web, mengurangi waktu pasca-produksi per video sebesar 20% (60 ke 50 menit). Memproduksi kampanye iklan TikTok berfokus pada retensi.",
    "exp.angkasa.role": "Video Editor",
    "exp.angkasa.desc": "Mengedit 10+ kampanye digital untuk klien Tier 1 (Google Gemini, OB Herbal) dengan total 21.7M+ penayangan. Merancang pacing video adaptif untuk memaksimalkan retensi.",
    "exp.nore.role": "Spesialis Konten Kreatif",
    "exp.nore.desc": "Promosi dari pemagang menjadi ketua tim. Meningkatkan performa Instagram hingga 200K+ penayangan dan jangkauan 148K+, mendorong pertumbuhan 310.9% YoY.",
    
    // Selected Works Data
    "work.gemini.title": "Kampanye Google Gemini",
    "work.gemini.desc": "Video Editor • 21.7M+ Penayangan",
    "work.timephoria.title": "Dashboard TimePhoria",
    "work.timephoria.desc": "UI/UX & Pengembangan Frontend",
    "work.nore.title": "Pertumbuhan Nore Inovasi",
    "work.nore.desc": "Strategi Konten • Pertumbuhan 310%"
  }
};

// Menggunakan tipe data yang aman
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
    // Fallback yang aman jika kunci bahasa tidak ditemukan
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