"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkDetailClient({ project }: { project: any }) {
  const { language } = useLanguage();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-medium">Project Not Found</h1>
          <Link href="/work" className="text-neutral-400 hover:text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4"/> Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 font-sans pt-24 pb-24">
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> {language === 'en' ? 'Back to Archive' : 'Kembali ke Arsip'}
        </Link>
        
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-neutral-200 dark:bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50">
          {project.heroMedia && (
            <Image 
               src={project.heroMedia} 
               alt={project?.title?.[language] || project?.title?.en || "Project Hero"}
               fill
               className="w-full h-full object-cover" 
            />
          )}
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 md:px-12 space-y-20">
        
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight">
            {project?.title?.[language] || project?.title?.en || "Untitled Project"}
          </h1>
          
          <div className="flex flex-wrap items-center gap-y-4 gap-x-8 py-6 border-y border-neutral-200 dark:border-neutral-800 text-sm">
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Role</div>
              <div className="font-medium text-neutral-900 dark:text-neutral-100">{project?.meta?.role || '-'}</div>
            </div>
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Client</div>
              <div className="font-medium text-neutral-900 dark:text-neutral-100">{project?.meta?.client || '-'}</div>
            </div>
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Platform</div>
              <div className="font-medium text-neutral-900 dark:text-neutral-100">{project?.meta?.platform || '-'}</div>
            </div>
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Period</div>
              <div className="font-medium text-neutral-900 dark:text-neutral-100">{project?.meta?.period || '-'}</div>
            </div>
            <div>
              <div className="text-neutral-400 uppercase tracking-wider text-[10px] font-bold mb-1">Category</div>
              <div className="inline-flex px-2.5 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-md text-xs font-semibold">
                {project?.meta?.category || '-'}
              </div>
            </div>
          </div>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.metrics.map((metric: any, index: number) => (
              <div key={index} className="p-6 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl shadow-sm">
                <div className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">{metric?.value || 0}</div>
                <div className="text-sm font-medium text-neutral-500 mt-2">{metric?.label?.[language] || metric?.label?.en || '-'}</div>
              </div>
            ))}
          </section>
        )}

        {project.overview && (
          <section className="space-y-4 max-w-3xl">
            <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
               Overview & Challenge
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project?.overview?.[language] || project?.overview?.en || ''}
            </p>
          </section>
        )}

        {project.execution && project.execution.length > 0 && (
          <section className="space-y-10 border-t border-neutral-200 dark:border-neutral-800 pt-16">
            <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
              {language === 'en' ? 'Execution Process' : 'Proses Eksekusi'}
            </h2>
            
            <div className="space-y-16">
              {project.execution.map((step: any, index: number) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className={`md:col-span-5 space-y-3 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                        {step?.title?.[language] || step?.title?.en || `Step ${index + 1}`}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed pl-11 text-neutral-600 dark:text-neutral-400">
                      {step?.desc?.[language] || step?.desc?.en || ''}
                    </p>
                  </div>
                  
                  <div className={`md:col-span-7 aspect-video bg-neutral-200 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 shadow-md relative ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                     {step.visual && <Image src={step.visual} alt={step?.title?.[language] || step?.title?.en || 'Visual'} fill className="object-cover" />}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-16">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                {language === 'en' ? 'Final Output' : 'Hasil Akhir'}
              </h2>
              {project.gallery.length > 2 && (
                <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-full">
                  <span className="hidden sm:inline">{language === 'en' ? 'Swipe to explore' : 'Geser untuk melihat'}</span>
                  <span className="sm:hidden">{language === 'en' ? 'Swipe' : 'Geser'}</span>
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </div>
              )}
            </div>
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:-mx-12 md:px-12">
              {project.gallery.map((media: any, index: number) => {
                
                const MediaContent = (
                  <div className="relative aspect-[9/16] bg-neutral-200 dark:bg-neutral-800 rounded-3xl overflow-hidden group border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm w-full">
                    {media.src && (
                      <Image 
                        src={media.src} 
                        alt="Gallery Output" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    )}
                    
                    {media.link && (
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                );

                const ItemWrapper = (
                  <div key={index} className="flex-none w-[75vw] sm:w-[45vw] md:w-[30vw] snap-center">
                    {media.link ? (
                      <a href={media.link} target="_blank" rel="noopener noreferrer" className="block" title="Watch Original Video">
                        {MediaContent}
                      </a>
                    ) : (
                      MediaContent
                    )}
                  </div>
                );

                return ItemWrapper;
              })}
            </div>
          </section>
        )}

        {/* NEXT PROJECT LINK */}
        {project.nextProject && project.nextProject.id && (
          <div className="pt-16 pb-12 flex justify-center border-t border-neutral-200 dark:border-neutral-800 mt-16">
            <Link href={`/work/${project.nextProject.id}`} className="group inline-flex flex-col items-center gap-2 text-center">
              <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
                {language === 'en' ? 'Next Project' : 'Proyek Selanjutnya'}
              </span>
              <span className="text-2xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:opacity-70 transition-opacity flex items-center gap-4">
                {project.nextProject.title?.[language] || project.nextProject.title?.en || "Next"} <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
              </span>
            </Link>
          </div>
        )}

      </main>
    </div>
  );
}