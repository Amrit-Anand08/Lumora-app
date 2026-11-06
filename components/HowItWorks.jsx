import { Search, Share2, ImagePlay } from 'lucide-react';
import FadeUp from './ui/FadeUp';
import { StaggerContainer, StaggerItem } from './ui/StaggerList';

const STEPS = [
  {
    num: '01',
    icon: Search,
    title: 'Find the look you want',
    body: 'Browse by category — portraits, anime, cinematic, festival — or search by keyword. The app loads instantly with no account needed.',
  },
  {
    num: '02',
    icon: Share2,
    title: 'Copy or share directly',
    body: 'Tap "Copy" to put the full prompt on your clipboard, or tap "Share" to send it straight into ChatGPT, Gemini, or Midjourney without switching apps.',
  },
  {
    num: '03',
    icon: ImagePlay,
    title: 'Generate your image',
    body: 'Paste into your AI generator. Because every Lumora prompt is pre-tested, you get a consistent, high-quality result without trial and error.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">

        {/* Header */}
        <FadeUp>
          <div style={{ maxWidth: '44ch', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
              How it works
            </span>
            <h2 className="t-h2" style={{ marginBottom: '0.75rem' }}>
              From idea to image in three steps.
            </h2>
            <p className="t-body">
              No prompt engineering experience required. Lumora provides
              ready-to-paste blueprints for the best AI image models.
            </p>
          </div>
        </FadeUp>

        {/* Steps — editorial numbered list */}
        <StaggerContainer>
          {STEPS.map(({ num, icon: Icon, title, body }, i) => (
            <StaggerItem key={num}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '0 2.5rem',
                  alignItems: 'start',
                  paddingTop: '2rem',
                  paddingBottom: '2rem',
                  borderTop: '1px solid var(--border)',
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: 700,
                    lineHeight: 1,
                    color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                    userSelect: 'none',
                    width: 'clamp(3rem, 7vw, 5rem)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {num}
                </span>

                {/* Content */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '1.5rem',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <h3 className="t-h3" style={{ marginBottom: '0.625rem' }}>
                      {title}
                    </h3>
                    <p className="t-body" style={{ maxWidth: '50ch' }}>
                      {body}
                    </p>
                  </div>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--bg-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.75}
                      style={{ color: 'var(--ink-2)' }}
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </StaggerContainer>

      </div>
    </section>
  );
}
