import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Lumora Privacy Policy — learn how we protect your data, what permissions the app requests, and how anonymous authentication keeps you private.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Lumora',
    description: 'Lumora collects the minimum data possible. No personal info is sold or shared.',
    url: 'https://lumora-app.vercel.app/privacy',
  },
};

function Section({ heading, children }) {
  return (
    <section className="pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
      <h2
        className="font-serif font-bold text-xl sm:text-2xl mb-3"
        style={{ color: 'var(--ink)' }}
      >
        {heading}
      </h2>
      <div
        className="text-sm leading-relaxed space-y-3"
        style={{ color: 'var(--ink-2)' }}
      >
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="max-w-prose mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-8 f-link">
        <ArrowLeft size={13} />
        Back to home
      </Link>

      <div className="mb-10 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
        <div
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent)' }}
        >
          <Shield size={13} aria-hidden="true" />
          Transparency &amp; Privacy
        </div>
        <h1
          className="font-serif font-bold tracking-tight text-3xl sm:text-4xl mb-2"
          style={{ color: 'var(--ink)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>
          Last updated: November 2026 · Applies to Lumora Android app (com.amrit.lumora) and this website.
        </p>
      </div>

      <div className="space-y-8">
        <Section heading="1. Our approach">
          <p>
            Lumora is built on a privacy-first principle: you can browse, search, and copy thousands of AI prompts without telling us who you are. The app functions fully under anonymous authentication by default.
          </p>
        </Section>

        <Section heading="2. What we collect">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong style={{ color: 'var(--ink)' }}>Anonymous session ID:</strong> On first launch, Firebase Auth generates a random, non-identifiable UID so you can save bookmarks. No email or phone number is associated.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Google account (optional):</strong> If you voluntarily link your Google account to sync saved prompts, we receive only your display name and email from Google Sign-In.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Clipboard writes:</strong> When you tap &quot;Copy Prompt&quot;, Lumora writes one text string to your clipboard. We never read existing clipboard contents.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Crash &amp; stability data:</strong> Firebase Crashlytics collects anonymised crash reports to help us fix bugs. No personal data is included.
            </li>
          </ul>
        </Section>

        <Section heading="3. Android permissions">
          <p>Lumora requests only two permissions:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <code
                className="text-xs font-mono px-1.5 py-0.5 rounded"
                style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--ink)' }}
              >
                INTERNET
              </code>{' '}
              — to load prompts and images.
            </li>
            <li>
              <code
                className="text-xs font-mono px-1.5 py-0.5 rounded"
                style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--ink)' }}
              >
                ACCESS_NETWORK_STATE
              </code>{' '}
              — to detect connectivity and serve cached data offline.
            </li>
          </ul>
          <p className="mt-3">
            We do <strong style={{ color: 'var(--ink)' }}>not</strong> request camera, microphone, contacts, precise location, SMS, or storage permissions.
          </p>
        </Section>

        <Section heading="4. Third-party services">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong style={{ color: 'var(--ink)' }}>Google Firebase</strong> — anonymous auth, Firestore database, crash analytics.</li>
            <li><strong style={{ color: 'var(--ink)' }}>Cloudinary</strong> — image CDN and optimisation.</li>
            <li><strong style={{ color: 'var(--ink)' }}>Google AdMob</strong> — non-intrusive ads that keep the app free. AdMob uses its own consent flow for personalised ads in regions requiring it.</li>
          </ul>
        </Section>

        <Section heading="5. Data retention &amp; deletion">
          <p>
            Anonymous session data is deleted if the account is inactive for 180 days. If you linked a Google account, you can request full deletion at any time by contacting us at the address below.
          </p>
        </Section>

        <Section heading="6. We do not sell data">
          <p>
            We do not sell, rent, or trade your personal information, search queries, or usage patterns to any third party.
          </p>
        </Section>

        <Section heading="7. Contact">
          <p>
            For privacy questions or data deletion requests:{' '}
            <a href="mailto:support@lumora.app" className="font-mono text-xs underline nav-link">
              support@lumora.app
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
