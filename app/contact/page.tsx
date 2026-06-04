"use client";

import { Mail, ArrowRight, ExternalLink, MessageCircle, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const isAvailable = true;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sambungkan dengan Formspree atau Resend
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans transition-colors duration-300 pt-32 pb-24 px-6 md:px-12">
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* KOLOM KIRI: Headline & Social Cards */}
        <div className="lg:col-span-5 space-y-10">
          
          <div className="space-y-6">
            {/* Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full w-fit">
              <span className="relative flex h-2.5 w-2.5">
                {isAvailable && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isAvailable ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
              </span>
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                {isAvailable ? t("status.available" as any) : t("status.unavailable" as any)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.1]">
              {t("contact.headline" as any)}
            </h1>
          </div>
          
          {/* Social Media Cards */}
          <div className="space-y-4">
            <a href="mailto:adityasatriaprwork@gmail.com" className="group flex items-center justify-between p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl text-neutral-900 dark:text-white"><Mail className="w-5 h-5"/></div>
                <div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-100">Email</div>
                  <div className="text-sm text-neutral-500">adityasatriaprwork@gmail.com</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
            </a>

            <a href="https://linkedin.com/in/aditysat" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl hover:border-blue-400/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-500"><MessageCircle className="w-5 h-5"/></div>
                <div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-100">LinkedIn</div>
                  <div className="text-sm text-neutral-500">Professional network & updates</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 transition-colors" />
            </a>

            <a href="https://behance.net/aditysat" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl hover:border-indigo-400/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-500"><LayoutGrid className="w-5 h-5"/></div>
                <div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-100">Behance</div>
                  <div className="text-sm text-neutral-500">Design & visual portfolio</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-indigo-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* KOLOM KANAN: Formulir Lengkap */}
        <div className="lg:col-span-7 p-8 md:p-10 bg-white/60 dark:bg-neutral-900/30 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">{t("contact.form.name" as any)}</label>
                <input type="text" required className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">{t("contact.form.email" as any)}</label>
                <input type="email" required className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-sm" placeholder="john@company.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">{t("contact.form.type" as any)}</label>
              <select required className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-sm appearance-none">
                <option value="" disabled selected>Select an option...</option>
                <option value="fulltime">{t("contact.form.type.fulltime" as any)}</option>
                <option value="freelance">{t("contact.form.type.freelance" as any)}</option>
                <option value="collab">{t("contact.form.type.collab" as any)}</option>
                <option value="other">{t("contact.form.type.other" as any)}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">{t("contact.form.message" as any)}</label>
              <textarea rows={4} required className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-sm resize-none" placeholder="Tell me about your project or open opportunity..." />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button type="submit" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 font-medium rounded-full hover:scale-[1.02] transition-transform duration-300 shadow-md text-sm">
                {t("contact.form.submit" as any)} 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              {/* Response Time Expectation (Membangun Trust) */}
              <p className="text-xs font-medium text-neutral-400 text-center sm:text-right flex items-center gap-1.5 justify-center sm:justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-500/50"></span>
                {t("contact.reply" as any)}
              </p>
            </div>
          </form>
        </div>

      </main>
    </div>
  );
}