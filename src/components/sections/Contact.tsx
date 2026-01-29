"use client"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section className="relative py-32 bg-[#fafafa] overflow-hidden" id="contact">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(#D44531_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.05]" />
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#D44531]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-[#FCD2AD]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Impactful Text */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="max-w-xl"
            >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
                   <span className="w-2 h-2 rounded-full bg-[#D44531] animate-[pulse_2s_infinite]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4A4A46]">Launch Your Project</span>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-bold font-heading text-black leading-[0.85] tracking-tighter mb-8">
                    Let's Build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] to-[#E65A45]">The Future.</span>
                </h2>
                
                <p className="text-xl text-black font-medium leading-relaxed mb-12 opacity-70">
                    Your vision deserves more than just code. It deserves an architectural masterpiece. Reach out and let's discuss your next breakthrough.
                </p>

                <div className="flex gap-4">
                    {[
                        { icon: Twitter, color: 'hover:bg-[#1DA1F2]' },
                        { icon: Linkedin, color: 'hover:bg-[#0077B5]' },
                        { icon: Instagram, color: 'hover:bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]' }
                    ].map((social, i) => (
                        <motion.a 
                            key={i}
                            whileHover={{ scale: 1.1, translateY: -5 }}
                            href="#" 
                            className={`w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#4A4A46] shadow-sm transition-all duration-300 ${social.color} hover:text-white hover:border-transparent`}
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Right Side: Interactive Tiles */}
            <div className="grid gap-6">
                {[
                    { 
                        title: "Voice Channels", 
                        value: "+1 (234) 567-890", 
                        link: "tel:+1234567890", 
                        icon: Phone,
                        sub: "Immediate Consultation"
                    },
                    { 
                        title: "Direct Correspondence", 
                        value: "hello@talentronaut.com", 
                        link: "mailto:hello@talentronaut.com", 
                        icon: Mail,
                        sub: "24-Hour Response Time"
                    },
                    { 
                        title: "Headquarters", 
                        value: "Innovation Hub, Tech City", 
                        link: "#", 
                        icon: MapPin,
                        sub: "Visit Our Architects"
                    }
                ].map((item, i) => (
                    <motion.a
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        href={item.link}
                        className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden hover:border-[#D44531]/30 transition-all duration-500"
                    >
                        {/* Hover Background Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D44531]/[0.02] rounded-full translate-x-16 -translate-y-16 group-hover:scale-[8] transition-transform duration-1000" />
                        
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-8">
                                <div className="w-16 h-16 rounded-2xl bg-[#fafafa] flex items-center justify-center border border-gray-50 flex-shrink-0 group-hover:bg-[#D44531] group-hover:shadow-[0_10px_30px_rgba(212,69,49,0.3)] transition-all duration-500">
                                    <item.icon size={30} className="text-[#D44531] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#D44531] transition-colors">{item.title}</span>
                                    <h4 className="text-xl md:text-2xl font-bold text-black group-hover:translate-x-1 transition-transform">{item.value}</h4>
                                    <p className="text-xs font-bold text-[#D44531] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{item.sub}</p>
                                </div>
                            </div>
                            
                            <div className="w-10 h-10 rounded-full bg-[#fafafa] flex items-center justify-center text-gray-300 group-hover:bg-black group-hover:text-white transition-all duration-500">
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

        </div>
      </div>
    </section>
  )
}
