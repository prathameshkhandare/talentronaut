import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    socials?: {
        icon: LucideIcon;
        href: string;
    }[];
}

interface TeamMemberNodeProps {
    member: TeamMember;
    position: { x: string; y: string }; // Percentage based positioning
    delay?: number;
}

export const TeamMemberNode = ({ member, position, delay = 0 }: TeamMemberNodeProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="absolute z-10"
            style={{ left: position.x, top: position.y }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: delay
                }}
                className="relative group cursor-pointer"
            >
                {/* Avatar Container */}
                <div className={cn(
                    "relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-4 transition-all duration-300 transform",
                    isHovered ? "border-primary scale-110 shadow-xl rotate-3" : "border-white shadow-lg rotate-0"
                )}>
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />

                    {/* Default Name Tag (Bottom) - Hidden on hover to reduce clutter or kept? 
              Design shows name appearing in a tooltip/popover style. 
              Let's keep image clean and use the popover for details.
          */}
                </div>

                {/* Info Popover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 -translate-x-1/2 bottom-[110%] w-max max-w-xs z-20 pointer-events-none"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 relative">
                                {/* Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 border-8 border-transparent border-t-white" />

                                <h3 className="text-xl font-heading font-black text-gray-900 tracking-tight mb-1">{member.name}</h3>
                                <p className="text-[10px] font-mono font-bold text-[#D44531] uppercase tracking-[0.2em] mb-4">{member.role}</p>
                                <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-[220px]">{member.bio}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
