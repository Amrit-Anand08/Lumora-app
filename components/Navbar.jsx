'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'Gallery',       href: '/#examples' },
  { label: 'How it works',  href: '/#how-it-works' },
  { label: 'Install guide', href: '/#install-guide' },
  { label: 'FAQ',           href: '/#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.05)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Lumora — go to homepage"
          style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              backgroundColor: 'var(--accent)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 700,
              fontSize: '0.875rem',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            L
          </span>
          <span
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 700,
              fontSize: '1.125rem',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
            }}
          >
            Lumora
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '1.75rem' }}
          aria-label="Site navigation"
        >
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ThemeToggle />

          <a
            href="/Lumora-v1.0.apk"
            download="Lumora-v1.0.apk"
            className="btn btn-solid hidden sm:inline-flex"
            style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem', borderRadius: 8, gap: '0.375rem' }}
          >
            <Download size={13} strokeWidth={2.5} aria-hidden="true" />
            Download APK
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface)',
              color: 'var(--ink)',
              cursor: 'pointer',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex' }}
                >
                  <X size={16} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex' }}
                >
                  <Menu size={16} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid var(--border)',
              backgroundColor: 'var(--bg)',
            }}
            className="md:hidden"
          >
            <nav
              style={{ padding: '0.75rem 1.25rem 1.25rem' }}
              aria-label="Mobile site navigation"
            >
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.875rem 0',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      borderBottom: '1px solid var(--border-soft)',
                      color: 'var(--ink)',
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="/Lumora-v1.0.apk"
                download="Lumora-v1.0.apk"
                onClick={() => setOpen(false)}
                className="btn btn-solid"
                style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}
              >
                <Download size={15} strokeWidth={2.5} aria-hidden="true" />
                Download APK — Free
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
