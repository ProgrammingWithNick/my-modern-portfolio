import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { target: 'home',         label: 'Home' },
  { target: 'about',        label: 'About' },
  { target: 'skills',       label: 'Skills' },
  { target: 'projects',     label: 'Projects' },
  { target: 'certificates', label: 'Certificates' },
  { target: 'contact',      label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen,         setIsOpen]         = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');
  const [showNavbar,     setShowNavbar]     = useState(true);
  const [scrolled,       setScrolled]       = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled past hero → add backdrop blur
      setScrolled(currentScrollY > 20);

      // Active-section tracking
      const scrollPosition = currentScrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.target);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.target);
            break;
          }
        }
      }

      // Hide on mobile while scrolling down
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false);
          setIsOpen(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y:       showNavbar ? 0 : -80,
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-wider text-white"
        >
          NK
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            .
          </span>
        </a>

        {/* Desktop links */}
        <div className="items-center hidden gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <a
                key={link.target}
                href={`#${link.target}`}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 group"
              >
                {/* Active pill */}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 border rounded-full bg-cyan-500/10 border-cyan-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive
                      ? 'text-cyan-300'
                      : 'text-neutral-400 group-hover:text-white'
                  }`}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="flex items-center justify-center w-10 h-10 transition border rounded-xl md:hidden border-white/10 bg-white/5 backdrop-blur text-neutral-300 hover:text-white hover:border-cyan-500/30"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{    rotate:  90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mb-4 overflow-hidden border md:hidden rounded-2xl border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.target;
                return (
                  <motion.a
                    key={link.target}
                    href={`#${link.target}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
                        : 'text-neutral-400 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                  >
                    {/* Dot indicator */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        isActive ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-neutral-700'
                      }`}
                    />
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};