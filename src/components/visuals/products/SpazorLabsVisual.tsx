"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function SpazorLabsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Dark Premium Grid */}
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(212,69,49,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,69,49,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      
      {/* Neural Core */}
      <div className="relative w-80 h-80 flex items-center justify-center perspective-[1000px]">
          {/* Outer Processing Ring */}
          {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute border border-primary/20 rounded-full"
                style={{ width: 100 + ring * 60, height: 100 + ring * 60 }}
                animate={{ rotateX: 60, rotateZ: [0, 360], scale: [1, 1.05, 1] }}
                transition={{ duration: 15 + ring * 5, repeat: Infinity, ease: "linear" }}
              />
          ))}

          {/* Brain/Neural Architecture */}
          <div className="relative z-10 w-40 h-40">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Nodes */}
                  {[...Array(12)].map((_, i) => {
                      const angle = (i / 12) * Math.PI * 2;
                      const x = 50 + 35 * Math.cos(angle);
                      const y = 50 + 35 * Math.sin(angle);
                      return (
                          <React.Fragment key={i}>
                              <motion.circle 
                                cx={x} cy={y} r="3" 
                                fill="white"
                                animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                              />
                              <motion.path
                                d={`M 50 50 L ${x} ${y}`}
                                stroke="rgba(212,69,49,0.3)"
                                strokeWidth="0.5"
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 3 }}
                              />
                          </React.Fragment>
                      )
                  })}
                  <circle cx="50" cy="50" r="10" fill="var(--color-primary)" className="shadow-2xl" />
              </svg>
          </div>

          {/* AI Processing Text Stream */}
          <div className="absolute bottom-4 left-4 font-mono text-[8px] text-primary/40 leading-tight select-none">
              {['TOKENIZING_INPUT...', 'EMBEDDING_VECTOR...', 'TRANSFORMER_ACTIVE', 'INFERENCE_COMPLETE'].map((text, i) => (
                  <motion.div 
                    key={i}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  >
                      {text}
                  </motion.div>
              ))}
          </div>
      </div>
    </div>
  );
}
