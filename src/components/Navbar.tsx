import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Convert paths to target element IDs
  const navLinks = [
    { target: 'home', label: 'Home' },
    { target: 'about', label: 'About' },
    { target: 'skills', label: 'Skills' },
    { target: 'projects', label: 'Projects' },
    { target: 'certificates', label: 'Certificates' },
    { target: 'contact', label: 'Contact' }
  ];

  // Optional: Track scroll position to update the active link dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const link of navLinks) {
        const element = document.getElementById(link.target);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full transition-all duration-200 border-b glass-panel">
      <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">
        <a href="#home" className="text-lg font-bold tracking-wider text-white">
          NK<span className="text-brand-accentBlue">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="items-center hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className={`text-sm tracking-wide transition-colors duration-200 hover:text-brand-accentBlue ${
                activeSection === link.target ? 'text-brand-accentBlue font-medium' : 'text-neutral-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col px-6 py-4 space-y-4 border-b md:hidden bg-brand-black border-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={() => setIsOpen(false)}
              className={`text-md transition-colors duration-200 hover:text-brand-accentBlue ${
                activeSection === link.target ? 'text-brand-accentBlue font-medium' : 'text-neutral-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};