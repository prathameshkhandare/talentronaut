"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { HandArrowRight, HandUnderline, HandStar, HandCircle } from "@/components/ui/HandDrawn"

const products = [
  {
    name: "LinksUs",
    description: "Your only AI-driven pre-industry experience platform.",
    color: "from-[#00F0FF] to-[#0099FF]",
    bg: "bg-[#00F0FF]/10",
    border: "hover:border-[#00F0FF]"
  },
  {
    name: "FirstStep",
    description: "Find Your Perfect Career Match with AI.",
    color: "from-[#D4FF00] to-[#99CC00]",
    bg: "bg-[#D4FF00]/10",
     border: "hover:border-[#D4FF00]"
  },
  {
    name: "SpazorLabs",
    description: "Empowering SMEs with Customized LLMs.",
    color: "from-[#FF0099] to-[#CC0066]",
    bg: "bg-[#FF0099]/10",
     border: "hover:border-[#FF0099]"
  },
  {
    name: "AiMailer",
    description: "AI-powered email management platform.",
    color: "from-[#00FF99] to-[#00CC66]",
    bg: "bg-[#00FF99]/10",
     border: "hover:border-[#00FF99]"
  },
  {
    name: "XMetX",
    description: "Decentralized Skill Exchange for the Web3 Era.",
    color: "from-[#9D00FF] to-[#6600CC]",
    bg: "bg-[#9D00FF]/10",
     border: "hover:border-[#9D00FF]"
  },
  {
    name: "EventSphere",
    description: "Discover and Experience Extraordinary Events.",
    color: "from-[#FF5500] to-[#CC3300]",
    bg: "bg-[#FF5500]/10",
     border: "hover:border-[#FF5500]"
  }
]

export function Products() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal scroll effect for cards
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" id="products">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title Section */}
        <div className="absolute top-10 left-10 md:top-20 md:left-20 z-10 max-w-md">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight relative">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] to-[#E65A45]">Products</span>
                <HandCircle className="absolute -top-4 -right-12 w-24 h-24 text-[#FCD2AD] rotate-12 -z-10 opacity-50" />
            </h2>
            <p className="mt-8 text-lg text-gray-500 font-medium">
                Innovative digital solutions powered by cutting-edge technology to transform your workflow.
            </p>
            <HandArrowRight className="w-24 h-12 text-gray-400 mt-4 rotate-[15deg] ml-10" />
        </div>

        {/* Scrolling Cards */}
        <motion.div style={{ x }} className="flex gap-8 pl-[5vw] pt-32 md:pt-0">
          {products.map((product, index) => (
            <div 
                key={index} 
                className={`relative flex-shrink-0 w-[85vw] md:w-[600px] h-[50vh] md:h-[60vh] rounded-[3rem] p-10 flex flex-col justify-end overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] border-2 border-transparent ${product.border} bg-white`}
            >
                {/* Gradient Background blob - Stronger */}
                <div className={`absolute top-[-20%] right-[-20%] w-[90%] h-[90%] rounded-full bg-gradient-to-br ${product.color} opacity-20 blur-[80px] pointer-events-none`} />
                
                {/* Content */}
                <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg text-white`}>
                        <span className="font-bold text-2xl">{product.name[0]}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{product.name}</h3>
                    <p className="text-xl text-gray-600 mb-8 max-w-sm">{product.description}</p>
                    
                    <button className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors group shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                        Explore Product
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Decorative Number */}
                <div className="absolute top-6 right-10 flex flex-col items-center">
                    <span className="text-9xl font-bold text-gray-900/5 select-none italic">0{index + 1}</span>
                    <HandUnderline className="w-20 text-gray-900/10 -mt-4 opacity-50" />
                </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
