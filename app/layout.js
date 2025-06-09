'use client'; // Jadikan Client Component untuk mengelola state

import { useState, useEffect } from 'react';
import { Sora } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import './globals.css';

import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import Preloader from '../components/Preloader';
import ScrollToTop from '../components/ScrollToTop';

const sora = Sora({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 3000); 

    document.body.style.overflow = 'hidden';
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${sora.className} bg-gray-950`}>
        
        {/* --- EFEK AURORA DITAMBAHKAN KEMBALI DI SINI --- */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-indigo-700/60 to-transparent rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-700/50 to-transparent rounded-full blur-3xl opacity-50 animate-pulse-slow [animation-delay:2s]"></div>
        </div>

        <AnimatePresence>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <CustomCursor />
              <Navbar />
              <ScrollToTop />
              {children}
            </>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
