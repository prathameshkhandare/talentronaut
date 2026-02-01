"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function AiMailerVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-white">
      {/* Stream of Information */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 opacity-[0.05] [background-image:linear-gradient(transparent,rgba(212,69,49,1),transparent)] [background-size:100%_2px] [background-repeat:no-repeat]" />
      
      <div className="relative w-full max-w-lg flex items-center justify-center">
          {/* The Filter Core */}
          <div className="relative z-20 w-32 h-32 bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center">
              <motion.div 
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center"
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                  <div className="w-8 h-8 border-2 border-primary rounded" />
              </motion.div>
          </div>

          {/* Flying Envelopes/Messages */}
          {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute p-3 bg-white rounded-xl shadow-lg border border-gray-50 flex flex-col gap-2 z-10"
                style={{ width: '80px' }}
                initial={{ x: -400, opacity: 0, scale: 0.5 }}
                animate={{ 
                    x: [-400, 0, 400],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1, 1, 0.5],
                    y: (Math.random() * 200 - 100)
                }}
                transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeInOut"
                }}
              >
                  <div className="h-1 w-full bg-gray-100 rounded-full" />
                  <div className="h-1 w-2/3 bg-primary/20 rounded-full" />
              </motion.div>
          ))}

          {/* Inbox Prioritization Bars */}
          <div className="absolute right-10 top-10 flex flex-col gap-2">
              {[60, 40, 80, 50].map((width, i) => (
                  <motion.div 
                    key={i}
                    className="h-2 bg-primary/10 rounded-full overflow-hidden"
                    style={{ width: '60px' }}
                  >
                      <motion.div 
                        className="h-full bg-primary/40"
                        animate={{ width: [`0%`, `${width}%`] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
                      />
                  </motion.div>
              ))}
          </div>
      </div>
    </div>
  );
}
