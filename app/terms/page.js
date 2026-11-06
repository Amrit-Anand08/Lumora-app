import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service',
  description:
    'Lumora Terms of Service — usage guidelines, prompt licensing, third-party AI platform disclaimers, and prohibited conduct.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | Lumora',
    description: 'Usage rules, prompt licensing, and AI platform disclaimers for the Lumora app.',
    url: 'https://my-lumora.vercel.app/terms',
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

export default function TermsPage() {
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
          <FileText size={13} aria-hidden="true" />
          User Agreement
        </div>
        <h1
          className="font-serif font-bold tracking-tight text-3xl sm:text-4xl mb-2"
          style={{ color: 'var(--ink)' }}
        >
          Terms of Service
        </h1>
        <p className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>
          Last updated: November 2026 · Applies to the Lumora Android app and this website.
        </p>
      </div>

      <div className="space-y-8">
        <Section heading="1. Agreement">
          <p>
            By downloading, installing, or using the Lumora Android application or this website, you agree to these Terms of Service. If you do not agree, please do not use Lumora.
          </p>
        </Section>

        <Section heading="2. Prompt licence">
          <p>
            Lumora grants you a worldwide, royalty-free licence to use, adapt, and build on any prompt in the library for personal and commercial image generation projects.
          </p>
          <p>
            You may <strong style={{ color: 'var(--ink)' }}>not</strong> scrape, mirror, or repackage the Lumora prompt database as a competing product or standalone dataset.
          </p>
        </Section>

        <Section heading="3. Third-party AI platforms">
          <p>
            Lumora is an independent utility. It is{' '}
            <strong style={{ color: 'var(--ink)' }}>
              not affiliated with, endorsed by, or sponsored by
            </strong>{' '}
            OpenAI, Google, Midjourney Inc., or Microsoft.
          </p>
          <p>
            AI image generators are non-deterministic. We test every prompt for consistency, but cannot guarantee identical results across different model versions, seeds, or platform updates.
          </p>
        </Section>

        <Section heading="4. Prohibited conduct">
          <ul className="list-disc pl-5 space-y-1">
            <li>Distributing modified, repackaged, or malicious APK files claiming to be Lumora.</li>
            <li>Abusing in-app reporting to submit false or bad-faith reports.</li>
            <li>Attempting to bypass security rules or intentionally abuse Firebase quota limits.</li>
          </ul>
        </Section>

        <Section heading="5. No warranty">
          <p>
            Lumora is provided on an &quot;AS IS&quot; basis without warranties of any kind. We do not guarantee continuous, error-free operation.
          </p>
        </Section>

        <Section heading="6. Changes to these terms">
          <p>
            We may update these terms at any time. Continued use of the app after a change constitutes acceptance of the revised terms.
          </p>
        </Section>

        <Section heading="7. Contact">
          <p>
            For legal or licensing questions:{' '}
            <a href="mailto:legal@lumora.app" className="font-mono text-xs underline nav-link">
              legal@lumora.app
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
