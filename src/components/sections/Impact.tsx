"use client"
import { motion } from "framer-motion"
import { Counter } from "@/components/ui/Counter"

const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "%" },
  { label: "Technologies Mastered", value: 15, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" },
]

export function Impact() {
  return (
    <section className="bg-black py-24 text-white relative overflow-hidden" id="impact">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D44531]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#D44531] font-bold tracking-widest uppercase text-sm mb-4 block">Proven Results</span>
            <h2 className="text-[36px] font-black font-heading mb-6 text-white tracking-tight leading-[1.1]">
                Our Impact in <span className="text-[#D44531]">Numbers</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
                Delivering measurable value and sustainable growth across our entire client portfolio.
            </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center justify-center p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#D44531]/50 hover:bg-[#161616] hover:shadow-[0_0_30px_-5px_rgba(212,69,49,0.15)] transition-all duration-300 hover:-translate-y-1 group"
                >
                    <div className="text-4xl md:text-5xl font-bold font-heading text-[#D44531] mb-2 tracking-tight transition-colors">
                        <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
