import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-brand-black flex flex-col justify-center items-center z-[999999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center">
        <motion.div 
          className="text-2xl font-bold tracking-widest text-white mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NIKHIL KHAVDU
        </motion.div>
        <div className="w-48 h-[1px] bg-neutral-800 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-brand-accentBlue"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};