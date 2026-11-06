import { Fraunces, DM_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://my-lumora.vercel.app').replace(/\/$/, '');

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Lumora — Free AI Image Prompts App for Android | APK Download',
    template: '%s | Lumora',
  },
  description:
    'Download the Lumora Android APK. Curated AI image prompts for ChatGPT, Gemini, and Midjourney. Copy in one tap or share directly to your AI app. 100% free.',
  keywords: [
    'AI image prompts',
    'Gemini photo editing prompts',
    'ChatGPT image prompts',
    'free AI prompts app',
    'Lumora app download',
    'Midjourney prompts Android',
    'DALL-E 3 prompts library',
    'AI image generator prompts',
    'Android AI app free download',
  ],
  verification: {
    google: "1BGmHTV5d_kPy7WmQv3v6ZWmjNzQy36NNyek66sKhWE",
  },
  authors: [{ name: 'Lumora' }],
  creator: 'Lumora',
  publisher: 'Lumora',
  applicationName: 'Lumora',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Lumora',
    title: 'Lumora — Free AI Image Prompts App for Android',
    description:
      'Curated AI image prompts for ChatGPT, Gemini, and Midjourney. One-tap copy, zero sign-up. Download the free Android APK.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Lumora AI Image Prompts Android App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumora — Free AI Image Prompts App for Android',
    description:
      'Curated AI image prompts for ChatGPT, Gemini, Midjourney. One-tap copy, zero sign-up.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Lumora',
    operatingSystem: 'ANDROID',
    applicationCategory: 'MultimediaApplication',
    description:
      'Free Android app with curated AI image prompts for ChatGPT, Gemini, and Midjourney. One-tap copy and direct share.',
    downloadUrl: `${baseUrl}/Lumora-v1.0.apk`,
    fileSize: '14800000',
    softwareVersion: '1.0',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent dark-mode flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('lumora-theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body style={{ backgroundColor: 'var(--bg)', color: 'var(--ink)' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-semibold focus:text-white"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
