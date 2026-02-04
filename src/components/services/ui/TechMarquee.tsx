"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../shared/SectionHeading';

// Mapping nice names to Simple Icons slugs
const TECH_LOGOS: Record<string, string> = {
  "React": "react",
  "Next.js": "nextdotjs",
  "TypeScript": "typescript",
  "Node.js": "nodedotjs",
  "Python": "python",
  "AWS": "amazonaws",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "GraphQL": "graphql",
  "TailwindCSS": "tailwindcss",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Figma": "figma",
  "Vercel": "vercel",
  "Google Cloud": "googlecloud",
  "Azure": "azure",
  "Flutter": "flutter",
  "Firebase": "firebase",
  "Stripe": "stripe",
};

const ROW_1 = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "GraphQL", "TailwindCSS"
];

const ROW_2 = [
  "PostgreSQL", "MongoDB", "Redis", "Figma", "Vercel", "Google Cloud", "Azure", "Flutter", "Firebase", "Stripe"
];

export function TechMarquee({ className }: { className?: string }) {
  return (
    <section className={cn("py-28 bg-white overflow-hidden", className)}>
      <div className="container mx-auto px-6 text-center mb-16">
        <SectionHeading className="mb-6 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-coral to-orange-500 pb-2 px-4">Technologies We Work With</SectionHeading>
        <div className="w-24 h-1.5 bg-coral mx-auto rounded-full mb-8" />
        <p className="text-gray-500 max-w-2xl mx-auto text-xl leading-relaxed">
            We don't just use tools; we leverage ecosystems to build scalable, future-proof platforms.
        </p>
      </div>

      <div className="flex flex-col gap-12 relative">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Left */}
          <div className="flex overflow-hidden group">
            <div className="flex gap-12 animate-scroll-left whitespace-nowrap">
               {[...ROW_1, ...ROW_1, ...ROW_1].map((tech, i) => (
                   <TechItem key={i} name={tech} />
               ))}
            </div>
          </div>

          {/* Row 2 - Right */}
           <div className="flex overflow-hidden group">
            <div className="flex gap-12 animate-scroll-right whitespace-nowrap">
               {[...ROW_2, ...ROW_2, ...ROW_2].map((tech, i) => (
                   <TechItem key={i} name={tech} />
               ))}
            </div>
          </div>
      </div>
    </section>
  );
}

function TechItem({ name }: { name: string }) {
    const slug = TECH_LOGOS[name] || "javascript";
    const logoUrl = `https://cdn.simpleicons.org/${slug}`;
    
    return (
        <div className="inline-flex items-center gap-6 px-10 py-6 bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] min-w-[280px] hover:border-coral/50 hover:shadow-[0_20px_60px_-15px_rgba(232,92,74,0.2)] hover:-translate-y-2 hover:scale-105 transition-all duration-500 group/item cursor-default mx-2">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center p-3 group-hover/item:bg-coral/10 transition-colors duration-500 shrink-0 relative overflow-visible">
                {/* 
                   Glow Effect: We use the image itself or a shadow to create a glow. 
                   Since we can't easily colored-shadow an <img> content without drop-shadow filter which takes color from pixel.
                   Browser support for drop-shadow filter is good.
                */}
                <img 
                    src={logoUrl} 
                    alt={`${name} logo`} 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] group-hover/item:drop-shadow-[0_0_12px_rgba(232,92,74,0.6)] transition-all duration-500"
                />
            </div>
            <span className="text-2xl font-bold text-charcoal group-hover/item:text-coral transition-colors duration-300">{name}</span>
        </div>
    )
}
