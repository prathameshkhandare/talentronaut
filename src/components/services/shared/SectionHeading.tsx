import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function SectionHeading({ children, className, as: Component = 'h2' }: SectionHeadingProps) {
  return (
    <Component className={cn("font-heading font-bold text-charcoal", className)}>
      {children}
    </Component>
  );
}
