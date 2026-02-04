import type { Metadata } from 'next';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Header from '@/components/Header';
import { Footer } from '@/components/sections/Footer';
import { Background } from '@/components/visuals/Background';
import { bochan, instrumentSans, inter } from '../lib/fonts';
import { LoadingProvider } from '@/context/LoadingContext';
import ClientLayout from './ClientLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Talentronaut - Innovating the future with AI & Next - Gen Technology',
  description:
    'Connect with industry-leading experts and unlock unprecedented growth opportunities. Transform your career with Talentronaut.',
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bochan.variable} ${instrumentSans.variable} ${inter.variable}`}
    >
      <body className="antialiased selection:bg-[#D44531]/20">
        <LoadingProvider>
          <ClientLayout>
            <SmoothScroll>
              <Header />
              <Background />
              <main className="relative z-10 min-h-screen">
                {children}
              </main>
              <Footer />
            </SmoothScroll>
          </ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
