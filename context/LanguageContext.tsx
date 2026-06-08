"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "id";

const translations = {
  en: {
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.hire": "Hire me", // NEW
    
    
    // Home Page - Hero
    "hero.title": "Aditya Satria Pratama — Creative Video Producer & Systems Builder", // NEW
    "hero.desc": "Bridging high-performance video production with data-driven systems thinking.", // NEW
    "btn.explore": "Explore Selected Works",
    "btn.download": "Download CV",
    // About Page
    "about.role": "Creative Technologist",
    "about.intro": "I'm a creative technologist bridging high-performance video production with systems thinking. My background in Informatics shapes how I approach editing timelines — not just as aesthetic choices, but as measurable audience retention structures that drive business conversion.",
    "about.skills": "Skills & Tools",
    "about.org": "Leadership & Organizations",
    "about.edu": "Education & Achievements",
    "about.edu.thesis": "Thesis: Developed an interactive 3D game in Unreal Engine — the first Unreal Engine based thesis implementation in the faculty history.",
    
    // Contact Page
    "contact.headline": "Let's work together — I'm available for full-time roles and freelance projects.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.type": "Collaboration Type",
    "contact.form.type.fulltime": "Full-time Role",
    "contact.form.type.freelance": "Freelance Project",
    "contact.form.type.collab": "Collaboration",
    "contact.form.type.other": "Other",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.reply": "I typically reply within 24–48 hours.",

// Stats Strip
    "stat.views": "Views",
    "stat.growth": "Influencer",
    "stat.brands": "Tier-1 Brands",

    // Status Availability
    "status.available": "Open for work",
    "status.unavailable": "Currently unavailable",
    
    // Home Page - Sections
    "section.exp": "Professional Experience",
    "section.exp.desc": "A timeline of operational integration and creative execution.",
    "section.work": "Selected Works",
    "section.work.viewAll": "View all projects",
    "section.achievements": "Key Achievements", // NEW
    
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
    "work.nore.desc": "Content Strategy • 310% Growth",

    // Footer
    "footer.title": "Let's build scalable creative operations.",
    "footer.rights": "All rights reserved."
  },
  id: {
    "nav.home": "Beranda",
    "nav.work": "Karya",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    "nav.hire": "Rekrut saya", // NEW
    
    // Home Page - Hero
    "hero.title": "Aditya Satria Pratama — Produser Video Kreatif & Pembangun Sistem", // NEW
    "hero.desc": "Produksi konten performa tinggi dengan pendekatan berbasis data dan sistem.", // NEW
    "btn.explore": "Jelajahi Karya",
    "btn.download": "Unduh CV",
    
// Stats Strip
    "stat.views": "Penayangan",
    "stat.growth": "Influencer",
    "stat.brands": "Klien Tier-1",

    // Status Availability
    "status.available": "Tersedia untuk proyek",
    "status.unavailable": "Saat ini tidak tersedia",
    
    // Home Page - Sections
    "section.exp": "Pengalaman Profesional",
    "section.exp.desc": "Lini masa integrasi operasional dan eksekusi kreatif.",
    "section.work": "Karya Pilihan",
    "section.work.viewAll": "Lihat semua proyek",
    "section.achievements": "Pencapaian Utama", // NEW

    // About Page
    "about.role": "Teknolog Kreatif",
    "about.intro": "Saya adalah seorang teknolog kreatif yang menjembatani produksi video performa tinggi dengan pemikiran sistem. Latar belakang saya di bidang Informatika membentuk cara saya menyusun timeline editing — bukan sekadar pilihan estetika, melainkan sebagai struktur retensi audiens terukur yang mendorong konversi bisnis.",
    "about.skills": "Keahlian & Alat",
    "about.org": "Kepemimpinan & Organisasi",
    "about.edu": "Pendidikan & Pencapaian",
    "about.edu.thesis": "Tugas Akhir: Mengembangkan purwarupa game interaktif 3D menggunakan Unreal Engine—menjadi implementasi tesis berbasis Unreal Engine pertama dalam sejarah fakultas.",
    
    // Contact Page
    "contact.headline": "Mari bekerja sama — Tersedia untuk posisi full-time maupun proyek freelance.",
    "contact.form.name": "Nama",
    "contact.form.email": "Email",
    "contact.form.type": "Tipe Kolaborasi",
    "contact.form.type.fulltime": "Posisi Full-time",
    "contact.form.type.freelance": "Proyek Freelance",
    "contact.form.type.collab": "Kolaborasi",
    "contact.form.type.other": "Lainnya",
    "contact.form.message": "Pesan",
    "contact.form.submit": "Kirim Pesan",
    "contact.reply": "Saya biasanya membalas dalam waktu 24–48 jam.",
    
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
    "work.nore.desc": "Strategi Konten • Pertumbuhan 310%",

    // Footer
    "footer.title": "Mari bangun operasi kreatif yang terukur.",
    "footer.rights": "Hak cipta dilindungi undang-undang."
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
  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "id" : "en"));
  const t = (key: TranslationKey) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};