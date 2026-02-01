"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../shared/SectionHeading';

interface Step {
  title: string;
  description: string;
}

interface StickyScrollProps {
  steps: Step[];
  className?: string;
}

const Card = ({ step, index, total }: { step: Step, index: number, total: number }) => {
    return (
        <div 
            className="sticky top-0 h-screen flex items-center justify-center p-4 md:p-6 overflow-hidden w-full"
            style={{ zIndex: index + 10 }}
        >
            <motion.div 
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-5xl bg-white rounded-[40px] p-10 md:p-20 border border-gray-100 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] flex flex-col justify-center"
            >
                {/* Visual Number */}
                <div className="absolute -right-8 -bottom-16 text-[200px] md:text-[250px] font-black text-gray-50 select-none pointer-events-none font-heading leading-none z-0">
                    0{index + 1}
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center md:items-start relative z-10">
                    {/* Circle Number */}
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-[32px] bg-coral text-white flex items-center justify-center text-3xl md:text-4xl font-bold shadow-2xl shadow-coral/30 border-4 border-white transform -rotate-3">
                            {index + 1}
                        </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left pt-2">
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-6 md:mb-8">{step.title}</h3>
                        <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-light">
                            {step.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export function StickyScroll({ steps, className }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className={cn("relative bg-cream", className)}>
       <div className="container mx-auto px-6 py-24 text-center">
            <SectionHeading className="mb-8 text-5xl md:text-6xl">Our Engineering Process</SectionHeading>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
                A rigorous, architectural approach to building high-performance digital ecosystems.
            </p>
       </div>

       {/* The Stacking Container */}
       {/* 
           We use a simplified stacking model:
           Each card is sticky top-0 and h-screen.
           They naturally stack on top of each other as the user scrolls.
       */}
       <div className="relative pb-24">
            {steps.map((step, index) => (
                <Card 
                    key={index} 
                    step={step} 
                    index={index} 
                    total={steps.length}
                />
            ))}
       </div>
    </section>
  );
}
