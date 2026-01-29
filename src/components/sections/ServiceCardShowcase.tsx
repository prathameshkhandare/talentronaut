"use client"
import { motion } from "framer-motion"
import { Monitor, Smartphone, Cpu, Box, Cloud, ArrowRight, ExternalLink } from "lucide-react"
import { HandArrowRight, HandStar, HandCircle, HandUnderline } from "@/components/ui/HandDrawn"

// Sample Service Data
const service = {
  title: "Technical Solutions",
  description: "End-to-end technical implementation for your immediate needs.",
  icon: Monitor,
  tags: ["Development", "Implementation"],
  color: "from-[#00F0FF] to-[#0066FF]",
  hex: "#00F0FF",
  handElement: <HandStar className="w-8 h-8 text-white opacity-80" />
}

// --------------------------------------------------------------------------------
// VARIANT A: NEON HOLOGRAM (Current V6 Refined)
// --------------------------------------------------------------------------------
const CardVariantA = () => (
  <div className="group relative h-[450px] w-full max-w-[360px] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
     {/* Background */}
     <div className={`absolute inset-0 bg-black`}>
          <div className={`absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br ${service.color} opacity-60 blur-[100px] animate-[spin_10s_linear_infinite]`} />
          <div className="absolute inset-0 opacity-[0.3] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay" />
     </div>
     {/* Glass */}
     <div className="absolute inset-[4px] rounded-[2.3rem] bg-black/40 backdrop-blur-xl border border-white/20 flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
            <div className={`w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_15px_${service.hex}]`}>
                <service.icon size={28} className="text-white drop-shadow-md" />
            </div>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
                Option A
            </span>
        </div>
        <div>
            <h3 className="text-3xl font-extrabold text-white mb-2 leading-none">Technical <br/> Solutions</h3>
            <div className={`h-1 w-12 bg-gradient-to-r ${service.color} mb-4`} />
            <p className="text-sm font-medium text-gray-300">End-to-end technical implementation for immediate needs.</p>
        </div>
        <div className="flex gap-2 border-t border-white/20 pt-4">
             {service.tags.map((tag,i) => <span key={i} className="text-[10px] bg-white/10 px-2 py-1 rounded text-white">{tag}</span>)}
        </div>
     </div>
  </div>
)

// --------------------------------------------------------------------------------
// VARIANT B: SWISS LUXE (Minimal, Clean)
// --------------------------------------------------------------------------------
const CardVariantB = () => (
  <div className="group relative h-[450px] w-full max-w-[360px] bg-white rounded-[1rem] border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl">
     <div className="absolute top-0 right-0 p-8 opacity-10">
         <service.icon size={200} className="text-black" />
     </div>
     <div className="absolute inset-0 flex flex-col justify-between p-10">
         <div className="flex justify-between items-center border-b border-black pb-4">
            <span className="text-xs font-serif italic text-gray-500">01. Service</span>
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color}`} />
         </div>
         
         <div className="mt-8">
            <h3 className="text-5xl font-serif text-black leading-[0.9] mb-6">Technical<br/><span className="italic text-gray-400">Solutions</span></h3>
            <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-[200px]">End-to-end technical implementation for your immediate needs.</p>
         </div>

         <button className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest mt-8 group-hover:gap-6 transition-all">
             Explore <ArrowRight size={16} />
         </button>
     </div>
  </div>
)

// --------------------------------------------------------------------------------
// VARIANT C: DEEP SPACE (Mysterious, Dark)
// --------------------------------------------------------------------------------
const CardVariantC = () => (
    <div className="group relative h-[450px] w-full max-w-[360px] bg-[#050505] rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20">
       {/* Stars */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
       
       {/* Glowing Orb */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-[80px] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity" />

       <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
           <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
               <service.icon size={32} className="text-white" />
           </div>
           
           <h3 className="text-3xl font-light text-white mb-2 tracking-[0.2em] uppercase">Technical</h3>
           <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6">Solutions</h3>
           
           <p className="text-xs text-gray-400 leading-relaxed max-w-[240px]">End-to-end technical implementation for your immediate needs.</p>
           
           <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
               <div className="px-6 py-2 rounded-full border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer">
                   Discover
               </div>
           </div>
       </div>
    </div>
)

// --------------------------------------------------------------------------------
// VARIANT D: SOFT CLAY (Tactile, 3D)
// --------------------------------------------------------------------------------
const CardVariantD = () => (
    <div className="group h-[450px] w-full max-w-[360px] bg-[#F0F2F5] rounded-[3rem] p-8 flex flex-col justify-between shadow-[20px_20px_60px_#d1d3d6,-20px_-20px_60px_#ffffff] transition-transform hover:scale-[1.02]">
        <div className="flex justify-between items-center">
            <div className={`p-4 rounded-2xl bg-[#F0F2F5] shadow-[5px_5px_10px_#d1d3d6,-5px_-5px_10px_#ffffff]`}>
                <service.icon size={24} className="text-gray-700" />
            </div>
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${service.color} shadow-inner`} />
        </div>

        <div className="text-center">
            <h3 className="text-3xl font-black text-gray-800 mb-2">Technical</h3>
            <h3 className="text-3xl font-black text-gray-400 mb-4">Solutions</h3>
            <p className="text-sm font-medium text-gray-500">End-to-end technical implementation for your immediate needs.</p>
        </div>

        <button className={`w-full py-4 rounded-xl bg-gradient-to-r ${service.color} text-white font-bold shadow-[5px_5px_15px_rgba(0,0,0,0.1)] active:shadow-inner active:scale-95 transition-all`}>
            Explore
        </button>
    </div>
)

// --------------------------------------------------------------------------------
// VARIANT E: TECH GRID (Data, Structural)
// --------------------------------------------------------------------------------
const CardVariantE = () => (
    <div className="group relative h-[450px] w-full max-w-[360px] bg-[#0a0a0a] border border-gray-800 overflow-hidden font-mono">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="absolute top-0 right-0 p-4">
             <div className="text-[10px] text-[#00F0FF]">SYS.ACTIVE</div>
        </div>

        <div className="relative z-10 p-8 h-full flex flex-col">
            <div className={`w-12 h-12 border border-[#00F0FF] flex items-center justify-center mb-8`}>
                <service.icon size={24} className="text-[#00F0FF]" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 uppercase">Technical_Solutions</h3>
            <div className="h-px w-full bg-gray-800 mb-4" />
            <p className="text-xs text-gray-400 mb-auto">> Executing end-to-end technical implementation...</p>

            <div className="grid grid-cols-2 gap-2 mt-8">
                {service.tags.map((tag, i) => (
                    <div key={i} className="border border-gray-800 p-2 text-[10px] text-gray-500 uppercase hover:bg-[#00F0FF] hover:text-black transition-colors cursor-crosshair">
                        [{tag}]
                    </div>
                ))}
            </div>
            
            <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t border-[#00F0FF]" />
        </div>
    </div>
)


export function ServiceCardShowcase() {
  return (
    <section className="bg-gray-100 min-h-screen py-20 px-8">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-black mb-4">Service Card Showcase</h1>
            <p className="text-xl text-gray-600 mb-16">Select a design direction for the website.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-start">
                
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Neon Hologram</h2>
                    <CardVariantA />
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Swiss Luxe</h2>
                    <CardVariantB />
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Deep Space</h2>
                    <CardVariantC />
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Soft Clay</h2>
                    <CardVariantD />
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Tech Grid</h2>
                    <CardVariantE />
                </div>

            </div>
        </div>
    </section>
  )
}
