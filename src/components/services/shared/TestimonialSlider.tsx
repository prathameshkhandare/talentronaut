"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionHeading } from './SectionHeading';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialSlider({ testimonials, className }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000); // Auto-advance
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className={cn("py-20 bg-white rounded-[32px] my-6 overflow-hidden relative", className)}>
        {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-base font-black uppercase tracking-widest text-coral mb-4">What Our Partners Say</h2>
            <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-coral">
                    <Quote size={32} />
                </div>
            </div>
            
          <div className="relative h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-heading leading-tight text-charcoal mb-8 italic">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden border-2 border-white shadow-md relative">
                       {/* Placeholder for avatar if no image provided, or use image */}
                       {testimonials[currentIndex].image ? (
                           <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-full h-full object-cover" />
                       ) : (
                           <div className="w-full h-full flex items-center justify-center bg-coral text-white text-xl font-bold">
                               {testimonials[currentIndex].author[0]}
                           </div>
                       )}
                  </div>
                  <h4 className="text-lg font-bold text-charcoal">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full hover:bg-cream transition-colors text-charcoal" aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={cn("w-2.5 h-2.5 rounded-full transition-all", idx === currentIndex ? "bg-coral w-8" : "bg-gray-300")}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
            <button onClick={next} className="p-2 rounded-full hover:bg-cream transition-colors text-charcoal" aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
