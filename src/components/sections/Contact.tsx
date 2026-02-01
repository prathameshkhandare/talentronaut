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
                
                <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black font-heading text-[#1a1a1a] leading-[1.1] tracking-tight mb-8">
                    Let's Build <br />
                    <span className="text-[#D44531]">The Future.</span>
                </h2>
                
                <p className="text-xl text-black font-medium leading-relaxed mb-12 opacity-70">
                    Your vision deserves more than just code. It deserves an architectural masterpiece. Reach out and let's discuss your next breakthrough.
                </p>

                {/* Social Icons Removed (Redundant with Footer) */}
            </motion.div>

            {/* Right Side: Interactive Control Deck */}
            <div className="flex flex-col gap-6 pl-0 lg:pl-10">
                {[
                    { 
                        title: "Call Us", 
                        value: "+91 82203 24802", 
                        link: "tel:+918220324802", 
                        icon: Phone,
                        sub: "Immediate Consultation"
                    },
                    { 
                        title: "Email Us", 
                        value: "connecttalentronaut@gmail.com", 
                        link: "mailto:connecttalentronaut@gmail.com", 
                        icon: Mail,
                        sub: "24-Hour Response Time"
                    },
                    { 
                        title: "Visit Us", 
                        value: "Fab Lab, SRM, Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089", 
                        link: "#", 
                        icon: MapPin,
                        sub: "Visit Our Architects"
                    }
                ].map((item, i) => (
                    <motion.a
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                        href={item.link}
                        className={`
                            group relative p-1 rounded-[2.5rem] bg-white transition-all duration-500
                            hover:-translate-y-2 hover:translate-x-1 hover:shadow-[0_20px_40px_-15px_rgba(212,69,49,0.2)]
                        `}
                    >
                        {/* Outer Border/Glow Container */}
                        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-gray-100 group-hover:border-[#D44531] transition-colors duration-500" />
                        
                        {/* Inner Content */}
                        <div className="relative z-10 p-8 flex items-center justify-between bg-white rounded-[2.3rem] overflow-hidden">
                            
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#D44531]/[0.03] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative flex items-center gap-6 md:gap-8">
                                {/* Icon Box */}
                                <div className={`w-16 h-16 rounded-2xl bg-[#D44531]/10 text-[#D44531] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#D44531] group-hover:text-white transition-all duration-500 shadow-sm`}>
                                    <item.icon size={28} />
                                </div>
                                
                                {/* Text Content */}
                                <div>
                                    <span className="text-lg font-black font-heading uppercase tracking-[0.2em] text-[#D44531] group-hover:text-[#D44531] transition-colors">
                                        {item.title}
                                    </span>
                                    <h4 className="text-sm font-medium font-body text-[#787979] mt-1 mb-1 leading-tight group-hover:translate-x-1 transition-transform">
                                        {item.value}
                                    </h4>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D44531]" />
                                        <p className="text-xs font-bold text-[#787979]">{item.sub}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Action Arrow */}
                            <div className="w-12 h-12 rounded-full border-2 border-gray-50 flex items-center justify-center text-gray-300 group-hover:border-[#D44531] group-hover:bg-[#D44531] group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-500 bg-white shadow-sm">
                                <ArrowRight size={20} />
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
