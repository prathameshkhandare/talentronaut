import React from "react";

export function SmokeTrailVector({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="none"
        >
            <defs>
                {/* Luminous Stream Gradient */}
                <linearGradient id="luminousStream" x1="100" y1="0" x2="100" y2="1000" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />    {/* Hot White/Pink Core */}
                    <stop offset="5%" stopColor="#FBCFE8" stopOpacity="0.8" />     {/* Bright Pink Glow */}
                    <stop offset="40%" stopColor="#F472B6" stopOpacity="0.4" />    {/* Translucent Middle */}
                    <stop offset="100%" stopColor="#BE185D" stopOpacity="0" />     {/* Fade Out */}
                </linearGradient>

                {/* Soft Glow Filter */}
                <filter id="streamGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                </filter>
            </defs>

            <g filter="url(#streamGlow)">
                {/* Main Stream Path - Smooth Tapered Cone */}
                <path d="M70,0 Q100,20 130,0 L160,1000 L40,1000 Z" fill="url(#luminousStream)" />

                {/* Inner Core for Intensity */}
                <path d="M85,0 Q100,10 115,0 L130,800 L70,800 Z" fill="white" opacity="0.4" />
            </g>
        </svg>
    );
}
