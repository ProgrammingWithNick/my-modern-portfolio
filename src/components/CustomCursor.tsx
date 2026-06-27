import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const addLinkListeners = () => {
      document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    addLinkListeners();
    
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999]">
      <motion.div
        className="absolute top-0 left-0 origin-center"
        animate={{
          x: position.x - 24, // Centering a 48px width butterfly
          y: position.y - 24, // Centering a 48px height butterfly
          scale: clicked ? 0.75 : linkHovered ? 1.3 : 1,
        }}
        transition={{ type: "spring", damping: 25, mass: 0.3, stiffness: 350 }}
      >
        {/* Butterfly SVG Container */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 100 100"
          className="drop-shadow-[0_0_8px_rgba(0,127,255,0.6)]"
        >
          {/* Left Wing */}
          <motion.path
            d="M 50 50 C 20 20, 10 40, 15 60 C 20 75, 45 65, 50 50"
            fill={linkHovered ? "#00E5FF" : "#007FFF"}
            opacity="0.85"
            style={{ originX: "50px", originY: "50px" }}
            animate={{
              scaleX: linkHovered ? [1, 0.1, 1] : [1, 0.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: linkHovered ? 0.2 : 0.6,
              ease: "easeInOut",
            }}
          />

          {/* Right Wing */}
          <motion.path
            d="M 50 50 C 80 20, 90 40, 85 60 C 80 75, 55 65, 50 50"
            fill={linkHovered ? "#00E5FF" : "#007FFF"}
            opacity="0.85"
            style={{ originX: "50px", originY: "50px" }}
            animate={{
              scaleX: linkHovered ? [1, 0.1, 1] : [1, 0.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: linkHovered ? 0.2 : 0.6,
              ease: "easeInOut",
            }}
          />

          {/* Butterfly Body & Antennae */}
          <path
            d="M 48 35 Q 50 32 52 35 L 51 68 Q 50 70 49 68 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 49 35 Q 44 26 42 28 M 51 35 Q 56 26 58 28"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
};