"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FresaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 8H17M7 12H13M7 16H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="17" cy="15" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const SharePointIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 3V9M12 15V21M4 7L10 10M14 14L20 17M20 7L14 10M10 14L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SAPIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V8M12 16V18M6 12H8M16 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const DynamicsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const MiddlewareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
    <circle cx="4" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);

const WorkflowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
  </svg>
);

const TOOLS = [
  {
    name: "Fresa",
    category: "Logistics ERP",
    description: "End-to-end operational control for freight forwarding and logistics. We integrate Fresa to streamline your global supply chain visibility.",
    icon: <FresaIcon />
  },
  {
    name: "SharePoint",
    category: "Collaboration",
    description: "Enterprise-grade document management and intranet. We architect secure SharePoint environments that foster seamless organizational synergy.",
    icon: <SharePointIcon />
  },
  {
    name: "SAP S/4HANA",
    category: "Business Suite",
    description: "Next-gen ERP for real-time business processes. Our experts ensure your SAP implementation is optimized for maximum performance.",
    icon: <SAPIcon />
  },
  {
    name: "Microsoft Dynamics",
    category: "CRM & ERP",
    description: "Adaptive business applications. We leverage Dynamics to unify your data and deliver actionable insights across every department.",
    icon: <DynamicsIcon />
  },
  {
    name: "Custom Middleware",
    category: "Integration",
    description: "Bespoke bridges between legacy and modern tools. We build the 'glue' that ensures your entire ecosystem speaks the same language.",
    icon: <MiddlewareIcon />
  },
  {
    name: "Automated Workflows",
    category: "Optimization",
    description: "Eliminating manual bottlenecks through intelligent automation. Transforming complex operations into autonomous, efficient streams.",
    icon: <WorkflowIcon />
  }
];

export function ToolEcosystem() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            The Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6"
          >
            Mastery Over Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Industry Tool.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We don't just provide software; we orchestrate entire technical environments. 
            From niche logistics ERPs like Fresa to global standards like SharePoint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool, index }: { tool: typeof TOOLS[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-orange-400 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px]" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-primary/20">
          {tool.icon}
        </div>
        
        <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">{tool.category}</span>
        <h3 className="text-2xl font-bold text-charcoal mb-4">{tool.name}</h3>
        <p className="text-gray-600 leading-relaxed mb-6 font-medium">
          {tool.description}
        </p>
        
        <div className="flex items-center gap-2 text-charcoal font-bold text-sm group-hover:gap-4 transition-all duration-300">
            <span>Learn More</span>
            <span className="text-primary">→</span>
        </div>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
  );
}
