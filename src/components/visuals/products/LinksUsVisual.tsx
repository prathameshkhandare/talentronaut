"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function LinksUsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Central Hub */}
      <motion.div 
        className="relative z-10 w-32 h-32 rounded-3xl bg-white shadow-2xl border border-primary/10 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 rounded-full border-2 border-white/50 animate-pulse" />
        </div>

        {/* Orbiting Ecosystem Nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.div
            key={angle}
            className="absolute p-2 bg-white rounded-xl border border-gray-100 shadow-lg"
            animate={{ 
              x: Math.cos(angle * Math.PI / 180) * 140,
              y: Math.sin(angle * Math.PI / 180) * 140,
              rotate: [0, 360]
            }}
            transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear" }}
          >
            <div className={`w-4 h-4 rounded-md ${i % 2 === 0 ? 'bg-primary/20' : 'bg-secondary/40'}`} />
          </motion.div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full -z-10 opacity-20">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.line
              key={`line-${i}`}
              x1="50%" y1="50%"
              x2={`${50 + Math.cos(angle * Math.PI / 180) * 35}%`}
              y2={`${50 + Math.sin(angle * Math.PI / 180) * 35}%`}
              stroke="currentColor"
              className="text-primary"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Floating Atmosphere */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{ x: Math.random() * 400 - 200, y: Math.random() * 400 - 200 }}
          animate={{ 
            y: [0, -100], 
            opacity: [0, 0.6, 0] 
          }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}
    </div>
  );
}
