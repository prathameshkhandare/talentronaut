"use client";

import React, { useState } from 'react';

import { ServiceLayout } from '@/components/services/shared/ServiceLayout';
import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { CTA } from '@/components/services/shared/CTA';
import { FAQ } from '@/components/services/shared/FAQ';
import { TestimonialSlider } from '@/components/services/shared/TestimonialSlider';
import { FloatingTags } from '@/components/services/ui/FloatingTags';
import { ArchitecturalGrid } from '@/components/services/ui/ArchitecturalGrid';
import { ProcessMap } from '@/components/services/ui/ProcessMap';
import { ContactModal } from '@/components/ui/ContactModal';
import { MapPin, Globe, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    title: "Needs Analysis & Blueprinting",
    description: "We don't just read JDs; we map the ecosystem. We dive deep into your technical stack and cultural DNA to create a precise role blueprint.",
  },
  {
    title: "Global Domain Mapping",
    description: "Identifying talent clusters across EMEA & APAC. We pinpoint where the top 1% of talent in your specific domain resides.",
  },
  {
    title: "Precision Vetting",
    description: "Our multi-stage assessment includes technical deep-dives and behavioral analysis to ensure every candidate is not just a hire, but a strategic asset.",
  },
  {
    title: "Cultural Alignment",
    description: "Code can be taught, culture cannot. We ensure every candidate shares your values and vision for seamless team integration.",
  },
  {
    title: "Global Integration",
    description: "From negotiation to cross-border onboarding, we manage the complexities of global hiring so you can focus on building your legacy.",
  }
];

const FAQS = [
  { question: "Which regions do you cover?", answer: "We have a strong presence and network across Europe (UK, Germany, France), the Middle East (Dubai, Riyadh, Doha), and Africa (Lagos, Nairobi, Cape Town)." },
  { question: "What is your vetting process?", answer: "Multi-layered. It involves domain-specific assessments, culture-fit interviews, and background verification conducted by experts who understand regional nuances." },
  { question: "How fast can you fill a role?", answer: "On average, we present a shortlist of highly qualified, vetted candidates within 10-14 days of engagement kickoff." },
];

const TESTIMONIALS = [
  { 
    quote: "Finding high-caliber engineers in EMEA used to keep me up at night. Talentronaut delivered exactly what we needed: precision, speed, and local expertise.", 
    author: "Elena Rodriguez", 
    role: "VP of People", 
    company: "EuroTech Dynamics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  { 
    quote: "Their network in the Middle East is unparalleled. They didn't just find us a CTO; they helped us build an entire leadership team.", 
    author: "Ahmed Al-Maktoum", 
    role: "Founding Partner", 
    company: "Desert Bloom Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
];

const DOMAINS = [
  "Software Engineering", "AI & Data Science", "Cloud & DevOps", 
  "FinTech & Blockchain", "Sales & Marketing", "Executive Leadership",
  "Product Management", "Cyber Security", "Logistics & Supply Chain",
  "IoT & Embedded Systems", "Augmented & Virtual Reality", "BioTech & HealthTech",
  "Renewable Energy Tech", "Smart City Infrastructure", "Quantum Computing",
  "Robotics & Automation", "E-commerce & Retail Tech", "EdTech Solutions",
  "LegalTech & RegTech", "AgriTech Innovation", "Gaming & Interactive Media"
];

const REACH_STATS = [
  { label: "Success Rate", value: "96%", code: "HIRE_01" },
  { label: "EMEA Countries", value: "25+", code: "HIRE_02" },
  { label: "Candidate Pipeline", value: "10k+", code: "HIRE_03" },
  { label: "Retention Rate", value: "98%", code: "HIRE_04" }
];

export default function TalentDiscoveryPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ServiceLayout>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
      <div className="container mx-auto px-6">
 
        {/* Premium Split Hero */}
        <section className="flex flex-col lg:flex-row items-center justify-between -mt-[10px] md:-mt-[18px] mb-20 md:mb-28 gap-12 relative">
          <div className="w-full lg:w-1/2 relative z-10">
            <span className="text-coral font-black tracking-[0.3em] text-[10px] uppercase mb-6 block border-l-2 border-coral pl-4">The Global Bridge</span>
            <SectionHeading as="h1" className="text-[36px] md:text-[56px] lg:text-[64px] mb-8 leading-[1.05] tracking-tight">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] via-coral to-orange-400">
                Global Human <br/> Infrastructure.
               </span>
            </SectionHeading>
            <p className="text-sm text-gray-500 mb-10 leading-relaxed max-w-xl">
              From the tech hubs of London and Berlin to the emerging markets of Riyadh and Nairobi. We connect the world's most ambitious companies with the visionaries who build the future.
            </p>
            <CTA text="Tap into Global Talent" onClick={() => setIsContactModalOpen(true)} />
          </div>
          
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
             {/* Globe Visualization - Final High-Fidelity Asset */}
             <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center">
                <motion.img 
                  src="/images/final_globe.png" 
                  alt="Global Human Infrastructure" 
                  className="w-full h-full object-contain scale-[1.75] mix-blend-multiply drop-shadow-[0_0_20px_rgba(212,69,49,0.2)]" 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                
                {/* System Status Pill */}
                <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 bg-cream/80 backdrop-blur-md border border-coral/20 px-4 py-2 rounded-full shadow-lg flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black tracking-widest text-gray-800 uppercase">System Status: Optimal</span>
                </div>
             </div>
          </div>
        </section>
      </div>

      {/* Domain Expertise Marquee */}
      <section className="py-20 bg-gray-50 relative overflow-hidden border-y border-gray-100">
          <div className="container mx-auto px-6 mb-12">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-coral" />
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-coral">Field Expertise</h4>
              </div>
              <h2 className="text-[36px] font-heading font-black tracking-tighter">Domains We Dominate.</h2>
          </div>
          
          <div className="flex overflow-hidden relative w-full">
              <div className="flex gap-4 animate-infinite-scroll whitespace-nowrap w-max">
                  {/* Duplicate list for seamless loop */}
                  {[...DOMAINS, ...DOMAINS].map((domain, i) => (
                      <div key={i} className="px-8 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-sm font-bold text-gray-800 hover:border-coral transition-colors flex items-center">
                          {domain}
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-32 relative overflow-hidden bg-white">
          {/* Subtle World Map Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/World_map_blank_with_dots.svg" alt="Map" className="w-full h-full object-cover grayscale" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                      <h2 className="text-[36px] tracking-tighter leading-none mb-10 ">
                          <span className="font-heading font-black text-gray-900">EMEA</span> 
                          <span className="font-body text-coral text-lg font-bold ml-3 align-middle opacity-90">- Helping EMEA hunt, build & manage high-impact teams & EntOps.</span>
                      </h2>
                      <div className="space-y-8 mt-10">
                          {[
                              { region: "Europe", hubs: "London, Berlin, Tallinn", desc: "Access the heart of SaaS and Fintech excellence." },
                              { region: "Middle East", hubs: "Dubai, Riyadh, Abu Dhabi", desc: "Powering the next generation of smart cities and energy tech." },
                              { region: "Africa", hubs: "Lagos, Nairobi, Cape Town", desc: "The frontier of mobile-first innovation and rapid growth." }
                          ].map((item, i) => (
                              <div key={i} className="flex gap-6 group">
                                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-coral/10 group-hover:border-coral transition-all">
                                      <Globe className="text-gray-400 group-hover:text-coral" size={20} />
                                  </div>
                                  <div>
                                      <h3 className="text-lg font-black text-gray-900 mb-1">{item.region}</h3>
                                      <p className="text-xs text-coral font-bold mb-2 uppercase tracking-widest">{item.hubs}</p>
                                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />
                      <div className="grid grid-cols-2 gap-10 relative z-10">
                          {REACH_STATS.map((stat, i) => (
                              <div key={i} className="space-y-2">
                                  <div className="text-4xl font-black text-gray-900 group-hover:text-coral transition-colors">{stat.value}</div>
                                  <div className="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                              </div>
                          ))}
                      </div>
                      <div className="mt-12 pt-12 border-t border-gray-200/50">
                          <p className="italic text-gray-400 text-sm leading-relaxed">
                            "Our global network isn't just a map; it's a living database of the world's most talented builders, verified through years of local partnerships."
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Hiring Method - Process Map */}
      <ProcessMap steps={PROCESS_STEPS} />

      {/* Testimonials & FAQ */}
      <div className="container mx-auto px-6">
        <TestimonialSlider testimonials={TESTIMONIALS} />
        <FAQ items={FAQS} />
        
        {/* Bottom CTA */}
        <section className="text-center py-32">
            <h2 className="text-3xl md:text-[36px] font-heading font-black tracking-tighter mb-10">Ready to build your <br/><span className="italic text-coral">dream team?</span></h2>
            <CTA text="Start Global Hiring" onClick={() => setIsContactModalOpen(true)} />
        </section>
      </div>
    </ServiceLayout>
  );
}
