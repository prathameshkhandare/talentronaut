"use client";

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';

export function EnterpriseCommandCenter() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-white/40 backdrop-blur-md rounded-[48px] border-2 border-white/50 shadow-[0_40px_100px_rgba(0,0,0,0.03)] group cursor-pointer transition-all duration-700 hover:shadow-[0_60px_120px_rgba(212,69,49,0.08)]">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.2]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-primary) 0.5px, transparent 0)', backgroundSize: '40px 40px' }} 
      />
      
      {/* The Core Image Visual */}
      <div className="relative w-full h-full p-4">
        <div className="relative w-full h-full rounded-[38px] overflow-hidden group-hover:scale-[1.02] transition-transform duration-1000 ease-out shadow-2xl">
            <Image 
                src="/images/enterprise/command-center.png" 
                alt="Enterprise Command Hub" 
                fill 
                className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            
            {/* Scanning Line Animation */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent z-20 shadow-[0_0_15px_rgba(212,69,49,0.5)]"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
        </div>
      </div>

      {/* Interactive HUD Overlays */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Top Indicators */}
          <div className="absolute top-10 left-10 right-10 flex justify-between items-start z-30">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="px-4 py-2 bg-white/60 backdrop-blur-xl border border-white rounded-2xl shadow-xl"
              >
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1 leading-none">Status</div>
                  <div className="text-sm font-heading font-bold text-primary flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      SYSTEMS_READY
                  </div>
              </motion.div>

              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="px-4 py-2 bg-charcoal/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-white"
              >
                  <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1 leading-none">Security</div>
                  <div className="text-sm font-heading font-bold text-white">AES-256 ACTIVE</div>
              </motion.div>
          </div>

          {/* Bottom Telemetry */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-30">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="p-5 bg-white/40 backdrop-blur-2xl border border-white rounded-[32px] shadow-2xl w-48"
              >
                  <div className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Global Sync</div>
                  <div className="text-3xl font-mono font-bold text-charcoal flex items-baseline gap-1">
                      99.9<span className="text-xs text-primary">%</span>
                  </div>
                  <div className="mt-4 flex gap-1 items-end h-6 overflow-hidden">
                      {[...Array(10)].map((_, i) => (
                          <motion.div 
                            key={i}
                            className="flex-1 bg-primary/30 rounded-full" 
                            animate={{ height: [4, 16, 10, 8, 14] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                          />
                      ))}
                  </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-right flex flex-col items-end gap-2"
              >
                  <div className="px-4 py-2 bg-primary/90 backdrop-blur-md rounded-2xl shadow-xl text-white">
                      <span className="text-[10px] font-mono font-bold tracking-widest">OPS_TERMINAL_V.4</span>
                  </div>
                  <div className="text-[10px] font-mono text-charcoal/40 bg-white/60 px-3 py-1 rounded-full border border-white">
                      TIMESTAMP: 0xFD42
                  </div>
              </motion.div>
          </div>
      </div>
      
      {/* Center Reticle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <motion.div 
            className="w-[300px] h-[300px] border border-primary/10 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
              <div className="w-[100px] h-[100px] border border-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-primary rounded-full" />
              </div>
          </motion.div>
      </div>
    </div>
  );
}
