"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Users, Cpu, TrendingUp, Rocket, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Technical Solutions",
    description: "End-to-end IT solutions tailored to your business needs, from web apps to enterprise software.",
    icon: Monitor,
    tags: ["Full Stack", "Enterprise"],
    delay: 0,
    href: "/services/technical-solutions"
  },
  {
    title: "Talent Hire",
    description: "Strategic recruitment and talent acquisition services to build high-performing teams.",
    icon: Users,
    tags: ["Recruitment", "Hiring"],
    delay: 0.1,
    href: "/services/talent-hire"
  },
  {
    title: "Technical Consulting",
    description: "Expert IT and technology consulting to guide your digital transformation journey.",
    icon: Cpu,
    tags: ["Tech Strategy", "Architecture"],
    delay: 0.2,
    href: "/services/technical-consulting"
  },
  {
    title: "Growth Consulting",
    description: "Data-driven strategies to accelerate business growth and market expansion.",
    icon: TrendingUp,
    tags: ["Strategy", "Expansion"],
    delay: 0.3,
    href: "/services/growth-consulting"
  },
  {
    title: "Startup Consultation",
    description: "Comprehensive guidance for startups, from MVP development to scaling.",
    icon: Rocket,
    tags: ["MVP", "Scaling"],
    delay: 0.4,
    href: "/services/startup-consultation"
  }
];

export function ServiceHub() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#fafafa] overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-[#FCD2AD]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#D44531]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FCD2AD] shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D44531]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A4A46]">Our Expertise</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#4A4A46] tracking-tight mb-6">
                Comprehensive <span className="text-[#D44531]">Digital Solutions</span>
             </h2>
             <p className="text-lg text-[#4A4A46]/70 leading-relaxed">
                We combine technical expertise with industry insights to deliver solutions that drive real business value.
             </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className="group"
            >
              <Link href={service.href} className="block h-full">
                <div className="relative h-[480px] w-full rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-3">
                  
                  {/* Background Layer */}
                  <div className="absolute inset-0 bg-white border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fffdfb] to-[#fff5ee]" />
                      
                      {/* Dynamic Moving Blobs (Slow Animation) */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FCD2AD]/10 rounded-full blur-[80px] group-hover:bg-[#D44531]/20 group-hover:scale-125 transition-all duration-1000" />
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D44531]/5 rounded-full blur-[80px] group-hover:bg-[#D44531]/10 group-hover:scale-125 transition-all duration-1000" />
                      
                      {/* Grain Texture */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay" />
                  </div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-10 flex flex-col items-start justify-between z-10">
                      
                      {/* Top Section */}
                      <div className="w-full">
                          <div className="w-16 h-16 rounded-[1.25rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(212,69,49,0.1)] transition-all duration-500">
                              <service.icon size={28} className="text-[#D44531] group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          
                          <h3 className="text-3xl font-bold font-heading text-[#4A4A46] mb-5 tracking-tight group-hover:text-[#D44531] transition-colors duration-300">
                              {service.title}
                          </h3>
                          
                          <p className="text-[#4A4A46]/70 leading-relaxed font-medium">
                              {service.description}
                          </p>
                      </div>

                      {/* Bottom Section */}
                      <div className="w-full pt-8 flex items-end justify-between relative">
                          <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D44531]/60">Expertise</span>
                              <span className="text-sm font-bold text-[#4A4A46]">{service.tags[0]}</span>
                          </div>
                          
                          <div className="flex flex-col gap-1 text-right">
                               <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-[#D44531] group-hover:border-[#D44531] transition-all duration-500">
                                  <ArrowRight size={20} className="text-[#D44531] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                              </div>
                          </div>

                          {/* Subtle decorative line */}
                          <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-[#D44531]/30 to-transparent" />
                      </div>

                  </div>

                  {/* Hover Glow Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D44531]/5 rounded-[3rem] transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Custom Need Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group"
          >
             <div className="relative h-[480px] w-full rounded-[3rem] overflow-hidden bg-[#D44531] shadow-2xl transition-all duration-500 hover:-translate-y-3">
                 {/* Premium Primary Background */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[#D44531] via-[#e65a45] to-[#D44531]" />
                 
                 {/* Subtle Light Glow */}
                 <div className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] bg-white/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
                 
                 <div className="absolute inset-0 p-10 flex flex-col justify-between text-white z-10">
                    <div>
                        <div className="w-16 h-16 rounded-[1.25rem] bg-white flex items-center justify-center mb-10 shadow-2xl shadow-black/10 border border-white/20">
                            <Layers size={28} className="text-[#D44531]" />
                        </div>
                        <h3 className="text-4xl font-bold font-heading mb-6 tracking-tight text-white line-tight">Need a <br/><span className="text-[#FCD2AD]">Bespoke</span> <br/>Solution?</h3>
                        <p className="text-white opacity-80 leading-relaxed font-medium max-w-[240px]">
                            We architect custom platforms for those who refuse to settle for off-the-shelf limits.
                        </p>
                    </div>
                    
                    <a href="#contact" className="group/btn relative w-full py-5 rounded-2xl bg-white text-[#D44531] font-bold text-center overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                        <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                            Start Consultation <ArrowRight size={18} />
                        </span>
                        <div className="absolute inset-0 bg-[#4A4A46] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                        <span className="absolute inset-0 flex items-center justify-center gap-2 text-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 font-black">
                            Let&apos;s Build It <ArrowRight size={18} />
                        </span>
                    </a>
                 </div>

                 {/* Decorative Grid Panel */}
                 <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                     <div className="absolute inset-0 bg-[radial-gradient(#D44531_1px,transparent_1px)] bg-[size:10px_10px]" />
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
