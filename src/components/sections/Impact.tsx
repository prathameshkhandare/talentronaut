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
    <section className="bg-white py-24 text-[#4A4A46] relative overflow-hidden" id="impact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#D44531] font-bold tracking-widest uppercase text-sm mb-4 block">Proven Results</span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black font-heading mb-6 text-[#4A4A46] tracking-tight leading-[1.1]">
                Our Impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] to-[#E65A45] font-heading">Numbers</span>
            </h2>
            <p className="text-[#4A4A46]/70 text-lg leading-relaxed">
                Delivering measurable value and sustainable growth across our entire client portfolio.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center justify-center p-8 rounded-[2rem] bg-[#fafafa] border-2 border-gray-100 hover:border-[#D44531]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                    <div className="text-5xl md:text-6xl font-bold font-heading text-[#D44531] mb-2 tracking-tight transition-colors">
                        <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm font-bold text-[#4A4A46]/60 uppercase tracking-widest group-hover:text-[#D44531] transition-colors">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
