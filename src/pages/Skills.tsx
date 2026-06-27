import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { skillsData } from '../data/skillsData';
import * as Icons from 'lucide-react';
import { SEO } from '../components/SEO';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <SEO title="Skills Matrix" description="Technical stack capabilities" />
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12">Skills</h2>

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((group) => (
          <motion.div key={group.category} variants={itemVariants} className="border border-neutral-800 p-6 rounded-2xl glass-panel">
            <h3 className="text-xl font-bold mb-6 tracking-wide text-white border-b border-neutral-900 pb-2">{group.category}</h3>
            <div className="space-y-5">
              {group.skills.map((sk) => {
                // Dynamic Lucide Resolution fallback safely
                const DynamicIcon = (Icons as any)[sk.iconName] || Icons.Code;
                return (
                  <div key={sk.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <div className="flex items-center space-x-2 text-neutral-300">
                        <DynamicIcon size={16} className="text-brand-accentBlue" />
                        <span>{sk.name}</span>
                      </div>
                      <span className="font-mono text-neutral-500">{sk.efficiency}%</span>
                    </div>
                    <div className="w-full h-[3px] bg-neutral-900 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-brand-accentBlue"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.efficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageTransition>
  );
};
export default Skills;