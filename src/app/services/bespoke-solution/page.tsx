"use client";

import React, { useState } from 'react';
import { ServiceLayout } from '@/components/services/shared/ServiceLayout';
import { SectionHeading } from '@/components/services/shared/SectionHeading';
import { Check, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BespokeSolutionPage() {
    return (
        <ServiceLayout>
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Content */}
                    <div>
                        <span className="text-coral font-bold tracking-widest text-sm uppercase mb-6 block">Custom Engineering</span>
                        <SectionHeading as="h1" className="text-4xl md:text-5xl mb-8 leading-tight tracking-tight">
                            Beyond Off-the-Shelf. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-orange-500">Built for You.</span>
                        </SectionHeading>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Sometimes standard tools aren't enough. You need a platform that maps perfectly to your unique workflow, security requirements, and scale.
                        </p>
                        
                        <div className="space-y-6">
                            {[
                                { title: "Tailored Architecture", desc: "Designed specifically for your business logic and performance needs." },
                                { title: "Full IP Ownership", desc: "You own the code, the data, and the platform. No vendor lock-in." },
                                { title: "Seamless Integration", desc: "Connects perfectly with your existing ERP, CRM, and legacy systems." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center text-coral shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-charcoal">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-2xl border border-gray-100">
                        <BespokeForm />
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
}

function BespokeForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        requirements: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (isSuccess) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-6 bg-green-50/50 rounded-2xl border border-green-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-sm">
                    <Check size={40} strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Request Received!</h3>
                <p className="text-gray-500">
                    Thank you, {formData.name}. Our solution architects will analyze your requirements and reach out within 24 hours.
                </p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-coral font-bold hover:underline"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="mb-2">
                <h3 className="text-2xl font-bold font-heading text-charcoal">Tell us about your vision</h3>
                <p className="text-gray-500 text-sm">Fill out the form below to start the conversation.</p>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-coral focus:ring-2 focus:ring-coral/10 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Jane Smith"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Work Email</label>
                <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-coral focus:ring-2 focus:ring-coral/10 outline-none transition-all placeholder:text-gray-400"
                    placeholder="jane@company.com"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Company Name</label>
                <input 
                    type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-coral focus:ring-2 focus:ring-coral/10 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Acme Inc."
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Project Requirements</label>
                <textarea 
                    name="requirements" required value={formData.requirements} onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-coral focus:ring-2 focus:ring-coral/10 outline-none transition-all placeholder:text-gray-400 resize-none block"
                    placeholder="Briefly describe what you're looking to build..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full h-[56px] bg-coral text-white rounded-full font-bold text-lg shadow-lg shadow-coral/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>Start Conversation <ArrowRight size={20} /></>
                )}
            </button>
        </form>
    );
}
