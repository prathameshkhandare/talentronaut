"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function XMetXVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FAFAF9]">
      {/* Decentralized Network Mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
          <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="var(--color-primary)" />
              <path d="M 50 50 L 150 50 M 50 50 L 50 150" stroke="var(--color-primary)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mesh)" />
      </svg>
      
      <div className="relative w-80 h-80 flex items-center justify-center transform-gpu">
          {/* Secure Deal Blocks (Interlocking) */}
          <motion.div 
            className="absolute w-28 h-28 border-2 border-primary rounded-[2rem] bg-white shadow-2xl flex items-center justify-center z-20"
            animate={{ rotate: 15, x: -20, y: -20 }}
          >
              <div className="text-[8px] font-bold text-primary font-mono opacity-40">DEAL_STRUK_01</div>
          </motion.div>

          <motion.div 
            className="absolute w-28 h-28 border-2 border-secondary rounded-[2rem] bg-white shadow-2xl flex items-center justify-center z-10"
            animate={{ rotate: -15, x: 20, y: 20 }}
          >
              <div className="text-[8px] font-bold text-secondary font-mono opacity-40">REP_SYNCED</div>
          </motion.div>

          {/* Barter Flow Particles */}
          {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full shadow-[0_0_10px_rgba(212,69,49,0.5)] bg-primary"
                animate={{ 
                    x: [-100, 100, -100],
                    y: i % 2 === 0 ? [-50, 50, -50] : [50, -50, 50],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              />
          ))}

          {/* On-Chain Verification HUD */}
          <div className="absolute top-4 right-4 text-right">
              <div className="text-[10px] font-mono font-bold text-gray-400">STATUS: VERIFYING</div>
              <motion.div 
                className="text-xs font-mono font-bold text-primary"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                BLOCK_HEIGHT: 18,942
              </motion.div>
          </div>
      </div>
    </div>
  );
}
