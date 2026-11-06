'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';
import FadeUp from './ui/FadeUp';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(idx) {
    setOpenIndex((curr) => (curr === idx ? -1 : idx));
  }

  return (
    <section id="faq" className="section">
      <div className="container">
        <div
          style={{ gap: '2.5rem' }}
          className="grid grid-cols-1 lg:grid-cols-[300px_1fr]"
        >
          {/* Sidebar */}
          <FadeUp>
            <div>
              <span className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                FAQ
              </span>
              <h2 className="t-h2" style={{ marginBottom: '0.75rem', maxWidth: '16ch' }}>
                Common questions.
              </h2>
              <p className="t-body" style={{ maxWidth: '32ch' }}>
                Everything about downloading, permissions, and using Lumora day-to-day.
              </p>
            </div>
          </FadeUp>

          {/* Accordion */}
          <div>
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.q}
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <button
                    type="button"
                    id={`faq-btn-${index}`}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.375rem 0',
                      textAlign: 'left',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    {/* +/- indicator */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.22 }}
                      style={{
                        flexShrink: 0,
                        width: 22,
                        height: 22,
                        marginTop: 2,
                        borderRadius: 6,
                        backgroundColor: isOpen ? 'var(--accent-bg)' : 'var(--bg-muted)',
                        color: isOpen ? 'var(--accent)' : 'var(--ink-3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.18s, color 0.18s',
                      }}
                      aria-hidden="true"
                    >
                      <Plus size={12} strokeWidth={2.5} />
                    </motion.span>

                    <span
                      style={{
                        fontFamily: 'var(--font-fraunces)',
                        fontWeight: 700,
                        fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                        lineHeight: 1.3,
                        letterSpacing: '-0.015em',
                        color: isOpen ? 'var(--accent)' : 'var(--ink)',
                        transition: 'color 0.18s',
                      }}
                    >
                      {item.q}
                    </span>
                  </button>

                  {/* Panel with Framer Motion height animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-btn-${index}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          className="t-body"
                          style={{
                            paddingLeft: '2.375rem',
                            paddingBottom: '1.375rem',
                            maxWidth: '58ch',
                            fontSize: '0.9375rem',
                          }}
                        >
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
