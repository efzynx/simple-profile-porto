'use client';

import { motion } from 'framer-motion';

const Preloader = () => {
  const text = "Welcome | Selamat Datang !!";
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-2xl md:text-4xl font-bold text-white flex overflow-hidden"
        aria-label={text}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={letter === ' ' ? 'w-2' : ''}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
