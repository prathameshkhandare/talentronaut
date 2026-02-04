"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Smartphone, Cpu, Box, Cloud, ArrowRight } from 'lucide-react';

const TECHNICAL_SERVICES = [
  {
    title: "Web & Software Development",
    description: "At Talentronaut, we design dynamic and scalable digital solutions tailored to your business needs. Our expertise in modern tech stacks enables us to build robust web applications, APIs, and enterprise software that drive efficiency and growth.",
    icon: Monitor,
    accent: "bg-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Experience seamless connectivity with our native and cross-platform mobile app solutions for iOS and Android. We transform visionary concepts into engaging, high-performance applications that keep your audience connected on the go.",
    icon: Smartphone,
    accent: "bg-purple-500",
  },
  {
    title: "Blockchain & Web3 Solutions",
    description: "Step into the future with our Blockchain & Web3 offerings. We develop secure smart contracts, decentralized applications, NFT platforms, and comprehensive blockchain integrations, empowering your business with enhanced transparency and trust.",
    icon: Box,
    accent: "bg-orange-500",
  },
  {
    title: "AI-driven Solutions",
    description: "Harness the potential of intelligent technology with our AI-driven solutions. Leveraging machine learning, natural language processing, and computer vision, we create smart applications that enable data-driven decisions and streamline your operations.",
    icon: Cpu,
    accent: "bg-emerald-500",
  },
  {
    title: "SaaS Development",
    description: "Reimagine your service delivery with our end-to-end SaaS development. We build cloud-based products with advanced subscription management and insightful user analytics, ensuring scalable solutions that evolve alongside your business.",
    icon: Cloud,
    accent: "bg-rose-500",
  }
];

export function TechnicalServiceGrid() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal movement based on scroll progress
  // Increased to -60% to ensure the 5th card fully clears the right edge
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-cream/50">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section Heading */}
        <div className="container mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-charcoal mb-4">
              Digital <span className="text-coral italic">Capabilities.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl font-medium">
              Scroll down to explore our specialized engineering domains.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Moving Track */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-[10vw]">
          {TECHNICAL_SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[450px] group relative"
            >
              <div className="h-full bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-coral/5 group-hover:-translate-y-2 flex flex-col min-h-[480px]">
                <div className={`w-16 h-16 rounded-2xl ${service.accent}/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className={`w-8 h-8 text-charcoal group-hover:text-coral transition-colors`} />
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-black text-charcoal mb-6 leading-tight group-hover:text-coral transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed mb-10 flex-grow font-medium">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-coral font-black text-xs uppercase tracking-widest group/link cursor-pointer mt-auto">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent opacity-50 -z-10 rounded-tr-[2.5rem]" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
             <div className="h-1 w-32 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-coral shadow-[0_0_10px_#e85c4a]"
                    style={{ scaleX: scrollYProgress, originX: 0 }}
                />
             </div>
             <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Mastery</span>
        </div>
      </div>
    </section>
  );
}
