import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";
import { careerObjective, timelineData } from "../data/resumeData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const About: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="About"
        description="Learn more about Nikhil Khavdu, skills, experience and career journey."
      />

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 py-20 mx-auto max-w-7xl md:px-10"
      >
        {/* Heading */}

        <motion.div variants={fadeUp} className="mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            About Me
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-transparent md:text-7xl bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text">
            Passion Meets
            <br />
            Technology
          </h1>

          <p className="max-w-3xl mt-6 text-lg leading-8 text-neutral-400">
            Building beautiful, fast and scalable digital experiences with
            modern web technologies.
          </p>
        </motion.div>

        {/* About Card */}

        <div className="grid gap-8 mb-24 lg:grid-cols-3">

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="p-8 border shadow-2xl lg:col-span-2 rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl md:p-10"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">
              Career Objective
            </h2>

            <p className="mb-6 text-xl font-medium leading-9 text-white">
              {careerObjective}
            </p>

            <p className="leading-8 text-neutral-400">
              Driven by creativity and clean engineering principles, I design
              modern user experiences while developing scalable applications
              with performance, accessibility and maintainability in mind.
            </p>
          </motion.div>

          {/* Interests */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
            }}
            className="p-8 border shadow-xl rounded-3xl border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">
              Interests
            </h3>

            <div className="space-y-5 text-neutral-300">

              <div className="flex items-center gap-4">
                <span className="text-2xl">🚀</span>
                <span>Distributed Infrastructure</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">⚡</span>
                <span>Micro Frontend Architecture</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">💻</span>
                <span>Systems Optimization</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">🎨</span>
                <span>Modern UI / UX Design</span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Timeline */}

        <motion.div variants={fadeUp}>
          <h2 className="text-4xl font-bold text-white mb-14">
            Journey
          </h2>

          <div className="relative ml-4 border-l border-cyan-500/30">

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="relative pl-10 mb-12"
              >
                <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

                <div className="p-6 transition duration-300 border rounded-2xl border-white/10 bg-white/5 backdrop-blur-lg hover:border-cyan-400/40">

                  <span className="text-sm font-semibold text-cyan-400">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-cyan-300">
                    {item.company}
                  </p>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </motion.section>
    </PageTransition>
  );
};

export default About;