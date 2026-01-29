"use client"
import { motion } from "framer-motion"

export function Rocket({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <defs>
        {/* Soft Clay Gradients */}
        <linearGradient id="clayBody" x1="150" y1="50" x2="350" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff7b7b" /> 
          <stop offset="0.5" stopColor="#ff5252" />
          <stop offset="1" stopColor="#d32f2f" />
        </linearGradient>
        
        <linearGradient id="clayWindow" x1="200" y1="150" x2="312" y2="250" gradientUnits="userSpaceOnUse">
           <stop offset="0" stopColor="#b3e5fc" />
           <stop offset="1" stopColor="#0288d1" />
        </linearGradient>

        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
           <feGaussianBlur in="SourceAlpha" stdDeviation="15" result="blur"/>
           <feOffset in="blur" dx="5" dy="15" result="offsetBlur"/>
           <feFlood floodColor="rgba(0,0,0,0.2)" result="colorBlur"/>
           <feComposite in="colorBlur" in2="offsetBlur" operator="in" />
           <feMerge>
             <feMergeNode />
             <feMergeNode in="SourceGraphic" />
           </feMerge>
        </filter>

        <filter id="clayGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Shadow Group */}
      <g filter="url(#softShadow)">
          {/* Fins (Rounded & Soft) */}
          <path d="M140,340 Q100,420 120,460 Q150,480 180,440 L180,340 Z" fill="#b71c1c" />
          <path d="M372,340 Q412,420 392,460 Q362,480 332,440 L332,340 Z" fill="#b71c1c" />
          
          {/* Center Engine */}
          <path d="M220,420 H292 V460 Q256,480 220,460 Z" fill="#8c0000" />

          {/* Main Body (Egg-like smooth shape) */}
          <path d="M256,40 C180,40 160,180 160,380 H352 C352,180 332,40 256,40 Z" fill="url(#clayBody)" />
      </g>

      {/* Window (Porthole) with depth */}
      <circle cx="256" cy="200" r="55" fill="#eeeeee" stroke="#cfcfcf" strokeWidth="8" />
      <circle cx="256" cy="200" r="45" fill="url(#clayWindow)" />
      {/* Glints */}
      <circle cx="235" cy="180" r="12" fill="white" opacity="0.6" />
      <circle cx="275" cy="220" r="6" fill="white" opacity="0.3" />

      {/* Soft Flame */}
      <motion.g
        initial={{ opacity: 0.8, scaleY: 0.8 }}
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        style={{ transformOrigin: "256px 460px" }}
      >
        <path d="M220,460 Q256,580 292,460" fill="#ffb74d" filter="url(#clayGlow)" opacity="0.8"/>
        <path d="M240,460 Q256,540 272,460" fill="#ffff8d" />
      </motion.g>

    </motion.svg>
  )
}
