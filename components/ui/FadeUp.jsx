'use client';

import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  y = 28,
  className = '',
  as = 'div',
}) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

