import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';

const Resume: React.FC = () => {
  return (
    <PageTransition>
      <SEO title="Resume Ecosystem" description="Comprehensive enterprise competency logs" />
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Curriculum Vitae</h2>
        <div className="flex items-center space-x-4">
          <a href="/assets/nikhil-resume.pdf" download className="px-4 h-10 rounded-lg bg-white text-black text-sm font-medium flex items-center space-x-2">
            <Download size={14} /> <span>Download Document</span>
          </a>
          <a href="/assets/nikhil-resume.pdf" target="_blank" rel="noreferrer" className="px-4 h-10 rounded-lg border border-neutral-800 text-white text-sm font-medium flex items-center space-x-2">
            <ExternalLink size={14} /> <span>Fullscreen</span>
          </a>
        </div>
      </div>

      <div className="w-full aspect-[1/1.4] md:h-[900px] border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950">
        <iframe 
          src="/assets/nikhil-resume.pdf#view=FitH" 
          title="Nikhil Khavdu Resume" 
          className="w-full h-full border-none"
        />
      </div>
    </PageTransition>
  );
};
export default Resume;