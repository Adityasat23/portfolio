"use client";

import { Download, Award, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "Dec 2025 - Present",
    company: "TimePhoria - Skintific",
    role: "Creative Video Producer",
    bullets: [
      "Mengotomatiskan alur kerja internal melalui arsitektur dashboard pengeditan berbasis web, memangkas durasi pasca-produksi video sebesar 20% (60 ke 50 menit).",
      "Memproduksi aset kreatif iklan TikTok berorientasi konversi tinggi dengan retensi visual yang dioptimalkan dalam 3 detik pertama."
    ]
  },
  {
    date: "Sept 2024 - Present",
    company: "Angkasa Management",
    role: "Video Editor (Freelance)",
    bullets: [
      "Mengedit dan mengoptimalkan 10+ kampanye performa digital untuk klien Tier-1 termasuk Google Gemini x Gracia Caroline dan Dr. Grace x OB Herbal.",
      "Menghasilkan total akumulasi performa penayangan sebanyak 21.7M+ views dengan kepatuhan penuh terhadap panduan brand multinasional."
    ]
  },
  {
    date: "Sept 2024 - Nov 2025",
    company: "CV. Nore Inovasi",
    role: "PIC Creative Content Specialist",
    bullets: [
      "Dipercaya menjadi ketua tim multimedia dalam kurun waktu 4 bulan. Mengarahkan alur kerja harian untuk 3 karyawan magang.",
      "Meningkatkan performa metrik organik media sosial hingga 200K+ penayangan, mengamankan pertumbuhan saluran bisnis sebesar 310.9% YoY."
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300 pt-32 pb-24 px-6 md:px-12">
      <main className="max-w-4xl mx-auto space-y-24">
        
        {/* Narasi Profil Utama */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            Saya mengintegrasikan pemikiran algoritmik rekayasa sistem dengan estetika produksi video performa. Latar belakang pendidikan di Teknik Informatika membentuk cara saya memandang lini masa penyuntingan—bukan sekadar estetika visual, melainkan struktur retensi audiens yang terukur demi mendukung konversi bisnis.
          </p>
          <div className="pt-2">
            <a 
              href="/CV ADITYA SATRIA PRATAMA 2026.pdf" 
              download 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <Download className="w-4 h-4" /> Download PDF Resume
            </a>
          </div>
        </section>

        {/* Garis Waktu Pengalaman Profesional */}
        <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-neutral-400" /> Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-sm font-medium text-neutral-400 dark:text-neutral-500 md:pt-1">{exp.date}</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">{exp.role}</h3>
                  <p className="text-sm font-medium text-neutral-500">{exp.company}</p>
                  <ul className="list-disc list-inside text-sm md:text-base text-neutral-600 dark:text-neutral-400 space-y-2 pt-2 leading-relaxed">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Riwayat Pendidikan & Capaian Riset */}
        <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-neutral-400" /> Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-sm font-medium text-neutral-400 dark:text-neutral-500 md:pt-1">Graduated 2025</div>
            <div className="md:col-span-3 space-y-3">
              <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Teknik Informatika</h3>
              <p className="text-sm font-medium text-neutral-500">Politeknik Negeri Semarang &nbsp;•&nbsp; GPA: 3.71 / 4.00</p>
              <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 pt-1">
                Tugas Akhir: Mengembangkan purwarupa game interaktif 3D menggunakan Unreal Engine—menjadi implementasi tesis berbasis Unreal Engine pertama dalam sejarah fakultas.
              </p>
            </div>
          </div>
        </section>

        {/* Grid Penghargaan & Prestasi */}
        <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
            <Award className="w-5 h-5 text-neutral-400" /> Key Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl shadow-sm">
              <div className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Gold Medalist</div>
              <div className="text-sm text-neutral-500 mt-1">Indonesia International Invention Expo 2025</div>
            </div>
            <div className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl shadow-sm">
              <div className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Best Presentation Winner</div>
              <div className="text-sm text-neutral-500 mt-1">Kompetisi Nasional Mahasiswa KMIPN V (2023)</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}