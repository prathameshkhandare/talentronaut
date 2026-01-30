"use client";

import { motion } from "framer-motion";

export const FluidGradient = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#1A1A1A]">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/90 to-[#2A1B18] z-0" />

      {/* Floating Blobs Container */}
      <div className="absolute inset-0 filter blur-[100px] opacity-60">
        
        {/* Blob 1: Orange - Moves Top Left to Center */}
        <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              y: ["-20%", "10%", "-20%"],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[#D44531] rounded-full mix-blend-screen opacity-40"
        />

        {/* Blob 2: Purple - Moves Bottom Right to Center */}
        <motion.div
            animate={{
              x: ["20%", "-20%", "20%"],
              y: ["20%", "-10%", "20%"],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-[#8B5CF6] rounded-full mix-blend-screen opacity-30"
        />

        {/* Blob 3: Peach - Moves Center */}
        <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#FCD2AD] rounded-full mix-blend-screen opacity-40"
        />
      </div>
      
      {/* Noise Texture for Texture/Grit */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay z-10" />
      
      {/* Grid Overlay for "Tech" feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10" />

    </div>
  );
};
