import React from 'react';

export function RocketVector({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-2xl ${className}`}
    >
      <defs>
        <linearGradient id="rocketBody" x1="100" y1="0" x2="100" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#F0F0F0"/>
        </linearGradient>
        <linearGradient id="rocketWindow" x1="100" y1="60" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#87CEEB"/>
          <stop offset="100%" stopColor="#00BFFF"/>
        </linearGradient>
        <linearGradient id="finGradient" x1="100" y1="150" x2="100" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E65A45"/>
          <stop offset="100%" stopColor="#D44531"/>
        </linearGradient>
         <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      {/* Left Fin - Back */}
      <path d="M40 220 L20 280 L70 240 L40 220Z" fill="url(#finGradient)" stroke="#B33A29" strokeWidth="2" />

      {/* Right Fin - Back */}
      <path d="M160 220 L180 280 L130 240 L160 220Z" fill="url(#finGradient)" stroke="#B33A29" strokeWidth="2" />

      {/* Main Hull */}
      <path 
        d="M100 20 
           C 100 20, 60 80, 50 150 
           C 45 190, 50 240, 50 240 
           L 150 240 
           C 150 240, 155 190, 150 150 
           C 140 80, 100 20, 100 20 Z" 
        fill="url(#rocketBody)"
        stroke="#E0E0E0"
        strokeWidth="2"
      />
      
      {/* Front Fin (Center) */}
      <path d="M100 160 L100 240 L100 240 L100 160Z" fill="#D44531" /> {/* Subtle Spine */}

      {/* Window Ring */}
      <circle cx="100" cy="90" r="35" fill="#E6E6E6" stroke="#D1D1D1" strokeWidth="4" />
      
      {/* Window Glass with Reflection */}
      <circle cx="100" cy="90" r="28" fill="#4A4A46" />
      <circle cx="100" cy="90" r="24" fill="url(#rocketWindow)" opacity="0.8" />
      <path d="M85 80 A 15 15 0 0 1 100 75" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

      {/* Nose Cone */}
      <path 
        d="M100 20 
           C 100 20, 75 60, 68 80 
           L 132 80 
           C 125 60, 100 20, 100 20 Z" 
        fill="#D44531"
      />

      {/* Engine Nozzle */}
      <path d="M70 240 L60 260 L140 260 L130 240 Z" fill="#4A4A46" />
      
      {/* Engine Flame (Subtle default) */}
       <path d="M75 260 Q 100 300 125 260" fill="#FCD2AD" opacity="0.6" />

    </svg>
  );
}
