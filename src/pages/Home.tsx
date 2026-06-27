import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown } from "lucide-react";
import { Link } from "react-router-dom";

import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/myresume.pdf";

import { PageTransition } from "../components/PageTransition";
import { AnimatedTyping } from "../components/AnimatedText";
import { SEO } from "../components/SEO";

const Home: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Home"
        description="Portfolio of Nikhil Khavdu - Full Stack Developer"
      />

      <section className="relative flex min-h-[80vh] flex-col items-start justify-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full border-neutral-800 bg-neutral-900/60"
        >
          <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-500" />

          <span className="font-mono text-xs text-neutral-400">
            Available for Full Stack Opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-5xl font-black tracking-tight text-white md:text-8xl"
        >
          Nikhil Khavdu
        </motion.h1>

        {/* Animated Text */}
        <div className="mb-6 text-2xl font-medium text-neutral-400 md:text-4xl">
          I build{" "}
          <AnimatedTyping
            words={[
              "Modern Web Apps",
              "Scalable APIs",
              "Interactive UI",
              "Production Ready Software",
            ]}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mb-10 text-lg leading-relaxed text-neutral-400"
        >
          I'm a Full Stack Developer passionate about building beautiful,
          scalable, and high-performance web applications using React,
          TypeScript, Tailwind CSS, NestJS, MongoDB, and modern web
          technologies.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          {/* Contact */}
          <Link
            to="/contact"
            className="flex items-center h-12 gap-2 px-6 font-semibold text-black transition-all duration-300 bg-white rounded-xl hover:scale-105 hover:bg-neutral-200"
          >
            <span>Connect</span>
            <ArrowUpRight size={18} />
          </Link>

          

          {/* Resume */}
          <a
            href={resume}
            download="Nikhil_Khavdu_Resume.pdf"
            className="flex items-center h-12 gap-2 px-6 text-white transition-all duration-300 border rounded-xl border-neutral-800 bg-neutral-900/50 hover:scale-105 hover:bg-neutral-800"
          >
            <FileDown size={18} />
            <span>Resume</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ProgrammingWithNick"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-xl border-neutral-800 bg-neutral-900/50 hover:scale-110 hover:bg-neutral-800"
          >
            <img
              src={github}
              alt="GitHub"
              className="object-contain w-6 h-6"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nikhil-khavdu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-xl border-neutral-800 bg-neutral-900/50 hover:scale-110 hover:bg-neutral-800"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="object-contain w-6 h-6"
            />
          </a>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home;