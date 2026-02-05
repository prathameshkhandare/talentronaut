"use client";

import React from 'react';
import { ServiceLayout } from '@/components/services/shared/ServiceLayout';
import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { CTA } from '@/components/services/shared/CTA';
import { Mail, Zap, Users } from 'lucide-react';

export default function AIMailerPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-6 py-12 md:py-20">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-coral font-bold tracking-widest text-sm uppercase mb-6 block">Intelligent Marketing</span>
            <SectionHeading as="h1" className="text-4xl md:text-6xl mb-8 leading-tight tracking-tight">
                Supercharge Outreach with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">AI Mailer.</span>
            </SectionHeading>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                The next generation of email marketing. Use AI to personalize content, optimize send times, and 10x your conversion rates.
            </p>
            <CTA text="Start Free Trial" href="#" />
        </div>

        {/* Video Placeholder */}
        <div className="rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-black aspect-video max-w-5xl mx-auto mb-24 relative group">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/placeholder" 
                title="AI Mailer Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            ></iframe>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {[
                { icon: Zap, title: "AI Generation", desc: "Generate high-converting subject lines and body copy in seconds." },
                { icon: Users, title: "Smart Segmentation", desc: "Automatically group your audience based on behavior and engagement." },
                { icon: Mail, title: "Automated Drip", desc: "Set up complex sequences that nurture leads while you sleep." }
            ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
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
