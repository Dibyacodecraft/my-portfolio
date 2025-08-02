import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedButton() {
  return (
    <motion.a
      href="/Resume Dibya.pdf"
      download="Dibya_Ranjan_Jena_Resume.pdf"
      className="download-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Download CV
      </motion.span>
      <motion.i
        className="fas fa-download"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      ></motion.i>
    </motion.a>
  );
}