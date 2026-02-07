"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-black pt-28 pb-16 overflow-hidden" id="footer">
      {/* Marquee Header */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-4 bg-[#D44531]/5 border-b border-[#D44531]/10 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[100px] md:text-[140px] font-heading font-black text-transparent stroke-text uppercase px-8 opacity-10">
              LET&apos;S CONNECT
            </span>
          ))}
        </div>
      </div>
      
      {/* Dark Circuit Animation - Inline */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="darkTraceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D44531" stopOpacity="0" />
              <stop offset="50%" stopColor="#D44531" stopOpacity="1" />
              <stop offset="100%" stopColor="#D44531" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Static circuit lines - Dense network */}
          {[
            // Left side
            "M 10 0 V 150 L 40 180 V 400 L 20 420 V 900",
            "M 50 0 V 100 L 80 130 V 350",
            "M 80 900 V 700 L 100 680 V 400",
            "M 120 0 V 200 L 150 230 V 600 L 130 620 V 900",
            // Left-center
            "M 200 0 V 200 L 230 230 V 800",
            "M 280 900 V 600 L 300 570 V 250 L 320 220 V 0",
            "M 350 0 V 150 L 380 180 V 500",
            "M 400 900 V 700 L 420 680 V 300",
            // Center
            "M 550 0 V 300 L 580 330 V 600 L 560 620 V 900",
            "M 650 900 V 500 L 680 470 V 200 L 660 180 V 0",
            "M 750 0 V 400 L 780 430 V 900",
            // Right-center
            "M 900 900 V 700 L 950 650 V 200 L 920 170 V 0",
            "M 1000 0 V 300 L 1030 330 V 700",
            "M 1050 900 V 550 L 1080 520 V 150",
            // Right side
            "M 1200 0 V 250 L 1250 300 V 700",
            "M 1300 0 V 150 L 1270 180 V 600 L 1300 630 V 900",
            "M 1380 900 V 400 L 1400 370 V 0",
            "M 1420 0 V 500 L 1400 530 V 900",
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="#D44531"
              strokeWidth="1"
              fill="none"
              opacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 + i * 0.2, delay: i * 0.1 }}
            />
          ))}
          {/* Animated pulses - High Density Flow */}
          {[
            "M 60 0 V 80 L 90 110 V 250 L 120 280 V 500",
            "M 350 0 V 100 L 320 130 V 500 L 350 530 V 900",
            "M 1100 900 V 600 L 1080 580 V 0",
            "M 180 900 V 650 L 200 630 V 300 L 220 280 V 0",
            "M 480 0 V 200 L 500 220 V 700 L 520 720 V 900",
            "M 800 900 V 600 L 820 580 V 200 L 800 180 V 0",
            "M 1150 0 V 400 L 1180 430 V 800",
            "M 1350 900 V 500 L 1320 470 V 100",
            // Additional dense lines
            "M 30 0 V 120 L 60 150 V 450",
            "M 140 900 V 500 L 170 470 V 100",
            "M 250 0 V 300 L 220 330 V 700",
            "M 420 900 V 600 L 450 570 V 200",
            "M 600 0 V 400 L 630 430 V 800",
            "M 720 900 V 300 L 690 270 V 50",
            "M 850 0 V 250 L 880 280 V 650",
            "M 980 900 V 450 L 950 420 V 120",
            "M 1250 0 V 350 L 1220 380 V 750",
            "M 1320 900 V 550 L 1350 520 V 150",
            "M 90 0 V 180 L 120 210 V 520",
            "M 380 900 V 620 L 350 590 V 220",
            "M 520 0 V 320 L 550 350 V 720",
            "M 760 900 V 420 L 730 390 V 80",
            "M 1020 0 V 280 L 1050 310 V 680",
            "M 1180 900 V 480 L 1150 450 V 120",
            "M 15 0 V 200 L 35 220 V 600",
            "M 1430 900 V 300 L 1410 280 V 50",
          ].map((d, i) => (
            <motion.path
              key={`pulse-${i}`}
              d={d}
              stroke="url(#darkTraceGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{ pathLength: [0, 0.25, 0], pathOffset: [0, 1, 1] }}
              transition={{
                duration: (5 + (i % 5) * 6) * 2, // Slower speed (50% of original)
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2, // Staggered start for density
              }}
            />
          ))}
          {/* Glowing nodes - More junctions */}
          {[
            { cx: 40, cy: 180 }, { cx: 80, cy: 130 }, { cx: 150, cy: 230 },
            { cx: 230, cy: 230 }, { cx: 300, cy: 570 }, { cx: 380, cy: 180 },
            { cx: 580, cy: 330 }, { cx: 680, cy: 470 }, { cx: 780, cy: 430 },
            { cx: 950, cy: 650 }, { cx: 1030, cy: 330 }, { cx: 1080, cy: 520 },
            { cx: 1250, cy: 300 }, { cx: 1270, cy: 180 }, { cx: 1400, cy: 370 }
          ].map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill="#D44531"
              animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </div>

      {/* Design Element: Background Aura - reduced */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D44531]/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Informational Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
            
            {/* Brand Matrix Section */}
            <div className="lg:col-span-5 space-y-12">
                <div className="space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-5 group cursor-pointer"
                    >
                        <Image 
                            src="/logos/logo.svg" 
                            alt="Talentronaut" 
                            width={64} 
                            height={64}
                            className="object-contain group-hover:scale-110 transition-transform duration-700"
                        />
                        <span className="text-[32px] font-heading font-black tracking-tighter leading-none">
                            <span className="text-[#D44531]">Talent</span><span className="text-white">ronaut</span>
                        </span>
                    </motion.div>
                    <p className="text-sm text-gray-400 font-medium leading-[1.6] max-w-sm">
                        Cutting-edge technology solutions for forward-thinking enterprises. Innovating the future with AI, Web3, and next-generation development.
                    </p>
                </div>

                <div className="flex gap-4">
                    {[
                        { icon: Facebook, href: "https://www.facebook.com/people/Talentronaut-tech/61577695273275/?rdid=cY4lsNyGt9ueFmdX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CEj9MmwDo%2F" },
                        { icon: Instagram, href: "https://www.instagram.com/talentronaut" },
                        { icon: Linkedin, href: "https://www.linkedin.com/company/talentronaut-technologies-private-limited/posts/?feedView=all" }
                    ].map((social, i) => (
                        <motion.a 
                            key={i} 
                            whileHover={{ y: -8, scale: 1.05 }}
                            href={social.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-400 hover:shadow-xl hover:shadow-[#D44531]/20 hover:text-[#D44531] hover:border-[#D44531]/50 transition-all duration-500 overflow-hidden group"
                        >
                            <social.icon size={22} className="relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D44531]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Navigation Pulse Links */}
            <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-2 h-2 rounded-full bg-[#D44531]" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D44531]">The Nodes</h4>
                </div>
                <ul className="grid grid-cols-1 gap-5">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/#services' },
                        { label: 'Products', href: '/products' },
                        { label: 'Team', href: '/team' },
                        { label: 'Blog', href: '/blog' }
                    ].map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-base text-gray-300 hover:text-[#D44531] font-bold transition-all block group">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Support Matrix */}
            <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-2 h-2 rounded-full bg-[#D44531]" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D44531]">System Logs</h4>
                </div>
                <ul className="grid grid-cols-1 gap-5">
                    {['Terms of Service', 'Privacy Policy', 'Cookie Guidelines'].map((item) => (
                        <li key={item}>
                            <a href="#" className="text-sm text-gray-400 hover:text-[#D44531] font-bold transition-all flex items-center justify-between group py-1.5 border-b border-transparent hover:border-white/10">
                                {item}
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Final Base Layer */}
        <div className="pt-12 border-t border-white/10 flex justify-center items-center">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-gray-500 text-center">
                &copy; {new Date().getFullYear()} <span className="text-[#D44531]">Talent</span><span className="text-white">ronaut</span> <span className="mx-2 opacity-20">//</span> ALL RIGHTS OBSERVED
            </p>
        </div>
      </div>
    </footer>
  );
}
