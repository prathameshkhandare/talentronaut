"use client"
import { motion } from "framer-motion"
import { Counter } from "@/components/ui/Counter"
import { HandCircle, HandStar } from "@/components/ui/HandDrawn"

const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "%" },
  { label: "Technologies Mastered", value: 15, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" },
]

export function Impact() {
  return (
    <section className="bg-white py-24 text-gray-900 font-sans relative" id="impact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-3xl mx-auto relative">
            <HandStar className="absolute top-0 right-10 w-12 h-12 text-[#FF0099] rotate-12 opacity-50 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Our Impact in <span className="relative inline-block text-[#D4FF00]">
                    Numbers
                     <HandCircle className="absolute -top-6 -right-6 w-[140%] h-[140%] text-[#000] rotate-[-5deg] opacity-100 -z-10" />
                </span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">Delivering measurable results across our client portfolio.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white border-2 border-gray-100 hover:border-black shadow-sm hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 group"
                >
                    <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 font-sans tracking-tight group-hover:text-[#00F0FF] transition-colors">
                        <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
