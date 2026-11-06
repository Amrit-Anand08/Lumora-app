'use client';

import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function StaggerContainer({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', duration = 0.55 }) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

