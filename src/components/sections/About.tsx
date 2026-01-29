"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section className="bg-white py-24 md:py-32" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              We're not just developers. We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital Architects</span>.
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600">
                <p>
                    Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, Talentronaut has emerged as a trusted partner for businesses seeking digital transformation.
                </p>
                <p>
                    From our base in Chennai, we've expanded our reach globally. Our journey began with a simple belief: that every business deserves access to world-class technology solutions like AI, Web3, and blockchain.
                </p>
            </div>

            <div className="mt-10">
                <a href="#story" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all">
                    Read Our Full Story <ArrowRight size={20} />
                </a>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
                   {/* Abstract composition */}
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2/3 h-2/3 bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/50 p-8 flex flex-col justify-center items-center text-center">
                            <span className="text-6xl font-serif text-indigo-900 mb-4">50+</span>
                            <span className="text-sm font-bold tracking-widest uppercase text-indigo-900/60">Successful Projects</span>
                        </div>
                   </div>
                   
                   {/* Floating Elements */}
                   <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-orange-400 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                   <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-purple-400 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                   <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-pink-400 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
