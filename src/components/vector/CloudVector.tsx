import React from 'react';

export function CloudA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path 
        d="M50 150C20 150 0 130 0 100C0 70 30 50 60 60C80 30 130 20 160 50C190 20 250 20 280 60C320 30 380 50 380 100C380 140 350 160 310 160L50 160Z" 
        fill="white" 
        fillOpacity="0.8"
      />
    </svg>
  );
}

export function CloudB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path 
        d="M40 140C10 140 0 120 10 100C10 70 40 60 60 80C70 40 120 30 150 60C180 30 230 40 240 80C270 70 300 90 290 120C280 145 250 150 230 145L40 145Z" 
        fill="white" 
        fillOpacity="0.6"
      />
    </svg>
  );
}
