"use client";
import React from 'react';

export const InteractiveCard = ({ children, title = "SYS.WIN32", className = "", onClick = null }) => (
  <div onClick={onClick} className={`cyber-panel flex flex-col group ${onClick ? 'cursor-pointer hover:bg-[#E2E8F0]' : ''} ${className}`}>
    <div className="bg-[#081B3A] text-white px-2 py-1 flex justify-between items-center text-xs border-b-2 border-[#081B3A]">
      <span className="font-bold tracking-widest">{title}</span>
      <div className="flex gap-1">
        <div className="w-3 h-3 border border-white bg-[#2E6DFF]" />
        <div className="w-3 h-3 border border-white bg-white" />
        <div className="w-3 h-3 border border-white bg-[#081B3A]" />
      </div>
    </div>
    <div className="p-4 flex-1 bg-transparent">
      {children}
    </div>
  </div>
);