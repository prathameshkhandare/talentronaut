"use client"
import { motion } from "framer-motion"

export function Clouds({ className }: { className?: string }) {
  // We use multiple layers of rounded divs (ovals) to create a soft cloud effect.
  // Using pure CSS border-radius and blur is often smoother and easier to style than SVGs for this specific "soft" look.
  
  return (
    <div className={`relative w-full h-full ${className}`}>
        {/* Layer 1: Back Row (Distinct layers) */}
        <div className="absolute bottom-0 left-0 right-0 h-64 w-full opacity-100">
            {/* Big Left Cloud */}
            <motion.div 
                className="absolute -left-20 bottom-0 h-48 w-96 rounded-[50%] bg-pink-300 blur-2xl"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Big Right Cloud - Made darker for contrast */}
            <motion.div 
                className="absolute -right-20 bottom-10 h-56 w-[500px] rounded-[50%] bg-rose-300 blur-2xl"
                animate={{ x: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Center Deep Cloud */}
            <div className="absolute left-[30%] bottom-0 h-40 w-[40%] rounded-[50%] bg-pink-400 blur-xl opacity-80" />
        </div>

        {/* Layer 2: Front Row (Pure White, sharper but still soft) - To cover Rocket base */}
        {/* This part might need to be rendered separately if we want the rocket IN BETWEEN. 
            For now, I'll export a separate component for the 'Front' clouds if needed, 
            or we can just use this component as the 'Back' clouds and have another instance for 'Front'.
            
            Let's make this component flexible. If it's the "Front" layer, we add the white puffs.
        */}
    </div>
  )
}

export function CloudFront({ className }: { className?: string }) {
    return (
        <div className={`absolute bottom-0 w-full flex items-end justify-center pointer-events-none ${className}`}>
             <motion.div 
                className="w-full h-32 bg-white blur-xl opacity-90 rounded-t-[50%]"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
             />
             {/* Puffs */}
             <motion.div 
                className="absolute -bottom-10 left-[10%] w-64 h-64 bg-white rounded-full blur-2xl opacity-80"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute -bottom-10 right-[15%] w-80 h-80 bg-white rounded-full blur-2xl opacity-80"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
             />
             
             {/* Center Overlay to really hide the bottom */}
             <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-white via-white to-transparent" />
        </div>
    )
}
