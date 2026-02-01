"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../shared/SectionHeading';

// Placeholder icons (using text or lucide if needed, but simple colored blocks/text for now as "logos")
// In production, these should be real SVGs.
const TECH_STACK = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" }
];

export function TechStackGrid({ className }: { className?: string }) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-6 text-center">
        <SectionHeading className="mb-12">Our Technology Stack</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TECH_STACK.map((tech) => (
            <div 
              key={tech.name} 
              className="group flex items-center justify-center h-32 bg-white/50 backdrop-blur-sm border border-white/60 rounded-[32px] hover:bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Simulate monochrome to color on hover */}
              <span 
                className="text-xl font-bold text-gray-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                style={{ 
                    // This is a bit hacky for "color on hover" without real SVGs
                    // Ideally we use SVGs and filter: grayscale(100%) -> filter: none
                    color: "gray",
                 }}
              >
                  <span className="group-hover:text-[var(--hover-color)]" style={{ '--hover-color': tech.color } as React.CSSProperties}>
                    {tech.name}
                  </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
