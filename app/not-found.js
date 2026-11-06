import Link from 'next/link';
import { Download, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '404 — Page Not Found',
  description:
    'The page you requested does not exist. Return to the Lumora homepage or download the Android APK.',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.25rem',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 400, width: '100%' }}>
        <span
          className="t-label"
          style={{ display: 'block', marginBottom: '0.75rem' }}
        >
          Error 404
        </span>
        <h1 className="t-h1" style={{ marginBottom: '1rem' }}>
          Page not found.
        </h1>
        <p
          className="t-body-lg"
          style={{ marginBottom: '2.5rem' }}
        >
          The page you&apos;re looking for doesn&apos;t exist or was moved.
          Head back to the homepage or download Lumora directly.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Link href="/" className="btn btn-outline">
            <ArrowLeft size={15} aria-hidden="true" />
            Go home
          </Link>
          <a
            href="/Lumora-v1.0.apk"
            download="Lumora-v1.0.apk"
            className="btn btn-solid"
          >
            <Download size={15} aria-hidden="true" />
            Download APK
          </a>
        </div>
      </div>
    </div>
  );
}
