import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function CTA({ text, href, onClick, className }: CTAProps) {
  const commonClasses = cn(
    "inline-flex items-center justify-center h-[50px] px-8 rounded-full bg-coral text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer border-none",
    className
  );

  const style = { backgroundColor: 'var(--color-coral)' };

  const content = (
    <>
      <span>{text}</span>
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </>
  );

  if (onClick) {
      return (
          <button onClick={onClick} className={commonClasses} style={style}>
              {content}
          </button>
      );
  }

  // Fallback to Link if href is provided, default to '#' if neither
  return (
    <Link
      href={href || '#'}
      className={commonClasses}
      style={style}
    >
      {content}
    </Link>
  );
}
