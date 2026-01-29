"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Play } from "lucide-react"
import { Rocket } from "@/components/illustrations/Rocket"
import { Clouds, CloudFront } from "@/components/illustrations/Clouds"

export function Hero() {
  const { scrollY } = useScroll()
  
  // Parallax Text
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const textY = useTransform(scrollY, [0, 300], [0, -50])

  // Rocket Moves Up on Scroll
  const rocketY = useTransform(scrollY, [0, 800], [0, -400])
  const rocketScale = useTransform(scrollY, [0, 800], [1, 0.8])

  return (
    <section className="relative flex min-h-[120vh] flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-indigo-50/40 via-purple-50/40 to-white px-4 pt-32 text-center">
      
      {/* --- LAYER 1: THE SUN (Background) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-b from-rose-200 to-white blur-[80px] opacity-60 z-0 pointer-events-none" />

      {/* --- LAYER 2: BACK CLOUDS --- */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-[60vh] pointer-events-none">
          <Clouds className="w-full h-full" />
      </div>

      {/* --- CONTENT WRAPPER (Text) --- */}
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-30 flex flex-col items-center max-w-5xl mx-auto"
      >
          {/* Pill Toggle */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-2 py-1.5 backdrop-blur-md hover:bg-white/80 transition-colors cursor-pointer shadow-sm hover:shadow-md"
          >
            <span className="rounded-full bg-[#171717] px-3 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">New</span>
            <span className="px-2 text-xs font-medium text-gray-600">Talentronaut 2.0 is live</span>
            <ArrowRight className="h-3 w-3 text-gray-400" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl font-light tracking-tight text-gray-900 sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Start your <br />
            <span className="font-serif italic text-gray-900 font-normal">Growth</span> journey
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-xl text-lg text-gray-600 sm:text-xl font-light"
          >
            Navigate your career with precision. Expert mentorship and personalized paths designed for your success.
          </motion.p>
          
           {/* CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row pb-12 z-40"
          >
            <Button variant="solidCharcoal" size="lg" className="rounded-full px-8">Start to Grow</Button>
            <Button variant="transparentGhost" size="lg" className="group gap-2 rounded-full px-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white group-hover:bg-black/5 transition-colors">
                    <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                Explore Possibilities
            </Button>
          </motion.div>
      </motion.div>

      {/* --- LAYER 3: ROCKET (Middle-Top) --- */}
      <motion.div
        style={{ y: rocketY, scale: rocketScale }}
        className="relative z-20 -mt-24 h-64 w-64 md:h-[450px] md:w-[450px]"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
         {/* Floating Animation Wrapper */}
         <motion.div
            animate={{ 
                y: [-15, 0, -15],
                rotate: [1, -1, 1]
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="w-full h-full"
         >
             <Rocket className="h-full w-full drop-shadow-2xl" />
         </motion.div>
      </motion.div>

      {/* --- LAYER 4: FRONT CLOUDS (Top Layer) --- */}
      <div className="absolute bottom-0 left-0 right-0 z-50 w-full h-[40vh] pointer-events-none">
          <CloudFront className="w-full h-full" />
      </div>

    </section>
  )
}

