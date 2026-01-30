"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Rocket, TrendingUp, Users, PieChart, ShieldCheck } from "lucide-react";
import { StartupIllustration } from "@/components/vectors/StartupIllustration";

export default function StartupConsultationPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4A4A46]">
      
      {/* 1. Hero Section - Modern & Clean */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Background Gradient */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FCD2AD]/30 to-transparent rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A4A46]/5 rounded-full border border-[#4A4A46]/10">
                <ShieldCheck size={16} className="text-[#D44531]" />
                <span className="text-sm font-semibold tracking-wide uppercase text-[#4A4A46]/80">Strategic Partnership</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] to-[#FCD2AD]">Market Leader</span>
              </h1>
              
              <p className="text-xl text-[#4A4A46]/70 max-w-xl leading-relaxed">
                We bridge the gap between visionary concepts and scalable reality. Expert technical guidance to validate, build, and scale your startup.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                 <Link href="/#contact" className="px-8 py-4 bg-[#D44531] text-white font-semibold rounded-lg shadow-lg shadow-[#D44531]/25 hover:bg-[#c03520] hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                   Partner With Us <ArrowRight size={20} />
                 </Link>
                 <Link href="#process" className="px-8 py-4 bg-white border border-[#4A4A46]/20 text-[#4A4A46] font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                   View Process
                 </Link>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 p-8">
                 <StartupIllustration className="w-full h-auto drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Process Timeline - Minimalist Linear */}
      <section id="process" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">The Execution Roadmap</h2>
             <p className="text-[#4A4A46]/60 text-lg">A structured approach to de-risk your venture and accelerate growth.</p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-gradient-to-r from-[#D44531]/10 via-[#D44531] to-[#D44531]/10" />

            <div className="grid md:grid-cols-4 gap-12">
              {[
                { title: "Validation", metric: "Week 1-2", desc: "Market research, user interviews, and hypothesis testing." },
                { title: "Prototype", metric: "Week 3-6", desc: "Rapid high-fidelity prototyping and technical feasibility study." },
                { title: "MVP Build", metric: "Week 7-12", desc: "Core feature development with scalable architecture." },
                { title: "Launch & Scale", metric: "Week 13+", desc: "Go-to-market execution, analytics, and growth iteration." }
              ].map((step, i) => (
                <div key={i} className="relative group">
                   <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-[#D44531] flex items-center justify-center z-10 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <div className="w-3 h-3 bg-[#D44531] rounded-full" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <span className="text-[#D44531] font-medium text-sm mb-3 block">{step.metric}</span>
                      <p className="text-[#4A4A46]/60 text-sm leading-relaxed">{step.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* 3. Offerings - Corporate Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
             {/* Header Card */}
             <div className="lg:col-span-1 bg-[#4A4A46] text-white p-10 rounded-2xl flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10">
                   <h3 className="text-3xl font-bold mb-6">Comprehensive Ecosystem</h3>
                   <p className="text-white/70 mb-8 leading-relaxed">
                     We don't just write code. We provide the holistic support system required to navigate the complex startup landscape.
                   </p>
                   <Link href="/contact" className="text-[#FCD2AD] hover:text-white font-medium flex items-center gap-2 transition-colors">
                     Schedule a Consultation <ArrowRight size={18} />
                   </Link>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D44531] rounded-full blur-[80px] opacity-40"></div>
             </div>

             {/* Service Cards */}
             {[
               { icon: Rocket, title: "MVP Development", desc: "Speed to market is critical. We build robust MVPs that prioritize core value." },
               { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven acquisition channels and retention frameworks." },
               { icon: Users, title: "Team Augmentation", desc: "Scale your engineering capacity instantly with senior talent." },
               { icon: PieChart, title: "Financial Modeling", desc: "Unit economics, burn rate analysis, and fundraising prep." }
             ].map((card, i) => (
               <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-[#D44531]/20 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#FCD2AD]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D44531] transition-colors duration-300">
                    <card.icon className="text-[#D44531] group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#4A4A46]">{card.title}</h4>
                  <p className="text-[#4A4A46]/60 text-sm leading-relaxed">{card.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table - Professional */}
      <section className="py-24 bg-[#FAFAFA]">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
               <div className="grid grid-cols-3 bg-[#4A4A46] text-white p-6">
                  <div className="font-semibold">Comparison</div>
                  <div className="font-bold text-[#FCD2AD] text-center">Talentronaut</div>
                  <div className="text-white/50 text-center">Traditional Agency</div>
               </div>
               
               {[
                  { feature: "Engagement Model", us: "Strategic Partner", them: "Service Provider" },
                  { feature: "Focus", us: "Business Outcomes", them: "Hours Billed" },
                  { feature: "Flexibility", us: "Agile & Adaptive", them: "Rigid Contracts" },
                  { feature: "Time to Market", us: "Weeks", them: "Months" }
               ].map((row, i) => (
                 <div key={i} className="grid grid-cols-3 p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors bg-white">
                    <div className="font-medium text-[#4A4A46]">{row.feature}</div>
                    <div className="flex justify-center">
                       <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D44531]/10 text-[#D44531] rounded-full text-sm font-semibold">
                         <Check size={14} /> {row.us}
                       </span>
                    </div>
                    <div className="text-center text-[#4A4A46]/40">{row.them}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Minimal CTA */}
      <section className="py-24 bg-[#4A4A46] text-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build?</h2>
           <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
             Stop guessing. Start executing. Join the founders who trust us to build their future.
           </p>
           <Link href="/#contact" className="inline-block px-10 py-4 bg-[#D44531] rounded-lg font-bold hover:bg-white hover:text-[#D44531] transition-all duration-300">
             Get Your Proposal
           </Link>
        </div>
      </section>

    </div>
  );
}
