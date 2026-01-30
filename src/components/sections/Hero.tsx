"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { RocketVector } from "@/components/vector/RocketVector";
import { CloudA, CloudB } from "@/components/vector/CloudVector";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax Logic matching GrowthFlow physics
  const rocketY = useTransform(scrollY, [0, 500], [0, -600]); // Fast upward launch
  const cloudY = useTransform(scrollY, [0, 500], [0, 100]);   // Slow downward drift (parallax)
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade text out on scroll
  const textScale = useTransform(scrollY, [0, 300], [1, 0.9]); // Slight shrink

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[140vh] flex flex-col items-center pt-24 overflow-hidden bg-white"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-gradient-to-b from-pink-50/30 to-transparent rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-orange-50/20 rounded-full blur-[100px]" />
      </div>

      {/* Main Content - Centered */}
      <motion.div 
        style={{ opacity: textOpacity, scale: textScale }}
        className="container mx-auto px-4 relative z-30 text-center flex flex-col items-center gap-8 mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           <span className="text-xs font-bold text-gray-500 tracking-wide uppercase">Now in Public Beta</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9] max-w-5xl">
          Unlock Your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]">
             Growth Hacking
          </span> <br/>
          Expertise!
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed">
          The ultimate platform for startups ready to scale. No fluff, just hard-hitting strategies and tech transformation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
           <button className="px-8 py-4 rounded-full bg-[#1A1A1A] text-white font-bold text-lg hover:bg-black hover:scale-105 transition-all shadow-xl shadow-black/10 flex items-center gap-3">
             <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <Play size={10} fill="currentColor" />
             </div>
             Watch Demo
           </button>
           <Link href="/contact" className="px-8 py-4 rounded-full bg-white border border-gray-200 text-[#4A4A46] font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-3 shadow-sm">
             Get Started <ArrowRight size={18} />
           </Link>
        </div>
      </motion.div>

      {/* Hero Visuals - The Launchpad */}
      <div className="absolute inset-x-0 bottom-0 h-[800px] flex justify-center items-end pointer-events-none overflow-hidden">
         
         {/* The "Sun" Background */}
         <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-200 rounded-full blur-[150px] opacity-40" />

         {/* The Rocket - Launches UP on scroll */}
         <motion.div 
            style={{ y: rocketY }} 
            className="absolute bottom-[20%] z-20 w-[140px] md:w-[180px]"
         >
            <div className="relative">
               {/* Rocket Glow */}
               <div className="absolute inset-0 bg-pink-400 blur-3xl opacity-30 rounded-full transform scale-150" />
               <RocketVector className="w-full h-auto drop-shadow-2xl relative z-10" />
            </div>
         </motion.div>
         
         {/* Mist Layer (Back) - Slightly Pink */}
         <motion.div 
            style={{ y: cloudY }}
            className="absolute bottom-0 w-full flex justify-center z-10 opacity-60 mix-blend-multiply"
         >
             <CloudB className="w-full h-[400px] text-pink-100 blur-3xl scale-150" />
         </motion.div>

         {/* Clouds Layer (Front/Sharp) - Pinkish White */}
         <div className="absolute bottom-[-50px] w-full z-30 opacity-90">
             <div className="flex justify-center items-end w-full relative">
                 <CloudA className="absolute bottom-0 left-[-10%] w-[60%] text-pink-50 blur-lg opacity-80" />
                 <CloudB className="absolute bottom-[-20%] right-[-10%] w-[70%] text-pink-100 blur-md opacity-90" />
                 
                 {/* Center Mist to hide rocket bottom - Matches bg-white */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-t from-white to-transparent blur-xl" />
             </div>
         </div>
      </div>

    </section>
  );
}
