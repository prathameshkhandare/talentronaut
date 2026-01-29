"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-[#fafafa] pt-32 pb-12 overflow-hidden border-t border-gray-100" id="footer">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-[#FCD2AD]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#D44531]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Impact CTA */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FCD2AD] shadow-sm mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D44531]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#4A4A46]">Ready to launch?</span>
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-bold font-heading text-black leading-[0.9] tracking-tighter">
                    Let&apos;s Architect <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] to-[#E65A45]">The Next Big Thing.</span>
                </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact" 
                    className="px-10 py-5 bg-[#D44531] text-white rounded-2xl font-black text-center shadow-2xl shadow-[#D44531]/20 hover:bg-[#c03e2b] transition-all"
                >
                    Get in Touch
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:hello@talentronaut.com" 
                    className="px-10 py-5 bg-black text-white rounded-2xl font-black text-center shadow-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
                >
                    <Mail size={20} className="text-[#D44531]" />
                    Email Us
                </motion.a>
            </div>
        </div>

        {/* Informational Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand Story */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shadow-xl">
                         <Image 
                            src="/logos/main_logo.png" 
                            alt="Talentronaut" 
                            width={24} 
                            height={24}
                            className="brightness-0 invert"
                        />
                    </div>
                    <span className="text-2xl font-black font-heading tracking-tighter text-black">Talentronaut</span>
                </div>
                <p className="text-black/60 font-medium leading-relaxed">
                    Engineering digital excellence through AI, Automation, and Web3 solutions. We don&apos;t just build products; we build legacies.
                </p>
                <div className="flex gap-4">
                    {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                        <motion.a 
                            key={i} 
                            whileHover={{ y: -5, color: "#D44531" }}
                            href="#" 
                            className="w-10 h-10 rounded-xl border border-gray-100 bg-white flex items-center justify-center text-gray-400 shadow-sm transition-all"
                        >
                            <Icon size={18} />
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D44531] mb-8">Navigation</h4>
                <ul className="space-y-4">
                    {['Services', 'Products', 'Team', 'Impact', 'Careers'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="text-black/60 hover:text-[#D44531] font-bold text-sm transition-colors flex items-center gap-2 group">
                                <span className="w-0 h-[1.5px] bg-[#D44531] group-hover:w-4 transition-all" />
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Expertise */}
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D44531] mb-8">Expertise</h4>
                <ul className="space-y-4">
                    {['Generative AI', 'SaaS Architecture', 'Web3 & dApps', 'Mobile Engineering'].map((item) => (
                        <li key={item}>
                            <span className="text-black/60 font-bold text-sm flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Global Presence */}
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D44531] mb-8">Presence</h4>
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <MapPin className="text-[#D44531] w-5 h-5 shrink-0" />
                        <div>
                            <p className="text-black font-black text-xs uppercase tracking-wider">Chennai HQ</p>
                            <p className="text-black/50 text-xs font-medium mt-1">Innovation Hub, Tamil Nadu, India</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Phone className="text-[#D44531] w-5 h-5 shrink-0" />
                        <p className="text-black font-black text-sm">+91 98765 43210</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                &copy; {new Date().getFullYear()} Talentronaut. All rights reserved.
            </p>
            <div className="flex gap-10">
                {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                    <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 hover:text-[#D44531] transition-colors">
                        {item}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
