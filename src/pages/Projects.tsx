import React from 'react';
import { motion } from 'framer-motion';

import github from "../assets/github.png";
import { PageTransition } from '../components/PageTransition';
import { projectsData } from '../data/projectsData';
import { SEO } from '../components/SEO';

const Projects: React.FC = () => {
    return (
        <PageTransition>
            <SEO title="Engineering Registry" description="Production architectural case studies" />
            <h2 className="mb-12 text-3xl font-black tracking-tight md:text-5xl">Projects</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {projectsData.map((proj) => (
                    <motion.a
                        key={proj.id}
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col overflow-hidden border cursor-pointer border-neutral-800 rounded-2xl glass-panel group"
                        whileHover={{ y: -6, borderColor: 'rgba(0, 127, 255, 0.4)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {/* Image Preview Window */}
                        <div className="relative w-full h-48 overflow-hidden bg-neutral-900">
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className="object-cover w-full h-full transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23333">Preview Asset</text></svg>';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Project Specifications */}
                        <div className="flex flex-col flex-grow p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-brand-accentBlue">
                                    {proj.title}
                                </h3>
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className="object-contain w-5 h-5 transition-opacity duration-200 opacity-60 group-hover:opacity-100"
                                />
                            </div>

                            <p className="flex-grow mb-4 text-sm text-neutral-400">{proj.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {proj.techStack.map(t => (
                                    <span key={t} className="text-[10px] font-mono tracking-wider border border-neutral-800 bg-neutral-900 px-2 py-0.5 rounded text-neutral-400">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </PageTransition>
    );
};

export default Projects;