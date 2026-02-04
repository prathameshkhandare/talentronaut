"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Instagram, Mail, Globe, MapPin, ChevronRight, Facebook } from "lucide-react";
import Image from "next/image";
import { SaffronCircuit } from "@/components/visuals/SaffronCircuit";

export function Footer() {
  return (
    <footer className="relative bg-[#FAFAF9] pt-28 pb-16 overflow-hidden border-t border-gray-100" id="footer">
      {/* Dynamic Technical Layer */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <SaffronCircuit />
      </div>

      {/* Design Element: Background Aura */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D44531]/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

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
                        <span className="text-[32px] font-heading font-black tracking-tighter text-[#D44531] leading-none">
                            Talentronaut
                        </span>
                    </motion.div>
                    <p className="text-lg text-gray-500 font-medium leading-[1.6] max-w-sm">
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
                            className="w-14 h-14 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-xl flex items-center justify-center text-gray-400 shadow-sm hover:shadow-xl hover:shadow-[#D44531]/10 hover:text-[#D44531] hover:border-[#D44531]/30 transition-all duration-500 overflow-hidden group"
                        >
                            <social.icon size={22} className="relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D44531]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                            <a href={item.href} className="text-base text-gray-600 hover:text-[#D44531] font-bold transition-all flex items-center gap-3 group">
                                <span className="w-6 h-px bg-gray-100 group-hover:w-8 group-hover:bg-[#D44531] transition-all" />
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
                            <a href="#" className="text-sm text-gray-500 hover:text-[#D44531] font-bold transition-all flex items-center justify-between group py-1.5 border-b border-transparent hover:border-gray-100">
                                {item}
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Final Base Layer */}
        <div className="pt-12 border-t border-gray-100 flex justify-center items-center">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-gray-400 text-center">
                &copy; {new Date().getFullYear()} <span className="text-gray-900">Talentronaut</span> <span className="mx-2 opacity-20">//</span> ALL RIGHTS OBSERVED
            </p>
        </div>
      </div>
    </footer>
  );
}
