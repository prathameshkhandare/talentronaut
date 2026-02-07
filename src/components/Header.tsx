"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { 
      label: "Services", 
      href: "/#services",
      children: [
        { label: "Technical Solutions", href: "/services/technical-solutions" },
        { label: "Strategic Talent Discovery", href: "/services/talent-hire" },
        { label: "Consultation Service", href: "/services/consultation" },
        { label: "Enterprise Operation", href: "/services/enterprise-operation" },
        { 
            label: "Need a Bespoke Solution?", 
            href: "/services/bespoke-solution",
            isSpecial: true,
            description: "We architect custom platforms for those who refuse to settle for off-the-shelf limits.",
            cta: "Start Consultation" 
        },
      ]
    },
    { 
      label: "Products", 
      href: "/products",
      children: [
        { label: "LinksUs", href: "/products/linksus" },
        { label: "First Step", href: "/products/first-step" },
        { label: "AI Mailer", href: "/products/ai-mailer" },
        { label: "Others", href: "/products" },
      ]
    },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];



  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 ${
          scrolled ? "py-1" : "py-2"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-6 lg:px-12">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                    <Image
                        src="/logos/logo.svg"
                        alt="Talentronaut Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
              </div>
              <span className="text-xl font-black font-heading tracking-tight transition-colors">
                <span className="text-[#D44531] group-hover:text-[#E65A45]">Talent</span><span className="text-[#4A4A46] group-hover:text-[#5A5A56]">ronaut</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group/nav">
                    {item.children ? (
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="px-5 py-2 text-base font-medium text-[#4A4A46] rounded-full hover:bg-white hover:text-[#D44531] hover:shadow-sm transition-all duration-300 flex items-center gap-1"
                            >
                                {item.label}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-[#D44531]" : ""}`} />
                            </Link>
                            
                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {activeDropdown === item.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[360px]"
                                    >
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-3 flex flex-col gap-2 overflow-hidden">
                                            {item.children.map((subItem: any) => (
                                                subItem.isSpecial ? (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="mt-2 p-4 rounded-xl bg-[#fafafa] border border-gray-100 hover:border-[#D44531]/30 hover:bg-white group/card transition-all"
                                                    >
                                                        <h5 className="text-sm font-black font-heading text-[#D44531] mb-1">{subItem.label}</h5>
                                                        <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
                                                            {subItem.description}
                                                        </p>
                                                        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-900 group-hover/card:text-[#D44531] transition-colors">
                                                            {subItem.cta} <ArrowRight size={12} />
                                                        </span>
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="px-4 py-2.5 text-base font-medium text-[#4A4A46] hover:bg-[#D44531]/5 hover:text-[#D44531] rounded-xl transition-all block flex items-center justify-between group/link"
                                                    >
                                                        {subItem.label}
                                                        <ChevronDown size={12} className="-rotate-90 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-[#D44531]" />
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <Link
                            href={item.href}
                            className="px-5 py-2 text-base font-medium text-[#4A4A46] rounded-full hover:bg-white hover:text-[#D44531] hover:shadow-sm transition-all duration-300 block"
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
              ))}
            </nav>

            {/* CTA Button & WhatsApp */}
            <div className="hidden md:flex items-center gap-4">

              <a
                href="https://api.whatsapp.com/send/?phone=918220324802&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 bg-[#D44531] text-white text-sm font-semibold rounded-full overflow-hidden shadow-lg shadow-[#D44531]/20 hover:shadow-[#D44531]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E65A45] to-[#D44531] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-[#4A4A46] hover:text-[#D44531] transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white p-6 shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold font-heading text-[#4A4A46]">
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#4A4A46] hover:text-[#D44531] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                        <div className="flex flex-col">
                             <Link
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-4 text-lg font-medium text-[#4A4A46] hover:bg-gray-50 hover:text-[#D44531] rounded-2xl transition-all flex items-center justify-between"
                             >
                                {item.label}
                                <ChevronDown size={18} />
                             </Link>
                             <div className="pl-6 flex flex-col gap-1 border-l-2 border-gray-100 ml-4">
                                {item.children.map(subItem => (
                                    <Link
                                        key={subItem.label}
                                        href={subItem.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="py-3 px-4 text-sm font-medium text-gray-500 hover:text-[#D44531] transition-colors block"
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                             </div>
                        </div>
                    ) : (
                        <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-4 text-lg font-medium text-[#4A4A46] hover:bg-gray-50 hover:text-[#D44531] rounded-2xl transition-all block"
                        >
                            {item.label}
                        </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">

                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#D44531] text-white font-bold rounded-2xl hover:bg-[#E65A45] transition-colors shadow-lg shadow-[#D44531]/20"
                >
                  Get Consultation <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
