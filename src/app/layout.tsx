import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { Background } from '../components/visuals/Background';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ 
  subsets: ['latin'], 
  variable: '--font-sora',
  weight: ['300', '400', '600']
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
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased selection:bg-[#D44531]/20`}>
        <SmoothScroll>
          <Background />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
