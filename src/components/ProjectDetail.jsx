"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, X } from 'lucide-react';
import { InteractiveCard } from './InteractiveCard';
import { HazardStripes, WireGridBox } from './CyberAssets';

export const ProjectDetail = ({ project, onBack, onNext, onPrev }) => {
  useEffect(() => { window.scrollTo(0, 0); }, [project]);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="py-24 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-center mb-8 border-b-4 border-[#081B3A] pb-4">
          <button onClick={onBack} className="px-4 py-2 bg-white border-2 border-[#081B3A] shadow-[4px_4px_0px_#2E6DFF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2E6DFF] transition-all font-bold uppercase flex items-center gap-2 text-[#081B3A]">
            <ArrowLeft size={18} /> Return_To_Main
          </button>
          <div className="flex gap-4">
            <button onClick={onPrev} className="px-3 py-1 font-bold border-2 border-[#081B3A] hover:bg-[#E2E8F0] uppercase text-[#081B3A]">Prev</button>
            <button onClick={onNext} className="px-3 py-1 font-bold border-2 border-[#081B3A] hover:bg-[#E2E8F0] uppercase text-[#081B3A]">Next</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#081B3A] uppercase mb-4 leading-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-1 bg-[#081B3A] text-white font-mono font-bold text-xs uppercase">{t}</span>
              ))}
            </div>
            <p className="text-[#081B3A] text-lg font-mono font-semibold leading-relaxed border-l-4 border-[#2E6DFF] pl-4 bg-white p-4 shadow-[4px_4px_0px_#E2E8F0]">
              {project.longDesc}
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-4">
            <div className="aspect-square bg-white border-4 border-[#081B3A] p-4 flex items-center justify-center relative overflow-hidden shadow-[6px_6px_0px_#2E6DFF]">
              <HazardStripes className="absolute top-0 left-0 w-full" />
              <WireGridBox size={120} className="animate-spin-slow" />
              <HazardStripes className="absolute bottom-0 left-0 w-full" />
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="w-full text-center px-6 py-3 font-bold text-white bg-[#2E6DFF] border-2 border-[#081B3A] shadow-[4px_4px_0px_#081B3A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#081B3A] transition-all uppercase flex items-center justify-center gap-2">
              <ExternalLink size={18} /> Deploy / Repo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InteractiveCard title="SYS.CHALLENGES">
            <ul className="space-y-4 text-[#081B3A] font-mono text-sm font-semibold">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 border-b-2 border-dashed border-[#E2E8F0] pb-2">
                  <X className="text-red-500 shrink-0" size={18} /> {c}
                </li>
              ))}
            </ul>
          </InteractiveCard>
          
          <div className="space-y-8">
            <InteractiveCard title="SYS.FEATURES">
              <ul className="space-y-3 text-[#081B3A] font-mono text-sm font-semibold">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[#2E6DFF] font-bold">{'>'}</span> {f}
                  </li>
                ))}
              </ul>
            </InteractiveCard>
            
            <InteractiveCard title="SYS.ACHIEVEMENTS" className="bg-[#E2E8F0]">
              <div className="grid grid-cols-2 gap-4">
                {project.achievements.map((a, i) => (
                  <div key={i} className="border-2 border-[#081B3A] bg-white p-3 text-center shadow-[2px_2px_0px_#2E6DFF] flex items-center justify-center">
                    <span className="font-bold text-xs uppercase text-[#081B3A]">{a}</span>
                  </div>
                ))}
              </div>
            </InteractiveCard>
          </div>
        </div>
      </div>
    </motion.div>
  );
};