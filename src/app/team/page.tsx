'use client';

import { TeamPath } from '@/components/team/TeamPath';
import { HallOfFame } from '@/components/team/HallOfFame';

export default function TeamPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 pb-10 text-center px-4 max-w-4xl mx-auto z-10">
                <p className="text-primary font-bold tracking-widest text-sm uppercase mb-3">
                    Meet Our Team
                </p>
                <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary mb-6 leading-tight">
                    Bringing Passion and<br /> Expertise Together
                </h1>
                <p className="text-tertiary text-lg md:text-xl leading-relaxed">
                    Welcome to our team page, where you get a glimpse into the heart and soul of our organization.
                </p>
            </div>

            <TeamPath />

            <HallOfFame />

            {/* 
        Optional: A simple grid fallback for Mobile if the generic Path is too messy?
        The TeamPath uses percentages which might stack weirdly on very small screens.
        Currently relying on TeamPath's responsiveness.
      */}
        </div>
    );
}
