"use client"
import { motion, useMotionValue } from "framer-motion"
import { MapPin, Award } from "lucide-react"
import Image from "next/image"

const UNIVERSITIES = [
    { name: "SRM University", location: "Chennai, India", tier: "Premier", acronym: "SRM", coord: "left-[65%] top-[55%]", logo: "/universities/srm-university.png" },
    { name: "SPPU Pune", location: "Pune, India", tier: "Premier", acronym: "SPPU", coord: "left-[63%] top-[52%]", logo: "/universities/sppu-pune.png" },
    { name: "BITS Pilani", location: "Pilani, India", tier: "Premier", acronym: "BITS", coord: "left-[63%] top-[50%]", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" },
    { name: "IIT Bombay", location: "Mumbai, India", tier: "Premier", acronym: "IITB", coord: "left-[65%] top-[55%]", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" },
]

// Architectural University Card
function UniversityCard({ uni, i }: { uni: any, i: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        onMouseMove={handleMouseMove}
        className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.02)] hover:border-[#D44531]/20 hover:shadow-[0_48px_80px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
    >


        {/* Logo Container - Clean Blueprint Style */}
        <div className="relative z-10 w-28 h-28 rounded-2xl bg-white border border-gray-100 flex items-center justify-center p-4 mb-10 group-hover:border-[#D44531]/20 transition-all duration-500 shadow-xl group-hover:-translate-y-1">
             <Image 
                src={uni.logo} 
                alt={uni.name} 
                width={112} 
                height={112} 
                className="w-full h-full object-contain transition-all duration-700"
                unoptimized
             />
        </div>

        {/* Info Area */}
        <div className="relative z-10">
            <h3 className="text-xl font-black text-gray-900 mb-5 group-hover:text-[#D44531] transition-colors tracking-tighter leading-[0.9]">
                {uni.name}
            </h3>
            
            <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-[#D44531]/20 transition-colors">
                        <MapPin size={10} className="text-[#D44531]" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        {uni.location.replace(', ', '_')}
                    </span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-[#D44531]/20 transition-colors">
                        <Award size={10} className="text-[#D44531]" />
                    </div>
                     <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        {uni.tier}
                     </span>
                 </div>
            </div>
        </div>


    </motion.div>
  )
}

export function TalentPipeline() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Light Blueprint Map Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-x-0 inset-y-10 pointer-events-none select-none"
      >
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/World_map_blank_with_dots.svg" alt="World Map" className="w-full h-full object-cover grayscale opacity-30" />
      </motion.div>

      {/* Background Grids */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="container mx-auto px-6 relative z-10">
         
         {/* Section Header */}
         <div className="text-center mb-20">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-100 rounded-full mb-6 shadow-sm"
             >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D44531]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Infrastructure</span>
             </motion.div>
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight mb-6 leading-none">
                 The Global <span className="text-[#D44531] italic">Pulse</span>
             </h2>
             <p className="text-lg text-gray-500 font-sans max-w-2xl mx-auto leading-relaxed">
                 A distributed network of excellence, connected through the world's leading academic institutions.
             </p>
         </div>

         {/* University Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {UNIVERSITIES.slice(0, 4).map((uni, i) => (
                <UniversityCard key={i} uni={uni} i={i} />
            ))}
         </div>
         
          {/* Stats Integration */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto border-t border-gray-100 pt-20">
              {[
                  { label: "Partner Campuses", value: "50+" },
                  { label: "Countries Represented", value: "15+" },
                  { label: "Global Placements", value: "1000+" },
                  { label: "Years of Excellence", value: "10+" }
              ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-heading font-black text-[#D44531] mb-2 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-bold text-gray-600">
                                    {stat.label}
                                </div>
                            </motion.div>
              ))}
          </div>

      </div>
    </section>
  )
}
