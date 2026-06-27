import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-accentBlue origin-[0%] z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};