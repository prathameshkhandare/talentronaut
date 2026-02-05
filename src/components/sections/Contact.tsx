"use client"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section className="relative py-24 bg-[#fafafa] overflow-hidden" id="contact">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(#D44531_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.05]" />
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#D44531]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-[#FCD2AD]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Impactful Text & Info */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="max-w-xl"
            >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
                   <span className="w-2 h-2 rounded-full bg-[#D44531] animate-[pulse_2s_infinite]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4A4A46]">Launch Your Project</span>
                </div>
                
                <h2 className="text-[36px] font-black font-heading text-[#1a1a1a] leading-tight tracking-tight mb-6">
                    Let's Build <span className="text-[#D44531]">The Future.</span>
                </h2>
                
                <p className="text-base text-black font-medium leading-relaxed mb-10 opacity-70">
                    Your vision deserves more than just code. It deserves an architectural masterpiece. Reach out and let's discuss your next breakthrough.
                </p>

                {/* Minimal Contact Info for Quick Reference */}
                <div className="pt-8 border-t border-gray-100 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[#D44531]/5 text-[#D44531] flex items-center justify-center shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                                <p className="text-sm font-bold text-[#1a1a1a] whitespace-nowrap">+91 82203 24802</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[#D44531]/5 text-[#D44531] flex items-center justify-center shrink-0">
                                <Mail size={20} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                                <p className="text-sm font-bold text-[#1a1a1a] whitespace-nowrap">support@talentronaut.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#D44531]/5 text-[#D44531] flex items-center justify-center shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Visit Us</p>
                            <p className="text-base font-bold text-[#1a1a1a] max-w-sm">Fab Lab, SRM, Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Side: Elegant Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group lg:pl-10"
            >
                {/* Form Backdrop Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#D44531]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black ml-4">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#D44531]/30 focus:ring-4 focus:ring-[#D44531]/5 outline-none transition-all duration-300 font-medium text-black placeholder:text-gray-300" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black ml-4">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#D44531]/30 focus:ring-4 focus:ring-[#D44531]/5 outline-none transition-all duration-300 font-medium text-black placeholder:text-gray-300" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black ml-4">Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="+91 00000 00000"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#D44531]/30 focus:ring-4 focus:ring-[#D44531]/5 outline-none transition-all duration-300 font-medium text-black placeholder:text-gray-300" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black ml-4">Subject</label>
                                <input 
                                    type="text" 
                                    placeholder="Briefly describe your topic"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#D44531]/30 focus:ring-4 focus:ring-[#D44531]/5 outline-none transition-all duration-300 font-medium text-black placeholder:text-gray-300" 
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black ml-4">Your Message</label>
                            <textarea 
                                rows={4}
                                placeholder="Tell us about your breakthrough idea..."
                                className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#D44531]/30 focus:ring-4 focus:ring-[#D44531]/5 outline-none transition-all duration-300 font-medium text-black placeholder:text-gray-300 resize-none" 
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-5 rounded-[2rem] bg-[#D44531] text-white font-bold text-lg shadow-lg shadow-[#D44531]/20 hover:shadow-[#D44531]/40 transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                        >
                            Send Message
                            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                    </form>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  )
}
