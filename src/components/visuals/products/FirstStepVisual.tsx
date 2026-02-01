"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function FirstStepVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FAFAF9]">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Radar Scanning Ring */}
        <motion.div 
            className="absolute inset-0 border-[0.5px] border-primary/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* The Scanning Beam */}
        <motion.div 
            className="absolute inset-0 border-t border-primary/40 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ backgroundImage: 'conic-gradient(from 0deg, transparent, rgba(212,69,49,0.1), transparent)' }}
        />

        {/* Floating Career Paths (Puzzle/Path Visualization) */}
        {[...Array(4)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute border border-primary/10 bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-xl"
                style={{ width: '120px' }}
                animate={{ 
                    x: Math.cos(i * (Math.PI / 2)) * 80,
                    y: Math.sin(i * (Math.PI / 2)) * 80,
                    scale: [0.9, 1, 0.9],
                    translateZ: [0, 20, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
            >
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
                    <motion.div className="h-full bg-primary/40" animate={{ width: ['0%', '100%'] }} transition={{ duration: 3, repeat: Infinity, delay: i }} />
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-4 h-4 rounded bg-secondary/30" />
                    <div className="w-2 h-2 rounded-full bg-primary/20" />
                </div>
            </motion.div>
        ))}

        {/* The "Perfect Match" Core */}
        <motion.div 
            className="w-16 h-16 bg-white rounded-2xl shadow-2xl border-4 border-primary flex items-center justify-center relative z-20"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            <div className="w-6 h-6 bg-primary rounded shadow-[0_0_15px_rgba(212,69,49,0.5)]" />
        </motion.div>
      </div>

      {/* Decorative Architectural Elements */}
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(212,69,49,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,69,49,0.03)_1px,transparent_1px)] [background-size:20px_20px]" />
    </div>
  );
}
