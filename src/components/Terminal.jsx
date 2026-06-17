"use client";
import React, { useState, useEffect, useRef } from 'react';
import { TerminalSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'S.A.T.V.I.K. OS v2.1.0 loaded.' },
    { type: 'sys', text: 'Type "help" to see available commands.' }
  ]);
  const endOfTerminalRef = useRef(null);

  useEffect(() => { if (endOfTerminalRef.current) endOfTerminalRef.current.scrollIntoView({ behavior: 'smooth' }); }, [history, isOpen]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'usr', text: `> ${cmd}` }];
      switch(cmd) {
        case 'help': newHistory.push({ type: 'sys', text: 'Commands: about, skills, projects, contact, resume, clear' }); break;
        case 'about': newHistory.push({ type: 'sys', text: 'Fetching dossier... S. Bagul. CS Student. AI Engineer.' }); break;
        case 'skills': newHistory.push({ type: 'sys', text: 'Accessing core: Python, React, TouchDesigner, Java...' }); break;
        case 'projects': newHistory.push({ type: 'sys', text: 'Loading databanks: Blueprint, Noise, Serenity, Scraper.' }); break;
        case 'contact': newHistory.push({ type: 'sys', text: 'Establishing secure link: satvikbagul@gmail.com' }); break;
        case 'resume': 
          newHistory.push({ type: 'sys', text: 'Downloading dossier: US_Resume.pdf...' });
          setTimeout(() => window.open('US_Resume.pdf', '_blank'), 500);
          break;
        case 'clear': setHistory([]); setInput(''); return;
        case '': break;
        default: newHistory.push({ type: 'err', text: `Command not found: ${cmd}` });
      }
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 z-40 bg-white border-2 border-[#081B3A] shadow-[4px_4px_0px_#2E6DFF] p-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2E6DFF] transition-all group" aria-label="Open Terminal">
        <TerminalSquare size={24} className="text-[#081B3A]" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-20 right-6 w-80 md:w-96 h-96 z-50 cyber-panel flex flex-col font-mono text-sm overflow-hidden bg-white">
            <div className="bg-[#081B3A] text-white p-2 flex justify-between items-center cursor-move border-b-2 border-[#081B3A]">
              <span className="text-white text-xs font-bold tracking-widest">root@satvik:~</span>
              <button onClick={() => setIsOpen(false)} className="text-[#E2E8F0] hover:text-white"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#FAFAFA]">
              {history.map((line, i) => (
                <div key={i} className={`${line.type === 'sys' ? 'text-[#2E6DFF] font-bold' : ''} ${line.type === 'usr' ? 'text-[#081B3A]' : ''} ${line.type === 'err' ? 'text-red-600 font-bold' : ''}`}>
                  {line.text}
                </div>
              ))}
              <div ref={endOfTerminalRef} />
            </div>
            <div className="p-4 border-t-2 border-[#081B3A] flex items-center bg-[#E2E8F0]">
              <span className="text-[#081B3A] font-bold mr-2">{'>'}</span>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleCommand} className="bg-transparent flex-1 outline-none text-[#081B3A] font-bold w-full" autoFocus />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};