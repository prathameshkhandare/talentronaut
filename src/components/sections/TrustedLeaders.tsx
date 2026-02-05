"use client"
import { motion } from "framer-motion"
import { Handshake, Globe, TrendingUp, Users, ArrowRight, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { useState, useEffect } from "react"

// Animation Variants - Reusing left/right/fade animations from Why Us
const leftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
} as any;

const rightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
} as any;

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  }
} as any;

export function TrustedLeaders() {
  return (
    <section className="bg-white container mx-auto px-4 py-24 sm:px-6 lg:px-8 overflow-hidden" id="trusted">
       {/* Header */}
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="text-center mb-16"
       >
          <h2 className="text-4xl md:text-4xl font-black font-heading text-[#D44531]">
            Trusted by <span className="font-black text-[#4A4A46]">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-sm max-w-2xl mx-auto">
            We've partnered with forward-thinking companies across various industries to deliver exceptional results.
          </p>
       </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">
        
        {/* --- LEFT COLUMN --- */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Tech Partners Service Interaction */}
            <PartnersInteraction />

        </div>

        {/* --- MIDDLE COLUMN --- */}
        <div className="md:col-span-4 flex flex-col gap-6 -mt-0 md:-mt-12">
             {/* Centerpiece Image/Highlight */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-[26rem] p-0 bg-white overflow-hidden relative border border-[#FCD2AD]/30 shadow-xl rounded-[2rem] group">
                     {/* No white filter, full image clarity */}
                     <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-700"></div>
                    
                    {/* Subtle Dark Gradient Overlay at bottom for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Floating Info Pill - Minimalist design to keep image visible */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                         <div className="bg-white p-5 rounded-[2rem] shadow-2xl border border-gray-100 flex items-center gap-4 transition-all duration-500 group-hover:-translate-y-1">
                             <div className="w-12 h-12 rounded-2xl bg-[#D44531] flex items-center justify-center shadow-lg shadow-[#D44531]/20 group-hover:scale-110 transition-transform duration-500">
                                <Handshake className="text-white w-6 h-6" />
                             </div>
                             <div>
                                <h3 className="text-black text-base font-black tracking-tight leading-none mb-1">Strategic Partnerships</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Active Network</span>
                                </div>
                             </div>
                         </div>
                    </div>
                </Card>
             </motion.div>

              {/* Startup Ecosystem Card */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                 <Card className="h-[22rem] p-10 bg-white border border-[#FCD2AD]/30 relative overflow-hidden shadow-2xl rounded-[3rem] group flex flex-col justify-between">
                    {/* Peach Glow */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FCD2AD]/10 rounded-full blur-3xl group-hover:bg-[#FCD2AD]/20 transition-all duration-700" />
                    
                    <div>
                         <div className="flex justify-between items-start mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-[#D44531]/5 flex items-center justify-center border border-[#D44531]/10 shadow-sm">
                                <Users className="text-[#D44531] w-7 h-7" />
                            </div>
                            <span className="px-3 py-1 rounded-full bg-[#4A4A46]/5 text-[#D44531] text-[10px] font-black tracking-widest uppercase">Startups</span>
                         </div>
                         
                         <h3 className="text-4xl font-black text-black tracking-tight mb-2">50<span className="text-[#D44531]">+</span></h3>
                         <p className="text-black/80 font-bold leading-relaxed">International startups scaled to success.</p>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex -space-x-3 items-center">
                            {[1,2,3,4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                                    <img src={`https://i.pravatar.cc/100?img=${15+i}`} alt="Partner" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-[#FCD2AD]/20 flex items-center justify-center text-xs font-black text-[#D44531] group-hover:scale-110 transition-transform">+46</div>
                        </div>
                        <div className="h-1 w-12 bg-[#D44531] rounded-full" />
                    </div>
                 </Card>
            </motion.div>
        </div>


        {/* --- RIGHT COLUMN --- */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
             {/* Global Reach - Peach Theme (Kept mostly Peach but swapped accents) */}
              <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-64 bg-white p-8 relative overflow-hidden rounded-[2.5rem] border border-[#FCD2AD]/30 shadow-xl group flex flex-col justify-between">
                     {/* Decorative background element */}
                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FCD2AD]/20 rounded-full blur-3xl group-hover:bg-[#D44531]/10 transition-colors duration-500" />
                     <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

                     <div>
                        <div className="w-12 h-12 rounded-xl bg-[#D44531]/5 flex items-center justify-center mb-4 border border-[#D44531]/10">
                            <Globe size={24} className="text-[#D44531] animate-[spin_10s_linear_infinite]" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-black tracking-tight">Global Reach</h3>
                        <p className="text-[#D44531] text-sm font-medium mt-1">Serving clients worldwide</p>
                     </div>

                     <div className="flex gap-2 flex-wrap">
                        {['USA', 'UK', 'UAE', 'India', 'Europe'].map((region) => (
                            <span key={region} className="px-3 py-1 bg-[#FCD2AD]/10 text-[10px] font-black uppercase tracking-widest text-[#D44531] rounded-lg border border-[#FCD2AD]/30 hover:bg-[#D44531] hover:text-white transition-all cursor-default">
                                {region}
                            </span>
                        ))}
                     </div>
                </Card>
              </motion.div>

              {/* Enterprise Solutions - NOW ORANGE BG (was Dark Gray) */}
             <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-64 bg-[#D44531] p-8 relative overflow-hidden flex flex-col justify-center border-none shadow-2xl rounded-[2.5rem] group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D44531] to-[#c03e2b]" />
                      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

                      <div className="relative z-10">
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Protocol Active</span>
                         </div>
                         <h3 className="text-2xl text-white font-black leading-tight">Enterprise<br/><span className="text-white/60 font-light italic">Grade Security</span></h3>
                          <p className="text-white/80 text-xs mt-4 font-medium uppercase tracking-wide">ISO 27001 Certified processes</p>
                      </div>
                      <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-10 translate-y-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
                         {/* Double Layer Shield Effect */}
                         <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" className="absolute right-[-20px] bottom-[-20px]">
                             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                         </svg>
                         <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                         </svg>
                      </div>
                 </Card>
             </motion.div>
        </div>

      </div>
    </section>
  )
}

// --- Dynamic Partner Components ---

const PARTNERS = [
    {
        id: "leaf",
        name: "Leaf Global",
        logo: "/logos/leaf.png",
        industry: "Sustainability Tech",
        description: "Developed AI-driven supply chain optimization tools reducing carbon footprint by 40%.",
        stat: "40% Less Emissions"
    },
    {
        id: "siga",
        name: "Siga Finance",
        logo: "/logos/siga.png",
        industry: "FinTech Innovation",
        description: "Architected a secure, blockchain-enabled transaction layer for next-gen banking.",
        stat: "10k+ TPS"
    },
    {
        id: "bolt",
        name: "Bolt Logistics",
        logo: "/logos/bolt.png",
        industry: "Smart Logistics",
        description: "Built the real-time fleet tracking dashboard used by over 500+ enterprise haulers.",
        stat: "3x Efficiency"
    },
    {
        id: "nikaay",
        name: "Nikaay Social",
        logo: "/logos/nikaay.png",
        industry: "Social Platform",
        description: "Engineered high-concurrency websocket servers for real-time community engagement.",
        stat: "1M+ Active Users"
    },
    {
        id: "yuga",
        name: "Yuga Studios",
        logo: "/logos/yuga.png",
        industry: "Immersive Media",
        description: "Created WebGL-powered 3D showroom experiences for luxury retail brands.",
        stat: "200% Engagement"
    }
];

function PartnersInteraction() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-cycle effect
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PARTNERS.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const activePartner = PARTNERS[activeIndex];

    return (
        <div className="flex flex-col gap-6 w-full">
            {/* 1. Detail Spotlight Card - NEW PREMIUM LIGHT DESIGN */}
            <motion.div 
                variants={leftVariant} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                className="relative"
            >
                <Card className="h-auto min-h-[22rem] p-8 bg-white border border-gray-100/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] rounded-[2.5rem] flex flex-col justify-between overflow-hidden relative group">
                    {/* Soft background gradient - Branding colors */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FCD2AD]/20 to-[#D44531]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-60" />
                    
                    {/* Header: Logo & Badge */}
                    <div className="flex justify-between items-start relative z-10">
                        {/* Clean Logo Container - No dark box, just pure logo */}
                        <div className="w-24 h-24 flex items-center justify-start">
                             <motion.img 
                                key={activePartner.id}
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                src={activePartner.logo} 
                                alt={activePartner.name} 
                                className="w-full h-full object-contain object-left"
                             />
                        </div>
                        <span className="px-4 py-1.5 rounded-full bg-[#fcfcfc] text-[#D44531] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#FCD2AD] shadow-sm">
                            {activePartner.industry}
                        </span>
                    </div>

                    {/* Content: Info & Desc */}
                    <div className="relative z-10 pt-4">
                        <motion.div
                            key={activePartner.id + "-content"}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-[2.5rem] font-medium font-heading text-[#1a1a1a] mb-3 tracking-tight">
                                {activePartner.name}
                            </h3>
                            <p className="text-[15px] text-[#4a4a46] font-medium leading-relaxed mb-8 min-h-[4.5em] max-w-sm">
                                {activePartner.description}
                            </p>
                            
                            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-2 group/link cursor-pointer">
                                    <Sparkles size={16} className="text-[#D44531]" />
                                    <span className="text-sm font-bold text-[#D44531] group-hover/link:underline transition-all">Case Study</span>
                                </div>
                                <div className="h-4 w-px bg-gray-200" />
                                <span className="text-sm font-bold text-gray-900 tracking-wide">{activePartner.stat}</span>
                            </div>
                        </motion.div>
                    </div>
                </Card>
            </motion.div>

            {/* 2. Marquee Card - INFINITE SLIDER & PRESERVED FULL COLOR */}
            <motion.div 
                variants={leftVariant} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <Card 
                    className="h-28 bg-[#fafafa] border border-gray-100 rounded-[2rem] flex items-center overflow-hidden relative shadow-inner"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />

                    <div className="flex gap-8 px-6 animate-infinite-scroll hover:[animation-play-state:paused] w-max">
                        {[...PARTNERS, ...PARTNERS].map((p, i) => (
                            <button 
                                key={i}
                                onClick={() => setActiveIndex(i % PARTNERS.length)}
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center p-3 transition-all duration-300 border ${
                                    (i % PARTNERS.length) === activeIndex 
                                    ? 'bg-white border-[#D44531] shadow-[0_4px_20px_-4px_rgba(212,69,49,0.2)] scale-110' 
                                    : 'bg-white border-gray-100 opacity-60 hover:opacity-100 hover:scale-105'
                                }`}
                            >
                                <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                            </button>
                        ))}
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}
