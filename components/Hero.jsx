import { Download } from 'lucide-react';
import FadeUp from './ui/FadeUp';
import { StaggerContainer, StaggerItem } from './ui/StaggerList';

const SPECS = [
  { label: 'Size',    value: '~14.8 MB' },
  { label: 'Android', value: '7.0+' },
  { label: 'Version', value: '1.0 Stable' },
  { label: 'Price',   value: 'Free' },
];

export default function Hero() {
  return (
    <section
      style={{
        borderBottom: '1px solid var(--border)',
        paddingTop: 'clamp(3.5rem, 8vw, 6rem)',
        paddingBottom: 0,
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Label */}
        <FadeUp delay={0}>
          <div style={{ marginBottom: '2rem' }}>
            <span className="t-label">Free Android App · v1.0</span>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.08}>
          <h1
            className="t-display"
            style={{
              maxWidth: '14ch',
              marginBottom: '1.5rem',
            }}
          >
            Curated AI prompts,{' '}
            <span style={{ color: 'var(--accent)' }}>
              copied in one tap.
            </span>
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.15}>
          <p
            className="t-body-lg"
            style={{
              maxWidth: '44ch',
              marginBottom: '2.5rem',
            }}
          >
            Lumora is a free Android app with hand-picked prompts for ChatGPT,
            Gemini, and Midjourney. Find a style, tap copy, and paste straight
            into your AI generator. No sign-up needed.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.22}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '3.5rem',
            }}
          >
            <a
              href="/Lumora-v1.0.apk"
              download="Lumora-v1.0.apk"
              className="btn btn-solid"
            >
              <Download size={16} strokeWidth={2.5} aria-hidden="true" />
              Download APK — Free
            </a>
            <a href="#examples" className="btn btn-outline">
              See examples
            </a>
          </div>
        </FadeUp>

        {/* Spec strip */}
        <FadeUp delay={0.3}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
              borderTop: '1px solid var(--border)',
              borderLeft: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
              width: 'fit-content',
              maxWidth: '100%',
            }}
          >
            {SPECS.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '0.875rem 1.25rem',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                }}
              >
                <span
                  className="t-label"
                  style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.6rem' }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: 'ui-monospace, monospace',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Scroll spacer */}
        <div style={{ height: 'clamp(2.5rem, 5vw, 4rem)' }} />
      </div>
    </section>
  );
}
