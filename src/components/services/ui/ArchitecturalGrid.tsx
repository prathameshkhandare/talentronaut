"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ArchitecturalGrid() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px] group cursor-pointer">
      
      {/* Central "Cool" Element - A Digital Core */}
      <div className="relative z-10 w-full h-full flex items-center justify-center perspective-[1000px]">
          
          {/* Orbital Rings with Data Packets */}
          {[1, 2, 3].map((ring, i) => (
              <OrbitingRing key={ring} ringIndex={ring} />
          ))}

          {/* Transfer Beams (Data jumping between lines) */}
          <TransferSystem />

          {/* Central Cube Stack - Isometric "Building" */}
          <div className="relative transform-style-3d rotate-x-60 rotate-z-45">
              
              {/* Main Core Cube */}
              <motion.div 
                 className="relative w-32 h-32"
                 animate={{ translateZ: [0, 20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                  <div className="absolute inset-0 bg-coral/10 border border-coral/50 backdrop-blur-sm transform translate-z-16" />
                  <div className="absolute inset-0 bg-coral/10 border border-coral/50 backdrop-blur-sm transform rotate-y-90 translate-z-16" />
                  <div className="absolute inset-0 bg-coral/10 border border-coral/50 backdrop-blur-sm transform rotate-x-90 translate-z-16" />
                  
                  {/* Glowing Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-coral rounded-full blur-xl opacity-60 animate-pulse" />
                  </div>
              </motion.div>

              {/* Floating Data Shards */}
              {mounted && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 bg-white border border-gray-200 shadow-lg"
                    style={{
                        top: Math.random() * 200 - 50,
                        left: Math.random() * 200 - 50,
                    }}
                    animate={{ 
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                  />
              ))}
          </div>

          {/* Holographic Projection Base */}
          <div className="absolute bottom-[-100px] w-96 h-96 bg-gradient-to-t from-coral/10 to-transparent rounded-full blur-3xl transform rotate-x-60" />

      </div>

      {/* Foreground Overlay Text */}
      <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white shadow-lg">
          <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold font-mono text-charcoal">SYSTEM STATUS: OPTIMAL</span>
          </div>
      </div>
    </div>
  );
}

function OrbitingRing({ ringIndex }: { ringIndex: number }) {
    const size = 300 + ringIndex * 100;
    const duration = 20 + ringIndex * 5;

    return (
        <motion.div
            className="absolute border-2 border-coral/30 rounded-full flex items-center justify-center transform-style-3d shadow-[0_0_15px_rgba(232,92,74,0.2)]"
            style={{ 
                width: `${size}px`, 
                height: `${size}px`,
            }}
            animate={{ 
                rotateX: [60, 70, 60],
                rotateY: [0, 360],
                scale: [1, 1.05, 1]
            }}
            transition={{ 
                duration: duration, 
                repeat: Infinity, 
                ease: "linear" 
            }}
        >
            {/* The Dot Moving Along The Line */}
            {/* We rotate this container opposite to the parent ring rotation to keep the dot apparently 'moving' along the path nicely? 
                Actually, simpler: Just place the dot on the rim and let it ride the parent rotation, 
                BUT strictly animating it around the circle gives more control.
            */}
            <motion.div 
                className="absolute w-full h-full rounded-full animate-spin-slow"
                style={{ animationDuration: `${duration * 0.8}s` }} // Spin slightly faster than container for relative motion
            >
                 <motion.div 
                    className="absolute top-0 left-1/2 w-4 h-4 bg-coral rounded-full shadow-[0_0_20px_rgba(232,92,74,1)] z-20"
                    style={{ marginLeft: '-8px', marginTop: '-2px' }}
                >
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-50" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

function TransferSystem() {
    // Simulates a packet jumping between rings
    // Since rings are CSS transformed, a true 3D jump is hard. 
    // We'll use a 2D overlay that Looks like a jump or an inner orbital transfer.
    
    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center transform-style-3d">
            {/* Cross-Line Connector */}
             <motion.div 
                className="absolute w-[400px] h-[3px] bg-gradient-to-r from-transparent via-coral/60 to-transparent"
                style={{ rotateX: 60, rotateY: 45 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
             >
                 <motion.div 
                    className="absolute top-1/2 left-0 w-4 h-4 bg-coral rounded-full shadow-lg"
                    style={{ marginTop: '-6px' }}
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                 />
             </motion.div>

             <motion.div 
                className="absolute w-[3px] h-[400px] bg-gradient-to-b from-transparent via-coral/60 to-transparent"
                style={{ rotateX: 60, rotateY: -45 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
             >
                 <motion.div 
                    className="absolute left-1/2 top-0 w-4 h-4 bg-coral rounded-full shadow-lg"
                    style={{ marginLeft: '-6px' }}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                 />
             </motion.div>
        </div>
    )
}
