"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionHeading } from './SectionHeading';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={cn("py-16 max-w-4xl mx-auto px-4", className)}>
      <SectionHeading className="text-[36px] text-center mb-12">Frequently Asked Questions</SectionHeading>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-[32px] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-charcoal font-heading">{item.question}</span>
              <span className={cn("p-2 rounded-full bg-cream transition-colors", openIndex === index ? "bg-coral text-white" : "text-gray-500")}>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
