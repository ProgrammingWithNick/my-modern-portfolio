import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";
type JourneyItem = {
  year: string;
  role: string;
  company: string;
  description: string;
};

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

const interests = [
  { icon: "🤖", label: "Exploring AI Tools" },
  { icon: "🎬", label: "Anime & Movies" },
  { icon: "📚", label: "Learning New Tech" },
  { icon: "🛠️", label: "Personal Projects" },
];

const techStack = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "NestJS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const journeyData: JourneyItem[] = [
  {
    year: "Stage 01",
    role: "HTML, CSS & JavaScript",
    company: "Frontend Foundations",
    description:
      "Started my web development journey by mastering the core building blocks of the web — semantic HTML, modern CSS, and JavaScript fundamentals — before moving on to any framework.",
  },
  {
    year: "Stage 02",
    role: "React & Tailwind CSS",
    company: "Frontend Development",
    description:
      "Moved into component-based development with React, pairing it with Tailwind CSS to build clean, responsive, and consistent user interfaces faster.",
  },
  {
    year: "Stage 03",
    role: "A Little Next.js",
    company: "Frontend Development",
    description:
      "Got hands-on with Next.js, exploring routing and the App Router to understand how production-grade React applications are structured beyond a single-page app.",
  },
  {
    year: "Stage 04",
    role: "Node.js & Express.js",
    company: "Backend Development",
    description:
      "Shifted focus to the backend, learning Node.js and Express.js to build REST APIs, handle authentication, and connect applications to databases like MongoDB.",
  },
  {
    year: "Stage 05",
    role: "NestJS",
    company: "Backend Development",
    description:
      "Currently deepening my backend skills with NestJS, learning to build scalable, well-structured APIs with a more architectural, enterprise-style approach.",
  },
];

const About: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="About"
        description="Learn more about Nikhil Khavdu, MCA student and Full Stack Developer from Gujarat, India."
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
            MCA student and Full Stack Developer from Gujarat, India, turning
            ideas into fast, responsive and visually engaging web
            applications.
          </p>
        </motion.div>

        {/* About Card */}

        <div className="grid gap-8 mb-16 lg:grid-cols-3">

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="p-8 border shadow-2xl lg:col-span-2 rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl md:p-10"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">
              Who I Am
            </h2>

            <p className="mb-6 text-xl font-medium leading-9 text-white">
              Hi, I'm Nikhil Khavdu — an MCA student and passionate Full
              Stack Developer from Gujarat, India.
            </p>

            <p className="mb-6 leading-8 text-neutral-400">
              I enjoy turning ideas into fast, responsive, and visually
              engaging web applications. My primary focus is building modern
              user experiences with React, TypeScript, Tailwind CSS, and
              Framer Motion, while expanding my backend expertise with
              NestJS, Node.js, Express.js, and MongoDB.
            </p>

            <p className="leading-8 text-neutral-400">
              I believe great software combines clean architecture with
              thoughtful design. Whether I'm crafting smooth animations,
              designing intuitive interfaces, or developing scalable APIs, I
              strive to create applications that are both functional and
              enjoyable to use.
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
              Beyond Code
            </h3>

            <div className="space-y-5 text-neutral-300">
              {interests.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}

        <motion.div
          variants={fadeUp}
          className="p-8 mb-24 border shadow-2xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl md:p-10"
        >
          <h2 className="mb-6 text-2xl font-bold text-white">
            Tech I Work With
          </h2>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 text-sm font-medium transition border rounded-full text-cyan-300 border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/15 hover:border-cyan-400/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Journey */}

        <motion.section variants={fadeUp} className="mt-28 mb-28">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[6px] text-cyan-400">
              My Journey
            </p>
            <h2 className="mt-4 text-5xl font-black text-transparent md:text-6xl bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text">
              Learning.
              <br />
              Building.
              <br />
              Growing.
            </h2>
            <p className="max-w-2xl mx-auto mt-6 leading-8 text-neutral-400">
              Every milestone has helped shape my journey as a developer. From
              learning the fundamentals to building full-stack applications,
              each experience has strengthened my passion for creating
              impactful digital products.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Glow Line */}
            <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent shadow-[0_0_30px_#22d3ee]" />

            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative flex gap-8 mb-14"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 p-8">
                    <span className="px-5 py-2 text-sm font-semibold border rounded-full text-cyan-300 border-cyan-400/30 bg-cyan-500/10">
                      {item.year}
                    </span>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[3px] text-neutral-500">
                        Timeline
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-8">
                    <h3 className="text-3xl font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-cyan-400">
                      {item.company}
                    </p>
                    <p className="mt-6 leading-8 text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Closing */}

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="p-10 text-center border shadow-2xl rounded-3xl border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl"
        >
          <p className="max-w-2xl mx-auto text-lg leading-8 text-neutral-300">
            I'm always looking for opportunities to collaborate, solve
            real-world problems, and grow as a software engineer. Every
            project is a chance to learn something new and build something
            meaningful.
          </p>
        </motion.div>
      </motion.section>
    </PageTransition>
  );
};

export default About;