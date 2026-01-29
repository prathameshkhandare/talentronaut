"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { HandArrowRight, HandUnderline, HandStar } from "@/components/ui/HandDrawn"

export function Footer() {
  return (
    <footer className="bg-white text-[#80807D] pt-24 pb-12 rounded-t-[3rem] mt-10 relative overflow-hidden border-t border-[#FCD2AD]/40 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
      {/* Background Doodles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b-2 border-dashed border-[#80807D]/20 pb-24 relative">
            <div className="max-w-2xl relative">
                <HandStar className="absolute -top-12 left-0 w-16 h-16 text-[#FCD2AD] rotate-[-15deg] opacity-80" />
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-[#1A1A1A]">
                    Let's Build <br/>
                    <span className="relative inline-block">
                        <span className="relative z-10 text-[#D44531]">Something Great</span>
                        <HandUnderline className="absolute -bottom-2 left-0 w-full text-[#FCD2AD] opacity-50 -z-10" />
                    </span>
                </h2>
                <a href="mailto:hello@talentronaut.com" className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-light hover:text-[#D44531] transition-colors relative">
                    hello@talentronaut.com
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>

            <div className="mt-12 md:mt-0 relative">
                 <HandArrowRight className="absolute -left-20 top-1/2 w-16 text-[#80807D] rotate-12 hidden md:block" />
                 <button className="px-10 py-5 bg-[#D44531] text-white rounded-full text-lg font-bold hover:bg-[#b03a29] transition-colors shadow-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none border-2 border-transparent">
                    Start a Project
                 </button>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div>
                <h3 className="text-[#80807D] uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-2">
                    Navigation <div className="h-px bg-[#80807D]/20 flex-grow"></div>
                </h3>
                <ul className="space-y-4 font-medium">
                    <li><a href="#home" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">Home</a></li>
                    <li><a href="#about" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">About Us</a></li>
                    <li><a href="#services" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">Services</a></li>
                    <li><a href="#products" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">Products</a></li>
                </ul>
            </div>
            
             <div>
                <h3 className="text-[#80807D] uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-2">
                    Services <div className="h-px bg-[#80807D]/20 flex-grow"></div>
                </h3>
                <ul className="space-y-4 font-medium">
                    <li><a href="#" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">Web Development</a></li>
                    <li><a href="#" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">AI Solutions</a></li>
                    <li><a href="#" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">Blockchain</a></li>
                    <li><a href="#" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">SaaS Products</a></li>
                </ul>
            </div>

             <div>
                <h3 className="text-[#80807D] uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-2">
                    Resources <div className="h-px bg-[#80807D]/20 flex-grow"></div>
                </h3>
                <ul className="space-y-4 font-medium">
                    <li><a href="#" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">Blog</a></li>
                    <li><a href="#" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">Case Studies</a></li>
                    <li><a href="#" className="hover:text-[#D44531] transition-colors hover:translate-x-1 inline-block">Careers</a></li>
                </ul>
            </div>

             <div>
                <h3 className="text-[#80807D] uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-2">
                    Socials <div className="h-px bg-[#80807D]/20 flex-grow"></div>
                </h3>
                <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full border-2 border-[#80807D]/20 flex items-center justify-center hover:bg-[#D44531] hover:border-[#D44531] hover:text-white transition-all hover:-translate-y-1 hover:shadow-md">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full border-2 border-[#80807D]/20 flex items-center justify-center hover:bg-[#D44531] hover:border-[#D44531] hover:text-white transition-all hover:-translate-y-1 hover:shadow-md">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full border-2 border-[#80807D]/20 flex items-center justify-center hover:bg-[#D44531] hover:border-[#D44531] hover:text-white transition-all hover:-translate-y-1 hover:shadow-md">
                        <Instagram size={20} />
                    </a>
                     <a href="#" className="w-12 h-12 rounded-full border-2 border-[#80807D]/20 flex items-center justify-center hover:bg-[#D44531] hover:border-[#D44531] hover:text-white transition-all hover:-translate-y-1 hover:shadow-md">
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </div>

        {/* Disclaimer / Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 border-dashed border-[#80807D]/20 text-sm text-[#80807D] font-medium">
            <p>&copy; {new Date().getFullYear()} Talentronaut. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-[#D44531]">Privacy Policy</a>
                <a href="#" className="hover:text-[#D44531]">Terms of Service</a>
            </div>
        </div>

      </div>
    </footer>
  )
}
