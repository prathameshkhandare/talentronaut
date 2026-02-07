"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SaffronCircuit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Complex Circuit Paths (The "City" Map)
  // M = Move, V = Vertical, H = Horizontal, L = Line (Diagonal)
  const traces = [
    // Left Flank - Dense Network
    "M 10 0 V 150 L 40 180 V 400 L 20 420 V 900",
    "M 30 0 V 100 L 60 130 H 100 V 300",
    "M 60 0 V 80 L 90 110 V 250 L 120 280 V 500",
    "M 0 300 H 50 L 80 330 V 600",
    "M 150 900 V 700 L 120 670 H 80 V 550",

    // Left-Center - Vertical Highways
    "M 200 0 V 200 L 230 230 V 800",
    "M 250 0 V 150 L 280 180 V 400 L 310 430 V 900",
    "M 220 900 V 600 L 250 570 V 300",
    "M 350 0 V 100 L 320 130 V 500 L 350 530 V 900",
    
    // Right-Center - Data Hubs
    "M 900 900 V 700 L 950 650 V 200 L 920 170 V 0",
    "M 1000 900 V 500 L 1050 450 V 100",
    "M 1100 900 V 600 L 1080 580 V 0",
    "M 950 0 V 150 L 980 180 V 400",

    // Right Flank - Complexity
    "M 1200 0 V 250 L 1250 300 V 700",
    "M 1300 0 V 150 L 1270 180 V 600 L 1300 630 V 900",
    "M 1350 900 V 200 L 1380 170 V 0",
    "M 1400 500 H 1350 L 1320 470 V 100",
  ];

  // Particle Configuration (Moving Data)
  const particles = traces.map((path, i) => ({
    path,
    duration: 5 + Math.random() * 8, // Variable speeds
    delay: Math.random() * 5,
    color: i % 2 === 0 ? "#FF4D00" : "#FFFFFF", // Mix of Orange and White particles
    size: i % 3 === 0 ? 4 : 3, // Increased size for mobile
  }));

  // Static Nodes (Junctions)
  const nodes = [
    { cx: 40, cy: 180 }, { cx: 60, cy: 130 }, { cx: 90, cy: 110 }, 
    { cx: 230, cy: 230 }, { cx: 280, cy: 180 }, { cx: 320, cy: 130 },
    { cx: 950, cy: 650 }, { cx: 1050, cy: 450 }, { cx: 1250, cy: 300 },
    { cx: 1270, cy: 180 }, { cx: 1320, cy: 470 }
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
            strokeWidth="2"
            fill="none"
            opacity="0.2" // Increased for mobile visibility
          />
        ))}

        {/* 2. Active Energy Pulses (Long beams) */}
        {traces.map((d, i) => (
          <motion.path
            key={`pulse-${i}`}
            d={d}
            stroke="url(#traceGradient)"
            strokeWidth="4" // Increased for mobile visibility
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: [0, 0.4, 0], pathOffset: [0, 1, 1] }}
            transition={{
              duration: 4 + Math.random() * 4,
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
