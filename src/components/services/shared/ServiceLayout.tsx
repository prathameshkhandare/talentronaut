import React from 'react';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import { Footer } from '@/components/sections/Footer';

interface ServiceLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function ServiceLayout({ children, className }: ServiceLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-cream text-charcoal font-sans", className)} style={{ backgroundColor: 'var(--color-cream)' }}>
       {/* Ensure global header is visible or re-included if needed, but Layout usually handles it.
           However, specific page layouts might want to control padding.
       */}
      <main className="pt-40 pb-20">
        {children}
      </main>
    </div>
  );
}
