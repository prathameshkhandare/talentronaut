"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"
import { Counter } from "@/components/ui/Counter"
import { Play, Settings, TrendingUp, CheckCircle, Lightbulb, FileText, Scan } from "lucide-react"

// Animation Variants
const leftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" } as any
  }
} as any;

const rightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" } as any
  }
} as any;

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } as any
  }
} as any;

export function BentoGrid() {
  return (
    <section className="bg-[#F9F9F9] container mx-auto px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">
        
        {/* --- LEFT COLUMN GROUP --- */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Card 1: 40 Qualified Experts */}
            <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-64 p-6 bg-white shadow-lg border border-[#FCD2AD]/50 relative overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 rounded-[2rem]">
                    <div>
                        <h3 className="text-5xl font-normal text-[#D44531]">
                           <Counter from={30} to={40} duration={1.5} />
                        </h3>
                        <p className="text-sm text-[#80807D] mt-2 font-medium">Qualified<br/>experts</p>
                    </div>
                    
                    {/* Abstract Orbit/Avatars */}
                    <div className="absolute right-[-20%] top-[-20%] h-full w-full pointer-events-none">
                        <div className="absolute top-1/2 right-0 w-64 h-64 border border-[#FCD2AD]/30 rounded-full" />
                        <div className="absolute top-1/3 right-10 w-48 h-48 border border-[#FCD2AD]/30 rounded-full" />
                        
                        {/* Avatar Placeholders with Orange Borders */}
                        <div className="absolute top-[40%] right-[30%] w-8 h-8 rounded-full bg-[#FCD2AD] border-2 border-white overflow-hidden shadow-sm">
                            <img src="https://i.pravatar.cc/100?img=1" alt="Expert" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-[60%] right-[60%] w-6 h-6 rounded-full bg-[#FCD2AD] border-2 border-white overflow-hidden shadow-sm">
                             <img src="https://i.pravatar.cc/100?img=5" alt="Expert" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <button className="h-8 w-8 rounded-full border border-[#FCD2AD] flex items-center justify-center text-[#D44531] hover:bg-[#FCD2AD]/20 transition-colors z-10">
                        +
                    </button>
                </Card>
            </motion.div>

            {/* Card 4: 86% Success (Orange Gradient) */}
            <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                 <Card className="h-64 p-6 bg-gradient-to-br from-[#D44531] to-[#E65A45] text-white relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-[2rem]">
                    {/* Texture Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FCD2AD] blur-3xl rounded-full opacity-50" />
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                        <h3 className="text-6xl font-light">
                           <Counter from={75} to={86} duration={1.5} suffix="%" />
                        </h3>
                        <p className="text-base font-medium opacity-90 mt-2 text-[#FCD2AD]">Success Fee<br/>for Experts</p>
                    </div>

                    {/* Wave/Mesh SVG */}
                    <svg className="absolute bottom-0 left-0 w-full h-32 opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
                         <path fill="#fff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                 </Card>
            </motion.div>
        </div>

        {/* --- MIDDLE COLUMN GROUP --- */}
        <div className="md:col-span-4 flex flex-col gap-6 -mt-0 md:-mt-12">
             {/* Card 2: Convenient App */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-[26rem] p-0 bg-white overflow-hidden relative border border-[#FCD2AD]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 group rounded-[2rem]">
                    <img 
                      src="/brain/93ef0435-7e17-4fcb-aaa7-2a3fc8e6ce06/bento_app_user_1769667481180.png" 
                      alt="App Preview" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 z-10">
                        <span className="text-white text-lg font-medium tracking-wide drop-shadow-md bg-[#D44531]/80 px-4 py-1 rounded-full backdrop-blur-sm">Convenient App</span>
                    </div>
                </Card>
             </motion.div>

              {/* Card 5: Comprehensive Consultation (Peach Gradient) */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                 <Card className="h-[22rem] p-6 bg-gradient-to-br from-[#FCD2AD] to-[#FFDAB9] text-[#D44531] relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center rounded-[2rem]">
                    
                    <span className="relative z-10 text-xs font-bold uppercase tracking-widest mb-6 opacity-70">#advantages</span>
                    
                    <div className="relative z-10 flex gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white text-[#D44531] flex items-center justify-center shadow-sm">
                            <FileText size={20} />
                        </div>
                         <div className="w-14 h-14 rounded-full bg-[#D44531] text-white flex items-center justify-center shadow-lg -mt-2">
                            <Scan size={24} />
                        </div>
                         <div className="w-12 h-12 rounded-full bg-white text-[#D44531] flex items-center justify-center shadow-sm">
                            <Lightbulb size={20} />
                        </div>
                    </div>

                    <h3 className="relative z-10 text-2xl font-bold leading-tight">
                        Comprehensive<br/>Consultation
                    </h3>
                 </Card>
            </motion.div>
        </div>


        {/* --- RIGHT COLUMN GROUP --- */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Header: Why Us? */}
            <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-end pr-4 pt-4">
                 <h2 className="text-6xl md:text-7xl lg:text-8xl tracking-tighter text-[#1A1A1A] font-bold">
                    Why <span className="font-serif font-light text-[#D44531]">Us?</span>
                 </h2>
            </motion.div>

             {/* Card 3: 198 Materials (Peach/Orange) */}
             <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex gap-4 items-center">
                <Card className="h-32 flex-1 bg-[#FCD2AD] p-6 relative overflow-hidden rounded-[2rem] border-none flex items-center justify-between shadow-lg">
                     <div className="relative z-10 text-[#D44531]">
                        <span className="text-5xl font-light block">
                           <Counter from={150} to={198} duration={2} />
                        </span>
                     </div>
                     <span className="relative z-10 text-[#D44531] text-right text-sm font-bold leading-tight max-w-[4rem]">Materials Available</span>
                </Card>

                {/* Play Button */}
                <div className="w-20 h-20 shrink-0 rounded-full border border-[#FCD2AD] bg-white flex items-center justify-center relative cursor-pointer hover:scale-105 transition-transform shadow-sm group">
                     <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin-slow opacity-20">
                        <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
                        <text className="text-[10px] uppercase font-medium tracking-widest text-[#D44531]">
                            <textPath href="#curve">Explore our process • Explore our process •</textPath>
                        </text>
                     </svg>
                     <Play className="w-6 h-6 text-[#D44531] ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                </div>
             </motion.div>

              {/* Card 6: Features Lead the Way */}
             <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-64 bg-[#F9F9F9] p-8 relative overflow-hidden flex flex-col justify-center border border-[#FCD2AD] shadow-lg rounded-[2rem]">
                     <div className="relative z-10 max-w-[60%]">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#80807D] mb-2">Driving Innovation</p>
                        <h3 className="text-3xl text-[#1A1A1A] leading-none tracking-tight">
                            Our Platform's<br/>
                            Features <span className="font-serif italic font-light text-[#D44531]">Lead the Way</span>
                        </h3>
                     </div>
                     
                     {/* Top Left Icons */}
                     <div className="absolute top-6 left-6 flex gap-2">
                         <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#FCD2AD]/30">
                            <Settings size={14} className="text-[#D44531]" />
                         </div>
                         <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#FCD2AD]/30">
                            <TrendingUp size={14} className="text-[#D44531]" />
                         </div>
                     </div>
                </Card>
             </motion.div>
        </div>

      </div>
    </section>
  )
}

