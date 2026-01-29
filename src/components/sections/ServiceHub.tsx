import { motion } from "framer-motion"
import { Monitor, Smartphone, Cpu, Box, Cloud, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { HandArrowRight, HandUnderline, HandStar, HandCircle } from "@/components/ui/HandDrawn"

const services = [
  {
    title: "Technical Solutions",
    description: "End-to-end technical implementation for your immediate needs.",
    icon: Monitor,
    tags: ["Development", "Implementation"],
  },
  {
    title: "Talent Hire",
    description: "Connect with top-tier talent to scale your operations.",
    icon: Smartphone,
    tags: ["Recruitment", "Scaling"],
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance on architecture, stack selection, and best practices.",
    icon: Box,
    tags: ["Architecture", "Strategy"],
  },
  {
    title: "Growth Consulting",
    description: "Data-driven strategies to accelerate your business growth.",
    icon: Cpu,
    tags: ["Growth Hacking", "Analytics"],
  },
  {
    title: "Startup Consultation",
    description: "Comprehensive mentorship and roadmap planning for early-stage ventures.",
    icon: Cloud,
    tags: ["Mentorship", "Roadmap"],
  }
]

export function ServiceHub() {
  return (
    <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-[#F9F9F9]" id="services">
      {/* Header */}
      <div className="mb-20 md:flex md:items-end md:justify-between text-center md:text-left">
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
         >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
               Our <span className="text-[#D44531] font-light italic">Services</span>
            </h2>
            <p className="mt-6 text-lg text-[#666666] max-w-xl leading-relaxed">
                End-to-end technical & consulting solutions for forward-thinking enterprises.
            </p>
         </motion.div>
         
         <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-[#D44531]/20 hover:border-[#D44531] text-[#D44531] font-semibold shadow-sm hover:shadow-md transition-all duration-300"
        >
            View all services <ArrowRight className="w-4 h-4" />
         </motion.button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* BrainwaveBoard Style: Clean Bento Card */}
            <div className="group relative h-[420px] w-full rounded-card bg-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-transparent hover:border-[#FCD2AD] p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(212,69,49,0.08)] hover:-translate-y-2">
              
              {/* Subtle Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FCD2AD] opacity-20 rounded-full blur-3xl group-hover:opacity-40 transition-all duration-500" />

              {/* Top: Icon & Number */}
              <div className="flex justify-between items-start relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#F9F9F9] border border-[#FCD2AD]/30 flex items-center justify-center group-hover:bg-[#D44531] transition-colors duration-500">
                   <service.icon size={28} className="text-[#D44531] group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-[#80807D] font-mono text-xs opacity-60">0{index + 1}</span>
              </div>

              {/* Bottom: Content */}
              <div className="relative z-10 mt-auto">
                 <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-3 tracking-tight group-hover:text-[#D44531] transition-colors duration-300">
                    {service.title}
                 </h3>
                 <p className="text-sm text-[#666666] leading-relaxed mb-8 max-w-[90%] font-normal">
                    {service.description}
                 </p>

                 <div className="flex items-center gap-3">
                    {service.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#FCD2AD]/20 text-[#D44531] text-[10px] font-bold uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                 </div>
              </div>

            </div>
          </motion.div>
        ))}
        
        {/* CTA Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
             className="flex flex-col justify-center items-center text-center p-10 rounded-card bg-[#D44531] text-white relative overflow-hidden shadow-xl"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10"></div>
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                <HandStar className="w-8 h-8 text-[#FCD2AD]" />
            </div>
            
            <h3 className="text-3xl font-semibold mb-4 relative z-10 text-white text-left">Custom Solution?</h3>
            <p className="text-[#FCD2AD] mb-8 relative z-10 text-sm max-w-xs mx-auto">
                Let's discuss your specific requirements. We build exactly what you need.
            </p>
            
            <button className="relative z-10 px-8 py-3 rounded-full bg-white text-[#D44531] font-bold hover:bg-[#FCD2AD] hover:text-[#D44531] transition-all w-full shadow-lg">
                Contact Us
            </button>
        </motion.div>
      </div>
    </section>
  )
}
