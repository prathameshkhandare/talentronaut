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

// Positions matching the path curve more accurately
const POSITIONS = [
    { x: '18%', y: '3%' },    // Alpha Node (CEO - Adjusted closer to line)
    { x: '55%', y: '18%' },    // Beta Node
    { x: '82%', y: '35%' },    // Gamma Node
    { x: '45%', y: '58%' },    // Delta Node
    { x: '16%', y: '75%' },    // Epsilon Node
    { x: '75%', y: '88%' },    // Zeta Node
];

export const TeamPath = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto h-[800px] md:h-[1200px] py-32 px-4 overflow-hidden md:overflow-visible bg-white">
            
            {/* Architectural Grid Background */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" 
            />
            


            {/* Wavy Schematic Path SVG */}
            <div className="absolute inset-0 pointer-events-none">
                <svg
                    viewBox="0 0 1000 1000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    {/* Definitions for Premium Gradients and Filters */}
                    <defs>
                        <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C03520" />
                            <stop offset="50%" stopColor="#E6503A" />
                            <stop offset="100%" stopColor="#C03520" />
                        </linearGradient>
                        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#D44531" floodOpacity="0.2" />
                        </filter>
                    </defs>

                    {/* Main Thick Elegant Path - PREMIUM 3D TUBE */}
                    <motion.path
                        d="M-50,200 C150,50 350,50 450,150 S850,200 800,450 S300,550 200,750 S500,950 900,850"
                        stroke="url(#premiumGradient)"
                        strokeWidth="32"
                        strokeLinecap="round"
                        fill="none"
                        filter="url(#dropShadow)"
                        className="opacity-100"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    
                    {/* Top Specular Highlight (Reflection) */}
                    <motion.path
                        d="M-50,200 C150,50 350,50 450,150 S850,200 800,450 S300,550 200,750 S500,950 900,850"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        className="opacity-30"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
                    />

                    {/* Inner Accent Path */}
                    <motion.path
                        d="M-50,200 C150,50 350,50 450,150 S850,200 800,450 S300,550 200,750 S500,950 900,850"
                        stroke="#D44531"
                        strokeWidth="2"
                        strokeDasharray="1 10"
                        strokeLinecap="round"
                        fill="none"
                        className="opacity-40"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />

                    {/* Glow Path */}
                    <motion.path
                        d="M-50,200 C150,50 350,50 450,150 S850,200 800,450 S300,550 200,750 S500,950 900,850"
                        stroke="#D44531"
                        strokeWidth="1"
                        fill="none"
                        className="opacity-20"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            {/* Nodes */}
            <div className="relative w-full h-full pointer-events-none">
                {TEAM_MEMBERS.map((member, index) => (
                    <div key={member.id} className="pointer-events-auto">
                        <TeamMemberNode
                            member={member}
                            position={POSITIONS[index] || { x: '50%', y: '50%' }}
                            delay={0.2 + (index * 0.1)}
                        />
                    </div>
                ))}
            </div>


        </div>
    );
};

