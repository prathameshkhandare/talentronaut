"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  
  // Decide which loading style to use
  const isLandingPage = pathname === "/"

  // Progress simulation
  useEffect(() => {
    if (!isVisible) return
    
    // Landing page has a longer, more premium load feel (5.5s total matching original requirement)
    // Other pages load much faster (0.8s)
    const duration = isLandingPage ? 5500 : 800
    const intervalTime = duration / 100
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, intervalTime)
    
    return () => clearInterval(interval)
  }, [isVisible, isLandingPage])

  // Prevent scrolling when loading
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isVisible])

  // Complete loading when progress hits 100
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        if (onComplete) onComplete()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isLandingPage ? (
            /* Layout 1: Landing Page (Premium Cinematic Loader) */
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 3, opacity: 0, rotateY: 0 }}
                animate={{
                  scale: [3, 1, 1, 20],
                  rotateY: [0, 0, 1440, 1600],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 5.5,
                  times: [0, 0.15, 0.8, 1],
                  ease: "easeInOut",
                }}
                className="relative w-32 h-32 md:w-48 md:h-48"
              >
                <Image
                  src="/logos/logo.svg"
                  alt="Loading..."
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              
              {/* Subtle visual cues for progress beyond the main logo animation */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-[-60px] flex flex-col items-center gap-2"
              >
                 <div className="w-32 h-[1px] bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#D44531]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[8px] font-mono font-bold text-gray-300 uppercase tracking-[0.4em]">
                    Synchronizing Environment
                  </span>
              </motion.div>
            </div>
          ) : (
            /* Layout 2: Other Pages (Minimal Dot Dot Loader) */
            <div className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-16 h-16"
              >
                <Image
                  src="/logos/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-widest font-heading">Loading</span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
                    className="text-sm font-bold text-[#D44531]"
                  >
                    ...
                  </motion.span>
                </div>

                <div className="w-32 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#D44531]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
