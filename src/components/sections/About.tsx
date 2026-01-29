"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Award, Users, Rocket } from "lucide-react"

export function About() {
  return (
    <section className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#FCD2AD]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] bg-[#D44531]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="w-12 h-[2px] bg-[#D44531]"></span>
                <span className="text-[#D44531] font-black tracking-[0.3em] uppercase text-xs">Aesthetically Technical</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[#4A4A46] leading-[0.95] tracking-tighter">
                Not Just Developers. <br />
                We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] via-[#E65A45] to-[#D44531] animate-gradient-x">Digital Architects.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-[#4A4A46]/70 leading-relaxed md:pr-10 font-medium">
                <p>
                    Talentronaut was founded with a singular vision: to bridge the gap between cutting-edge technology and practical business success. We don't just write code; <span className="text-[#D44531] font-bold">we engineer value.</span>
                </p>
                <p>
                    From our headquarters in Chennai to our global footprint, we empower enterprises with AI, Web3, and Automation solutions that future-proof their operations.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
               {[
                 { title: "Industry-Leading Experts", desc: "Top 1% Engineering Talent" },
                 { title: "Tailored Solutions", desc: "Bespoke Architecture" },
                 { title: "Agile Methodology", desc: "Rapid 2-Week Sprints" },
                 { title: "Innovation Focused", desc: "R&D Driven Results" }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex flex-col gap-1 border-l-2 border-gray-100 pl-4 hover:border-[#D44531] transition-colors duration-300"
                 >
                    <span className="text-[#D44531] font-black text-sm uppercase tracking-wider">{item.title}</span>
                    <span className="text-black/60 text-xs font-bold">{item.desc}</span>
                 </motion.div>
               ))}
            </div>

            <div className="mt-4 pt-10 border-t border-gray-100 flex items-center gap-12">
                <div className="flex flex-col gap-1">
                   <span className="text-5xl font-black text-[#D44531] tracking-tighter">50+</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Global Partners</span>
                </div>
                <div className="flex flex-col gap-1">
                   <span className="text-5xl font-black text-[#D44531] tracking-tighter">89%</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Retention Rate</span>
                </div>
            </div>

          </motion.div>

          {/* Visual Side */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative order-1 lg:order-2"
          >
              <div className="relative aspect-square rounded-[4rem] overflow-hidden bg-white shadow-2xl border-8 border-white group">
                   {/* Background Elements */}
                   <div className="absolute inset-0 bg-[#fafafa]"></div>
                   <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#FCD2AD]/30 via-transparent to-[#D44531]/10"></div>
                   
                   {/* Dynamic Content Layers */}
                   <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                       <div className="flex justify-between items-start">
                          <motion.div 
                            whileHover={{ rotate: 90 }}
                            className="w-20 h-20 bg-black rounded-[2rem] flex items-center justify-center shadow-2xl overflow-hidden relative"
                          >
                             <div className="absolute inset-0 bg-gradient-to-br from-[#D44531] to-[#E65A45] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                             <Rocket className="text-white w-10 h-10 relative z-10" />
                          </motion.div>
                          
                          <div className="text-right">
                             <div className="inline-block px-3 py-1 rounded-full bg-black text-[#D44531] text-[10px] font-black tracking-widest uppercase mb-2">Est. 2023</div>
                             <div className="text-xl font-bold text-black italic">Crafting Excellence</div>
                          </div>
                       </div>

                       <div className="space-y-4">
                           {[
                               { icon: Users, title: "Collaborative Spirit", desc: "Your team extension" },
                               { icon: Award, title: "Unmatched Quality", desc: "No compromise code" }
                           ].map((item, i) => (
                               <motion.div 
                                 key={i}
                                 whileHover={{ x: 10 }}
                                 className="bg-white/80 p-6 rounded-[2rem] border border-gray-100 shadow-xl backdrop-blur-md flex items-center gap-6"
                               >
                                   <div className="w-14 h-14 rounded-2xl bg-[#D44531]/5 flex items-center justify-center border border-[#D44531]/10">
                                      <item.icon size={28} className="text-[#D44531]" />
                                   </div>
                                   <div>
                                      <h4 className="font-black text-black tracking-tight">{item.title}</h4>
                                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.desc}</p>
                                   </div>
                               </motion.div>
                           ))}
                       </div>
                   </div>

                   {/* Floating Graphic Element */}
                   <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 border-[32px] border-[#FCD2AD]/20 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
              </div>
              
              {/* Abstract Floating Shapes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 w-32 h-32 border border-gray-200 rounded-[2rem] opacity-20"
              />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
