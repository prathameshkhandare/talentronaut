"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          style={{ perspective: "1000px" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
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
            onAnimationComplete={() => setIsVisible(false)}
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
