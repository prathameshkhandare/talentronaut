import React from 'react';

export function StartupIllustration({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 600" 
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="primaryGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A4A46" />
          <stop offset="100%" stopColor="#2D2D2A" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D44531" />
          <stop offset="100%" stopColor="#FCD2AD" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="15" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Abstract Background Grid */}
      <path d="M100 0 V600 M200 0 V600 M300 0 V600 M400 0 V600 M500 0 V600 M600 0 V600 M700 0 V600" stroke="#E5E5E5" strokeWidth="1" opacity="0.3" />
      <path d="M0 100 H800 M0 200 H800 M0 300 H800 M0 400 H800 M0 500 H800" stroke="#E5E5E5" strokeWidth="1" opacity="0.3" />

      {/* Central Abstract Shape (Growth/Structure) */}
      <g transform="translate(400, 300)">
         {/* Base Structure - Geometric Hexagon/Cube feel */}
         <path d="M-150 50 L0 150 L150 50 V-100 L0 -200 L-150 -100 Z" fill="url(#primaryGradient)" opacity="0.1" />
         
         {/* Rising Graph/Arrow Metaphor */}
         <path d="M-120 80 L-50 20 L50 60 L140 -80" stroke="#D44531" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
         
         {/* Data Points */}
         <circle cx="-120" cy="80" r="8" fill="#4A4A46" />
         <circle cx="-50" cy="20" r="8" fill="#4A4A46" />
         <circle cx="50" cy="60" r="8" fill="#4A4A46" />
         <circle cx="140" cy="-80" r="12" fill="#D44531" />
         
         {/* Floating Elements (Tech/Modern) */}
         <rect x="80" y="-150" width="60" height="60" rx="8" fill="#fff" stroke="#4A4A46" strokeWidth="2" opacity="0.8" />
         <circle cx="-100" cy="-120" r="20" fill="#FCD2AD" opacity="0.6" />
      </g>
    </svg>
  );
}
