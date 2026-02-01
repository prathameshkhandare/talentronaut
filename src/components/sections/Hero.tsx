"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Link from "next/link";
import { SaffronCircuit } from "@/components/visuals/SaffronCircuit";


interface ReactiveDotProps {
  mouseX: any;
  mouseY: any;
  i: number;
  j: number;
}

function ReactiveDot({ mouseX, mouseY, i, j }: ReactiveDotProps) {
    const x = useTransform(mouseX, (val: number) => (val * 0.03) * (i/10));
    const y = useTransform(mouseY, (val: number) => (val * 0.03) * (j/10));
    
    return (
        <motion.div
            style={{ x, y }}
            className="w-1 h-1 rounded-full bg-[#D44531] opacity-40"
        />
    );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Mouse Glow & Velocity Tracking
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const velocityX = useVelocity(rawMouseX);
  const velocityY = useVelocity(rawMouseY);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      rawMouseX.set(moveX);
      rawMouseY.set(moveY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  const glowX = useSpring(rawMouseX, { stiffness: 80, damping: 25 });
  const glowY = useSpring(rawMouseY, { stiffness: 80, damping: 25 });

  // Cursor Morphing based on Velocity
  const cursorScaleX = useTransform(velocityX, [-3000, 0, 3000], [1.5, 1, 1.5]);
  const cursorScaleY = useTransform(velocityY, [-3000, 0, 3000], [1.5, 1, 1.5]);
  const cursorSkewX = useTransform(velocityX, [-3000, 3000], [-10, 10]);

  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white selection:bg-[#FCD2AD] selection:text-[#D44531]"
    >
      {/* Advanced Saffron Circuit Background */}
      <SaffronCircuit />

      {/* Interactive Dot Grid (Warping Effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 overflow-hidden flex flex-col justify-around">
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex justify-around w-full">
                    {Array.from({ length: 15 }).map((_, j) => (
                        <ReactiveDot key={j} mouseX={glowX} mouseY={glowY} i={i} j={j} />
                    ))}
                </div>
            ))}
          </div>
      </div>

      {/* Mouse Follower Glow (Atmospheric) */}
      <motion.div 
        style={{ x: glowX, y: glowY }}
        className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(212,69,49,0.08)_0%,transparent_70%)] rounded-full pointer-events-none z-0"
      />

      {/* Morphing Intelligence Lens (God-Tier Interactive) */}
      <motion.div
        style={{ 
            x: glowX, 
            y: glowY,
            scaleX: cursorScaleX,
            scaleY: cursorScaleY,
            skewX: cursorSkewX
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-50 pointer-events-none flex items-center justify-center"
      >
          {/* Outer Ring 1 - Dashed */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-[#D44531]/20 rounded-full"
          />
          {/* Outer Ring 2 - Solid with Notch */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border border-[#D44531]/40 rounded-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-2 before:bg-[#D44531]"
          />
          {/* Main Glass Lens */}
          <div className="absolute inset-4 border-2 border-[#D44531]/10 rounded-full backdrop-blur-[3px] bg-white/5 shadow-[inset_0_0_20px_rgba(212,69,49,0.05)] border-gradient-to-br from-[#D44531]/20 to-transparent" />
          
          {/* Core Hub */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-2 h-2 bg-[#D44531] rounded-full shadow-[0_0_15px_#D44531]"
          />
      </motion.div>

      {/* Bottom Section Blend Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fafafa] to-transparent z-20 pointer-events-none" />

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-10"
      >
        <div className="relative">
             {/* Enhanced Glass Halo */}
             <motion.div 
                 animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.4, 0.3] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -inset-16 bg-gradient-to-r from-white/40 via-white/80 to-white/40 backdrop-blur-[3px] rounded-[60px] blur-3xl -z-10" 
             />
             
            {/* Badge */}
            <motion.div variants={itemVariants}>
                <Link href="/beta">
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#D44531]/20 bg-white/95 backdrop-blur-xl mb-10 cursor-pointer shadow-[0_4px_20px_rgba(212,69,49,0.1)] hover:shadow-[0_8px_30px_rgba(212,69,49,0.2)] hover:border-[#D44531] transition-all"
                    >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D44531] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D44531]"></span>
                    </span>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#D44531] uppercase">Talentronaut</span>
                    <ChevronDown size={14} className="text-[#D44531] -rotate-90" />
                    </motion.div>
                </Link>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[4.5rem] font-heading font-black tracking-tight text-[#2D1810] leading-[1.2] mb-12 drop-shadow-sm select-none" 
            >
            <span className="inline-flex overflow-hidden">
                {"Igniting".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            hidden: { y: "100%", opacity: 0 },
                            visible: { 
                                y: 0, 
                                opacity: 1,
                                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 + (i * 0.05) }
                            }
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </span> <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-0 group cursor-default">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] via-[#FF8C69] to-[#D44531] bg-[length:200%_auto] animate-gradient-x font-heading font-black">
                Digital Transformations
                </span>
                {/* Advanced Shimmer Overlay */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent bg-[length:50%_100%] bg-no-repeat bg-[-100%_0] group-hover:animate-shine opacity-60 pointer-events-none mix-blend-overlay font-heading font-black">
                    Digital Transformations
                </span>
            </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-[#5C4D45] max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
            >
            Empowering industries with <span className="font-body font-bold text-[#D44531]">bespoke</span> IT solutions and cutting-edge product services to drive <span className="relative inline-block px-1 text-[#D44531] font-bold hover:skew-x-2 transition-transform cursor-crosshair">sustainable growth</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
            >
                {/* Primary Button */}
                <motion.button 
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-5 rounded-full bg-[#D44531] text-white font-bold text-lg shadow-[0_15px_40px_rgba(212,69,49,0.25)] hover:shadow-[0_25px_60px_rgba(212,69,49,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden active:scale-95 hover:bg-[#E6503A]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Start Now <Play size={18} className="fill-current" />
                    </span>
                    {/* Ripple Effect on Hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full group-hover:w-[400px] group-hover:h-[400px] transition-all duration-700 ease-out" />
                </motion.button>
                
                {/* Secondary Button */}
                <Link href="/#contact" className="w-full sm:w-auto">
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-10 py-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-gray-100 text-gray-700 font-semibold text-lg hover:border-[#D44531] hover:text-[#D44531] hover:bg-white shadow-sm hover:shadow-xl transition-all flex items-center gap-3 w-full justify-center"
                    >
                        <span>Contact Us</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
          <ChevronDown size={32} strokeWidth={2.5} />
      </motion.div>

    </section>
  );
}
