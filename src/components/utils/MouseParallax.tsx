"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

interface MouseParallaxProps {
  children: ReactNode;
  strength?: number; // How much it moves (pixels)
  className?: string;
}

export function MouseParallax({ children, strength = 20, className = "" }: MouseParallaxProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement using springs
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to center of the container (-1 to 1)
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const relativeX = (clientX - centerX) / (width / 2);
    const relativeY = (clientY - centerY) / (height / 2);

    x.set(relativeX * strength);
    y.set(relativeY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  );
}
