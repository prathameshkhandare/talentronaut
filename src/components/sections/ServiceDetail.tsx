"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: LucideIcon;
  offerings: {
    title: string;
    description: string;
  }[];
  audience: string[];
  businessValue: string;
}

export function ServiceDetail({
  title,
  description,
  icon: Icon,
  offerings,
  audience,
  businessValue,
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#fafafa]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-[#FCD2AD]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#D44531]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FCD2AD] shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D44531]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A4A46]">Service Overview</span>
            </div>
            
            <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-[1.5rem] bg-white shadow-lg border border-gray-100 flex items-center justify-center">
                    <Icon size={40} className="text-[#D44531]" />
                </div>
                <h1 className="text-2xl md:text-2xl font-bold font-heading text-[#4A4A46] tracking-tight">
                    {title}
                </h1>
            </div>
            
            <p className="text-sm text-[#4A4A46]/80 leading-relaxed font-medium max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column: Offerings & Value */}
                <div className="lg:col-span-8 flex flex-col gap-16">
                    
                    {/* Key Offerings */}
                    <div>
                        <h2 className="text-xl font-bold text-[#4A4A46] mb-8 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-[#D44531] rounded-full" />
                            Key Offerings
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {offerings.map((offering, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-[2rem] bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#FCD2AD]/50"
                                >
                                    <h3 className="text-lg font-bold text-[#4A4A46] mb-3">{offering.title}</h3>
                                    <p className="text-[#4A4A46]/70 text-sm leading-relaxed">{offering.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Business Value */}
                    <div className="bg-[#4A4A46] p-10 rounded-[3rem] text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold mb-6">Business Value</h2>
                            <p className="text-sm text-white/80 leading-relaxed font-medium">
                                {businessValue}
                            </p>
                        </div>
                         <div className="absolute top-0 right-0 w-64 h-64 bg-[#D44531] rounded-full blur-[80px] opacity-20" />
                    </div>

                </div>

                {/* Right Column: Audience & CTA */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    
                    {/* Target Audience */}
                    <div className="p-8 rounded-[2.5rem] bg-[#FCD2AD]/10 border border-[#FCD2AD]/20">
                        <h3 className="text-lg font-bold text-[#4A4A46] mb-6 flex items-center gap-2">
                             <UsersIcon className="w-5 h-5 text-[#D44531]" />
                             Who Is This For?
                        </h3>
                        <ul className="space-y-4">
                            {audience.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#D44531] shrink-0 mt-0.5" />
                                    <span className="text-[#4A4A46]/80 font-medium text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Card */}
                    <div className="p-8 rounded-[2.5rem] bg-[#D44531] text-white text-center relative overflow-hidden">
                         <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-lg font-bold mb-4">Ready to Start?</h3>
                            <p className="text-white/80 text-sm mb-8">
                                Let's discuss how we can tailor this solution to your specific needs.
                            </p>
                            <Link href="/#contact" className="px-8 py-3 bg-white text-[#D44531] rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all text-sm flex items-center gap-2">
                                Contact Us <ArrowRight size={16} />
                            </Link>
                         </div>
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10" />
                    </div>

                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

function UsersIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
