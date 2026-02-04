"use client"
import { motion } from "framer-motion"
import { Rocket, TrendingUp, Building2, MapPin, Target } from "lucide-react"

const ALUMNI_SUCCESS = [
    { company: "Google", role: "Senior Engineer", highlight: "Mountain View, CA", category: "TECH LEAD" },
    { company: "Meta", role: "Product Manager", highlight: "Menlo Park, CA", category: "PRODUCT" },
    { company: "Amazon", role: "SDE-3", highlight: "Seattle, WA", category: "INFRA" },
    { company: "Microsoft", role: "Chief Architect", highlight: "Redmond, WA", category: "ENGINEERING" },
    { company: "OpenAI", role: "Research Scientist", highlight: "San Francisco, CA", category: "AI & ML" },
    { company: "Netflix", role: "Streaming Engineer", highlight: "Los Gatos, CA", category: "CORE SYSTEMS" },
]

export function CareerLaunchpad() {
  return (
    <section className="py-32 bg-[#FAFAFA] relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
            
            {/* Header */}
            <div className="text-center mb-28">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-100 rounded-full mb-8 shadow-sm"
                >
                    <Target className="w-4 h-4 text-[#D44531]" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Destinations</span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-4xl font-heading font-black text-gray-900 tracking-tighter mb-8 leading-none"
                >
                    Where Talent <span className="text-[#D44531] italic text-3xl md:text-4xl">Peaks</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed"
                >
                    Our impact is etched into the foundations of global technology leaders.
                </motion.p>
            </div>

            {/* Success Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ALUMNI_SUCCESS.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.8, 
                            delay: i * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="group relative h-[340px] bg-white rounded-[2rem] p-8 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(212,69,49,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between border border-gray-100 hover:border-[#D44531]/20 hover:-translate-y-1"
                    >
                         {/* Subtle Background Gradient */}
                         <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                         
                         {/* Accent Glow */}
                         <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D44531]/5 rounded-full blur-3xl group-hover:bg-[#D44531]/8 transition-colors duration-700" />

                         {/* Top Row: Category Badge */}
                         <div className="relative z-10">
                             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 group-hover:bg-[#D44531] group-hover:border-[#D44531] transition-all duration-300">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#D44531] group-hover:bg-white transition-colors" />
                                 <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 group-hover:text-white transition-colors">
                                     {item.category}
                                 </span>
                             </div>
                         </div>

                         {/* Middle: Company & Role */}
                         <div className="relative z-10 flex-1 flex flex-col justify-center py-4">
                             {/* Role/Position - More Visible */}
                             <div className="mb-3">
                                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Position</div>
                                 <div className="text-base font-bold text-gray-600 group-hover:text-[#D44531] transition-colors">
                                     {item.role}
                                 </div>
                             </div>
                             
                             {/* Company Name - Reduced Size, No Clipping */}
                             <h3 className="text-3xl font-heading font-black text-gray-900 leading-tight tracking-tight group-hover:text-[#D44531] transition-colors duration-300">
                                 {item.company}
                             </h3>
                         </div>

                         {/* Bottom: Location & Action */}
                         <div className="relative z-10 flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-[#D44531]/10 transition-colors">
                             <div className="flex items-center gap-2">
                                 <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-[#D44531]/10 transition-colors">
                                     <MapPin size={14} className="text-[#D44531]" />
                                 </div>
                                 <div>
                                     <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Location</div>
                                     <div className="text-xs font-bold text-gray-600">
                                         {item.highlight}
                                     </div>
                                 </div>
                             </div>
                             
                             {/* Action Icon */}
                             <div className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:bg-[#D44531] group-hover:border-[#D44531] transition-all duration-300 group-hover:scale-110">
                                 <TrendingUp size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                             </div>
                         </div>
                    </motion.div>
                ))}
            </div>


        </div>
    </section>
  )
}


