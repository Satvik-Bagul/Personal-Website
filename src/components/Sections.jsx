"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, ExternalLink, Download, Maximize2 } from 'lucide-react';
import { HazardStripes, CrosshairTarget, GeometricBurst, WireGridBox, GlitchText, GithubIcon, LinkedinIcon, Rubic, Random_Asset } from './CyberAssets';
import { InteractiveCard } from './InteractiveCard';
import { PROJECTS, SKILLS, EXPERIENCE } from '../data/portfolio';

const SectionHeader = ({ title, code }) => (
  <div className="mb-12 border-b-4 border-[#081B3A] pb-2 flex justify-between items-end">
    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-[#081B3A] flex items-center gap-4">
      <span className="text-[#2E6DFF]">&gt;</span> {title}
    </h2>
    <div className="text-[#081B3A] font-bold text-sm hidden md:block uppercase bg-[#E2E8F0] px-2 py-1 border-2 border-[#081B3A]">
      [{code}]
    </div>
  </div>
);

const Y2KBarcode = () => (
  <div className="flex flex-col items-center mb-10 border-4 border-[#081B3A] p-2 bg-white shadow-[6px_6px_0px_#2E6DFF] relative">
    <div className="absolute -left-7 -top-8 opacity-70 hidden md:block"><Random_Asset size={30} /></div>
    <div className="flex items-end h-16 gap-[2px]">
       {[3,1,4,2,6,1,2,5,1,3,2,8,1,2,4,1,3,2,1,5,2].map((w, i) => (
         <div key={i} className="bg-[#081B3A]" style={{ width: `${w}px`, height: i % 4 === 0 ? '60px' : '45px' }} />
       ))}
    </div>
    <div className="w-full flex justify-between mt-1 text-[10px] font-bold tracking-widest text-[#081B3A] border-t-2 border-[#081B3A] pt-1">
      <span>RESTRICTED</span><span>S-BAGUL</span>
    </div>
  </div>
);

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
    <HazardStripes className="absolute top-0 left-0" />
    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "linear" }}>
        <Y2KBarcode />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, ease: "linear" }}>
        <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-4 uppercase">
          <GlitchText text="Satvik Bagul" />
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-[#081B3A] mb-8 font-bold">
          <span className="px-3 py-1 border-2 border-[#081B3A] bg-[#E2E8F0] flex items-center gap-2"> Computer Science</span>
          <span className="px-3 py-1 border-2 border-[#081B3A] bg-[#E2E8F0]">Statistics</span>
          <span className="px-3 py-1 border-2 border-[#081B3A] bg-[#E2E8F0] ">Business</span>
          <span className="px-3 py-1 border-2 border-[#081B3A] bg-[#E2E8F0]">@UMass_Amherst</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
           <a href="#projects" data-magnetic="true"className="px-6 py-3 font-bold text-white bg-[#081B3A] border-2 border-[#081B3A] shadow-[4px_4px_0px_#2E6DFF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2E6DFF] transition-all flex items-center gap-2 uppercase ">
             Initialize Projects <ChevronRight size={18} />
           </a>
           <a href="https://github.com/Satvik-Bagul" target="_blank" rel="noreferrer" data-magnetic="true" className="px-6 py-3 font-bold text-[#081B3A] bg-white border-2 border-[#081B3A] shadow-[4px_4px_0px_#2E6DFF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2E6DFF] transition-all flex items-center gap-2 uppercase">
             <GithubIcon size={18} /> GitHub
           </a>
           <a href="https://www.linkedin.com/in/satvik-bagul/" target="_blank" rel="noreferrer" data-magnetic="true" className="px-6 py-3 font-bold text-[#081B3A] bg-white border-2 border-[#081B3A] shadow-[4px_4px_0px_#2E6DFF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2E6DFF] transition-all flex items-center gap-2 uppercase">
             <LinkedinIcon size={18} /> LinkedIn
           </a>
           <a href="US_Resume.pdf" target="_blank" rel="noreferrer" data-magnetic="true"className="px-6 py-3 font-bold text-[#081B3A] bg-white border-2 border-[#081B3A] shadow-[4px_4px_0px_#2E6DFF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2E6DFF] transition-all flex items-center gap-2 uppercase">
             <FileText size={18} /> Resume
           </a>
        </div>
      </motion.div>
    </div>
    <HazardStripes className="absolute bottom-0 left-0" />
  </section>
);

export const About = () => (
  <section id="about" className="py-20 relative z-10">
    <div className="container mx-auto px-6">
      <SectionHeader title="Intelligence Dossier" code="SYS.READ(ABOUT)" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="absolute -top-10 -right-10 opacity-50 hidden md:block animate-spin-slow"><GeometricBurst size={100} /></div>
        <InteractiveCard title="OBJECTIVE.EXE">
           <h3 className="text-xl font-bold text-[#2E6DFF] mb-4 border-b-2 border-[#2E6DFF] inline-block uppercase">Current.Objective</h3>
           <p className="text-[#081B3A] leading-relaxed font-mono font-semibold">
             To expand my current repertoire and experience in various programming environments to facilitate the development of innovative software solutions. I aim to explore the systems that power modern networks, markets, and technology. By combining mathematics, computation, and design, I aim to build tools that uncover patterns, model uncertainty, and support better decisions in complex environments.

           </p>
           <div className="mt-6 p-4 bg-[#E2E8F0] border-2 border-[#081B3A] font-mono text-sm text-[#081B3A] font-bold">
             <span className="block mb-2 text-[#2E6DFF] border-b-2 border-[#081B3A] pb-1">STATUS: ACTIVE_BUILDER</span>
             &gt; Pursuing <span className="bg-[#081B3A] text-white px-1">Computer Science</span> and <span className="bg-[#081B3A] text-white px-1">Statistics and Data Science</span> double major with a minor in <span className="bg-[#081B3A] text-white px-1">Business</span>.<br/>&gt; Bridging the gap between finance and tech with specialized AI integration.<br/>&gt; Actively competing in global hackathons.
           </div>
        </InteractiveCard>
        <div className="space-y-8">
           <InteractiveCard title=" TECH_STACK.DAT">
             <ul className="space-y-4 text-[#081B3A] font-mono text-sm font-bold">
               {['Python', 'Java', 'Framer', 'HTML', 'CSS'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 border-2 border-[#081B3A] p-2 bg-white shadow-[2px_2px_0px_#2E6DFF]">
                   <div className="w-3 h-3 bg-[#2E6DFF]"/> {item}
                 </li>
               ))}
             </ul>
           </InteractiveCard>
        </div>
      </div>
    </div>
  </section>
);

export const ProjectsGrid = ({ onSelectProject }) => (
  <section id="projects" className="py-20 relative z-10">
    <div className="container mx-auto px-6">
      <SectionHeader title="Project Databanks" code="DB.QUERY(PORTFOLIO)" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <InteractiveCard 
            key={project.id} 
            title={`PRJ_${project.id.toUpperCase()}`} 
            onClick={() => onSelectProject(project)}
            className="h-full flex flex-col justify-between"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-display font-bold text-[#081B3A] uppercase leading-none">{project.title}</h3>
                <Maximize2 className="text-[#2E6DFF] shrink-0" size={24} />
              </div>
              <div className="mt-auto pt-4 border-t-2 border-[#081B3A] flex justify-between items-center">
                <span className="text-[#2E6DFF] font-mono font-bold uppercase text-sm">Click to access records</span>
                <WireGridBox size={24} />
              </div>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </div>
  </section>
);

export const Skills = () => (
  <section id="skills" className="py-20 relative z-10">
    <div className="container mx-auto px-6">
      <SectionHeader title="Technical Arsenal" code="SYS.DUMP(SKILLS)" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"><CrosshairTarget size={300}/></div>
        {SKILLS.map((skill, index) => (
          <div key={skill} className="cyber-panel p-4 text-center font-bold text-sm uppercase text-[#081B3A] flex flex-col items-center justify-center gap-3 relative z-10">
            <div className="w-10 h-10 border-2 border-[#081B3A] bg-[#E2E8F0] flex items-center justify-center text-[#2E6DFF] text-lg font-display">
              {index < 9 ? `0${index+1}` : index+1}
            </div>
            <span className="tracking-widest">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Experience = () => (
  <section id="experience" className="py-20 relative z-10">
    <div className="container mx-auto px-6">
      <SectionHeader title="Timeline Matrix" code="SYS.LOG(TIMELINE)" />
      <div className="max-w-4xl mx-auto space-y-6">
        {EXPERIENCE.map((exp, index) => (
          <div key={exp.id} className="flex flex-col md:flex-row gap-0 items-stretch cyber-panel p-0 bg-white group">
            <div className="bg-[#081B3A] text-white p-6 md:w-1/4 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-[#081B3A]">
              <span className="font-bold text-xl">{exp.year}</span>
              <span className="text-[#2E6DFF] text-xs mt-2 font-mono tracking-widest">SEQ_{index + 1}</span>
            </div>
            <div className="p-6 md:w-3/4 flex flex-col justify-center relative overflow-hidden">
              <GeometricBurst size={80} className="absolute -right-10 opacity-5" />
              <h4 className="text-2xl font-bold text-[#081B3A] uppercase mb-1">{exp.role}</h4>
              <h5 className="text-[#2E6DFF] font-bold mb-4 text-sm border-b-2 border-[#E2E8F0] pb-2 inline-block uppercase">@ {exp.org}</h5>
              <p className="text-[#081B3A] text-sm font-mono leading-relaxed font-semibold">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Contact = () => (
  <section id="contact" className="py-20 relative z-10 border-t-4 border-[#081B3A] bg-[#E2E8F0] mt-20">
    <div className="container mx-auto px-6 max-w-4xl relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-[#081B3A] mb-4">Initiate Protocol</h2>
        <p className="text-[#2E6DFF] font-mono font-bold uppercase">Open communication channels for collaboration.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <InteractiveCard title="MAIL_CLIENT.EXE" className="h-full bg-white">
           <div className="font-mono text-sm space-y-4 font-bold text-[#081B3A]">
             <div>
               <label className="block text-[#2E6DFF] mb-1 uppercase">Target_Email:</label>
               <div className="text-[#081B3A] bg-[#FAFAFA] p-3 border-2 border-[#081B3A]">satvikbagul@gmail.com</div>
             </div>
             <div>
               <label className="block text-[#2E6DFF] mb-1 uppercase">Transmission_Status:</label>
               <div className="text-[#081B3A] bg-[#FAFAFA] p-3 border-2 border-[#081B3A] text-xs">
                 AWAITING_INPUT... [SECURE CONNECTION]
               </div>
             </div>
             <a href="mailto:satvikbagul@gmail.com" className="block w-full text-center py-3 bg-[#081B3A] text-white border-2 border-[#081B3A] hover:bg-white hover:text-[#081B3A] hover:shadow-[4px_4px_0px_#2E6DFF] transition-all font-bold mt-4 uppercase">
               Execute Mailto
             </a>
           </div>
        </InteractiveCard>
        <div className="flex flex-col justify-center space-y-6">
           <a href="https://www.linkedin.com/in/satvik-bagul/" target="_blank" rel="noreferrer" className="cyber-panel p-6 flex items-center justify-between group bg-white">
             <div className="flex items-center gap-4"><div className="bg-[#081B3A] p-2 border-2 border-[#081B3A]"><LinkedinIcon className="text-white" size={28} /></div><div><h4 className="text-[#081B3A] font-bold text-lg uppercase">LinkedIn Protocol</h4><p className="text-[#2E6DFF] font-mono text-xs font-bold uppercase">Professional Network</p></div></div><ExternalLink className="text-[#081B3A]" />
           </a>
           <a href="https://github.com/Satvik-Bagul" target="_blank" rel="noreferrer" className="cyber-panel p-6 flex items-center justify-between group bg-white">
             <div className="flex items-center gap-4"><div className="bg-[#081B3A] p-2 border-2 border-[#081B3A]"><GithubIcon className="text-white" size={28} /></div><div><h4 className="text-[#081B3A] font-bold text-lg uppercase">GitHub Repository</h4><p className="text-[#2E6DFF] font-mono text-xs font-bold uppercase">Source Code Archives</p></div></div><ExternalLink className="text-[#081B3A]" />
           </a>
           <a href="US_Resume.pdf" target="_blank" rel="noreferrer" className="cyber-panel p-6 flex items-center justify-between group bg-white">
             <div className="flex items-center gap-4"><div className="bg-white p-2 border-2 border-[#081B3A]"><FileText className="text-[#081B3A]" size={28} /></div><div><h4 className="text-[#081B3A] font-bold text-lg uppercase">System Dossier</h4><p className="text-[#2E6DFF] font-mono text-xs font-bold uppercase">Download Resume.pdf</p></div></div><Download className="text-[#081B3A]" />
           </a>
        </div>
      </div>
      <div className="mt-20 text-center font-mono text-xs font-bold text-[#081B3A] border-t-2 border-[#081B3A] pt-8 uppercase">
        <p>© 2026 SATVIK BAGUL // SYSTEM ARCHITECTURE. INSPIRED BY Y2K UI/UX DESIGN.</p>
      </div>
    </div>
  </section>
);