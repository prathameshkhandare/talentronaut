"use client";

import React, { useState } from 'react';
import { ServiceLayout } from '@/components/services/shared/ServiceLayout';

import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { CTA } from '@/components/services/shared/CTA';
import { FAQ } from '@/components/services/shared/FAQ';
import { TestimonialSlider } from '@/components/services/shared/TestimonialSlider';
import { TabbedInterface } from '@/components/services/ui/TabbedInterface';
import { ContactModal } from '@/components/ui/ContactModal';



const CONSULTING_AREAS = [
  {
    id: 'technical',
    label: 'Technical',
    title: 'Feasibility & Architecture',
    content: "Don't build in the dark. We validate your technical roadmap against market realities and technological constraints. Whether it's selecting the right stack or auditing security protocols, we ensure your tech is an asset, not a liability.",
    features: ['Codebase Audits', 'Architecture Design', 'Platform Selection', 'Security Assessment'],
    image: '/images/consultation/technical.png'
  },
  {
    id: 'growth',
    label: 'Growth',
    title: 'Market Penetration',
    content: "Growth isn't magic; it's improved mechanics. We analyze your funnel, identify friction points, and engineer strategies to multiply your user base. We rely on data, not gut feelings, to drive sustainable expansion.",
    features: ['Funnel Optimization', 'Data Analytics', 'Retention Strategy', 'CRO'],
    image: '/images/consultation/growth.png'
  },
  {
    id: 'startup',
    label: 'Startup',
    title: 'Zero to One',
    content: "The early days are chaotic. We bring structure to the storm. From MVP definition to investor readiness, we act as your fractional co-founders, helping you navigate the treacherous waters of early-stage disruption.",
    features: ['MVP Scoping', 'Pitch Deck Refinement', 'Go-to-Market Strategy', 'Lean Operations'],
    image: '/images/consultation/startup.png'
  },
];

const FAQS = [
  { question: "Do you offer retained advisory?", answer: "Yes. Many partners choose our 'CTO-on-demand' model, giving them access to strategic oversight without the overhead of a full-time executive hire." },
  { question: "How is this different from a dev shop?", answer: "A dev shop takes orders. We challenge assumptions. Our consultation service is about finding the *right* problem to solve before writing a single line of code." },
  { question: "Can you help with investor due diligence?", answer: "Precisely. We prepare your technical documentation and growth metrics to withstand the scrutiny of even the most rigorous VC technical audits." },
];

const TESTIMONIALS = [
  { quote: "Their strategic insight saved us six months of development time. They convinced us to pivot our architecture before we hit a dead end.", author: "Elena Rostova", role: "CEO", company: "Nebula AI", image: "/images/testimonials/elena_rostova.png" },
  { quote: "Talentronaut doesn't just nod and agree. They push back with data. That kind of intellectual honesty is rare and incredibly valuable.", author: "James Thorne", role: "Founder", company: "CivicTech Solutions", image: "/images/testimonials/james_thorne.png" },
];

export function ConsultationClient() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ServiceLayout>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <div className="container mx-auto px-6">

        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-coral font-bold tracking-widest text-sm uppercase mb-6 block">The Strategy</span>
          <SectionHeading as="h1" className="text-4xl md:text-6xl mb-8 leading-tight tracking-tight">
            Clarity in a <br/>
            <span className="italic font-serif text-gray-400">Complex World.</span>
          </SectionHeading>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            We provide the intellectual capital you need to navigate critical junctions. Professional, precise, and deeply invested in your outcome.
          </p>
          <CTA text="Book a Strategy Session" onClick={() => setIsContactModalOpen(true)} />
        </section>

        {/* Tabbed Interface */}
        <TabbedInterface tabs={CONSULTING_AREAS} />

        {/* The "Why Us" Section - High Contrast */}
        <section className="my-32">
            <div className="bg-charcoal text-cream rounded-[32px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                {/* Decorative grain or texture could go here */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                
                <h2 className="font-heading font-serif text-3xl md:text-5xl leading-tight mb-8 relative z-10">
                    "We believe strategy is the art of <span className="text-coral italic">sacrifice</span>. It's not about doing everything; it's about doing the right things, intensely."
                </h2>
                <div className="w-24 h-1 bg-coral mx-auto rounded-full mb-8 relative z-10" />
                <p className="font-sans text-base text-gray-400 max-w-xl mx-auto relative z-10">
                    Our philosophy centers on radical focus. We cut through the noise to find the signal that drives your business forward.
                </p>
            </div>
        </section>

        {/* Testimonials */}
        <TestimonialSlider testimonials={TESTIMONIALS} />

        {/* FAQ */}
        <FAQ items={FAQS} />
      </div>
    </ServiceLayout>
  );
}
