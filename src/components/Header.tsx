"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

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

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/products" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 bg-transparent"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-tr from-[#D44531] to-[#FCD2AD] p-[2px]">
                 <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <Image
                        src="/logos/main_logo.png"
                        alt="Talentronaut Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                 </div>
              </div>
              <span className="text-xl font-bold font-heading text-[#4A4A46] tracking-tight group-hover:text-[#D44531] transition-colors">
                Talentronaut
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
               scrolled 
                ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg" 
                : "bg-white/50 backdrop-blur-md border border-white/20 shadow-sm"
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-5 py-2 text-sm font-medium text-[#4A4A46] rounded-full hover:bg-white hover:text-[#D44531] hover:shadow-sm transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/#contact"
                className="group relative px-6 py-2.5 bg-[#D44531] text-white text-sm font-semibold rounded-full overflow-hidden shadow-lg shadow-[#D44531]/20 hover:shadow-[#D44531]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E65A45] to-[#D44531] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
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
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white p-6 shadow-2xl"
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
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-4 text-lg font-medium text-[#4A4A46] hover:bg-gray-50 hover:text-[#D44531] rounded-2xl transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
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
