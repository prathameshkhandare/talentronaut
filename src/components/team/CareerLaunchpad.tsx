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
        {/* Technical Blueprint Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        
        <div className="container mx-auto px-6 relative z-10">
            
            {/* Header */}
            <div className="text-center mb-28">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-100 rounded-full mb-8 shadow-sm"
                >
                    <Target className="w-4 h-4 text-[#D44531]" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Destinations</span>
                </motion.div>
                <h2 className="text-6xl md:text-8xl font-heading font-black text-gray-900 tracking-tighter mb-8 leading-none">
                    Where Talent <span className="text-[#D44531] italic text-7xl md:text-9xl">Peaks</span>
                </h2>
                <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
                    Our impact is etched into the foundations of global technology leaders.
                </p>
            </div>

            {/* Success Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ALUMNI_SUCCESS.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative h-[320px] bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
                    >
                         {/* Architectural Corner Marker */}
                         <div className="absolute top-8 left-8 w-6 h-6 border-l border-t border-gray-100 group-hover:border-[#D44531]/30 transition-colors" />
                         <div className="absolute bottom-8 right-8 w-6 h-6 border-r border-b border-gray-100 group-hover:border-[#D44531]/30 transition-colors" />

                         {/* Subtle Background Accent */}
                         <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10" />

                         <div className="relative z-10 text-right md:text-left">
                             {/* Category Chip */}
                             <div className="inline-block px-3 py-1 bg-gray-50 rounded-lg text-[9px] font-black text-gray-400 uppercase tracking-[0.25em] mb-10 border border-gray-100 group-hover:border-[#D44531]/20 group-hover:text-[#D44531] transition-all">
                                 {item.category}
                             </div>

                             <div className="flex flex-col">
                                 <h3 className="text-5xl font-heading font-black text-gray-900 mb-2 tracking-tighter group-hover:text-[#D44531] transition-colors leading-none">
                                     {item.company}
                                 </h3>
                                 <div className="h-0.5 w-10 bg-gray-100 mt-4 rounded-full group-hover:w-20 group-hover:bg-[#D44531] transition-all duration-700" />
                             </div>
                         </div>

                         <div className="relative z-10 space-y-4">
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-2xl bg-[#D44531]/5 flex items-center justify-center text-[#D44531] group-hover:bg-[#D44531] group-hover:text-white transition-all duration-500">
                                     <TrendingUp size={16} />
                                 </div>
                                 <div className="flex flex-col">
                                     <div className="text-[10px] font-mono font-bold text-gray-300 uppercase tracking-[0.1em]">Position</div>
                                     <div className="text-sm font-bold text-gray-600">{item.role}</div>
                                 </div>
                             </div>
                             
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-gray-100 transition-colors">
                                     <MapPin size={16} />
                                 </div>
                                 <div className="flex flex-col">
                                     <div className="text-[10px] font-mono font-bold text-gray-300 uppercase tracking-[0.1em]">Location</div>
                                     <div className="text-sm font-bold text-gray-400">{item.highlight}</div>
                                 </div>
                             </div>
                         </div>

                         {/* Side Indicator */}
                         <div className="absolute top-1/2 -translate-y-1/2 right-6 flex flex-col items-center gap-2 opacity-10 group-hover:opacity-30 transition-opacity">
                             {[1, 2, 3].map(j => (
                                 <div key={j} className="w-1 h-1 rounded-full bg-gray-400" />
                             ))}
                         </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Citation */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-32 border-t border-gray-100 pt-16 flex flex-col md:flex-row items-center justify-between gap-8"
            >
                <div className="text-[10px] font-mono text-gray-300 uppercase tracking-[0.4em]">
                    ALUMNI_DATABASE_ENTRY // 2026.01
                </div>
                <div className="h-px flex-1 bg-gray-100 hidden md:block mx-12" />
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                    Fueling Innovation at <span className="text-gray-900">50+ Silicon Valley Tech Leaders</span>
                </p>
            </motion.div>
        </div>
    </section>
  )
}


