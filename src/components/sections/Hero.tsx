"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fafafa] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FCD2AD]/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D44531]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-[#4A4A46]/5 rounded-full blur-[80px]" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,74,70,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,74,70,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FCD2AD] shadow-sm w-fit">
              <span className="flex h-2 w-2 rounded-full bg-[#D44531] animate-ping" />
              <span className="text-sm font-semibold text-[#4A4A46] tracking-wide">
                Innovating the Future
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[#4A4A46] leading-[1.1] tracking-tight">
              Igniting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] to-[#E65A45]">
                Digital Transformations
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A4A46]/80 leading-relaxed max-w-lg">
              We engineer end-to-end solutions in AI, Web3, SaaS, and Automation for forward-thinking enterprises ready to scale.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-[#D44531] text-white font-bold text-lg hover:bg-[#c03e2b] hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 group"
              >
                Our Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white border border-[#4A4A46]/10 text-[#4A4A46] font-bold text-lg hover:border-[#D44531] hover:text-[#D44531] transition-all shadow-sm hover:shadow-md"
              >
                Let's Talk
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-[#4A4A46]/60">
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-[#D44531]" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-[#D44531]" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-[#D44531]" />
                <span>Secure & Scalable</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             className="relative h-[500px] w-full flex items-center justify-center lg:justify-end"
          >
             <div className="relative w-full max-w-lg aspect-square">
                {/* Main Glass Panel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D44531]/5 to-[#FCD2AD]/20 rounded-[40px] border border-white/50 backdrop-blur-sm transform rotate-3 scale-95" />
                
                <div className="absolute inset-4 bg-white/60 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Abstract Digital Globe or Rocket */}
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                       {/* Central Graphic */}
                       <div className="w-40 h-40 bg-gradient-to-br from-[#D44531] to-[#E65A45] rounded-3xl transform rotate-12 shadow-2xl shadow-[#D44531]/30 flex items-center justify-center z-10">
                          <Zap size={64} className="text-white drop-shadow-md" />
                       </div>
                       
                       {/* Floating Cards */}
                       <motion.div 
                          animate={{ y: [0, -15, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-12 left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
                       >
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">AI</div>
                             <div>
                                <div className="text-xs text-gray-400">Efficiency</div>
                                <div className="text-sm font-bold text-gray-800">+150%</div>
                             </div>
                          </div>
                       </motion.div>

                       <motion.div 
                          animate={{ y: [0, 15, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute bottom-12 right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
                       >
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                <Globe size={20} />
                             </div>
                             <div>
                                <div className="text-xs text-gray-400">Global Clients</div>
                                <div className="text-sm font-bold text-gray-800">Worldwide</div>
                             </div>
                          </div>
                       </motion.div>

                       {/* Background Circles */}
                       <div className="absolute w-[120%] h-[120%] border border-[#D44531]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                       <div className="absolute w-[80%] h-[80%] border border-[#FCD2AD]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
