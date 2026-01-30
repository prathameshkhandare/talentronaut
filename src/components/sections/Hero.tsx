"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Link from "next/link";
import { SaffronCircuit } from "@/components/visuals/SaffronCircuit";


export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white selection:bg-[#FCD2AD] selection:text-[#D44531]"
    >
      {/* Advanced Saffron Circuit Background */}
      <SaffronCircuit />

      {/* Main Content Container */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-10"
      >


        {/* Center Content with Glass Backing */}
        <div className="relative">
             {/* Enhanced Glass Halo */}
             <motion.div 
                 animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.4, 0.3] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -inset-16 bg-gradient-to-r from-white/40 via-white/80 to-white/40 backdrop-blur-[3px] rounded-[60px] blur-3xl -z-10" 
             />
             
            {/* Badge */}
            <Link href="/beta">
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
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

            {/* Hero Headline */}
            <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight text-[#2D1810] leading-[0.95] mb-8 drop-shadow-sm select-none" 
            >
            Igniting <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-0 group cursor-default">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] via-[#FF8C69] to-[#D44531] bg-[length:200%_auto] animate-gradient-x">
                Digital Transformations
                </span>
                {/* Advanced Shimmer Overlay */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent bg-[length:50%_100%] bg-no-repeat bg-[-100%_0] group-hover:animate-shine opacity-60 pointer-events-none mix-blend-overlay">
                    Digital Transformations
                </span>
            </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-[#5C4D45] max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
            >
            Empowering industries with bespoke IT solutions and cutting-edge product services to drive <span className="relative inline-block px-1 text-[#D44531] font-bold hover:skew-x-2 transition-transform cursor-crosshair">sustainable growth</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
            >
                {/* Primary Button */}
                <button className="group relative px-10 py-5 rounded-full bg-[#D44531] text-white font-bold text-lg shadow-[0_15px_40px_rgba(212,69,49,0.25)] hover:shadow-[0_25px_60px_rgba(212,69,49,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden active:scale-95 hover:bg-[#E6503A]">
                    <span className="relative z-10 flex items-center gap-2">
                        Start Now <Play size={18} className="fill-current" />
                    </span>
                    {/* Ripple Effect on Hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full group-hover:w-[400px] group-hover:h-[400px] transition-all duration-700 ease-out" />
                </button>
                
                {/* Secondary Button */}
                <Link href="/#contact" className="group px-10 py-5 rounded-full bg-white/80 backdrop-blur-md border-2 border-gray-100 text-gray-700 font-semibold text-lg hover:border-[#D44531] hover:text-[#D44531] hover:bg-white shadow-sm hover:shadow-xl transition-all flex items-center gap-3 w-full sm:w-auto justify-center">
                    <span>Contact Us</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
