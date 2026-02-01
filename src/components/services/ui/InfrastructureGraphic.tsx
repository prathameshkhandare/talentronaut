"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function InfrastructureGraphic({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto my-16 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm", className)}>
        <h3 className="text-xl font-heading font-bold text-center mb-12 text-charcoal">Resilient Infrastructure Architecture</h3>
      <div className="relative h-[300px] flex items-center justify-between px-8 md:px-16">
        
        {/* Node 1: Complex Systems */}
        <div className="flex flex-col items-center z-10">
          <div className="w-20 h-20 rounded-2xl bg-cream border-2 border-gray-200 flex items-center justify-center mb-4">
             <div className="grid grid-cols-2 gap-1 w-8 h-8 opacity-40">
                 <div className="bg-charcoal rounded-sm" />
                 <div className="bg-charcoal rounded-sm" />
                 <div className="bg-charcoal rounded-sm" />
                 <div className="bg-charcoal rounded-sm" />
             </div>
          </div>
          <span className="text-sm font-semibold text-gray-500">Complex Systems</span>
        </div>

        {/* Connection Line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-8 flex items-center px-28 md:px-36">
            <svg width="100%" height="20" className="overflow-visible">
                <motion.line 
                    x1="0" y1="10" x2="100%" y2="10" 
                    stroke="#E85C4A" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -20 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </svg>
             {/* Central Processing Node */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-coral rounded-full flex items-center justify-center shadow-lg z-20">
                 <div className="w-3 h-3 bg-coral rounded-full" />
             </div>
        </div>

        {/* Node 2: Smooth Operations */}
        <div className="flex flex-col items-center z-10">
          <div className="w-20 h-20 rounded-full bg-cream border-2 border-coral/30 flex items-center justify-center mb-4 shadow-inner">
              <motion.div 
                 className="w-10 h-10 border-2 border-coral rounded-full"
                 animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 3, repeat: Infinity }}
              />
          </div>
          <span className="text-sm font-semibold text-gray-500">Smooth Operations</span>
        </div>

      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
          Data flows securely and seamlessly through optimized pipelines.
      </div>
    </div>
  );
}
