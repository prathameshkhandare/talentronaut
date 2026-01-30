import React from 'react';

export function RocketVector({ className }: { className?: string }) {
  return (
    <svg 
      width="60" 
      height="80" 
      viewBox="0 0 60 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xl ${className}`}
    >
      {/* Main Body */}
      <path 
        d="M30 5C22 5 18 25 18 45V65H42V45C42 25 38 5 30 5Z" 
        fill="#1A1A1A" 
      />
      {/* Left Fin */}
      <path 
        d="M18 50L10 70H18V50Z" 
        fill="#1A1A1A" 
      />
      {/* Right Fin */}
      <path 
        d="M42 50L50 70H42V50Z" 
        fill="#1A1A1A" 
      />
      {/* Window */}
      <circle cx="30" cy="25" r="4" fill="white" fillOpacity="0.2" />
      {/* Bottom Engine Detail */}
      <rect x="22" y="65" width="16" height="4" rx="2" fill="#333" />
    </svg>
  );
}
