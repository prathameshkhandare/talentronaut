"use client";

import { motion, Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.5, type: "spring", duration: 2, bounce: 0 },
      opacity: { delay: i * 0.5, duration: 0.01 }
    }
  })
};

export function OrganicGrowthChart({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 100"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {/* Hand-drawn axis */}
      <motion.path
        d="M10 10 V90 H190"
        fill="none"
        stroke="#D44531" // Primary Orange
        strokeWidth="2"
        strokeLinecap="round"
        custom={0}
        variants={draw}
      />
      {/* Jagged growth line */}
      <motion.path
        d="M10 90 Q 30 80, 50 60 T 90 70 T 130 40 T 190 10"
        fill="none"
        stroke="#FCD2AD" // Peach
        strokeWidth="3"
        strokeLinecap="round"
        custom={1}
        variants={draw}
      />
      {/* Arrow head */}
      <motion.path
        d="M180 15 L190 10 L185 20"
        fill="none"
        stroke="#FCD2AD"
        strokeWidth="2"
        strokeLinecap="round"
        custom={2}
        variants={draw}
      />
    </motion.svg>
  );
}

export function OrganicBulb({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 120"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {/* Bulb shape */}
      <motion.path
        d="M30 80 C 30 80, 10 60, 10 40 C 10 15, 30 0, 50 0 C 70 0, 90 15, 90 40 C 90 60, 70 80, 70 80"
        fill="none"
        stroke="#FCD2AD" // Peach
        strokeWidth="2"
        strokeLinecap="round"
        custom={0}
        variants={draw}
      />
      {/* Base */}
      <motion.path
        d="M30 80 L35 100 L65 100 L70 80"
        fill="none"
        stroke="#80807D" // Tertiary Gray
        strokeWidth="2"
        strokeLinecap="round"
        custom={1}
        variants={draw}
      />
      {/* Screw threads */}
      <motion.path
        d="M32 85 H68 M33 90 H67 M34 95 H66"
        fill="none"
        stroke="#80807D"
        strokeWidth="1.5"
        strokeLinecap="round"
        custom={2}
        variants={draw}
      />
      {/* Glow lines */}
      <motion.path
        d="M10 20 L0 15 M90 20 L100 15 M50 -10 L50 -20"
        fill="none"
        stroke="#D44531" // Primary
        strokeWidth="2"
        strokeLinecap="round"
        custom={3}
        variants={draw}
      />
    </motion.svg>
  );
}

export function OrganicConnections({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {/* Central Node */}
      <motion.circle
        cx="100" cy="100" r="10"
        fill="none"
        stroke="#D44531"
        strokeWidth="2"
        custom={0}
        variants={draw}
      />
      {/* Satellite Nodes */}
      <motion.circle cx="40" cy="40" r="6" stroke="#FCD2AD" strokeWidth="2" fill="none" custom={1} variants={draw} />
      <motion.circle cx="160" cy="50" r="8" stroke="#FCD2AD" strokeWidth="2" fill="none" custom={1.5} variants={draw} />
      <motion.circle cx="150" cy="150" r="7" stroke="#FCD2AD" strokeWidth="2" fill="none" custom={2} variants={draw} />
      <motion.circle cx="50" cy="160" r="5" stroke="#FCD2AD" strokeWidth="2" fill="none" custom={2.5} variants={draw} />
      
      {/* Connection Lines (Dashed/Rough) */}
      <motion.path
        d="M90 90 L45 45"
        stroke="#80807D"
        strokeWidth="1"
        strokeDasharray="4 4"
        custom={3}
        variants={draw}
      />
      <motion.path
        d="M110 95 L155 55"
        stroke="#80807D"
        strokeWidth="1"
        strokeDasharray="4 4"
        custom={3.5}
        variants={draw}
      />
      <motion.path
        d="M105 110 L145 145"
        stroke="#80807D"
        strokeWidth="1"
        strokeDasharray="4 4"
        custom={4}
        variants={draw}
      />
      <motion.path
        d="M90 105 L55 155"
        stroke="#80807D"
        strokeWidth="1"
        strokeDasharray="4 4"
        custom={4.5}
        variants={draw}
      />
    </motion.svg>
  );
}
