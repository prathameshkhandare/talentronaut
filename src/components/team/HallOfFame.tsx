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
            <motion.div 
                initial={{ opacity: 0, skewY: 0 }}
                whileInView={{ opacity: 0.3, skewY: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-secondary-light transform origin-top-left -z-10" 
            />

            <div className="container mx-auto px-4 md:px-8">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900 tracking-tight">
                        The <span className="text-[#D44531]">Hall of Fame</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
                        Our DNA is built on excellence. From world-class alumni to award-winning innovators.
                    </p>
                </motion.div>

                {/* Achievement Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
                    {FAME_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            {/* Premium Card with Enhanced Primary Color Expression */}
                            <div className="relative h-[380px] bg-gradient-to-br from-white via-white to-[#D44531]/5 backdrop-blur-2xl rounded-[2.5rem] p-12 border border-gray-200/40 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(212,69,49,0.18)] transition-all duration-1000 overflow-hidden hover:-translate-y-4 hover:border-[#D44531]/50">
                                
                                {/* Left Accent Border */}
                                <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-[#D44531] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Shimmer Beam Effect */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D44531]/10 to-transparent w-[200%] -skew-x-12 translate-x-[-150%] pointer-events-none"
                                    animate={{ 
                                        translateX: ["-150%", "150%"] 
                                    }}
                                    transition={{ 
                                        duration: 4, 
                                        repeat: Infinity, 
                                        ease: "linear",
                                        repeatDelay: 3
                                    }}
                                />

                                {/* Glass Reflection Top Edge */}
                                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#D44531]/20 to-transparent pointer-events-none" />
                                
                                {/* DESIGN ELEMENT: Stronger Vibrant Aura */}
                                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(212,69,49,0.18)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-3xl" />
                                
                                {/* Content Container */}
                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Design Detail: Premium Spark Indicator */}
                                    <div className="mb-8 flex items-center gap-3">
                                        <div className="w-16 h-[2px] bg-gradient-to-r from-[#D44531] to-transparent rounded-full group-hover:w-24 transition-all duration-1000" />
                                        <motion.div 
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                            className="relative flex items-center justify-center"
                                        >
                                            <div className="w-2 h-2 rotate-45 bg-[#D44531]" />
                                            <div className="absolute w-4 h-[1.5px] bg-[#D44531]/50 rotate-90" />
                                            <div className="absolute h-4 w-[1.5px] bg-[#D44531]/50 rotate-90" />
                                        </motion.div>
                                    </div>

                                    {/* Category Badge - Polished with Primary Tint */}
                                    <div className="mb-6">
                                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-[#D44531]/20 group-hover:bg-[#D44531] group-hover:border-[#D44531] transition-all duration-700 shadow-sm group-hover:shadow-[#D44531]/30">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D44531] group-hover:bg-white animate-pulse" />
                                            <span className="text-[9px] font-black text-[#D44531] uppercase tracking-[0.25em] group-hover:text-white transition-colors duration-700">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Title - Ultra Modern with Gradient Reveal */}
                                    <h3 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-[1.05] mb-5 tracking-[-0.03em] group-hover:text-[#D44531] transition-colors duration-700">
                                        {item.title}
                                    </h3>
                                    
                                    {/* Description - High Legibility */}
                                    <p className="text-[15px] text-gray-400 font-medium leading-relaxed mb-auto max-w-[85%] group-hover:text-gray-700 transition-colors duration-700">
                                        {item.description}
                                    </p>

                                    {/* DESIGN DETAIL: Elegant Kinetic Border */}
                                    <div className="mt-10 flex items-center gap-6">
                                        <div className="relative h-[2px] flex-1 bg-[#D44531]/10 overflow-hidden rounded-full">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#D44531] to-orange-400 w-0 group-hover:w-full transition-all duration-[1.5s] ease-in-out" />
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div 
                                                    key={i} 
                                                    animate={{ 
                                                        scale: [1, 1.4, 1],
                                                        opacity: [0.3, 0.7, 0.3]
                                                    }}
                                                    transition={{ 
                                                        duration: 2, 
                                                        repeat: Infinity, 
                                                        delay: i * 0.4 
                                                    }}
                                                    className="w-2 h-2 rounded-full bg-[#D44531]"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Design Detail: Refined Primary Accents */}
                                <div className="absolute top-10 right-10 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-75 group-hover:scale-100">
                                    <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#D44531] to-transparent" />
                                    <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#D44531] to-transparent" />
                                </div>
                                <div className="absolute bottom-10 left-10 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-75 group-hover:scale-100">
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D44531] to-transparent" />
                                    <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-[#D44531] to-transparent" />
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
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <img src={person.image} alt={person.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
