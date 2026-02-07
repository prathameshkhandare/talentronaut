"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Building2, Users, Globe } from "lucide-react";
import { About } from "@/components/sections/About";

const offices = [
  {
    name: "Chennai HQ",
    location: "Chennai, Tamil Nadu",
    description: "Our headquarters and primary innovation hub",
    image: "/offices/chennai.jpg",
    icon: Building2,
  },
  {
    name: "Bangalore Tech Center",
    location: "Bangalore, Karnataka",
    description: "Technology and development center",
    image: "/offices/bangalore.jpg",
    icon: Globe,
  },
  {
    name: "Mumbai Office",
    location: "Mumbai, Maharashtra",
    description: "Business development and client relations",
    image: "/offices/mumbai.jpg",
    icon: Users,
  },
  {
    name: "Hyderabad Office",
    location: "Hyderabad, Telangana",
    description: "Emerging technologies and R&D",
    image: "/offices/hyderabad.jpg",
    icon: MapPin,
  },
];

const recognitions = [
  {
    name: "DPIIT",
    logo: "/recognitions/dpiit.png",
    description: "Department for Promotion of Industry and Internal Trade",
  },
  {
    name: "Startup India",
    logo: "/recognitions/startupindia.png",
    description: "Recognized under Startup India Initiative",
  },
  {
    name: "MSME",
    logo: "/recognitions/msme.png",
    description: "Ministry of Micro, Small and Medium Enterprises",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen px-[90px]">
      {/* Hero Section */}
      {/* Core About Section (Mission, Vision, Values) */}
      <About />

      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-black text-[#4A4A46] mb-4">
              Our <span className="text-[#D44531]">Offices</span>
            </h2>
            <p className="text-[#4A4A46]/60 max-w-xl mx-auto">
              Strategically located across India to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, idx) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#fafafa] rounded-3xl overflow-hidden border border-gray-100 hover:border-[#D44531]/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Office Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#FCD2AD]/30 to-[#D44531]/10 flex items-center justify-center">
                  <office.icon size={48} className="text-[#D44531]/40 group-hover:text-[#D44531] transition-colors" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading text-[#4A4A46] mb-2">{office.name}</h3>
                  <div className="flex items-center gap-2 text-[#D44531] text-sm font-medium mb-2">
                    <MapPin size={14} />
                    <span>{office.location}</span>
                  </div>
                  <p className="text-sm text-[#4A4A46]/60">{office.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lg md:text-xl text-[#4A4A46] font-medium italic mb-12">
              Talentronaut is appreciated and recognized by{" "}
              <span className="font-bold text-[#D44531]">DPIIT</span>,{" "}
              <span className="font-bold text-[#D44531]">#startupindia</span>, and{" "}
              <span className="font-bold text-[#D44531]">MSME</span>.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {recognitions.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center max-w-[180px]"
              >
                <div className={`flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow mb-4 ${item.name === "Startup India" ? "w-48 h-36 md:w-56 md:h-44 p-4" : "w-36 h-36 md:w-44 md:h-44 p-6"}`}>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={item.name === "Startup India" ? 180 : 120}
                    height={item.name === "Startup India" ? 100 : 120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-[#4A4A46]/60 text-center">Recognized by</p>
                <p className="text-sm font-bold text-[#D44531] text-center">{item.name}</p>
                <p className="text-xs text-[#4A4A46]/60 text-center leading-tight mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
