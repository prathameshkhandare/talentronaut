import { motion } from 'framer-motion';
import { Trophy, Briefcase, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FameItem {
    id: string;
    title: string;
    category: 'Experience' | 'Achievement' | 'Milestone';
    description: string;
    icon?: any;
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

export const HallOfFame = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-secondary-light/30 -skew-y-3 transform origin-top-left -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Hall of Fame</h2>
                    <p className="text-xl text-tertiary max-w-2xl mx-auto">
                        Our team's journey is paved with excellence, dedication, and world-class experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FAME_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-white rounded-card p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-secondary/20 group-hover:border-primary/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <item.icon className="w-24 h-24 text-primary" />
                                </div>

                                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <div className="text-xs font-bold tracking-wider text-primary uppercase mb-2">
                                    {item.category}
                                </div>

                                <h3 className="text-xl font-heading font-bold mb-3 text-tertiary group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-tertiary/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
