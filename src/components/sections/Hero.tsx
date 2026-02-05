"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring, Variants } from "framer-motion";
import { ArrowRight, Play, ChevronDown, Sparkles } from "lucide-react";
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
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#FCD2AD]/30 backdrop-blur-sm"
            >
                <Sparkles size={14} className="text-[#D44531]" />
                <span className="text-[11px] font-bold text-[#D44531] font-heading tracking-wide">Next-Gen Technology Solutions</span>
            </motion.div>

            <motion.h1
            variants={itemVariants}
            style={{ skewX }} // Applied skew effect
            className="text-4xl md:text-4xl lg:text-4xl font-heading font-black tracking-tight text-[#2D1810] leading-[1.1] mb-6 drop-shadow-sm select-none flex flex-wrap justify-center gap-x-3 gap-y-1" 
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
            className="text-xl md:text-xl text-[#5C4D45] max-w-2xl mx-auto leading-relaxed mb-8 font-medium"
            >
            Empowering industries with <span className="font-body font-bold text-[#D44531]">bespoke</span> IT solutions and cutting-edge product services to drive <span className="relative inline-block px-1 text-[#D44531] font-bold hover:skew-x-2 transition-transform">sustainable growth</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
                {/* Primary Button - Magnetic Expand Effect */}
                <Link href="/#contact" className="w-full sm:w-auto">
                    <motion.button 
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95, rotate: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="group relative px-8 py-4 rounded-full text-white font-semibold text-sm w-full sm:w-auto justify-center overflow-hidden"
                    >
                        {/* Background with radial expand */}
                        <div className="absolute inset-0 bg-[#D44531] rounded-full" />
                        <div className="absolute inset-0 bg-[#E65A45] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                        
                        {/* Sparkle particles on hover */}
                        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-100" />
                        
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Get Free Consultation
                            <motion.span 
                                className="inline-block"
                                whileHover={{ x: 5, rotate: -45 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ArrowRight size={16} />
                            </motion.span>
                        </span>
                    </motion.button>
                </Link>
                
                {/* Secondary Button - Slide Fill Effect */}
                <Link href="/#services" className="w-full sm:w-auto">
                    <motion.button 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="group relative px-8 py-4 rounded-full font-semibold text-sm w-full sm:w-auto overflow-hidden border-2 border-[#4A4A46]"
                    >
                        {/* Sliding background from left */}
                        <div className="absolute inset-0 bg-[#4A4A46] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                        
                        {/* Content */}
                        <span className="relative z-10 flex items-center justify-center gap-2 text-[#4A4A46] group-hover:text-white transition-colors duration-300">
                            <span>Explore Services</span>
                            <span className="group-hover:translate-x-2 group-hover:rotate-0 rotate-45 transition-all duration-300">
                                <ArrowRight size={16} />
                            </span>
                        </span>
                    </motion.button>
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
