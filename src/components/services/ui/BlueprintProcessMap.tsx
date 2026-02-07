"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../shared/SectionHeading';
import { Check, Cpu, Code2, Rocket, Search, Settings, FileSearch, Compass, Layers, Terminal, ShieldCheck, Globe, Database } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface ProcessMapProps {
  steps: Step[];
  className?: string;
}

// Specific icons map to the 5 known steps:
// 1. Discovery -> FileSearch/Scan
// 2. Architecture -> Compass/Layers
// 3. Engineering -> Terminal/Database
// 4. QA -> ShieldCheck
// 5. Deployment -> Globe
const SPECIFIC_ICONS = [FileSearch, Compass, Terminal, ShieldCheck, Globe];

const ProcessNode = ({ step, index, total }: { step: Step, index: number, total: number }) => {
    // Fallback to cyclical if more steps added
    const Icon = SPECIFIC_ICONS[index] || SPECIFIC_ICONS[index % SPECIFIC_ICONS.length];
    const isEven = index % 2 === 0;

    return (
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-0 md:gap-8 w-full max-w-6xl mx-auto my-12 md:my-24 items-center group">
            
            {/* Left Side (Desktop: Text for Even, Empty for Odd) */}
            <div className={cn("hidden md:block text-right pr-8", !isEven && "invisible")}>
                <StepCard step={step} index={index} align="right" />
            </div>

            {/* Central Schematic Axis */}
            <div className="relative flex flex-col items-center justify-center h-full z-20">
                {/* Connector Line (Horizontal) - Desktop Only */}
                <div className={cn(
                    "absolute top-1/2 w-[40px] h-[2px] bg-coral/30 hidden md:block",
                    isEven ? "right-1/2 mr-[20px]" : "left-1/2 ml-[20px]"
                )} />

                {/* The Node */}
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-coral border border-coral flex items-center justify-center shadow-[0_0_30px_-5px_rgba(212,69,49,0.5)] group-hover:scale-110 transition-transform duration-500"
                >
                    <Icon size={24} className="text-white" />
                    
                    {/* Corner Accents - Changed to White for contrast against Coral */}
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/40" />
                    <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/40" />
                    
                    {/* Active Halo */}
                    <div className="absolute inset-0 bg-coral rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </motion.div>

                {/* Vertical Connector Coverage (hides the main line behind the node) */}
                <div className="absolute inset-y-0 w-[4px] bg-[#fafafa] -z-10" />
            </div>

            {/* Right Side (Desktop: Text for Odd, Empty for Even) */}
            <div className={cn("hidden md:block text-left pl-8", isEven && "invisible")}>
                <StepCard step={step} index={index} align="left" />
            </div>

            {/* Mobile View: Stacked Card below Node */}
            <div className="block md:hidden mt-6 px-4">
                 <StepCard step={step} index={index} align="center" />
            </div>

        </div>
    );
}

const StepCard = ({ step, index, align }: { step: Step, index: number, align: "left" | "right" | "center" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
                "relative bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden group/card hover:border-coral/20 transition-colors duration-500",
                align === "right" ? "ml-auto" : "mr-auto",
                "max-w-md"
            )}
        >
            {/* Tech Decoration: Top Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            
            {/* Number Watermark */}
            <div className="absolute -right-4 -top-4 text-[80px] font-black text-gray-50 opacity-[0.05] font-heading select-none pointer-events-none group-hover/card:text-coral/5 transition-colors duration-500">
                0{index + 1}
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                     <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-coral/80 bg-coral/5 px-2 py-1 rounded">
                        Step 0{index + 1}
                     </span>
                     <div className="h-px bg-gray-100 flex-grow" />
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-charcoal mb-3 group-hover/card:text-coral transition-colors duration-300">
                    {step.title}
                </h3>
                
                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                    {step.description}
                </p>
            </div>
            
            {/* Technical Corner Markers */}
            <div className="absolute bottom-4 right-4 text-[8px] text-gray-300 font-mono opacity-0 group-hover/card:opacity-100 transition-opacity">
                SYS.MOD.{index + 1}
            </div>
        </motion.div>
    )
}

export function BlueprintProcessMap({ steps, className }: ProcessMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className={cn("py-32 bg-[#fafafa] relative overflow-hidden", className)}>
        
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 text-center mb-24 relative z-10">
             <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-coral/20 bg-coral/5 backdrop-blur-sm">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral">Production Pipeline</span>
             </div>
            <SectionHeading className="mb-6 text-[36px] font-black text-charcoal tracking-tight">
                Our Engineering <span className="text-coral">Blueprint</span>
            </SectionHeading>
             <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                From architectural conception to scalable deployment, we follow a rigorous, precision-engineered methodology.
            </p>
        </div>

        <div className="relative container mx-auto px-4">
             {/* The Main "Power" Line */}
             <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-[2px] h-full transform md:-translate-x-1/2">
                 {/* Passive Track */}
                 <div className="absolute inset-0 bg-gray-200 w-full h-full rounded-full" />
                 
                 {/* Active Flow */}
                 <motion.div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-coral via-orange-500 to-coral origin-top rounded-full shadow-[0_0_15px_rgba(212,69,49,0.4)]"
                    style={{ height: "100%", scaleY }}
                 />
                 
                 {/* Moving Signal Head */}
                 <motion.div 
                     className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] h-[40px] bg-white rounded-full blur-[4px]"
                     style={{ top: useTransform(scaleY, [0, 1], ["0%", "100%"]) }}
                 />
             </div>

            {steps.map((step, index) => (
                <ProcessNode key={index} step={step} index={index} total={steps.length} />
            ))}
            
            {/* End Node */}
             <div className="relative flex justify-center mt-12 md:mt-24">
                 <div className="w-4 h-4 rounded-full bg-coral border-4 border-white shadow-lg relative z-20 animate-pulse">
                    <div className="absolute inset-0 rounded-full bg-coral animate-ping opacity-20" />
                 </div>
             </div>
        </div>
    </section>
  );
}
