'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F9F9F9] px-4 pt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FCD2AD]/20 border border-[#FCD2AD] text-[#D44531] w-fit">
            <span className="animate-bounce">🚀</span>
            <span className="text-sm font-semibold tracking-wide">Launch Your Career with Talentronaut</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
            Drive Your Career Forward with{' '}
            <span className="text-[#D44531] relative">
                Top Talent Expertise!
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FCD2AD] -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
            </span>
          </h1>

          <p className="text-lg text-[#666666] leading-relaxed max-w-lg">
            Connect with industry-leading experts and unlock unprecedented growth 
            opportunities. Join thousands of professionals who have transformed their 
            careers with our innovative talent solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#services" className="px-8 py-4 rounded-full bg-[#D44531] text-white font-bold text-lg hover:bg-[#b03a29] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
              Start Your Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#experts" className="px-8 py-4 rounded-full bg-white border-2 border-[#80807D]/20 text-[#80807D] font-bold text-lg hover:border-[#D44531] hover:text-[#D44531] transition-all">
              Explore Opportunities
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-200">
            <div>
              <span className="block text-3xl font-bold text-[#1A1A1A]">40+</span>
              <span className="text-sm text-[#80807D]">Expert Mentors</span>
            </div>
            <div className="h-10 w-[1px] bg-gray-300"></div>
            <div>
              <span className="block text-3xl font-bold text-[#1A1A1A]">1000+</span>
              <span className="text-sm text-[#80807D]">Success Stories</span>
            </div>
            <div className="h-10 w-[1px] bg-gray-300"></div>
            <div>
              <span className="block text-3xl font-bold text-[#1A1A1A]">89%</span>
              <span className="text-sm text-[#80807D]">Success Rate</span>
            </div>
          </div>
        </motion.div>

        {/* Right Illustration - Abstract Representation */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
        >
            <div className="relative w-full h-full max-w-md mx-auto">
                {/* Background Blobs - Using Theme Colors */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#FCD2AD]/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#D44531]/10 rounded-full blur-3xl" />
                
                {/* Rocket / Abstract Shape */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    <svg viewBox="0 0 400 500" className="w-full h-auto drop-shadow-2xl">
                        {/* Rocket Body - #D44531 & #FCD2AD */}
                        <path d="M200 50 C 200 50, 300 200, 300 350 L 250 400 L 200 350 L 150 400 L 100 350 C 100 200, 200 50, 200 50" fill="white" stroke="#D44531" strokeWidth="8"/>
                        <circle cx="200" cy="200" r="40" fill="#FCD2AD" opacity="0.5"/>
                        <circle cx="200" cy="200" r="25" fill="#D44531"/>
                        
                        {/* Fins */}
                        <path d="M100 300 L 50 380 L 100 350" fill="#80807D"/>
                        <path d="M300 300 L 350 380 L 300 350" fill="#80807D"/>
                        
                        {/* Flame */}
                        <path d="M180 380 Q 200 480 220 380" fill="#D44531" className="animate-pulse"/>
                    </svg>
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, 30, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 right-0 bg-white p-4 rounded-2xl shadow-xl border border-[#FCD2AD]"
                >
                    <span className="text-2xl">🎓</span>
                </motion.div>
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-32 left-0 bg-white p-4 rounded-2xl shadow-xl border border-[#D44531]/20"
                >
                    <span className="text-2xl">💼</span>
                </motion.div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
