"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function EventSphereVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-white">
      {/* World Map Silhouette (Simplified) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <div className="w-[80%] h-[60%] border-4 border-primary rounded-[100px] border-dashed" />
      </div>
      
      <div className="relative w-72 h-72 flex items-center justify-center">
          {/* Pulsing Community Globe */}
          <motion.div 
            className="w-48 h-48 rounded-full border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center shadow-inner"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
              <motion.div 
                className="w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                  {[0, 90, 180, 270].map((angle, i) => (
                      <div 
                        key={i}
                        className="absolute w-4 h-4 bg-white rounded-full border border-primary shadow-lg"
                        style={{ transform: `rotate(${angle}deg) translateY(-64px)` }}
                      />
                  ))}
              </motion.div>
          </motion.div>

          {/* "Extraordinary" Energy Flare */}
          <motion.div 
            className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Emerging Event Particles */}
          {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(212,69,49,1)]"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ 
                    x: Math.random() * 300 - 150, 
                    y: Math.random() * 300 - 150,
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                }}
                transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 10 }}
              />
          ))}
      </div>

      {/* Dynamic Location HUD */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-white shadow-lg">
          <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="text-[10px] font-bold text-charcoal tracking-widest uppercase">Live_Updates: NEW_YORK_TECH_WEEK</span>
      </div>
    </div>
  );
}
