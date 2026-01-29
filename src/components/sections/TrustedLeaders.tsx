"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"

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
          <h2 className="text-4xl md:text-5xl font-bold text-[#80807D]">
            Trusted by <span className="font-serif italic font-light text-[#80807D]">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-[#D44531] max-w-2xl mx-auto">
            We've partnered with forward-thinking companies across various industries to deliver exceptional results.
          </p>
       </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">
        
        {/* --- LEFT COLUMN --- */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Tech Partners Card */}
            <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-auto min-h-64 p-8 bg-[#F9F9F9] shadow-sm border border-[#FCD2AD]/50 flex flex-col justify-center items-center rounded-[2rem] hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-wrap justify-center gap-6 w-full items-center p-2">
                        {/* Logos - Wrapped in white for visibility */}
                        {[
                            "/logos/leaf.png",
                            "/logos/siga.png",
                            "/logos/bolt.png",
                            "/logos/nikaay.png",
                            "/logos/yuga.png"
                        ].map((logo, i) => (
                             <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center w-24 h-24 hover:scale-105 transition-transform duration-300">
                                <img src={logo} alt={`Partner ${i}`} className="w-full h-full object-contain" />
                             </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm font-semibold text-[#80807D] uppercase tracking-widest text-center">Trusted Partners</p>
                </Card>
            </motion.div>

            {/* Growth Stat Card - Enhanced Gray Design */}
            <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                 <Card className="h-64 p-8 bg-gradient-to-br from-[#80807D] to-[#60605D] text-white relative overflow-hidden border-none shadow-lg rounded-[2rem] group">
                    {/* Texture & Shine */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite] rotate-45 transform translate-y-[-50%] translate-x-[-50%] pointer-events-none"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                        <h3 className="text-7xl font-bold text-white tracking-tighter drop-shadow-md">200%</h3>
                        <p className="text-lg font-medium opacity-90 mt-2 text-gray-100 leading-tight">Average ROI<br/>for our partners</p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute bottom-6 right-6">
                        <div className="w-16 h-16 rounded-full border-4 border-white/10 flex items-center justify-center backdrop-blur-sm">
                             <div className="w-8 h-8 bg-[#D44531] rounded-full animate-pulse shadow-lg ring-4 ring-[#D44531]/20"></div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 </Card>
            </motion.div>
        </div>

        {/* --- MIDDLE COLUMN --- */}
        <div className="md:col-span-4 flex flex-col gap-6 -mt-0 md:-mt-12">
             {/* Centerpiece Image/Highlight */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-[26rem] p-0 bg-black overflow-hidden relative border-none shadow-xl rounded-[2rem] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                     {/* Placeholder specific image or keep generic abstraction */}
                     <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                    
                    <div className="absolute bottom-8 left-8 z-20">
                         <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10">
                            <span className="text-2xl">🤝</span>
                         </div>
                        <h3 className="text-white text-2xl font-bold leading-tight">Strategic<br/>Partnerships</h3>
                        <p className="text-white/70 text-sm mt-2">Building the future together.</p>
                    </div>
                </Card>
             </motion.div>

              {/* Startup Ecosystem Card */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                 <Card className="h-[22rem] p-8 bg-white border border-[#FCD2AD] relative overflow-hidden shadow-lg rounded-[2rem] flex flex-col justify-between">
                    <div>
                         {/* Pill: Swapped bg to Gray-ish, Text to Orange */}
                         <span className="inline-block px-3 py-1 rounded-full bg-[#80807D]/10 text-[#D44531] text-xs font-bold mb-4">STARTUPS</span>
                         <h3 className="text-3xl font-bold text-[#80807D]">50+</h3>
                         <p className="text-[#D44531] font-medium">Startups Scaled</p>
                    </div>
                    
                    <div className="flex -space-x-4">
                        {[1,2,3,4].map((i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="Startup Founder" className="w-full h-full object-cover" />
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-2 border-white bg-[#F9F9F9] flex items-center justify-center text-xs font-bold text-[#D44531]">+46</div>
                    </div>
                 </Card>
            </motion.div>
        </div>


        {/* --- RIGHT COLUMN --- */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
             {/* Global Reach - Peach Theme (Kept mostly Peach but swapped accents) */}
             <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-64 bg-[#FCD2AD]/20 p-8 relative overflow-hidden rounded-[2rem] border-none shadow-sm flex flex-col justify-between">
                     <div>
                        {/* Title: Gray (was Black/Gray), Subtext: Orange (was Orange) -> Let's keep title Gray, Subtext Orange? Or swap? */}
                        {/* User said Gray -> Primary (Orange). So Title should be Orange? */}
                        <h3 className="text-3xl font-serif text-[#80807D]">Global Reach</h3>
                        <p className="text-[#D44531] text-sm mt-2">Serving clients worldwide</p>
                     </div>
                     <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-3 py-1 bg-white/60 rounded-full text-xs text-[#D44531] font-medium border border-[#FCD2AD]">USA</span>
                        <span className="px-3 py-1 bg-white/60 rounded-full text-xs text-[#D44531] font-medium border border-[#FCD2AD]">UK</span>
                        <span className="px-3 py-1 bg-white/60 rounded-full text-xs text-[#D44531] font-medium border border-[#FCD2AD]">UAE</span>
                     </div>
                </Card>
             </motion.div>

              {/* Enterprise Solutions - NOW ORANGE BG (was Dark Gray) */}
             <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-64 bg-[#D44531] p-8 relative overflow-hidden flex flex-col justify-center border-none shadow-lg rounded-[2rem]">
                     <div className="relative z-10">
                        <h3 className="text-3xl text-white font-bold">Enterprise<br/><span className="text-[#FCD2AD] font-light">Grade Security</span></h3>
                         <p className="text-white/80 text-sm mt-4">ISO 27001 Certified processes.</p>
                     </div>
                     <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-10 translate-y-10">
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                     </div>
                </Card>
             </motion.div>
        </div>

      </div>
    </section>
  )
}
