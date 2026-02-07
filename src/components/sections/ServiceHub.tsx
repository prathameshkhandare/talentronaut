"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Users, Cpu, TrendingUp, Rocket, Layers, ArrowRight } from "lucide-react";

// Custom Premium Icons
const TechSolutionsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-20"/>
    <path d="M24 16L32 20V30L24 34L16 30V20L24 16Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 20L24 26L36 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 30L24 36L36 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TalentIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 36C14 30.5 18.5 26 24 26C29.5 26 34 30.5 34 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="10" cy="24" r="4" stroke="currentColor" strokeWidth="2" className="opacity-60"/>
    <circle cx="38" cy="24" r="4" stroke="currentColor" strokeWidth="2" className="opacity-60"/>
    <path d="M4 42C4 38 7 35 10 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40"/>
    <path d="M44 42C44 38 41 35 38 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40"/>
  </svg>
);

const ConsultationIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 44L44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-30"/>
    <path d="M4 34L14 24L22 32L44 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 10V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50"/>
    <path d="M44 10H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50"/>
    <circle cx="44" cy="10" r="3" fill="currentColor"/>
    <circle cx="14" cy="24" r="2" fill="currentColor" className="opacity-50"/>
    <circle cx="22" cy="32" r="2" fill="currentColor" className="opacity-50"/>
  </svg>
);

const EnterpriseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" className="opacity-30"/>
    <rect x="14" y="14" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 14V34" stroke="currentColor" strokeWidth="2" className="opacity-50"/>
    <path d="M14 24H34" stroke="currentColor" strokeWidth="2" className="opacity-50"/>
    <circle cx="24" cy="24" r="4" fill="currentColor"/>
    <path d="M40 8L44 4" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 40L4 44" stroke="currentColor" strokeWidth="2"/>
    <path d="M40 40L44 44" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 8L4 4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const services = [
  {
    title: "Technical Solutions",
    description: "End-to-end IT solutions tailored to your business needs, from web apps to enterprise software.",
    icon: TechSolutionsIcon,
    tags: ["Full Stack", "Enterprise"],
    delay: 0,
    href: "/services/technical-solutions"
  },
  {
    title: "Strategic Talent Partner",
    description: "Helping EMEA hunt, build & manage high-impact teams & EntOps.",
    icon: TalentIcon,
    tags: ["Recruitment", "Hiring"],
    delay: 0.1,
    href: "/services/talent-hire"
  },
  {
    title: "Consultation Service",
    description: "Expert guidance in Tech, Growth, and Startup strategies to navigate your digital journey.",
    icon: ConsultationIcon,
    tags: ["Strategy", "Advisory"],
    delay: 0.2,
    href: "/services/consultation"
  },
  {
    title: "Enterprise Operation",
    description: "Scalable operational frameworks and digital infrastructure for large organizations.",
    icon: EnterpriseIcon,
    tags: ["Operations", "Scale"],
    delay: 0.3,
    href: "/services/enterprise-operation"
  }
];

export function ServiceHub() {
  return (
    <section className="relative py-16 md:py-32 bg-[#fafafa] overflow-hidden" id="services">
      {/* Top Section Blend Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10% ] right-[-10%] w-[800px] h-[800px] bg-[#FCD2AD]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#D44531]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 max-w-3xl mx-auto text-center">
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
             
             <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#4A4A46] tracking-tight mb-6 leading-[1.2]">
                Comprehensive <span className="text-[#D44531]">Digital Solutions</span>
             </h2>
             <p className="text-sm text-[#4A4A46]/70 leading-relaxed max-w-xl mx-auto">
                We combine technical expertise with industry insights to deliver solutions that drive real business value.
             </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className="group"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="h-full"
              >
                <Link href={service.href} className="block h-full relative group/card">
                  <div className="relative h-[440px] w-full rounded-[2.5rem] bg-white transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_80px_-15px_rgba(212,69,49,0.15)] border-2 border-gray-200 overflow-hidden">
                    
                    {/* Premium Texture & Depth Layer */}
                    <div className="absolute inset-0 bg-[#fafafa]/50" />
                    <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-soft-light pointer-events-none" />
                    
                    {/* Hover Gradient Bloom */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-[#FCD2AD]/40 via-[#FCD2AD]/10 to-transparent rounded-full blur-[60px]" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#D44531]/10 via-[#D44531]/5 to-transparent rounded-full blur-[60px]" />
                    </div>

                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                        {/* Top Content */}
                        <div>
                            {/* Icon Container with Glass Effect */}
                            <div className="relative w-16 h-16 mb-8 group-hover/card:scale-110 transition-transform duration-500 ease-out">
                                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg shadow-[#D44531]/10" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-100 group-hover/card:opacity-0 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-[#D44531] rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rotate-6" />
                                
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <service.icon className="w-8 h-8 text-[#D44531] group-hover/card:text-white transition-colors duration-500 relative z-10" />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold font-heading text-[#1a1a1a] mb-4 group-hover/card:text-[#D44531] transition-colors duration-300 leading-tight">
                                {service.title}
                            </h3>
                            
                            <p className="text-[#4A4A46]/70 leading-relaxed text-[15px] font-medium tracking-wide">
                                {service.description}
                            </p>
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex items-end justify-between mt-auto">
                            {/* Tags as Premium Badges */}
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 text-[10px] font-black uppercase tracking-[0.15em] text-[#4A4A46] group-hover/card:border-[#D44531]/20 group-hover/card:text-[#D44531] transition-all duration-300 shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Magnetic-feel Action Button */}
                            <div className="relative w-12 h-12">
                                <div className="absolute inset-0 bg-white rounded-full border border-gray-100 shadow-sm group-hover/card:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-[#D44531] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 scale-90 group-hover/card:scale-110" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ArrowRight size={18} className="text-[#D44531] group-hover/card:text-white group-hover/card:-rotate-45 transition-all duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}

          {/* Custom Need Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group md:col-span-2 lg:col-span-2"
          >
             <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
             >
                <div className="relative h-[480px] w-full rounded-[3rem] overflow-hidden bg-[#D44531] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(212,69,49,0.35)]">
                    {/* Premium Primary Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D44531] via-[#e65a45] to-[#D44531]" />
                    
                    {/* Subtle Light Glow */}
                    <div className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] bg-white/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-between text-white z-10">
                        <div>
                            <div className="w-16 h-16 rounded-[1.25rem] bg-white flex items-center justify-center mb-10 shadow-2xl shadow-black/10 border border-white/20">
                                <Layers size={28} className="text-[#D44531]" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-6 tracking-tight text-white leading-tight">Need a <span className="text-[#FCD2AD]">Bespoke</span> Solution?</h3>
                            <p className="text-white opacity-80 leading-relaxed font-medium">
                                We architect custom platforms for those who refuse to settle for off-the-shelf limits.
                            </p>
                        </div>
                        
                        <a href="#contact" className="group/btn relative w-full py-3 md:py-5 rounded-2xl bg-white text-[#D44531] font-bold text-center overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(252,210,173,0.4)] hover:scale-[1.02]">
                            <div className="relative z-10 flex items-center justify-center gap-2 tracking-wide transition-all duration-500 group-hover/btn:text-[#D44531]">
                                <span className="flex items-center gap-2 group-hover/btn:scale-110 transition-transform duration-500">
                                    Start Consultation <ArrowRight size={18} className="group-hover/btn:translate-x-1" />
                                </span>
                            </div>
                            
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                            
                            {/* Inner Glow Overlay */}
                            <div className="absolute inset-0 bg-[#FCD2AD]/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                        </a>
                    </div>

                    {/* Decorative Grid Panel */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#D44531_1px,transparent_1px)] bg-[size:10px_10px]" />
                    </div>
                </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
