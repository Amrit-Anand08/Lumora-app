import Hero from '../components/Hero';
import RealExamples from '../components/RealExamples';
import HowItWorks from '../components/HowItWorks';
import InstallGuide from '../components/InstallGuide';
import FaqSection from '../components/FaqSection';
import { FAQ_DATA } from '../data/faq';

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://my-lumora.vercel.app').replace(/\/$/, '');

export const metadata = {
  title: 'Lumora - Free AI Image Prompts Android App | APK Download',
  description:
    'Download the official Lumora Android APK (v1.0). Curated AI image prompts for ChatGPT, Gemini, and Midjourney with 1-tap copy and direct sharing. 100% free.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lumora - Free AI Image Prompts Android App',
    description:
      'Curated AI image prompts for ChatGPT, Gemini, and Midjourney. Download the Android APK (v1.0).',
    url: baseUrl,
  },
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      {/* FAQPage JSON-LD schema for rich search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <RealExamples />
      <HowItWorks />
      <InstallGuide />
      <FaqSection />
    </>
  );
}
