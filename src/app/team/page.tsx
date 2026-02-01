'use client';

import { motion } from 'framer-motion';

import { TeamPath } from '@/components/team/TeamPath';
import { HallOfFame } from '@/components/team/HallOfFame';
import { TalentPipeline } from '@/components/team/TalentPipeline';
import { CareerLaunchpad } from '@/components/team/CareerLaunchpad';

export default function TeamPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,69,49,0.05),transparent_40%)]" />
                
                <div className="relative container mx-auto px-6 z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-6 p-2 bg-orange-50 rounded-full"
                    >
                        <p className="text-[#D44531] font-bold tracking-[0.2em] text-[10px] uppercase px-3">
                            MEET THE ARCHITECTS
                        </p>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-heading font-black text-gray-900 mb-8 leading-[0.9] tracking-tighter"
                    >
                        Bringing Passion and<br /> <span className="text-[#D44531] italic">Expertise</span> Together
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg md:text-xl leading-relaxed font-sans max-w-2xl mx-auto"
                    >
                        Welcome to our team page, where you get a glimpse into the heart and soul of our organization.
                    </motion.p>
                </div>
            </div>

            <TeamPath />

            <HallOfFame />
            
            <TalentPipeline />
            
            <CareerLaunchpad />
        </div>
    );
}

