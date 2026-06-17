"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HoloBackground, HazardStripes } from '../components/CyberAssets';
import { Terminal } from '../components/Terminal';
import { ProjectDetail } from '../components/ProjectDetail';
import { Hero, About, ProjectsGrid, Skills, Experience, Contact } from '../components/Sections';
import { PROJECTS } from '../data/portfolio';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => { const timer = setTimeout(() => setLoading(false), 1500); return () => clearTimeout(timer); }, []);

  const handleNextProject = () => {
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    setSelectedProject(PROJECTS[(currentIndex + 1) % PROJECTS.length]);
  };

  const handlePrevProject = () => {
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    setSelectedProject(PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]);
  };

  if (loading) {
    return (
      <div className="h-screen w-screen bg-white flex flex-col items-center justify-center font-mono text-[#081B3A]">
        <div className="w-80 border-4 border-[#081B3A] p-6 bg-[#FAFAFA] shadow-[8px_8px_0px_#2E6DFF] relative overflow-hidden">
          <HazardStripes className="absolute top-0 left-0" />
          <p className="mb-4 mt-2 text-[#081B3A] font-bold text-lg uppercase tracking-widest border-b-2 border-[#081B3A] pb-2">Initializing System</p>
          <div className="w-full h-4 bg-white border-2 border-[#081B3A] p-0.5">
            <motion.div className="h-full bg-[#2E6DFF]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.3, ease: "linear" }} />
          </div>
          <div className="mt-4 text-xs text-[#081B3A] space-y-1 font-bold uppercase">
            <p>&gt; Loading UI assets... OK</p><p>&gt; Rendering wireframes... OK</p><p>&gt; Establishing grid link...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-[#2E6DFF] selection:text-white relative">
      <HoloBackground />
      <Terminal />

      <nav className="fixed top-0 left-0 w-full z-40 bg-white border-b-4 border-[#081B3A] p-4 shadow-[0_4px_0px_#2E6DFF]">
        <div className="container mx-auto flex justify-between items-center">
          <div 
            onClick={() => setSelectedProject(null)} 
            className="font-display font-bold text-[#081B3A] tracking-widest text-xl bg-[#E2E8F0] px-2 py-1 border-2 border-[#081B3A] cursor-pointer hover:bg-[#081B3A] hover:text-white transition-colors"
          >
            S.B_
          </div>
          <div className="hidden md:flex gap-6 font-mono text-sm font-bold items-center">
            {!selectedProject ? (
              <>
                {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-[#081B3A] hover:text-white hover:bg-[#2E6DFF] border-2 border-transparent hover:border-[#081B3A] transition-colors px-2 py-1 uppercase">
                    [{item}]
                  </a>
                ))}
              </>
            ) : (
              <button onClick={() => setSelectedProject(null)} className="text-[#081B3A] hover:text-white hover:bg-[#2E6DFF] border-2 border-transparent hover:border-[#081B3A] transition-colors px-2 py-1 uppercase">
                [BACK_TO_HOME]
              </button>
            )}
            <a href="US_Resume.pdf" target="_blank" rel="noreferrer" className="text-white bg-[#081B3A] hover:text-[#081B3A] hover:bg-[#E2E8F0] border-2 border-[#081B3A] transition-colors px-3 py-1 uppercase shadow-[2px_2px_0px_#2E6DFF]">
              [RESUME]
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-16">
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Hero />
              <About />
              <ProjectsGrid onSelectProject={setSelectedProject} />
              <Skills />
              <Experience />
              <Contact />
            </motion.div>
          ) : (
            <ProjectDetail 
              key={`project-${selectedProject.id}`}
              project={selectedProject} 
              onBack={() => setSelectedProject(null)}
              onNext={handleNextProject}
              onPrev={handlePrevProject}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}