import { Download, ShieldCheck, Check } from 'lucide-react';
import FadeUp from './ui/FadeUp';
import { StaggerContainer, StaggerItem } from './ui/StaggerList';

const STEPS = [
  {
    num: '1',
    title: 'Download the APK file',
    body: 'Tap "Download APK" on this page. Chrome may show "File might be harmful" — this is standard for any file from outside the Play Store. Tap "Download anyway" to continue.',
  },
  {
    num: '2',
    title: 'Allow install from unknown sources',
    body: 'Open the downloaded file from your notifications or the Downloads folder. If Android asks, tap "Settings" and enable "Allow from this source". This is a one-time permission.',
  },
  {
    num: '3',
    title: 'Tap Install, then Open',
    body: 'Press "Install" on the Android prompt. Installation takes a few seconds. Tap "Open" — Lumora signs you in anonymously so you can start immediately, no account needed.',
  },
];

const TRUST = [
  'SHA-256 signed release build',
  'No camera, contacts, or location access',
  'No background data collection',
  'Works on Android 7.0 through Android 15',
];

export default function InstallGuide() {
  return (
    <section
      id="install-guide"
      className="section"
      style={{ backgroundColor: 'var(--bg-muted)' }}
    >
      <div className="container">

        {/* Header */}
        <FadeUp>
          <div style={{ maxWidth: '44ch', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Android installation
            </span>
            <h2 className="t-h2" style={{ marginBottom: '0.75rem' }}>
              Install in under a minute.
            </h2>
            <p className="t-body">
              Lumora is distributed as a standalone APK. Here is exactly what to
              expect at each step for Android 7.0 through 15.
            </p>
          </div>
        </FadeUp>

        {/* Step cards */}
        <StaggerContainer>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}
            className="grid"
          >
          {STEPS.map((step) => (
            <StaggerItem key={step.num}>
              <div
                className="card"
                style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', height: '100%' }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-bg)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'ui-monospace, monospace',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    marginBottom: '1.25rem',
                  }}
                  aria-hidden="true"
                >
                  {step.num}
                </div>
                <h3 className="t-h3" style={{ fontSize: '1.0625rem', marginBottom: '0.625rem' }}>
                  {step.title}
                </h3>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
          </div>
        </StaggerContainer>

        {/* Security card */}
        <FadeUp>
          <div
            className="card"
            style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '2rem',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ maxWidth: '36rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    marginBottom: '0.875rem',
                  }}
                >
                  <ShieldCheck
                    size={14}
                    strokeWidth={2}
                    style={{ color: 'var(--accent)' }}
                    aria-hidden="true"
                  />
                  <span className="t-label">Verified clean package</span>
                </div>
                <h3 className="t-h3" style={{ marginBottom: '0.625rem' }}>
                  Why does Android show &ldquo;Unknown Sources&rdquo;?
                </h3>
                <p className="t-body" style={{ marginBottom: '1.25rem', fontSize: '0.875rem' }}>
                  Android flags every APK from outside the Play Store — regardless
                  of its content. Lumora is built with the official Android SDK
                  and requests only the minimum permissions needed to fetch and
                  display prompts.
                </p>
                <ul
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.5rem 1.5rem',
                    listStyle: 'none',
                  }}
                >
                  {TRUST.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'ui-monospace, monospace',
                        fontSize: '0.75rem',
                        color: 'var(--ink-2)',
                      }}
                    >
                      <Check
                        size={12}
                        style={{ color: 'var(--accent)', flexShrink: 0 }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <a
                  href="/Lumora-v1.0.apk"
                  download="Lumora-v1.0.apk"
                  className="btn btn-solid"
                >
                  <Download size={15} strokeWidth={2.5} aria-hidden="true" />
                  Download APK — 14.8 MB
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
