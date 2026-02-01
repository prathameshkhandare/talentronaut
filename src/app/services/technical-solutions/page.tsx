"use client";

import React, { useState } from 'react';
import { ServiceLayout } from '@/components/services/shared/ServiceLayout';

import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { CTA } from '@/components/services/shared/CTA';
import { FAQ } from '@/components/services/shared/FAQ';
import { TestimonialSlider } from '@/components/services/shared/TestimonialSlider';
import { ProcessMap } from '@/components/services/ui/ProcessMap';
import { TechMarquee } from '@/components/services/ui/TechMarquee';
import { ArchitecturalGrid } from '@/components/services/ui/ArchitecturalGrid';
import { ProjectShowcase } from '@/components/services/ui/ProjectShowcase';
import { ContactModal } from '@/components/ui/ContactModal';

const PROCESS_STEPS = [
  {
    title: "Blueprint & Discovery",
    description: "Every great structure starts with a vision. We dive deep into your operational potential, mapping out a technical blueprint that aligns perfectly with your scaling ambitions. We don't just write code; we architect success.",
  },
  {
    title: "Core Engineering",
    description: "Our diverse team of engineers constructs your digital foundation using clean, scalable code. We prioritize resilience and modularity, ensuring your system can adapt to market shifts without needing a teardown.",
  },
  {
    title: "Integration & Launch",
    description: "The final reveal. We rigorously test every beam and bolt of your platform before deploying it into the wild. Seamless integration with your existing tools ensures day-one productivity.",
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
      
      {/* Hero Section - In Container */}
      <div className="container mx-auto px-6">

        
        <section className="flex flex-col lg:flex-row items-center justify-between mb-24 md:mb-32 gap-12">
          <div className="w-full lg:w-1/2">
            <span className="text-coral font-bold tracking-widest text-sm uppercase mb-4 block">The Architect</span>
            <SectionHeading as="h1" className="text-5xl md:text-7xl mb-6 leading-tight">
              Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-orange-400">Digital Mastery.</span>
            </SectionHeading>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              We build more than software; we construct the digital nervous systems that power market leaders. Precision, scalability, and aesthetic elegance in every line of code.
            </p>
            <CTA text="Book a Technical Audit" onClick={() => setIsContactModalOpen(true)} />
          </div>
          
          <div className="w-full lg:w-1/2">
             <ArchitecturalGrid />
          </div>
        </section>
      </div>

      {/* Process Map Timeline */}
      <ProcessMap steps={PROCESS_STEPS} />

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
            <h2 className="text-3xl font-heading font-bold mb-6">Ready to build the future?</h2>
            <CTA text="Start Your Project" onClick={() => setIsContactModalOpen(true)} />
        </section>
      </div>
    </ServiceLayout>
  );
}
