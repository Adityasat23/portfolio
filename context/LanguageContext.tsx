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
    "hero.title": "Aditya Satria Pratama — Digital Content Specialist",
    "hero.desc": "I create and edit digital content across video, social media, advertising, and AI-assisted production. My work spans commercial campaigns, KOL content, UGC, product videos, and performance creative.",
    "btn.explore": "Explore Selected Works",
    "btn.download": "Download CV",
    
    // Stats Strip
    "stat.brandsProjects": "Top Brands",
    "stat.minVideo": "Total Views",
    "stat.yoy": "Videos Edited",
    "stat.growth": "YoY Growth",

    // Status Availability
    "status.available": "Open to creative opportunities",
    "status.unavailable": "Currently unavailable",
    
    // Home Page - Sections
    "section.exp": "Professional Experience",
    "section.exp.desc": "My journey across content, video, and creative production.",
    "section.work": "Selected Works",
    "section.work.viewAll": "View all projects",
    "section.achievements": "Key Achievements", 

    // About Page
    "about.role": "Digital Content Specialist",
    "about.intro": "My background sits between creative production and technology. I started with a foundation in Informatics and built my experience through content, video editing, social media, and commercial campaigns.\n\nToday, I work across video production, TikTok advertising, UGC, AI-assisted content, and creative tools - combining hands-on production with a practical approach to improving how creative work gets done.",
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
    
    // Experience Data
    "exp.timephoria.role": "Creative Video Editor",
    "exp.timephoria.desc": "Built an internal web-based editing tool that reduced average post-production time from 60 to 50 minutes per video. Produced and edited TikTok ads across UGC, product, branded, and AI-assisted content.",
    "exp.angkasa.role": "Video Editor",
    "exp.angkasa.desc": "Edited commercial and short-form video content for brands including Google Gemini and OB Herbal, as well as KOL-led campaigns across multiple consumer brands.",
    "exp.nore.role": "PIC Creative Content Specialist",
    "exp.nore.desc": "Promoted from intern to team lead. Grew Instagram content to 200K+ views and 148K+ reach, contributing to 310.9% YoY growth.",
    
    // Selected Works Data
    "work.gemini.title": "Google Gemini Campaign",
    "work.gemini.desc": "Student Promo",
    "work.timephoria.title": "TimePhoria TikTok Ads",
    "work.timephoria.desc": "Performance & UGC",
    "work.nore.title": "Skintific Content & Ads",
    "work.nore.desc": "TikTok Production",

    // Footer
    "footer.title": "Let's build scalable creative operations.",
    "footer.rights": "All rights reserved.",

    // Achievements
    "achieve.1.title": "Multi-Brand Commercial Work",
    "achieve.1.desc": "Google · OB Herbal · Skintific · SilverQueen · Runable · Gooday",
    "achieve.2.title": "Ongoing KOL Campaigns",
    "achieve.2.desc": "Gracia Caroline - Multi-Brand Content",
    "achieve.3.title": "Performance & AI Creative",
    "achieve.3.desc": "UGC · TikTok Ads · AI Video · Product Content",
    "achieve.4.title": "End-to-End Content Production",
    "achieve.4.desc": "Editing · Creative · UI/UX · Web"
  },
  id: {
    "nav.home": "Beranda",
    "nav.work": "Karya",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    "nav.hire": "Rekrut saya", 
    
    // Home Page - Hero
    "hero.title": "Aditya Satria Pratama — Spesialis Konten Digital",
    "hero.desc": "Saya memproduksi dan mengedit konten digital mulai dari video, media sosial, periklanan, hingga produksi berbasis AI. Pekerjaan saya mencakup kampanye komersial, konten KOL, UGC, video produk, dan materi kreatif performa.",
    "btn.explore": "Jelajahi Karya",
    "btn.download": "Unduh CV",
    
    // Stats Strip
    "stat.brandsProjects": "Top Brands",
    "stat.minVideo": "Total Penayangan",
    "stat.yoy": "Video Diedit",
    "stat.growth": "Pertumbuhan YoY",

    // Status Availability
    "status.available": "Terbuka untuk peluang kreatif",
    "status.unavailable": "Saat ini tidak tersedia",
    
    // Home Page - Sections
    "section.exp": "Pengalaman Profesional",
    "section.exp.desc": "Perjalanan saya melintasi produksi konten, video, dan kreatif.",
    "section.work": "Karya Pilihan",
    "section.work.viewAll": "Lihat semua proyek",
    "section.achievements": "Pencapaian Utama", 

    // About Page
    "about.role": "Spesialis Konten Digital",
    "about.intro": "Latar belakang saya berada di antara produksi kreatif dan teknologi. Saya memulai dengan fondasi di bidang Informatika dan membangun pengalaman saya melalui konten, video editing, media sosial, dan kampanye komersial.\n\nSaat ini, saya bekerja memproduksi video, iklan TikTok, UGC, konten berbasis AI, dan alat kreatif - menggabungkan produksi praktis dengan pendekatan inovatif untuk meningkatkan cara kerja kreatif.",
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
    "exp.timephoria.role": "Creative Video Editor",
    "exp.timephoria.desc": "Membangun alat editing internal berbasis web yang memangkas rata-rata waktu pasca-produksi dari 60 menjadi 50 menit per video. Memproduksi dan mengedit iklan TikTok yang mencakup konten UGC, produk, branding, dan berbasis AI.",
    "exp.angkasa.role": "Video Editor",
    "exp.angkasa.desc": "Mengedit konten video komersial dan format pendek untuk berbagai brand termasuk Google Gemini dan OB Herbal, serta kampanye berbasis KOL di berbagai brand konsumen.",
    "exp.nore.role": "PIC Spesialis Konten Kreatif",
    "exp.nore.desc": "Dipromosikan dari pemagang menjadi ketua tim. Mengembangkan konten Instagram hingga mencapai 200K+ penayangan dan 148K+ jangkauan, berkontribusi pada pertumbuhan 310.9% YoY.",
    
    // Selected Works Data
    "work.gemini.title": "Kampanye Google Gemini",
    "work.gemini.desc": "Promo Mahasiswa",
    "work.timephoria.title": "Iklan TikTok TimePhoria",
    "work.timephoria.desc": "Performa & UGC",
    "work.nore.title": "Konten & Iklan Skintific",
    "work.nore.desc": "Produksi TikTok",

    // Footer
    "footer.title": "Mari bangun operasi kreatif yang terukur.",
    "footer.rights": "Hak cipta dilindungi undang-undang.",

    // Achievements
    "achieve.1.title": "Komersial Multi-Brand",
    "achieve.1.desc": "Google, OB Herbal, Skintific, SilverQueen, Runable, Gooday, dll",
    "achieve.2.title": "Kampanye KOL Aktif",
    "achieve.2.desc": "Gracia Caroline, Dr Grace, berbagai KOL",
    "achieve.3.title": "Kreatif Performa & AI",
    "achieve.3.desc": "UGC, Iklan TikTok, Video AI, Konten Produk",
    "achieve.4.title": "Produksi Konten Menyeluruh",
    "achieve.4.desc": "Editing, Produksi, Kreatif, UI/UX, Web"
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