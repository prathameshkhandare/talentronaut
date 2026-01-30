import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Header from '@/components/Header';
import { Background } from '../components/visuals/Background';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Talentronaut | Navigate Your Career Journey',
  description: 'Connect with industry-leading experts and unlock unprecedented growth opportunities. Transform your career with Talentronaut.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased selection:bg-[#D44531]/20`}>
        <LoadingScreen />
        <SmoothScroll>
          <Header />
          <Background />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
