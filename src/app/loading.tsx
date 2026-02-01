"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <motion.div
        initial={{ scale: 3, opacity: 0, rotateY: 0 }}
        animate={{
          scale: [3, 1, 1, 20],
          rotateY: [0, 0, 1440, 1600],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4.5,
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
    </div>
  );
}
