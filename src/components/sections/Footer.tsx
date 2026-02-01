"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Instagram, Mail, Globe, MapPin, ChevronRight, Facebook } from "lucide-react";
import Image from "next/image";
import { SaffronCircuit } from "@/components/visuals/SaffronCircuit";

export function Footer() {
  return (
    <footer className="relative bg-white pt-20 pb-16 overflow-hidden" id="footer">
      {/* Dynamic Technical Layer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <SaffronCircuit />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Floating Architectural CTA Block Removed to avoid redundancy with Contact section */}

        {/* Informational Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
            
            {/* Brand Matrix Section */}
            <div className="lg:col-span-5 space-y-12">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                             <Image 
                                src="/logos/logo.svg" 
                                alt="Talentronaut" 
                                width={80} 
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-4xl font-heading font-black tracking-tighter text-[#4A4A46]">
                            Talentronaut
                        </span>
                    </div>
                    <p className="text-lg text-gray-500 font-medium leading-[1.6] max-w-md">
                        Architecting the infrastructure of tomorrow. We bridge the gap between human potential and digital absolute.
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
                            whileHover={{ y: -5, backgroundColor: "#D44531", borderColor: "#D44531", color: "#fff" }}
                            href={social.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm flex items-center justify-center text-gray-400 shadow-sm transition-all duration-500"
                        >
                            <social.icon size={22} />
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
                    {['Home', 'Resources', 'The Path', 'Enterprise', 'Blog'].map((item) => (
                        <li key={item}>
                            <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-base text-[#1a1a1a] hover:text-[#D44531] font-bold transition-all flex items-center gap-3 group">
                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#D44531]" />
                                {item}
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
                    {['Terms of Service', 'Privacy Policy', 'Cookie Guidelines', 'Sustainability Report'].map((item) => (
                        <li key={item}>
                            <a href="#" className="text-base text-[#1a1a1a] hover:text-[#D44531] font-bold transition-all flex items-center justify-between group">
                                {item}
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-[#D44531] transition-all" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Final Base Layer */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-8">
                <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-[#D44531] flex items-center justify-center text-[8px] font-bold text-white">
                        +50
                    </div>
                </div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400">
                    &copy; {new Date().getFullYear()} <span className="text-gray-900">Talentronaut</span> // ALL RIGHTS OBSERVED
                </p>
            </div>
            
            <div className="flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-gray-400">SYS_STATUS: OPTIMAL</span>
                </div>
                <a href="mailto:orbit@talentronaut.com" className="group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center text-[#D44531] group-hover:bg-[#D44531] group-hover:text-white transition-all duration-500 shadow-sm">
                        <Mail size={18} />
                    </div>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}

