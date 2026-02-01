"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TabContent {
  id: string;
  label: string;
  title: string;
  content: string;
  features: string[];
}

interface TabbedInterfaceProps {
  tabs: TabContent[];
  className?: string;
}

export function TabbedInterface({ tabs, className }: TabbedInterfaceProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={cn("w-full max-w-5xl mx-auto my-16", className)}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm",
              activeTab === tab.id
                ? "bg-coral text-white shadow-md transform -translate-y-1"
                : "bg-white text-gray-500 hover:bg-cream hover:text-charcoal"
            )}
            style={activeTab === tab.id ? { backgroundColor: 'var(--color-coral)' } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-gray-100 min-h-[400px]">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            tab.id === activeTab ? (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                   <h3 className="text-3xl font-heading font-bold text-charcoal mb-6">{tab.title}</h3>
                   <p className="text-gray-600 leading-relaxed mb-8">{tab.content}</p>
                   <ul className="space-y-4">
                       {tab.features.map((feature, idx) => (
                           <li key={idx} className="flex items-center text-charcoal font-medium">
                               <span className="w-2 h-2 rounded-full bg-coral mr-3" />
                               {feature}
                           </li>
                       ))}
                   </ul>
                </div>
                <div className="bg-cream rounded-2xl h-64 md:h-80 flex items-center justify-center border border-gray-100">
                    <span className="text-gray-400 italic">Illustration for {tab.label}</span>
                </div>
              </motion.div>
            ) : null
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
