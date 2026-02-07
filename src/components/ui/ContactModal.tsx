"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: ''
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Lock html too
      document.documentElement.classList.add("lenis-stopped"); // Pause Lenis
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success for a few seconds
    setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: '', email: '', mobile: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({
          ...prev,
          [e.target.name]: e.target.value
      }));
  };

  // Handle hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full Screen Scroll Container - The white background is here */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] backdrop-blur-sm bg-black/5 overflow-y-auto overscroll-contain"
            onClick={onClose}
          >
            {/* Flex wrapper to center content if short, or allow scroll if tall */}
            <div className="min-h-full w-full flex items-center justify-center p-4 md:p-8">
                
                {/* Modal Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-lg bg-white rounded-[32px] p-8 md:p-10 shadow-2xl border border-gray-100 relative"
                >
                     {/* Close Button - Stays inside the card flow or fixed relative to card */}
                    <button 
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X size={24} className="text-gray-500" />
                    </button>

                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="h-full flex flex-col"
                                >
                                     <div className="mb-8">
                                        <h2 className="text-3xl font-heading font-bold text-charcoal mb-2">Let's Build Together</h2>
                                        <p className="text-gray-500">Share your details and our engineering team will get back to you within 24 hours.</p>
                                     </div>

                                     <form onSubmit={handleSubmit} className="flex-col gap-5 flex">
                                         <div className="space-y-2">
                                             <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                             <input 
                                                type="text" 
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-coral focus:ring-4 focus:ring-coral/10 outline-none transition-all placeholder:text-gray-400 text-black"
                                                placeholder="John Doe"
                                             />
                                         </div>
                                         <div className="space-y-2">
                                             <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                             <input 
                                                type="email" 
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-coral focus:ring-4 focus:ring-coral/10 outline-none transition-all placeholder:text-gray-400 text-black"
                                                placeholder="john@company.com"
                                             />
                                         </div>
                                         <div className="space-y-2">
                                             <label className="text-sm font-bold text-gray-700 ml-1">Mobile Number</label>
                                             <input 
                                                type="tel" 
                                                name="mobile"
                                                required
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-coral focus:ring-4 focus:ring-coral/10 outline-none transition-all placeholder:text-gray-400 text-black"
                                                placeholder="+1 (555) 000-0000"
                                             />
                                         </div>

                                         <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="mt-4 w-full h-[56px] bg-coral text-white rounded-full font-bold text-lg shadow-lg shadow-coral/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                         >
                                             {isSubmitting ? (
                                                 <>
                                                     <Loader2 className="animate-spin" />
                                                     Sending...
                                                 </>
                                             ) : "Book Consultation"}
                                         </button>
                                     </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-sm">
                                        <Check size={48} strokeWidth={3} />
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-charcoal mb-4">Message Sent!</h3>
                                    <p className="text-gray-500 text-lg">
                                        Thanks, {formData.name}. Our team has received your request and will contact you shortly.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
