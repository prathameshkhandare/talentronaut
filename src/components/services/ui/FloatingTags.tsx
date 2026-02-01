"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../shared/SectionHeading';

const TAGS = [
  "Frontend Developer", "Product Manager", "UX Designer", "DevOps Engineer",
  "Data Scientist", "Mobile Developer", "Solution Architect", "CTO",
  "Full Stack Engineer", "QA Automation", "Technical Lead", "Security Analyst"
];

// Randomize positions slightly
const getRandomPos = () => ({
  x: Math.random() * 20 - 10,
  y: Math.random() * 20 - 10,
});

export function FloatingTags({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 overflow-hidden relative", className)}>
       <div className="container mx-auto px-6 text-center mb-16">
          <SectionHeading>Roles We Fill</SectionHeading>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We connect you with top-tier talent across the entire tech spectrum.</p>
       </div>

      <div className="relative h-[400px] w-full max-w-6xl mx-auto flex flex-wrap justify-center content-center gap-6 p-4">
         {TAGS.map((tag, index) => (
           <FloatingTag key={index} text={tag} delay={index * 0.2} />
         ))}
      </div>
    </section>
  );
}

function FloatingTag({ text, delay }: { text: string; delay: number }) {
    return (
        <motion.div
            className="px-6 py-3 bg-white rounded-full text-coral font-medium shadow-sm border border-coral/10 hover:shadow-md hover:scale-105 transition-shadow cursor-default"
            animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {text}
        </motion.div>
    )
}
