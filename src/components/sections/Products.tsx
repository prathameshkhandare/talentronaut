"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Sparkles, Box, Zap, Globe, Mail, Layers, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const products = [
  {
    id: "linksus",
    name: "LinksUs",
    tagline: "AI-Powered Career Ecosystem",
    description: "LinksUs is the AI-powered platform that acts as an ecosystem for organizations finding talent, and students or employees finding opportunities.",
    icon: Globe,
    status: "Beta",
    image: "/images/vectors/linksus.png",
    color: "#D44531",
    videoId: "rIsW6spE5i4",
    href: "https://www.linksus.in/"
  },
  {
    id: "firststep",
    name: "FirstStep",
    tagline: "AI Career Matching",
    description: "Find Your Perfect Career Match with AI. FirstStep uses advanced AI to analyze your skills, experience, and preferences to match you with your ideal career opportunities.",
    icon: Sparkles,
    status: "Live",
    image: "/images/vectors/firststep.png",
    color: "#E65A45",
    videoId: "3AY4mxPW0u8",
    href: "https://firststep.linksus.in/"
  },
  {
    id: "spazorlabs",
    name: "SpazorLabs",
    tagline: "Custom LLMs for SMEs",
    description: "Empowering SMEs with Customized LLMs. SpazorLabs builds tailored language models to automate workflows, boost efficiency, and drive smarter business decisions with AI-first solutions.",
    icon: Zap,
    status: "Alpha",
    image: "/images/vectors/spazorlabs.png",
    color: "#D44531",
    videoId: "W7-GG-_WvW0",
    href: "https://spazorlabs.linksus.in/"
  },
  {
    id: "aimailer",
    name: "AiMailer",
    tagline: "Intelligent Inbox Management",
    description: "AI-powered email management platform that streamlines your inbox with intelligent filtering, prioritization, and automated response suggestions to boost productivity.",
    icon: Mail,
    status: "Dev",
    image: "/images/vectors/aimailer.png",
    color: "#E65A45",
    videoId: "2-8IvWtwFDM",
    href: "https://v0-mail-managment-linksus.vercel.app/"
  },
  {
    id: "xmetx",
    name: "XMetX",
    tagline: "Web3 Skill Exchange",
    description: "Decentralized Skill Exchange for the Web3 Era. XMetX enables professionals to barter services securely using smart contracts, on-chain reputation (REP), and trustless deal flows—featuring advanced talent search, collaboration, and portfolio-driven matching.",
    icon: Box,
    status: "Concept",
    image: "/images/vectors/xmetx.png",
    color: "#D44531",
    videoId: "xEpq88CIl7U",
    href: "https://xmetx.netlify.app/"
  },
  {
    id: "eventsphere",
    name: "EventSphere",
    tagline: "Global Events",
    description: "Discover extraordinary local and global events. From tech conferences to creative workshops, find your community with EventSphere.",
    icon: Layers,
    status: "Live",
    image: "/images/vectors/eventsphere.png",
    color: "#E65A45",
    videoId: "8QvvNTgW2e4",
    href: "https://eventspherebookings.netlify.app/"
  }
]

// -----------------------------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------------------------
export function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
        nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#FAFAF9] overflow-hidden min-h-[800px] flex items-center" id="ecosystem">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FCD2AD]/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D44531]/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16 px-4 md:px-0">
             <div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#FCD2AD] shadow-sm mb-6"
                >
                    <div className="w-2 h-2 rounded-full bg-[#D44531] animate-pulse" />
                    <span className="text-xs font-bold text-[#D44531] uppercase tracking-[0.2em]">
                        Our Ecosystem
                    </span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-4xl leading-tight text-[#D44531]"
                >
                    Innovation Showcase.
                </motion.h2>
             </div>
             
             {/* Navigation Buttons */}
             <div className="hidden md:flex gap-4">
                <button 
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-[#D44531] hover:text-white hover:border-[#D44531] transition-all duration-300 shadow-sm"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-[#D44531] hover:text-white hover:border-[#D44531] transition-all duration-300 shadow-sm"
                >
                    <ChevronRight size={24} />
                </button>
             </div>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative h-[500px] w-full">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.2 }
                    }}
                    className="absolute inset-0 w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-center"
                >
                    {/* LEFT: VISUAL (Takes up more space now) */}
                    <div 
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="w-full lg:w-3/5 h-[300px] lg:h-full relative order-1 lg:order-2 group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D44531]/10 to-transparent rounded-[3rem] transform rotate-3 scale-95 opacity-50 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-100" />
                        
                        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border border-white/50">
                             <iframe 
                                className="absolute inset-0 w-full h-full pointer-events-none scale-[1.01]"
                                src={`https://www.youtube.com/embed/${products[activeIndex].videoId}?autoplay=1&mute=1&loop=1&playlist=${products[activeIndex].videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                             ></iframe>
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                        </div>
                    </div>

                    {/* RIGHT: CONTENT (Order 1 on desktop for left alignment feel, but visual draws eye first) */}
                    <div className="w-full lg:w-2/5 flex flex-col items-start order-2 lg:order-1 px-4 lg:px-0 z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="p-3 rounded-2xl bg-[#D44531]/10 text-[#D44531]">
                                {(() => {
                                    const Icon = products[activeIndex].icon;
                                    return <Icon size={32} />;
                                })()}
                            </div>
                            <span className="text-sm font-bold text-[#787979] uppercase tracking-widest">
                                {products[activeIndex].tagline}
                            </span>
                        </motion.div>

                        <motion.h3 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl lg:text-2xl text-[#4B4B4B] mb-6 tracking-tight"
                        >
                            {products[activeIndex].name}
                        </motion.h3>

                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-sm text-[#787979] leading-relaxed mb-10 max-w-md"
                        >
                            {products[activeIndex].description}
                        </motion.p>

                        <motion.a 
                            href={products[activeIndex].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 bg-[#D44531] text-white rounded-[1.5rem] font-bold text-sm overflow-hidden shadow-lg shadow-[#D44531]/30 inline-flex items-center"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Explore Platform
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-[#E65A45] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </motion.a>
                        
                         <div className="mt-12 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                 className="h-full bg-[#D44531]"
                                 initial={{ width: "0%" }}
                                 animate={{ width: isPaused ? undefined : "100%" }}
                                 transition={{ duration: 8, ease: "linear" }}
                                 key={`${activeIndex}-${isPaused}`} // Key change to re-trigger or pause
                              />
                         </div>

                    </div>

                </motion.div>
            </AnimatePresence>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="p-4 rounded-full bg-white shadow-md"><ChevronLeft/></button>
            <button onClick={nextSlide} className="p-4 rounded-full bg-white shadow-md"><ChevronRight/></button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-12">
            {products.map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setDirection(index > activeIndex ? 1 : -1);
                        setActiveIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "w-10 bg-[#D44531]" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  )
}
