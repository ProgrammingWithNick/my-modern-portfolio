import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { skillsData } from '../data/skillsData';
import * as Icons from 'lucide-react';
import { SEO } from '../components/SEO';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Skills: React.FC = () => {
  return (
    <PageTransition>
      <SEO title="Skills" description="Technical stack and capabilities of Nikhil Khavdu." />

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 py-20 mx-auto max-w-7xl md:px-10"
      >
        {/* Heading */}

        <motion.div variants={fadeUp} className="mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            My Stack
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-transparent md:text-7xl bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text">
            Skills &amp;
            <br />
            Expertise
          </h1>

          <p className="max-w-3xl mt-6 text-lg leading-8 text-neutral-400">
            A breakdown of the tools and technologies I use to design,
            build, and ship full-stack applications.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="p-8 border shadow-2xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl md:p-10"
            >
              <h3 className="pb-4 mb-8 text-xl font-bold tracking-wide text-white border-b border-white/10">
                {group.category}
              </h3>

              <div className="space-y-6">
                {group.skills.map((sk, index) => {
                  // Dynamic Lucide Resolution fallback safely
                  const DynamicIcon = (Icons as any)[sk.iconName] || Icons.Code;
                  return (
                    <div key={sk.name}>
                      <div className="flex items-center justify-between mb-2 text-sm">
                        <div className="flex items-center gap-3 text-neutral-300">
                          <span className="flex items-center justify-center w-8 h-8 border rounded-lg text-cyan-300 border-cyan-500/20 bg-cyan-500/10">
                            <DynamicIcon size={15} />
                          </span>
                          <span className="font-medium">{sk.name}</span>
                        </div>
                        <span className="font-mono text-xs text-cyan-300">
                          {sk.efficiency}%
                        </span>
                      </div>

                      <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_#22d3ee]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${sk.efficiency}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            ease: 'easeOut',
                            delay: index * 0.08,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default Skills;