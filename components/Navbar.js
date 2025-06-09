'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    const handleScroll = () => {
      toggleVisibility();
      
      const sections = portfolioData.navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = '';


      // Cek apakah pengguna sudah scroll sampai ke paling bawah halaman
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50; // Diberi sedikit buffer 50px

      if (isAtBottom) {
        // Jika ya, paksa seksi terakhir (Kontak) untuk aktif
        currentSection = sections[sections.length - 1]?.id || '';
      } else {
        // Jika tidak, gunakan logika seperti biasa
        sections.forEach(section => {
          if (section) {
            const sectionTop = section.offsetTop;
            // Offset yang sedikit lebih kecil agar lebih responsif
            if (window.scrollY >= sectionTop - 200) { 
              currentSection = section.getAttribute('id');
            }
          }
        });
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-4 left-1/2 -translate-x-1/2 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-full px-4 py-2 z-50"
        >
          <ul className="flex items-center gap-2">
            {portfolioData.navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
