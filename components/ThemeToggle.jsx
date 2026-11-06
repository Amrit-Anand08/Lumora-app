'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('lumora-theme', next ? 'dark' : 'light'); } catch {}
  }

  if (!mounted) {
    return (
      <span
        style={{
          display: 'inline-flex',
          width: 36,
          height: 36,
          borderRadius: 8,
          border: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: 8,
        border: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
        color: 'var(--ink-2)',
        cursor: 'pointer',
        transition: 'border-color 0.15s ease, color 0.15s ease',
        flexShrink: 0,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex' }}
          >
            <Sun size={15} strokeWidth={2} aria-hidden="true" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex' }}
          >
            <Moon size={15} strokeWidth={2} aria-hidden="true" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
