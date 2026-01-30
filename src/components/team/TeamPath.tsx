import { motion } from 'framer-motion';
import { TeamMemberNode } from './TeamMemberNode';

// Dummy Data
const TEAM_MEMBERS = [
    {
        id: '1',
        name: 'Kaiya Rhiel Madsen',
        role: 'Chief Executive Officer',
        bio: 'Visionary leader with 10+ years in EdTech.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop', // Stock image
    },
    {
        id: '2',
        name: 'Alex Rivera',
        role: 'CTO',
        bio: 'Tech architect building scalable AI systems.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    },
    {
        id: '3',
        name: 'Sarah Chen',
        role: 'Head of Product',
        bio: 'Product strategist focused on user-centric design.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
    },
    {
        id: '4',
        name: 'James Wilson',
        role: 'Lead Designer',
        bio: 'Award-winning designer crafting beautiful experiences.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
    },
    {
        id: '5',
        name: 'Maria Garcia',
        role: 'Marketing Director',
        bio: 'Connecting people with opportunities through storytelling.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    },
    {
        id: '6',
        name: 'David Kim',
        role: 'Head of Growth',
        bio: 'Driving expansion and building community.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    }
];

// Positions matching the reference design
const POSITIONS = [
    { x: '45%', y: '8%' },    // 1. Top Center (Kaiya)
    { x: '12%', y: '32%' },   // 2. Left Upper (Mustache guy)
    { x: '82%', y: '28%' },   // 3. Right Upper (Red shirt lady)
    { x: '15%', y: '72%' },   // 4. Left Lower (Beanie guy)
    { x: '48%', y: '88%' },   // 5. Bottom Center (Orange shirt lady)
    { x: '78%', y: '68%' },   // 6. Right Lower (Pink/Purple shirt guy)
];

export const TeamPath = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto h-[800px] md:h-[1000px] py-20 px-4 overflow-hidden md:overflow-visible">


            {/* Wavy Path SVG */}
            <div className="absolute inset-0 pointer-events-none opacity-90">
                <svg
                    viewBox="0 0 1000 1000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M-50,200 C150,50 350,50 450,150 S850,200 800,450 S300,550 200,750 S500,950 900,850"
                        stroke="var(--color-primary)"
                        strokeWidth="50"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M-50,200 C150,50 350,50 450,150 S850,200 800,450 S300,550 200,750 S500,950 900,850"
                        stroke="var(--color-primary-light)"
                        strokeWidth="15"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.1 }}
                        className="opacity-50"
                    />
                </svg>
            </div>

            {/* Nodes */}
            <div className="relative w-full h-full pointer-events-none">
                {/* Render ALL Members now that we are back to 6-node layout */}
                {TEAM_MEMBERS.map((member, index) => (
                    <div key={member.id} className="pointer-events-auto">
                        <TeamMemberNode
                            member={member}
                            position={POSITIONS[index] || { x: '50%', y: '50%' }}
                            delay={0.5 + (index * 0.2)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
