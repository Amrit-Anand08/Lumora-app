import Link from 'next/link';
import { Download } from 'lucide-react';

const NAV = [
  { label: 'Prompt Gallery',   href: '/#examples' },
  { label: 'How it works',     href: '/#how-it-works' },
  { label: 'Install guide',    href: '/#install-guide' },
  { label: 'FAQ',              href: '/#faq' },
];

const LEGAL = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-muted)',
        paddingTop: 'clamp(3rem, 7vw, 5rem)',
        paddingBottom: 'clamp(2rem, 5vw, 3rem)',
      }}
    >
      <div className="container">

        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '2.5rem 3rem',
            marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '1rem',
              }}
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
            <p
              className="t-body"
              style={{ maxWidth: '30ch', marginBottom: '1.5rem', fontSize: '0.875rem' }}
            >
              Free Android app with curated AI image prompts for ChatGPT, Gemini,
              and Midjourney. Copy in one tap, no sign-up required.
            </p>
            <a
              href="/Lumora-v1.0.apk"
              download="Lumora-v1.0.apk"
              className="btn btn-solid"
              style={{ fontSize: '0.8125rem', padding: '0.625rem 1.125rem' }}
            >
              <Download size={13} strokeWidth={2.5} aria-hidden="true" />
              Download APK — Free
            </a>
          </div>

          {/* Nav */}
          <div>
            <p
              className="t-label"
              style={{ marginBottom: '1rem', fontSize: '0.6875rem' }}
            >
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="f-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              className="t-label"
              style={{ marginBottom: '1rem', fontSize: '0.6875rem' }}
            >
              Legal
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="f-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.75rem',
              color: 'var(--ink-3)',
            }}
          >
            © 2026 Lumora. Not affiliated with OpenAI, Google, or Midjourney.
          </span>
          <span
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.75rem',
              color: 'var(--ink-3)',
            }}
          >
            com.amrit.lumora · Min SDK 24 · Android 7.0+
          </span>
        </div>
      </div>
    </footer>
  );
}
