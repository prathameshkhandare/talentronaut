"use client"
import { motion } from "framer-motion"
import { Hero } from "@/components/sections/Hero";
import { ServiceHub } from "@/components/sections/ServiceHub";
import { TrustedLeaders } from "@/components/sections/TrustedLeaders";
import { About } from "@/components/sections/About";
import { Impact } from "@/components/sections/Impact";
import { Footer } from "@/components/sections/Footer";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-0 pb-0"
    >
      <Hero />

      <motion.div variants={sectionVariants}>
        <ServiceHub />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <TrustedLeaders />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Impact />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  )
}
