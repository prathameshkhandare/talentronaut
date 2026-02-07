"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SaffronCircuit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Complex Circuit Paths (The "City" Map) - Sparse & Premium
  // M = Move, V = Vertical, H = Horizontal, L = Line (Diagonal)
  const traces = [
    // Left Flank
    "M 40 0 V 150 L 70 180 V 400 L 50 420 V 900",

    // Left-Center
    "M 350 0 V 100 L 320 130 V 500 L 350 530 V 900",
    
    // CENTER
    "M 720 900 V 700 L 750 670 V 300 L 720 270 V 0",
    
    // Right-Center
    "M 1050 900 V 600 L 1030 580 V 0",

    // Right Flank
    "M 1350 0 V 150 L 1320 180 V 600 L 1350 630 V 900",
  ];

  // Particle Configuration (Moving Data)
  // Particle Configuration (Moving Data) - Increased Density
  const particles = [
    // Primary Wave
    ...traces.map((path, i) => ({
      path,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      color: "#FF4D00",
      size: 2.5,
    })),
    // Secondary Wave (Delayed)
    ...traces.map((path, i) => ({
      path,
      duration: 12 + Math.random() * 8, 
      delay: 5 + Math.random() * 8, // Offset start
      color: "#FFFFFF",
      size: 2,
    })),
    // Third Wave (Sparks - Faster & Smaller) - Added for slightly more density
    ...traces.map((path, i) => ({
      path,
      duration: 8 + Math.random() * 6, // Faster 
      delay: 2 + Math.random() * 10,
      color: "#FF8C69", // Lighter Orange
      size: 1.5,
    }))
  ];

  // Static Nodes (Junctions)
  const nodes = [
    { cx: 70, cy: 180 }, { cx: 320, cy: 130 }, 
    { cx: 750, cy: 670 }, { cx: 1030, cy: 580 }, 
    { cx: 1320, cy: 180 }
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-white">
       {/* Base Gradient - Subtle warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF8F5] to-[#FFF0E6]" />

      {/* 3D Perspective Grid (Floor) */}
      <div className="absolute bottom-0 w-full h-[400px] bg-[linear-gradient(to_bottom,transparent,rgba(212,69,49,0.05))] perspective-[1000px] opacity-50">
           <div className="absolute inset-x-0 bottom-[-50%] h-[150%] bg-[linear-gradient(90deg,rgba(212,69,49,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(212,69,49,0.1)_1px,transparent_1px)] bg-[size:60px_60px] origin-bottom transform rotate-x-[60deg]" />
      </div>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="traceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D44531" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF4D00" stopOpacity="1" />
            <stop offset="100%" stopColor="#FCD2AD" stopOpacity="0" />
          </linearGradient>
           <filter id="glow-particle">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Base Circuit Map (Static/Faint) */}
        {traces.map((d, i) => (
          <path
            key={`base-${i}`}
            d={d}
            stroke="#D44531"
            strokeWidth="1"
            fill="none"
            opacity="0.08" // Slightly visible to show path essence
          />
        ))}

        {/* 2. Active Energy Pulses (Long beams) */}
        {traces.map((d, i) => (
          <motion.path
            key={`pulse-${i}`}
            d={d}
            stroke="url(#traceGradient)"
            strokeWidth="2" // Increased for mobile visibility
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: [0, 0.4, 0], pathOffset: [0, 1, 1] }}
            transition={{
              duration: 8 + Math.random() * 8, // Slower (8-16s)
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* 3. Data Particles (Moving Dots) */}
        {particles.map((p, i) => (
             <motion.circle
                key={`particle-${i}`}
                r={p.size}
                fill={p.color}
                filter="url(#glow-particle)"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                style={{ offsetPath: `path('${p.path}')` }}
                transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: p.delay
                }}
             />
        ))}

        {/* 4. Junction Nodes (Blinking) */}
        {nodes.map((node, i) => (
          <motion.g  key={`node-${i}`} opacity={0.8}>
              <circle cx={node.cx} cy={node.cy} r="4" fill="#FFE5D9" />
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r="6"
                stroke="#FF4D00"
                strokeWidth="2"
                fill="none"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
          </motion.g>
        ))}

      </svg>
      
      {/* Soft Vignette to focus center - reduced opacity for better line visibility */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,white_100%)] opacity-40" />
    </div>
  );
}
