"use client"
import { motion } from "framer-motion"
import { Handshake, Globe, TrendingUp, Users } from "lucide-react"
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#D44531]">
            Trusted by <span className="font-sans italic font-bold text-[#4A4A46]">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-[#D44531] max-w-2xl mx-auto">
            We've partnered with forward-thinking companies across various industries to deliver exceptional results.
          </p>
       </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">
        
        {/* --- LEFT COLUMN --- */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Tech Partners Card */}
            {/* Tech Partners Card */}
            <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-auto min-h-64 p-10 bg-white shadow-xl border border-gray-100 flex flex-col justify-center items-center rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 group">
                    <div className="flex flex-wrap justify-center gap-8 w-full items-center">
                        {/* Logos - Wrapped in white for visibility */}
                        {[
                            "/logos/leaf.png",
                            "/logos/siga.png",
                            "/logos/bolt.png",
                            "/logos/nikaay.png",
                            "/logos/yuga.png"
                        ].map((logo, i) => (
                             <div key={i} className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-50 flex items-center justify-center w-24 h-24 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                                <img src={logo} alt={`Partner ${i}`} className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                             </div>
                        ))}
                    </div>
                    <div className="mt-10 pt-8 border-t border-gray-50 w-full flex flex-col items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D44531] mb-2">Global Network</span>
                        <p className="text-black/40 text-[10px] font-bold uppercase tracking-widest text-center">Fueling the next generation of industry leaders</p>
                    </div>
                </Card>
            </motion.div>

            {/* Growth Stat Card - Enhanced Gray Design */}
            <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                 <Card className="h-64 p-8 bg-[#4A4A46] text-white relative overflow-hidden border-none shadow-2xl rounded-[2.5rem] group">
                    {/* Premium Layering */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4A4A46] via-[#3d3d3a] to-[#2a2a28]"></div>
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <TrendingUp className="text-[#D44531] w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D44531]">Verified ROI</span>
                        </div>
                        
                        <div>
                            <h3 className="text-6xl font-black text-white tracking-tighter mb-1">200%</h3>
                            <p className="text-sm font-bold text-white/60 leading-tight uppercase tracking-wider">Average ROI for Partners</p>
                        </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 opacity-10 blur-3xl bg-[#D44531] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
                 </Card>
            </motion.div>
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
                                <h3 className="text-black text-lg font-black tracking-tight leading-none mb-1">Strategic Partnerships</h3>
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
                         
                         <h3 className="text-5xl font-black text-black tracking-tight mb-2">50<span className="text-[#D44531]">+</span></h3>
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
                         <h3 className="text-3xl text-white font-black leading-tight">Enterprise<br/><span className="text-white/60 font-light italic">Grade Security</span></h3>
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
