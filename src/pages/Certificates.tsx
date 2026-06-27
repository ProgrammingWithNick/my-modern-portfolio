import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { certificatesData } from '../data/certificatesData';
import type { Certificate } from '../types';
import { SEO } from '../components/SEO';

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <PageTransition>
      <SEO title="Credentials" description="Professional technical validations" />
      <h2 className="mb-12 text-3xl font-black tracking-tight md:text-5xl">Certificates</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {certificatesData.map((cert) => (
          <motion.div 
            key={cert.id} 
            className="flex flex-col p-4 overflow-hidden border cursor-pointer border-neutral-800 rounded-xl glass-panel group"
            whileHover={{ y: -4, borderColor: 'rgba(0, 127, 255, 0.3)' }}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="relative w-full h-40 mb-4 overflow-hidden rounded bg-neutral-900">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23444">Credential View</text></svg>';
                }}
              />
              <div className="absolute inset-0 transition-colors duration-200 bg-brand-black/20 group-hover:bg-transparent" />
            </div>
            <h3 className="mb-1 font-bold text-white transition-colors duration-200 text-md group-hover:text-brand-accentBlue">
              {cert.title}
            </h3>
            <p className="mb-1 text-xs text-neutral-400">{cert.organization}</p>
            <span className="text-[10px] font-mono text-neutral-600 block">{cert.date}</span>
          </motion.div>
        ))}
      </div>

      {/* Aesthetic Lightbox Modal View Architecture */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="relative w-full max-w-3xl overflow-hidden border shadow-2xl glass-panel bg-neutral-950/95 border-neutral-800 rounded-2xl"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Stop closing when clicking inside content box
            >
              {/* Close Button Trigger */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute z-10 p-2 transition-colors duration-200 border rounded-full top-4 right-4 bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col h-full md:flex-row">
                {/* Media Presentation Frame */}
                <div className="md:w-3/5 bg-neutral-900 flex items-center justify-center p-2 min-h-[250px] md:min-h-[400px]">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23444">Credential View</text></svg>';
                    }}
                  />
                </div>

                {/* Conceptual Detail Matrix */}
                <div className="flex flex-col justify-between p-6 md:w-2/5 bg-neutral-950">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-accentBlue bg-brand-accentBlue/10 px-2 py-1 rounded">Verified Credential</span>
                    <h3 className="mt-4 mb-2 text-xl font-bold text-white">{selectedCert.title}</h3>
                    <p className="text-sm font-medium text-neutral-300">{selectedCert.organization}</p>
                    <p className="mt-1 font-mono text-xs text-neutral-500">Issued: {selectedCert.date}</p>
                  </div>

                  <div className="flex flex-col gap-3 mt-8 md:mt-0">
                    {/* <a 
                      href={selectedCert.credentialUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center w-full space-x-2 text-sm text-white transition-colors duration-200 border h-11 border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 rounded-xl"
                    >
                      <ExternalLink size={14} /> <span>Verify Credential</span>
                    </a> */}
                    <a 
                      href={selectedCert.downloadPath} 
                      download 
                      className="flex items-center justify-center w-full space-x-2 text-sm font-medium text-black transition-colors duration-200 bg-white h-11 hover:bg-neutral-200 rounded-xl"
                    >
                      <Download size={14} /> <span>Download Document</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Certificates;