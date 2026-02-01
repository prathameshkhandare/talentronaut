"use client";

import React, { useState } from 'react';

import { ServiceLayout } from '@/components/services/shared/ServiceLayout';
import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { CTA } from '@/components/services/shared/CTA';
import { FAQ } from '@/components/services/shared/FAQ';
import { TestimonialSlider } from '@/components/services/shared/TestimonialSlider';
import { EnterpriseCommandCenter } from '@/components/services/ui/EnterpriseCommandCenter';
import { ToolEcosystem } from '@/components/services/ui/ToolEcosystem';
import { ProcessMap } from '@/components/services/ui/ProcessMap';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';
import { ContactModal } from '@/components/ui/ContactModal';

const PROCESS_STEPS = [
  {
    title: "Environment Audit",
    description: "We map your entire tool ecosystem, identifying bottlenecks in systems like Fresa or SharePoint silos, and architecting a unified data flow.",
  },
  {
    title: "Seamless Integration",
    description: "Our engineers bridge the gap between tools using custom middleware and secure APIs, ensuring real-time synchronization across all platforms.",
  },
  {
    title: "Operational Mastery",
    description: "We deploy automated monitoring and optimization layers that transform your digital operations into a self-healing, high-performance engine.",
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
        <section className="flex flex-col lg:flex-row items-center justify-between mb-24 md:mb-32 gap-12 pt-8">
             <div className="w-full lg:w-1/2">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">The Command Center</span>
                <SectionHeading as="h1" className="text-5xl md:text-7xl mb-6 leading-[1.1]">
                    Operational <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Precision.</span>
                </SectionHeading>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-xl font-medium">
                    We engineer the digital nervous system of your enterprise. From specialized logistics tools to global collaboration platforms, we ensure your operations are seamless, secure, and scalable.
                </p>
                <div className="flex flex-wrap gap-4">
                  <CTA text="Optimize Operations" onClick={() => setIsContactModalOpen(true)} className="bg-charcoal hover:bg-black text-white" />
                  <div className="flex items-center gap-6 px-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-charcoal">99.9%</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Uptime Guaranteed</span>
                    </div>
                    <div className="w-px h-8 bg-gray-200" />
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-charcoal">24/7</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Proactive Monitoring</span>
                    </div>
                  </div>
                </div>
             </div>
             
             <div className="w-full lg:w-1/2">
                <EnterpriseCommandCenter />
             </div>
        </section>
      </div>

      {/* Tool Ecosystem Showcase */}
      <ToolEcosystem />

      <div className="container mx-auto px-6">
        {/* Features / Benefits Grid */}
        <section className="pt-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard 
                    icon={<Shield className="text-primary" />} 
                    title="Zero-Trust Security" 
                    description="Military-grade protection for your enterprise data and toolsets." 
                />
                <FeatureCard 
                    icon={<Zap className="text-primary" />} 
                    title="Hyper-Automation" 
                    description="Eliminating manual friction in workflows like Fresa and ERPs." 
                />
                <FeatureCard 
                    icon={<Globe className="text-primary" />} 
                    title="Global Scalability" 
                    description="Architecting systems that grow with your organizational footprint." 
                />
                <FeatureCard 
                    icon={<Cpu className="text-primary" />} 
                    title="Edge Resilience" 
                    description="Self-healing infrastructure that minimizes operational downtime." 
                />
            </div>
        </section>

        {/* Operational Workflow */}
        <section className="py-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-heading font-bold text-charcoal mb-4">The Talentronaut Blueprint</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Our proven methodology for transforming complex enterprises.</p>
            </div>
            <ProcessMap steps={PROCESS_STEPS} />
        </section>

        {/* Testimonials */}
        <TestimonialSlider testimonials={TESTIMONIALS} />

        {/* FAQ */}
        <FAQ items={FAQS} />

        {/* Final CTA */}
        <section className="py-24 text-center">
            <div className="max-w-4xl mx-auto bg-white rounded-[48px] p-12 md:p-20 relative overflow-hidden border border-primary/10 shadow-xl">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full" />
                
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8 relative z-10"> Ready to Synchronize Your <br className="hidden md:block" /> Digital Enterprise?</h2>
                <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">
                    Let's architect the foundation of your next decade of growth.
                </p>
                <div className="relative z-10">
                    <CTA text="Start Your Transformation" onClick={() => setIsContactModalOpen(true)} className="bg-charcoal hover:bg-primary text-white border-none transition-all duration-300" />
                </div>
            </div>
        </section>
      </div>
    </ServiceLayout>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-8 bg-white rounded-[32px] border border-gray-100 hover:border-coral/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-coral/5 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-4">{title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium">{description}</p>
        </div>
    );
}
