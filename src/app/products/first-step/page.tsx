"use client";

import React from 'react';
import { ServiceLayout } from '@/components/services/shared/ServiceLayout';
import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { CTA } from '@/components/services/shared/CTA';
import { Rocket, Box, Target } from 'lucide-react';

export default function FirstStepPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-6 py-12 md:py-20">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-coral font-bold tracking-widest text-sm uppercase mb-6 block">Startup Acceleration</span>
            <SectionHeading as="h1" className="text-4xl md:text-6xl mb-8 leading-tight tracking-tight">
                Turn Ideas into Reality with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-[#E65A45]">First Step.</span>
            </SectionHeading>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                A comprehensive MVP builder and startup incubation toolkit. We validate, prototype, and launch your vision in record time.
            </p>
            <CTA text="Launch Your Idea" href="#" />
        </div>

        {/* Video Placeholder */}
        <div className="rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-black aspect-video max-w-5xl mx-auto mb-24 relative group">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/placeholder" 
                title="First Step Introduction" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            ></iframe>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {[
                { icon: Box, title: "Rapid Prototyping", desc: "Go from napkin sketch to interactive prototype in days, not months." },
                { icon: Target, title: "Market Validation", desc: "Tools to test your assumptions with real users before writing code." },
                { icon: Rocket, title: "Growth Toolkit", desc: "Integrated launch checklists and growth hacking templates." }
            ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center text-coral mb-6">
                        <feature.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-charcoal mb-3">{feature.title}</h3>
                    <p className="text-gray-500">{feature.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </ServiceLayout>
  );
}
