"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { ServiceLayout } from '@/components/services/shared/ServiceLayout';
import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { CTA } from '@/components/services/shared/CTA';
import { FAQ } from '@/components/services/shared/FAQ';
import { TestimonialSlider } from '@/components/services/shared/TestimonialSlider';
import { EnterpriseCommandCenter } from '@/components/services/ui/EnterpriseCommandCenter';
import { EnterpriseToolsMarquee } from '@/components/services/ui/EnterpriseToolsMarquee';
import { ProcessMap } from '@/components/services/ui/ProcessMap';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';
import { ContactModal } from '@/components/ui/ContactModal';

const PROCESS_STEPS = [
  {
    title: "Environment Audit",
    description: "We map your entire tool ecosystem, auditing usage patterns and identifying efficiencies, so we can take over administration seamlessly.",
  },
  {
    title: "Architecture Design",
    description: "Our architects design the operational protocols and integration frameworks we will use to manage your ecosystem securely and efficiently.",
  },
  {
    title: "Seamless Integration",
    description: "We handle all the connections. Our engineers build and maintain the bridges between your tools, ensuring data flows without your intervention.",
  },
  {
    title: "Active Administration",
    description: "We take the keys. Our teams implement intelligent automation and handle daily administration, eliminating manual friction from your workflows.",
  },
  {
    title: "Continuous Optimization",
    description: "We don't just run it; we improve it. We actively monitor performance and deploy optimizations to keep your enterprise engine running at peak efficiency.",
  }
];

const FAQS = [
  { question: "Can you integrate legacy ERPs like Fresa?", answer: "Yes. We specialize in building custom connectors for industry-specific ERPs, ensuring they integrate perfectly with modern cloud environments." },
  { question: "How do you secure organizational data in SharePoint?", answer: "We implement multi-layered security protocols, including conditional access and encryption, to ensure your collaboration environment is impenetrable." },
  { question: "What is the typical time-to-value?", answer: "Operational optimization is iterative. We typically deliver core integration wins within 4-6 weeks, followed by continuous refinement." },
];

const TESTIMONIALS = [
  { 
    quote: "Talentronaut didn't just fix our tools; they synchronized our entire global operation. Our logistics efficiency improved by 40%.", 
    author: "Deepak Sharma", 
    role: "Head of Operations", 
    company: "SwiftLogistics Global",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  { 
    quote: "Their expertise in enterprise integration is unmatched. Our SharePoint migration was handled with zero downtime.", 
    author: "Elena Rossi", 
    role: "CTO", 
    company: "EuroBuild Group",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
  },
];

export default function EnterpriseOperationPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ServiceLayout className="bg-transparent">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
      <div className="container mx-auto px-6">

        
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between mb-24 md:mb-32 gap-16 pt-12">
             <div className="w-full lg:w-[45%] flex flex-col gap-8">
                <div>
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-6 block">The Command Center</span>
                    <SectionHeading as="h1" className="text-[64px] leading-[1.3] mb-8">
                        Operational <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Precision.</span>
                    </SectionHeading>
                    <p className="text-xl text-gray-700 leading-loose font-medium opacity-90">
                        We act as the operational backbone of your enterprise. Our teams run, manage, and optimize your critical tools—from logistics platforms to global collaboration systems—so you don't have to.
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-6 mt-4">
                  <CTA text="Optimize Operations" onClick={() => setIsContactModalOpen(true)} className="bg-charcoal hover:bg-black text-white px-8 py-4" />
                  <div className="flex items-center gap-8 px-4 border-l border-gray-200">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-charcoal">99.9%</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Uptime Guaranteed</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-charcoal">24/7</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Proactive Monitoring</span>
                    </div>
                  </div>
                </div>
             </div>
             
             <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                <img 
                  src="/images/enterprise_hero_clean.png" 
                  alt="Enterprise Command Center" 
                  className="w-full max-w-[750px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                />
             </div>
        </section>
      </div>

      {/* Enterprise Tools Marquee */}
      <EnterpriseToolsMarquee />

      <div className="container mx-auto px-6">
        {/* Features / Benefits Grid */}
        <section className="pt-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard 
                    icon={<Shield className="text-white" />} 
                    title="Managed Security" 
                    description="We actively guard your data. Military-grade protection and 24/7 monitoring for your entire toolset." 
                />
                <FeatureCard 
                    icon={<Zap className="text-white" />} 
                    title="Workflow Administration" 
                    description="We handle the complexity. Eliminating manual friction in workflows like Fresa and ERPs so you don't have to." 
                />
                <FeatureCard 
                    icon={<Globe className="text-white" />} 
                    title="Global Scalability" 
                    description="We scale the systems for you. Architecting and managing infrastructure that grows with your footprint." 
                />
                <FeatureCard 
                    icon={<Cpu className="text-white" />} 
                    title="Resilience & Uptime" 
                    description="We guarantee stability. Self-healing infrastructure and proactive response teams that minimize downtime." 
                />
            </div>
        </section>

        {/* Unique Process Stream - Integrated & Compact */}
        <section className="py-2 mb-20"> {/* drastically reduced py-8 to py-2 to decrease space */}
             <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <span className="text-coral font-bold tracking-widest text-xs uppercase mb-3 block">Methodology</span>
                     <h2 className="text-[36px] font-heading font-black text-charcoal">The Talentronaut Blueprint</h2>
                </div>

                {/* Horizontal Process Stream - Refactored for Visible Line */}
                <div className="relative w-full mx-auto">
                    
                    {/* 1. The Timeline Layer (Line & Circles) */}
                    <div className="relative mb-12"> {/* Increased margin for better separation */}
                        
                        {/* Gray Background Line - Thicker & Darker */}
                        <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-200 -translate-y-1/2 rounded-full" />

                        {/* Animated Coral Progress Line - Thicker & Z-Idx Fix */}
                        <div className="absolute top-1/2 left-0 w-full h-[4px] -translate-y-1/2 overflow-hidden rounded-full">
                            <motion.div 
                                className="h-full bg-coral origin-left"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 2.5, ease: "linear" }}
                            />
                        </div>

                        {/* Step Nodes Row */}
                        <div className="grid grid-cols-5 gap-6 relative z-10">
                            {PROCESS_STEPS.map((step, i) => (
                                <div key={i} className="flex justify-center">
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.5 }} // Sync with line (2.5s / 5 = 0.5s)
                                        className="w-14 h-14 rounded-full bg-white border-[4px] border-gray-100 flex items-center justify-center relative shadow-sm"
                                    >
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ duration: 0.3, delay: (i * 0.5) + 0.2 }}
                                            className="w-5 h-5 bg-coral rounded-full"
                                        />
                                        <div className="absolute -bottom-8 font-bold text-coral/80 text-lg">
                                            0{i + 1}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. The Content Cards Layer */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                        {PROCESS_STEPS.map((step, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (i * 0.5) + 0.1 }} // Appear just after line hits node
                                className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full min-h-[200px] justify-center"
                            >
                                <h3 className="text-[20px] font-bold text-charcoal mb-2 group-hover:text-coral transition-colors">{step.title}</h3>
                                <p className="text-base text-gray-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
             </div>
        </section>

        {/* Testimonials */}
        <TestimonialSlider testimonials={TESTIMONIALS} />

        {/* FAQ */}
        <FAQ items={FAQS} />

        {/* Final CTA */}
        <section className="py-16 text-center">
            <div className="max-w-3xl mx-auto bg-[#0a0a0a] rounded-[36px] p-10 md:p-14 relative overflow-hidden shadow-2xl border border-white/5">
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                <div className="relative z-10 flex flex-col items-center">
                     <h2 className="text-[32px] md:text-[36px] leading-[1.5] font-serif text-white mb-6 pb-4 tracking-tight max-w-2xl mx-auto">
                        Ready to <span className="text-[#D44531] italic">Synchronize</span> Your <br className="hidden md:block" /> Digital Enterprise?
                     </h2>
                     
                     {/* Red Separator Line */}
                     <div className="w-10 h-1 bg-[#D44531] rounded-full mb-6" />

                     <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl font-light leading-relaxed">
                        Stop wrestling with your tools. Let us operate them for you, ensuring peak performance and scalability.
                    </p>
                    
                    <CTA 
                        text="Start Your Transformation" 
                        onClick={() => setIsContactModalOpen(true)} 
                        className="bg-[#D44531] hover:bg-[#c03e2b] text-white border-none shadow-[0_10px_30px_-10px_rgba(212,69,49,0.3)] px-8 py-4 text-base" 
                    />
                </div>
            </div>
        </section>
      </div>
    </ServiceLayout>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-8 bg-coral rounded-[32px] border border-coral hover:border-orange-500 hover:shadow-[0_20px_60px_-15px_rgba(232,92,74,0.4)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                <div className="text-white">{icon}</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-white/90 leading-relaxed font-medium">{description}</p>
        </div>
    );
}
