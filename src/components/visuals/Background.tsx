"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Background() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const cloudsY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <div ref={ref} className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-white">
      {/* Sun Gradient */}
      <motion.div 
        style={{ y: sunY }}
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-rose-300 via-lavender-300 to-mint-300 opacity-60 blur-[100px]" 
      />

      {/* Clouds Layer */}
      <motion.div style={{ y: cloudsY }} className="absolute inset-0 opacity-40">
        <svg className="absolute -left-[10%] top-[10%] w-[40%] text-gray-100" viewBox="0 0 200 100" fill="currentColor">
          <path d="M40,60 Q50,10 90,40 Q130,10 160,50 Q190,40 190,80 Q190,110 150,110 L50,110 Q10,110 10,80 Q10,50 40,60" />
        </svg>
        <svg className="absolute -right-[5%] top-[40%] w-[35%] text-gray-100" viewBox="0 0 200 100" fill="currentColor">
          <path d="M40,60 Q50,10 90,40 Q130,10 160,50 Q190,40 190,80 Q190,110 150,110 L50,110 Q10,110 10,80 Q10,50 40,60" />
        </svg>
        <svg className="absolute left-[30%] bottom-[5%] w-[30%] text-gray-100" viewBox="0 0 200 100" fill="currentColor">
           <path d="M40,60 Q50,10 90,40 Q130,10 160,50 Q190,40 190,80 Q190,110 150,110 L50,110 Q10,110 10,80 Q10,50 40,60" />
        </svg>
      </motion.div>
    </div>
  )
}
