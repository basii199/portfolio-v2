// components/cursor.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - (isHovering ? 8 : 16),
        y: position.y - (isHovering ? 8 : 16),
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <div className={`rounded-full ${isHovering ? 'w-4 h-4 bg-white/20' : 'w-8 h-8 bg-transparent border-2 border-[#2b7fff]'}`} />
    </motion.div>
  );
}