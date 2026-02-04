"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring, Variants } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Link from "next/link";
import { SaffronCircuit } from "@/components/visuals/SaffronCircuit";
import { Magnetic } from "@/components/visuals/AnimationUtils";


export function Hero({ startAnimation = true }: { startAnimation?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  // Velocity Skew Effect (#4)
  const skewX = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);

  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  // Static Text
  const headlinePart1 = "Talentronaut - Igniting Digital";
  const headlinePart2 = "Transformations";

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };


  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white selection:bg-[#FCD2AD] selection:text-[#D44531]"
    >
      {/* Advanced Saffron Circuit Background */}
      <SaffronCircuit />

      {/* Bottom Section Blend Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fafafa] to-transparent z-20 pointer-events-none" />


      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-10"
      >
        <div className="relative">
             {/* Floating Glass Elements (#5) - Abstract 3D Shapes */}
             <motion.div 
                style={{ y: useTransform(scrollY, [0, 800], [0, -200]) }}
                animate={{ 
                    scale: [1, 1.2, 1], 
                    rotate: [0, 90, 0],
                    x: [0, 30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 left-[10%] w-32 h-32 bg-gradient-to-tr from-blue-200/40 to-purple-200/40 backdrop-blur-3xl rounded-full mix-blend-multiply filter blur-2xl opacity-80" 
             />
             <motion.div 
                style={{ y: useTransform(scrollY, [0, 800], [0, -150]) }}
                animate={{ 
                    scale: [1, 1.3, 1], 
                    rotate: [0, -60, 0],
                    x: [0, -40, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-[15%] w-48 h-48 bg-gradient-to-bl from-orange-200/50 to-yellow-200/30 backdrop-blur-3xl rounded-full mix-blend-multiply filter blur-3xl opacity-70" 
             />
             <motion.div 
                style={{ y: useTransform(scrollY, [0, 800], [0, -300]) }}
                animate={{ 
                    scale: [0.9, 1.1, 0.9], 
                    y: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-32 left-[20%] w-40 h-40 bg-gradient-to-br from-[#D44531]/20 to-transparent backdrop-blur-xl rounded-full mix-blend-overlay filter blur-2xl opacity-60" 
             />

             {/* Enhanced Glass Halo */}
             <motion.div 
                 animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.4, 0.3] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -inset-16 bg-gradient-to-r from-white/40 via-white/80 to-white/40 backdrop-blur-[3px] rounded-[60px] blur-3xl -z-10" 
             />
             
            {/* Hero Headline */}
            <motion.h1
            variants={itemVariants}
            style={{ skewX }} // Applied skew effect
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tight text-[#2D1810] leading-[1.1] mb-6 drop-shadow-sm select-none flex flex-wrap justify-center gap-x-3 gap-y-1" 
            >
                <span className="inline-block min-h-[1.1em]">
                    {headlinePart1}
                </span>
                
                {/* Forced break */}
                <div className="basis-full h-0"></div>

                {/* Second Line Part: Transformations */}
                <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                    className="relative inline-block group min-h-[1.1em]"
                >
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] via-[#FF8C69] to-[#D44531] bg-[length:200%_auto] animate-gradient-x font-heading font-black">
                    {headlinePart2}
                    </span>
                    {/* Advanced Shimmer Overlay */}
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent bg-[length:50%_100%] bg-no-repeat bg-[-100%_0] group-hover:animate-shine opacity-60 pointer-events-none mix-blend-overlay font-heading font-black">
                        {headlinePart2}
                    </span>
                </motion.span>
            </motion.h1>


            {/* Subtext */}
            <motion.p
            variants={itemVariants}
            style={{ skewX }}
            className="text-sm md:text-lg text-[#5C4D45] max-w-2xl mx-auto leading-relaxed mb-8 font-medium"
            >
            Empowering industries with <span className="font-body font-bold text-[#D44531]">bespoke</span> IT solutions and cutting-edge product services to drive <span className="relative inline-block px-1 text-[#D44531] font-bold hover:skew-x-2 transition-transform">sustainable growth</span>.
            </motion.p>

            {/* CTA Buttons with Magnetic Effect (#3) */}
            <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
                {/* Primary Button */}
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-full bg-[#D44531] text-white font-bold text-sm shadow-[0_15px_40px_rgba(212,69,49,0.25)] hover:shadow-[0_25px_60px_rgba(212,69,49,0.4)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center overflow-hidden active:scale-95 hover:bg-[#E6503A]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Start Now <Play size={14} className="fill-current" />
                    </span>
                    {/* Ripple Effect on Hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full group-hover:w-[400px] group-hover:h-[400px] transition-all duration-700 ease-out" />
                </motion.button>
                
                {/* Secondary Button */}
                <Link href="/#contact" className="w-full sm:w-auto">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 rounded-full bg-white/80 backdrop-blur-md border border-gray-100 text-gray-700 font-semibold text-sm hover:border-[#D44531] hover:text-[#D44531] hover:bg-white shadow-sm hover:shadow-xl transition-all flex items-center gap-2 w-full justify-center"
                    >
                        <span>Contact Us</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                </Link>
            </motion.div>
        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#D44531]/60"
      >
          <ChevronDown size={24} strokeWidth={2.5} />
      </motion.div>

    </section>
  );
}
