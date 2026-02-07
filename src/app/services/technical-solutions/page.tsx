"use client";

import React, { useState } from 'react';
import { ServiceLayout } from '@/components/services/shared/ServiceLayout';

import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { CTA } from '@/components/services/shared/CTA';
import { FAQ } from '@/components/services/shared/FAQ';
import { TestimonialSlider } from '@/components/services/shared/TestimonialSlider';
import { BlueprintProcessMap } from '@/components/services/ui/BlueprintProcessMap';
import { TechMarquee } from '@/components/services/ui/TechMarquee';
import { ArchitecturalGrid } from '@/components/services/ui/ArchitecturalGrid';
import { ProjectShowcase } from '@/components/services/ui/ProjectShowcase';
import { ContactModal } from '@/components/ui/ContactModal';
import { TechnicalServiceGrid } from '@/components/services/ui/TechnicalServiceGrid';
import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    title: "Discovery & Blueprint",
    description: "Every great structure starts with a vision. We dive deep into your operational potential, mapping out a technical blueprint that aligns perfectly with your scaling ambitions. We don't just write code; we architect success.",
  },
  {
    title: "Architecture & Prototyping",
    description: "Before laying the foundation, we design the structural integrity. We create interactive prototypes and define the system architecture, ensuring every component is designed for scalability and performance from day one.",
  },
  {
    title: "Core Engineering",
    description: "Our diverse team of engineers constructs your digital foundation using clean, scalable code. We prioritize resilience and modularity, ensuring your system can adapt to market shifts without needing a teardown.",
  },
  {
    title: "Quality Assurance",
    description: "Perfection is in the details. We subject every feature to rigorous stress testing, security audits, and performance optimization. Nothing leaves our hangar without meeting the highest standards of stability.",
  },
  {
    title: "Deployment & Evolution",
    description: "The final reveal is just the beginning. We manage a seamless launch and provide continuous monitoring and evolution, ensuring your digital ecosystem grows and adapts alongside your business.",
  }
];

const FAQS = [
  { question: "How scalable are your solutions?", answer: "Designed for infinite growth. We use microservices architectures and cloud-native technologies that allow your platform to handle ten users or ten million with the same stability." },
  { question: "Do you handle legacy migrations?", answer: "Absolutely. We specialize in modernizing 'ancient' systems, carefully extracting your data and logic into a new, performant vessel without downtime." },
  { question: "What is your typical timeline?", answer: "Excellence takes time, but not forever. A typical foundational build takes 8-12 weeks, followed by iterative enhancements. We value speed, but we never compromise on structural integrity." },
];

const TESTIMONIALS = [
  { 
    quote: "They didn't just build a website; they built a digital engine that powers our entire logistics network. The architectural decisions they made two years ago are still paying off today.", 
    author: "Marcus Chen", 
    role: "CTO", 
    company: "LogiFlow Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" 
  },
  { 
    quote: "Talentronaut sees the matrix. They anticipated bottlenecks we hadn't even thought of and solved them before a single line of code was written.", 
    author: "Sarah Jenkins", 
    role: "Director of Product", 
    company: "FinEdge Labs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
];

export default function TechnicalSolutionsPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ServiceLayout>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
      {/* Hero Section - Immersive Background & Content */}
      <section className="relative overflow-hidden -mt-4 md:-mt-8 mb-12 md:mb-20 min-h-[70vh] flex items-center">
          {/* Ambient Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-coral/5 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

          <div className="container mx-auto px-[90px] relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <span className="text-coral font-black tracking-[0.3em] text-[10px] uppercase mb-6 block border-l-2 border-coral pl-4">The Architect</span>
            <SectionHeading as="h1" className="text-[36px] md:text-[56px] lg:text-[64px] mb-8 leading-[1] tracking-tight">
              <span className="block mb-4">Engineering</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] via-coral to-orange-400">Digital Mastery.</span>
            </SectionHeading>
            <p className="text-[16px] text-gray-500 mb-10 leading-relaxed max-w-xl">
              We build more than software; we construct the digital nervous systems that power market leaders. Precision, scalability, and aesthetic elegance in every line of code.
            </p>
            <CTA text="Book a Technical Audit" onClick={() => setIsContactModalOpen(true)} />
          </div>
          
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
             {/* Framed Visual Showcase */}
             <div className="relative w-full max-w-[650px] aspect-[4/3] flex items-center justify-center bg-cream/30 backdrop-blur-md rounded-[3rem] border border-coral/10 shadow-[0_40px_100px_-20px_rgba(212,69,49,0.08)] overflow-hidden group">
                {/* Internal Decorative Halo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-coral/5 to-transparent opacity-50" />
                
                <img 
                  src="/images/tech_hero_final.png" 
                  alt="Engineering Digital Mastery" 
                  className="w-full h-full object-contain scale-[1.3] mix-blend-multiply drop-shadow-[0_0_50px_rgba(212,69,49,0.05)] transition-transform duration-700 group-hover:scale-[1.35]" 
                />
                
                {/* System Status Pill */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-cream/90 backdrop-blur-md border border-coral/20 px-4 py-2 rounded-full shadow-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black tracking-widest text-gray-800 uppercase">System Status: Optimal</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

      {/* Core Technical Services Grid (Digital Capabilities) */}
      <TechnicalServiceGrid />

      {/* Process Map Timeline */}
      <BlueprintProcessMap steps={PROCESS_STEPS} />

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Rest of Content - In Container */}
      <div className="container mx-auto px-6">
        {/* Tech Marquee */}
        <TechMarquee />

        {/* Testimonials */}
        <TestimonialSlider testimonials={TESTIMONIALS} />

        {/* FAQ */}
        <FAQ items={FAQS} />
        
        {/* Bottom CTA */}
        <section className="text-center py-20">
            <h2 className="text-xl font-heading font-bold mb-6">Ready to build the future?</h2>
            <CTA text="Start Your Project" onClick={() => setIsContactModalOpen(true)} />
        </section>
      </div>
    </ServiceLayout>
  );
}
