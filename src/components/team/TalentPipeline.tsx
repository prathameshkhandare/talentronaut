"use client"
import { motion, useMotionValue } from "framer-motion"
import { MapPin, Award } from "lucide-react"

const UNIVERSITIES = [
    { name: "Stanford University", location: "California, USA", tier: "Ivy League", acronym: "SU", coord: "left-[10%] top-[30%]", logo: "https://logo.clearbit.com/stanford.edu" },
    { name: "MIT", location: "Massachusetts, USA", tier: "Tech Giant", acronym: "MIT", coord: "left-[25%] top-[32%]", logo: "https://logo.clearbit.com/mit.edu" },
    { name: "IIT Bombay", location: "Mumbai, India", tier: "Premier", acronym: "IITB", coord: "left-[65%] top-[55%]", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" },
    { name: "BITS Pilani", location: "Pilani, India", tier: "Premier", acronym: "BITS", coord: "left-[63%] top-[50%]", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" },
    { name: "Harvard", location: "Cambridge, USA", tier: "Ivy League", acronym: "HU", coord: "left-[26%] top-[31%]", logo: "https://logo.clearbit.com/harvard.edu" },
    { name: "UC Berkeley", location: "Berkeley, USA", tier: "Public Ivy", acronym: "UCB", coord: "left-[9%] top-[30%]", logo: "https://logo.clearbit.com/berkeley.edu" },
    { name: "IIT Delhi", location: "New Delhi, India", tier: "Premier", acronym: "IITD", coord: "left-[64%] top-[48%]", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Indian_Institute_of_Technology_Delhi_logo.svg/1200px-Indian_Institute_of_Technology_Delhi_logo.svg.png" },
    { name: "Oxford", location: "Oxford, UK", tier: "Global Elite", acronym: "OX", coord: "left-[45%] top-[25%]", logo: "https://logo.clearbit.com/ox.ac.uk" },
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
        {/* Technical Architectural Markers */}
        <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-gray-100 group-hover:border-[#D44531]/30 transition-colors" />
        <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-gray-100 group-hover:border-[#D44531]/30 transition-colors" />

        {/* Logo Container - Clean Blueprint Style */}
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-3 mb-10 group-hover:bg-white group-hover:border-[#D44531]/10 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">
             <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
             
             {/* Technical Tagging */}
             <div className="absolute -right-2 -top-2 bg-white px-1.5 py-0.5 border border-gray-100 text-[6px] font-mono text-gray-300 uppercase tracking-tighter">
                {uni.acronym} // REF_0{i+1}
             </div>
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

        {/* Bottom Technical Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-50 group-hover:bg-[#D44531]/10 transition-colors" />
    </motion.div>
  )
}

export function TalentPipeline() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Light Blueprint Map Background */}
      <div className="absolute inset-x-0 inset-y-10 opacity-[0.25] pointer-events-none select-none">
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/World_map_blank_with_dots.svg" alt="World Map" className="w-full h-full object-cover grayscale opacity-30" />
           
           {/* Technical Beacons */}
           {UNIVERSITIES.map((uni, i) => (
               <div key={i} className={`absolute ${uni.coord} w-3 h-3 bg-[#D44531] rounded-full animate-pulse opacity-40 hidden md:block`} />
           ))}
      </div>

      {/* Background Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
         
         {/* Section Header */}
         <div className="text-center mb-28">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-gray-100 rounded-full mb-8 shadow-sm"
             >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D44531]" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Infrastructure</span>
             </motion.div>
             <h2 className="text-6xl md:text-8xl font-heading font-black text-gray-900 tracking-tighter mb-8 leading-none">
                 The Global <span className="text-[#D44531] italic">Pulse</span>
             </h2>
             <p className="text-xl text-gray-500 font-sans max-w-2xl mx-auto leading-relaxed">
                 A distributed network of excellence, connected through the world's leading academic institutions.
             </p>
         </div>

         {/* University Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {UNIVERSITIES.map((uni, i) => (
                <UniversityCard key={i} uni={uni} i={i} />
            ))}
         </div>
         
         {/* Stats Integration */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto border-t border-gray-100 pt-20">
             {[
                 { label: "Partner Campuses", value: "50+", code: "NET_ID_01" },
                 { label: "Countries Represented", value: "15+", code: "NET_ID_02" },
                 { label: "Acceptance Rate", value: "<1%", code: "NET_ID_03" },
                 { label: "Years of Excellence", value: "10+", code: "NET_ID_04" }
             ].map((stat, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="text-center group"
                 >
                     <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:text-[#D44531] transition-colors">{stat.value}</div>
                     <div className="text-[9px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                     <div className="text-[8px] font-mono text-gray-200 group-hover:text-[#D44531]/20 transition-colors uppercase">{stat.code}</div>
                 </motion.div>
             ))}
         </div>

      </div>
    </section>
  )
}
