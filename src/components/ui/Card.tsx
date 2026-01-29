"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{ scale: 1.02, y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.04)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={cn(
      "rounded-card border border-white/40 bg-white text-text-primary shadow-[0_20px_40px_rgba(0,0,0,0.04)] p-10 backdrop-blur-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
