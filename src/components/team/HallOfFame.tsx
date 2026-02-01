import { motion } from 'framer-motion';
import { Trophy, Briefcase, Star } from 'lucide-react';

// Top Stats
interface FameItem {
    id: string;
    title: string;
    category: 'Experience' | 'Achievement' | 'Milestone';
    description: string;
    icon: any;
}

const FAME_ITEMS: FameItem[] = [
    {
        id: '1',
        title: 'Ex-Google Engineering',
        category: 'Experience',
        description: 'Our core tech leads bring experience from Google Search and Cloud teams.',
        icon: Briefcase,
    },
    {
        id: '2',
        title: 'Forbes 30 Under 30',
        category: 'Achievement',
        description: 'Recognized for innovation in EdTech and Career Development.',
        icon: Trophy,
    },
    {
        id: '3',
        title: '1M+ Users Impacted',
        category: 'Milestone',
        description: 'Helping over a million students find their dream career paths.',
        icon: Star,
    },
    {
        id: '4',
        title: 'Stanford Alumni',
        category: 'Experience',
        description: 'Founded by Stanford GSB graduates with a passion for education.',
        icon: Briefcase,
    },
];

// Legends Grid (People)
const LEGENDS = [
    {
        id: 1,
        name: "Aarav P.",
        role: "Lead Architect",
        project: "Delivered LinksUs Core",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        color: "#D44531"
    },
    {
        id: 2,
        name: "Sarah K.",
        role: "AI Research Head",
        project: "Built FirstStep Engine",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
        color: "#4A4A46"
    },
    {
        id: 3,
        name: "Vikram R.",
        role: "Blockchain Lead",
        project: "Secured XMetX Protocol",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
        color: "#D44531"
    },
    {
        id: 4,
        name: "Elena M.",
        role: "Product Design",
        project: "Designed EventSphere UI",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
        color: "#4A4A46"
    },
    {
        id: 5,
        name: "David C.",
        role: "DevOps Lead",
        project: "Scaled Infra to 1M+",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
        color: "#D44531"
    },
    {
        id: 6,
        name: "Priya S.",
        role: "Data Scientist",
        project: "Optimized AiMailer NLP",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
        color: "#4A4A46"
    },
     {
        id: 7,
        name: "James L.",
        role: "Security Analyst",
        project: "Hardened Oron Wallet",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
        color: "#D44531"
    },
     {
        id: 8,
        name: "Meera T.",
        role: "Growth Hack",
        project: "Launched SpazorLabs",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
        color: "#4A4A46"
    }
];

export const HallOfFame = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-secondary-light/30 -skew-y-3 transform origin-top-left -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 text-gray-900 tracking-tighter">
                        The <span className="text-[#D44531]">Hall of Fame</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-sans">
                        Our DNA is built on excellence. From world-class alumni to award-winning innovators.
                    </p>
                </motion.div>

                {/* Architectural Light Stats Grid - Design Thinking Applied */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {FAME_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[400px] rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between p-12 transition-all duration-500 hover:border-[#D44531]/20"
                        >
                            {/* Technical Blueprint Background */}
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
                            
                            {/* Architectural Corner Markers */}
                            <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-gray-200 group-hover:border-[#D44531]/40 transition-colors" />
                            <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-gray-200 group-hover:border-[#D44531]/40 transition-colors" />
                            <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-gray-200 group-hover:border-[#D44531]/40 transition-colors" />
                            <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-gray-200 group-hover:border-[#D44531]/40 transition-colors" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Top Section */}
                                <div className="flex justify-between items-start mb-auto">
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-[#D44531]/5 border border-[#D44531]/10 flex items-center justify-center text-[#D44531] group-hover:bg-[#D44531] group-hover:text-white transition-all duration-500">
                                            <item.icon size={28} />
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-[#D44531]/50 transition-colors duration-500 tracking-[0.2em] transform rotate-90 origin-right">
                                        SEC_0{index + 1}/TYPE_H
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-6">
                                        <span className="w-2 h-2 rounded-full bg-[#D44531]" />
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                                            {item.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900 leading-[0.85] mb-6 tracking-tighter">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Abstract Blueprint Watermark (Unique per card) */}
                            <div className="absolute -right-16 -bottom-16 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 transform group-hover:scale-90 group-hover:-translate-x-4 pointer-events-none">
                                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="200" cy="200" r="199" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
                                    <rect x="50" y="50" width="300" height="300" stroke="currentColor" strokeWidth="0.5" />
                                    <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" />
                                    <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="0.5" />
                                    <path d="M100 100L300 300M300 100L100 300" stroke="currentColor" strokeWidth="0.5" />
                                </svg>
                            </div>

                            {/* Technical Label */}
                            <div className="absolute bottom-10 right-12 hidden md:block">
                                <div className="text-[8px] font-mono text-gray-300 uppercase leading-none text-right">
                                    VERIFIED LOG_2026<br />
                                    <span className="text-[#D44531]/40">ALPHA_V.01</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legends Grid (People) */}
                <div className="max-w-7xl mx-auto">
                     <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-gray-200"></div>
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">The Builders</span>
                        <div className="h-px flex-1 bg-gray-200"></div>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {LEGENDS.map((person, i) => (
                            <motion.div 
                                key={person.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <img src={person.image} alt={person.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="overflow-hidden mb-2">
                                        <div className="text-[#D44531] font-bold text-xs uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                            {person.project}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-1">{person.name}</h3>
                                    <p className="text-white/60 text-sm font-sans">{person.role}</p>
                                </div>
                            </motion.div>
                        ))}
                     </div>
                </div>

            </div>
        </section>
    );
};
