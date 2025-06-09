'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Cek apakah elemen yang di-hover adalah link, tombol, atau memiliki kelas kursor khusus
      const target = e.target;
      if (
        window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 10,
      y: position.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference",
    },
    pointer: {
      x: position.x - 20,
      y: position.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-[9999] pointer-events-none hidden md:block"
      variants={cursorVariants}
      animate={isPointer ? 'pointer' : 'default'}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
