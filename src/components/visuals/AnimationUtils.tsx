"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const useScrambleText = (text: string, duration: number = 2000, start: boolean = true) => {
  const [displayText, setDisplayText] = useState(text.split("").map(() => " ").join("")); // Start empty/space
  const [isMounted, setIsMounted] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    setIsMounted(true);
    if (!start) return; // Wait for signal

    let interval: NodeJS.Timeout;
    let step = 0;
    const totalSteps = 25; 
    const stepDuration = duration / totalSteps;

    interval = setInterval(() => {
      // If complete
      if (step >= totalSteps) {
        setDisplayText(text);
        clearInterval(interval);
        return;
      }

      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          // Reveal progressive
          if (index < (step / totalSteps) * text.length) {
            return char;
          }
           // Random char for unrevealed
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(scrambled);
      step++;
    }, stepDuration);

    return () => clearInterval(interval);
  }, [text, duration, start]);

  // Return text immediately if not mounted (SSR) to ensure SEO, but valid scrambled state on client
  return isMounted ? displayText : text; 
};

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // @ts-ignore
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Increased strength from 0.2 to 0.5 for noticeable pull
    setPosition({ x: middleX * 0.5, y: middleY * 0.5 }); 
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 100, damping: 10, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};
