'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeUp from './ui/FadeUp';

const EXAMPLES = [
  {
    id: 'ghibli',
    title: 'Ghibli Watercolor Countryside',
    category: 'Anime',
    model: 'ChatGPT · DALL·E 3',
    imageUrl:
      'https://res.cloudinary.com/teniiugx/image/upload/w_500,f_auto,q_auto/v1793771166/lumora/templates/zgjviyu3upiu8xz01ohj.jpg',
    prompt:
      'Studio Ghibli style watercolor illustration of a serene countryside railway station at golden hour, gentle rolling hills, soft cumulus clouds, hand-drawn linework, warm nostalgic atmosphere.',
    alt: 'Studio Ghibli anime-style countryside railway station at golden hour — AI-generated image',
  },
  {
    id: 'bollywood',
    title: '1980s Bollywood Retro Film',
    category: 'Cinematic',
    model: 'Gemini · Midjourney',
    imageUrl:
      'https://res.cloudinary.com/teniiugx/image/upload/w_500,f_auto,q_auto/v1793797553/lumora/templates/hsfdoaxmyrk6aitqi2kt.jpg',
    prompt:
      '1980s Indian vintage cinema film still, dramatic amber tungsten lighting, rich analog grain, classic portrait composition, authentic 35mm film color grading.',
    alt: 'Retro 1980s Bollywood cinematic portrait with analog grain — AI-generated',
  },
  {
    id: 'chibi',
    title: 'Chibi Die-Cut Sticker Pack',
    category: 'Stickers',
    model: 'ChatGPT · Midjourney',
    imageUrl:
      'https://res.cloudinary.com/teniiugx/image/upload/w_500,f_auto,q_auto/v1793881309/lumora/templates/iyj4cn42fu2sajm5dj0t.jpg',
    prompt:
      'Die-cut chibi character sticker sheet, thick clean white borders, smooth pastel palette, expressive cute poses, flat vector graphics style, solid clean background.',
    alt: 'Chibi character die-cut sticker sheet with pastel palette — AI-generated',
  },
  {
    id: 'magazine',
    title: 'Minimalist Magazine Cover',
    category: 'Editorial',
    model: 'Gemini · DALL·E 3',
    imageUrl:
      'https://res.cloudinary.com/teniiugx/image/upload/w_500,f_auto,q_auto/v1793845026/lumora/templates/bg8xlw1uizsohujkyg65.jpg',
    prompt:
      'High-fashion editorial magazine cover portrait, directional studio lighting, clean serif title placement, striking expression, minimal negative space, neutral monochrome wardrobe.',
    alt: 'High-fashion editorial magazine cover portrait with studio lighting — AI-generated',
  },
  {
    id: 'younger-self',
    title: 'Hug Your Younger Self',
    category: 'Concept',
    model: 'ChatGPT · Gemini',
    imageUrl:
      'https://res.cloudinary.com/teniiugx/image/upload/w_500,f_auto,q_auto/v1793882337/lumora/templates/vj04emrarqh0iw6x6ppk.jpg',
    prompt:
      'Photorealistic emotional portrait of an adult gently embracing their 7-year-old childhood self, soft warm evening light, tender emotional expressions, cinematic shallow depth of field.',
    alt: 'Adult embracing childhood self — emotional concept portrait, AI-generated',
  },
  {
    id: 'scrapbook',
    title: 'Pinterest Vintage Scrapbook',
    category: 'Collage',
    model: 'Google Gemini',
    imageUrl:
      'https://res.cloudinary.com/teniiugx/image/upload/w_500,f_auto,q_auto/v1793846670/lumora/templates/zq3q6xrifk0wafyjvzau.jpg',
    prompt:
      'Vintage scrapbook collage aesthetic, dried pressed wildflowers, miniature polaroid photo cutouts, handwritten cursive notes, textured brown kraft paper background, warm nostalgic tones.',
    alt: 'Vintage scrapbook collage with pressed flowers and polaroids — AI-generated',
  },
];

export default function RealExamples() {
  const [copiedId, setCopiedId] = useState(null);
  const trackRef = useRef(null);

  function copy(id, text) {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedId(id);
    setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 2200);
  }

  function scroll(dir) {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
    }
  }

  return (
    <section
      id="examples"
      className="section"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      {/* Header */}
      <div className="container" style={{ marginBottom: '2.5rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <FadeUp>
            <div>
              <span className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Prompt Gallery
              </span>
              <h2 className="t-h2" style={{ marginBottom: '0.5rem' }}>
                Real prompts, real outputs.
              </h2>
              <p className="t-body" style={{ maxWidth: '42ch' }}>
                Every card is a tested prompt you can copy straight into ChatGPT or Gemini.
              </p>
            </div>
          </FadeUp>

          {/* Scroll arrows */}
          <div
            className="hidden sm:flex"
            style={{ gap: '0.5rem', alignItems: 'center' }}
          >
            {[
              ['left', 'Scroll left', <ChevronLeft key="l" size={16} />],
              ['right', 'Scroll right', <ChevronRight key="r" size={16} />],
            ].map(([dir, label, icon]) => (
              <button
                key={dir}
                type="button"
                onClick={() => scroll(dir)}
                aria-label={label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--ink-2)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                className="gallery-arrow"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll track — full-width */}
      <div
        ref={trackRef}
        className="h-scroll"
        style={{
          paddingLeft: 'max(1.25rem, calc((100vw - 1100px) / 2 + 1.25rem))',
          paddingRight: 'max(1.25rem, calc((100vw - 1100px) / 2 + 1.25rem))',
        }}
        aria-label="Prompt examples gallery"
      >
        {EXAMPLES.map((item, i) => {
          const copied = copiedId === item.id;
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{
                flexShrink: 0,
                width: 'min(80vw, 288px)',
                scrollSnapAlign: 'start',
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  backgroundColor: 'var(--bg-muted)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  sizes="288px"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  priority={i === 0}
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                {/* Category chip */}
                <span
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    padding: '0.25rem 0.5rem',
                    borderRadius: 6,
                    backgroundColor: 'var(--accent-bg)',
                    color: 'var(--accent)',
                    fontFamily: 'ui-monospace, monospace',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Card body */}
              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  flex: 1,
                }}
              >
                <div>
                  <h3
                    className="t-h3"
                    style={{ fontSize: '0.9375rem', marginBottom: '0.2rem', letterSpacing: '-0.01em' }}
                  >
                    {item.title}
                  </h3>
                  <span className="t-small" style={{ fontFamily: 'ui-monospace, monospace', fontSize: '0.6875rem' }}>
                    {item.model}
                  </span>
                </div>

                {/* Prompt preview */}
                <div
                  className="t-mono"
                  style={{
                    padding: '0.625rem 0.75rem',
                    borderRadius: 8,
                    border: '1px solid var(--border-soft)',
                    backgroundColor: 'var(--bg-muted)',
                    fontSize: '0.75rem',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    flex: 1,
                  }}
                >
                  {item.prompt}
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={() => copy(item.id, item.prompt)}
                  aria-label={`Copy prompt for ${item.title}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.375rem',
                    padding: '0.6rem 1rem',
                    borderRadius: 8,
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    ...(copied
                      ? {
                          backgroundColor: '#D1FAE5',
                          color: '#065F46',
                          border: '1px solid #6EE7B7',
                        }
                      : {
                          border: '1px solid var(--border)',
                          backgroundColor: 'var(--bg)',
                          color: 'var(--ink)',
                        }),
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}
                      >
                        <Check size={13} />
                        Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}
                      >
                        <Copy size={13} />
                        Copy Prompt
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Mobile scroll hint */}
      <p
        className="sm:hidden t-small"
        style={{ textAlign: 'center', marginTop: '1rem', fontFamily: 'ui-monospace, monospace' }}
      >
        ← swipe to explore →
      </p>
    </section>
  );
}
