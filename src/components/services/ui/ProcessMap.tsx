"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../shared/SectionHeading';

interface Step {
  title: string;
  description: string;
}

interface ProcessMapProps {
  steps: Step[];
  className?: string;
}

const ProcessNode = ({ step, index, total }: { step: Step, index: number, total: number }) => {
    return (
        <div className="relative grid grid-cols-[1fr_80px_1fr] md:grid-cols-[1fr_120px_1fr] gap-4 md:gap-12 w-full max-w-6xl mx-auto my-24 items-center">
            
            {/* Left Content (Odd Steps) */}
            <div className={cn("text-right", index % 2 === 0 ? "block" : "hidden md:block md:invisible")}>
                {index % 2 === 0 && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">{step.title}</h3>
                        <p className="text-base text-gray-600 leading-relaxed max-w-md ml-auto">
                            {step.description}
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Central Node & Path Visuals */}
            <div className="relative flex flex-col items-center justify-center h-full">
                {/* The Node Box */}
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-4 border-coral rounded-2xl md:rounded-[24px] z-20 flex items-center justify-center shadow-xl shadow-coral/20 relative">
                     <span className="text-2xl md:text-3xl font-bold text-coral">0{index + 1}</span>
                     
                     {/* Pulse Effect */}
                     <div className="absolute inset-0 border-4 border-coral rounded-2xl md:rounded-[24px] animate-ping opacity-20" />
                </div>
            </div>

            {/* Right Content (Even Steps) */}
            <div className={cn("text-left", index % 2 !== 0 ? "block" : "hidden md:block md:invisible")}>
                {(index % 2 !== 0 || true) && ( // On mobile, we might pile everything on right? No, lets stick to alternate for now but handle mobile stack.
                 // Actually for mobile, grid-cols will squash. Let's adjust grid above for mobile.
                 // Better Mobile Layout: Vertical stack, line on left.
                 // Current grid handles Desktop well. For mobile we need flex or different grid.
                 null
                )}
                 {index % 2 !== 0 && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">{step.title}</h3>
                        <p className="text-base text-gray-600 leading-relaxed max-w-md mr-auto">
                            {step.description}
                        </p>
                    </motion.div>
                )}
                 {/* Mobile View Content for ODD steps (since they were hidden in first col) */}
                 {index % 2 === 0 && (
                     <div className="block md:hidden">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">{step.title}</h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                     </div>
                 )}
            </div>
        </div>
    );
}

export function ProcessMap({ steps, className }: ProcessMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className={cn("py-24 bg-cream relative overflow-hidden", className)}>
        <div className="container mx-auto px-6 text-center mb-16">
            <SectionHeading className="mb-6 text-[36px] bg-clip-text text-transparent bg-gradient-to-r from-coral to-orange-500 pb-2">Our Engineering Process</SectionHeading>
             <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                A seamless journey from blueprint to deployment.
            </p>
        </div>

        <div className="relative container mx-auto px-4">
             {/* The Central Path Line (SVG) */}
             <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-[2px] h-full hidden md:block">
                 {/* Background Grey Path */}
                 <div className="absolute inset-0 bg-gray-200 w-full h-full" />
                 
                 {/* Animated Colored Path */}
                 <motion.div 
                    className="absolute top-0 bottom-0 w-full bg-coral origin-top"
                    style={{ scaleY: scrollYProgress }}
                 />
             </div>

              {/* Mobile Line (Left Aligned) */}
              <div className="absolute left-[40px] top-0 bottom-0 w-[2px] h-full block md:hidden">
                  <div className="absolute inset-0 bg-gray-200 w-full h-full" />
                   <motion.div 
                    className="absolute top-0 bottom-0 w-full bg-coral origin-top"
                    style={{ scaleY: scrollYProgress }}
                 />
              </div>


            {steps.map((step, index) => (
                <ProcessNode key={index} step={step} index={index} total={steps.length} />
            ))}
        </div>
    </section>
  );
}
