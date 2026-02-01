"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Target, Lightbulb, Medal, ArrowUpRight, Sparkles } from "lucide-react"

export function About() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission")

  const tabs = [
    { id: "mission", label: "MI", fullLabel: "Mission", icon: Target },
    { id: "vision", label: "VI", fullLabel: "Vision", icon: Lightbulb },
    { id: "values", label: "VA", fullLabel: "Values", icon: Medal },
  ] as const

  const tabContent = {
    mission: {
        title: "Our Mission",
        subtitle: "The Goal",
        text: "To empower businesses with cutting-edge technology solutions that drive sustainable growth. We bridge the gap between innovative ideas and real-world impact."
    },
    vision: {
        title: "Our Vision",
        subtitle: "The Future",
        text: "To be the catalyst in the global digital transformation landscape, pioneering next-generation technologies that shape the future of business operations."
    },
    values: {
        title: "Our Values",
        subtitle: "The Core",
        text: "Innovation at our core, integrity in our actions. We believe in transparent partnerships and creating technology solutions that anticipate tomorrow's challenges."
    }
  }

  return (
    <section className="relative py-24 md:py-32 bg-[#FFFBF8] overflow-hidden" id="about">
      
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
         style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px)', backgroundSize: '25% 100%' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Header - Clean & Structured */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-gray-200 pb-8">
            <div className="max-w-3xl">
                {/* Premium Badge Component for 'About Talentronaut' */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D44531]/10 border border-[#D44531]/20 mb-6 w-fit">
                    <Sparkles className="w-3 h-3 text-[#D44531]" />
                    <span className="text-[#D44531] font-bold text-[10px] uppercase tracking-[0.2em]">About Talentronaut</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl text-[#4A4A46] leading-[1.1] md:leading-[1.1] -ml-1">
                    Pioneering <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] to-[#E65A45] font-serif italic">
                        Digital Innovation
                    </span>
                </h2>
            </div>
            <div className="md:text-right max-w-sm ml-auto">
                <p className="text-lg text-[#4A4A46]/70 font-medium">
                    Architects of the future. <br/>
                    We don't just write code, we engineer legacy.
                </p>
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* 2. Left: Our Story (Editorial Text) */}
            <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                    <h3 className="text-3xl font-serif italic text-[#4A4A46]">The Narrative</h3>
                    <div className="space-y-6 text-[#4A4A46]/80 text-lg leading-relaxed text-justify">
                        <p>
                            <span className="text-5xl float-left mr-3 mt-[-10px] font-serif text-[#D44531]">F</span>ounded with a singular vision to bridge the gap between cutting-edge technology and practical business solutions, Talentronaut has emerged as the trusted partner for enterprises seeking meaningful digital transformation.
                        </p>
                        <p>
                            From our headquarters in Chennai to our global footprint, we define trends. Our journey began with a simple belief: that every business deserves access to world-class architecture.
                        </p>
                    </div>
                </div>

                {/* Micro-Metrics */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                    <div>
                        <span className="block text-4xl font-serif text-[#D44531]">50+</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Projects</span>
                    </div>
                    <div>
                        <span className="block text-4xl font-serif text-[#D44531]">100%</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Success</span>
                    </div>
                </div>
            </div>

            {/* 3. Right: The Kinetic Deck (Interactive Stack) */}
            <div className="lg:col-span-7 relative min-h-[500px] flex items-center justify-center lg:justify-end perspective-1000">
                
                <div className="relative w-full max-w-md h-[450px]">
                    {/* Background "Placement" outline */}
                    <div className="absolute inset-0 border-2 border-dashed border-[#D44531]/10 rounded-[2rem] transform rotate-3 scale-95 opacity-50"></div>

                    <AnimatePresence mode="popLayout">
                        {tabs.map((tab, index) => {
                            const isActive = activeTab === tab.id;
                            
                            const isMission = tab.id === 'mission';
                            const isVision = tab.id === 'vision';
                            const isValues = tab.id === 'values';
                            
                            let zIndex = 0;
                            let yOffset = 0;
                            let xOffset = 0;
                            let rotate = 0;
                            let scale = 1;
                            let brightness = 1;

                            if (isActive) {
                                zIndex = 30;
                                yOffset = 0;
                                xOffset = 0;
                                rotate = 0;
                                scale = 1;
                                brightness = 1;
                            } else {
                                // Stack logic with increased visibility for interaction
                                zIndex = 10; 
                                scale = 0.95;
                                brightness = 0.95; // Dim inactive cards slighty
                                
                                // Specific offsets - Increased spacing for clearer click targets
                                if (activeTab === 'mission') {
                                     if(isVision) { rotate = 6; yOffset = 15; xOffset = 15; zIndex=20; }
                                     if(isValues) { rotate = -6; yOffset = 30; xOffset = -15; zIndex=10; }
                                }
                                if (activeTab === 'vision') {
                                     if(isValues) { rotate = 6; yOffset = 15; xOffset = 15; zIndex=20; }
                                     if(isMission) { rotate = -6; yOffset = 30; xOffset = -15; zIndex=10; }
                                }
                                if (activeTab === 'values') {
                                     if(isMission) { rotate = 6; yOffset = 15; xOffset = 15; zIndex=20; }
                                     if(isVision) { rotate = -6; yOffset = 30; xOffset = -15; zIndex=10; }
                                }
                            }

                            return (
                                <motion.div
                                    key={tab.id}
                                    onClick={() => {
                                        if (isActive) {
                                            const nextIndex = (index + 1) % tabs.length;
                                            setActiveTab(tabs[nextIndex].id);
                                        } else {
                                            setActiveTab(tab.id);
                                        }
                                    }}
                                    layoutId={tab.id}
                                    animate={{ 
                                        zIndex, 
                                        y: yOffset,
                                        x: xOffset, 
                                        rotate: rotate, 
                                        scale,
                                        filter: `brightness(${brightness})`
                                    }}
                                    whileHover={!isActive ? { scale: 0.98, translateY: -5 } : {}}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className={`absolute inset-0 bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 flex flex-col justify-between border border-gray-100 transition-colors duration-300 cursor-pointer ${isActive ? '' : 'hover:border-[#FCD2AD]'}`}
                                    style={{ transformOrigin: "bottom center" }}
                                >
                                    {/* Card Header */}
                                    <div className="flex justify-between items-start">
                                        <div className="w-12 h-12 rounded-full bg-[#FFFBF8] flex items-center justify-center border border-gray-100">
                                            <tab.icon size={20} className="text-[#D44531]" />
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">
                                                0{index + 1}
                                            </span>
                                            <span className={`block w-2 h-2 rounded-full ml-auto ${isActive ? "bg-[#D44531]" : "bg-gray-200"}`}></span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-[#D44531] font-serif italic text-lg">{tabContent[tab.id].subtitle}</span>
                                            <h3 className="text-4xl text-[#4A4A46] mt-1 mb-2">{tabContent[tab.id].title}</h3>
                                        </div>
                                        <p className="text-[#4A4A46]/70 leading-relaxed font-medium">
                                            {tabContent[tab.id].text}
                                        </p>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="pt-6 border-t border-dashed border-gray-200 flex justify-between items-center opacity-60">
                                        <span className="text-xs font-mono text-gray-400">TLN-CARD-0{index + 1}</span>
                                        <ArrowUpRight size={16} className="text-[#4A4A46]" />
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
                
                {/* Instruction Label */}
                <div className="absolute -bottom-16 right-0 md:right-10 text-right">
                    <span className="text-[#D44531] font-serif italic text-sm animate-bounce inline-block">Tap cards to shuffle</span>
                </div>

            </div>

        </div>

         {/* 4. Why Us - Horizontal Badge Scroll */}
        <div className="mt-32 pt-10 border-t border-gray-200">
             <div className="flex flex-wrap md:flex-nowrap justify-between gap-6">
                 {[
                    "Global Delivery",
                    "Top 1% Talent",
                    "Agile & Rapid",
                    "AI Innovations",
                    "Bespoke Tech"
                 ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
                         <CheckCircle2 size={18} className="text-[#D44531]" />
                         <span className="text-lg font-serif text-[#4A4A46]">{item}</span>
                     </div>
                 ))}
             </div>
        </div>

      </div>
    </section>
  )
}
