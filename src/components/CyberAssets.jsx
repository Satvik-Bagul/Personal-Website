"use client";
import React, { useEffect, useRef } from 'react';

// --- CUSTOM SVG ASSETS ---
export const HazardStripes = ({ className = "" }) => (
  <div className={`h-4 w-full overflow-hidden border-y-2 border-[#081B3A] ${className}`}>
    <div className="w-[200%] h-full" style={{
      background: 'repeating-linear-gradient(45deg, #081B3A, #081B3A 10px, transparent 10px, transparent 20px)'
    }} />
  </div>
);

export const CrosshairTarget = ({ className = "", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`stroke-[#081B3A] fill-none ${className}`}>
    <circle cx="50" cy="50" r="30" strokeWidth="4" />
    <circle cx="50" cy="50" r="10" strokeWidth="4" fill="#081B3A" />
    <path d="M50 0 L50 20 M50 80 L50 100 M0 50 L20 50 M80 50 L100 50" strokeWidth="4" />
    <path d="M10 10 L30 10 M10 10 L10 30 M90 10 L70 10 M90 10 L90 30 M10 90 L30 90 M10 90 L10 70 M90 90 L70 90 M90 90 L90 70" strokeWidth="4" />
  </svg>
);

export const Random_Asset = ({ className = "", size = 60 }) => (
  <img 
    src="/random_vector.png" 
    alt="Icon" 
    width={size} 
    height={size} 
    className={`object-contain ${className}`} 
  />
);
export const Rubic = ({ className = "", size = 60 }) => (
  <img 
    src="/rubics_cube.png" 
    alt="Icon" 
    width={size} 
    height={size} 
    className={`object-contain ${className}`} 
  />
);

export const GeometricBurst = ({ className = "", size = 60 }) => (
  <img 
    src="/cybercore_globe.png" 
    alt="Icon" 
    width={size} 
    height={size} 
    className={`object-contain ${className}`} 
  />
);

export const WireGridBox = ({ className = "", size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`stroke-[#081B3A] fill-none ${className}`}>
    <rect x="10" y="10" width="80" height="80" strokeWidth="4" />
    <path d="M30 10 L30 90 M50 10 L50 90 M70 10 L70 90 M10 30 L90 30 M10 50 L90 50 M10 70 L90 70" strokeWidth="2" />
    <rect x="0" y="0" width="10" height="10" fill="#2E6DFF" stroke="none" />
    <rect x="90" y="90" width="10" height="10" fill="#2E6DFF" stroke="none" />
  </svg>
);

export const GithubIcon = ({ className = "", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedinIcon = ({ className = "", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const GlitchText = ({ text, className = "" }) => (
  <span 
    className={`text-[#081B3A] ${className}`}
    style={{ textShadow: '4px 4px 0px #2E6DFF' }}
  >
    {text}
  </span>
);


// --- INTERACTIVE GRAVITY GRID ---
const GravityGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const spacing = 40; 
    const dotRadius = 1.0;
    const interactionRadius = 150;
    const pullStrength = 0.5;

    let mouse = { x: 1000, y: 1000 };
    const dots = [];

    const initGrid = () => {
      // Use document scroll dimensions instead of just window inner dimensions
      const docWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth);
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      
      canvas.width = docWidth;
      canvas.height = docHeight;
      canvas.style.width = docWidth + 'px';
      canvas.style.height = docHeight + 'px';
      
      dots.length = 0;
      for (let x = 0; x <= docWidth + spacing; x += spacing) {
        for (let y = 0; y <= docHeight + spacing; y += spacing) {
          dots.push({ baseX: x, baseY: y, x: x, y: y });
        }
      }
    };

    initGrid();

    const handleMouseMove = (e) => {
      // Add scroll position to convert viewport coordinates to absolute document coordinates
      mouse.x = e.clientX + window.scrollX;
      mouse.y = e.clientY + window.scrollY;
    };

    window.addEventListener('resize', initGrid);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        // Calculate the vector from the mouse to the dot
        const dx = dot.baseX - mouse.x;
        const dy = dot.baseY - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate force: 1 at the cursor center, 0 at the radius boundary
        const force = Math.max(0, (interactionRadius - distance) / interactionRadius);

        // Apply force: normalize the vector (dx/distance) and move dots away or towards
        // By using the normalized vector, the "warp" remains perfectly circular and centered
        const angle = Math.atan2(dy, dx);
        const targetX = dot.baseX + Math.cos(angle) * force * 50; 
        const targetY = dot.baseY + Math.sin(angle) * force * 50;

        dot.x += (targetX - dot.x) * 0.15;
        dot.y += (targetY - dot.y) * 0.15;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(46, 109, 255, ${0.3 + (force * 0.5)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    
    animate();
    return () => {
      window.removeEventListener('resize', initGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};
// --- BACKGROUND COMPILATION ---
export const HoloBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--bg)]">
    <GravityGrid />
    <div className="crt-mesh" />
    <div className="noise-overlay" />
  </div>
);

import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MagneticCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring settings for the "aim" feel
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);


  useEffect(() => {
    const moveCursor = (e) => {
      // Find the magnetic element
      const target = e.target.closest('[data-magnetic="true"]');
      
      if (target) {
        // Get the bounding box relative to the viewport
        const { left, top, width, height } = target.getBoundingClientRect();
        
        // Add window.scrollX/Y to account for page position
        // This anchors the cursor to the center of the button, even after scrolling
        cursorX.set(left + window.scrollX + width / 2 - 16);
        cursorY.set(top + window.scrollY + height / 2 - 16);
      } else {
        // Standard follow movement
        cursorX.set(e.clientX + window.scrollX - 16);
        cursorY.set(e.clientY + window.scrollY - 16);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]); // Added dependencies
  
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#2E6DFF] pointer-events-none z-[100] flex items-center justify-center "
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <div className="w-2 h-2 bg-[#2E6DFF] rounded-full" />
    </motion.div>
  );
};
