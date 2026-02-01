"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../shared/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Basilwoods School",
    category: "Education",
    description: "A comprehensive digital platform for Basilwoods School Chennai, featuring an interactive interface for parents and an engaging showcase for the school's unique curriculum.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/basilwoods.png",
    link: "https://basilwoodschennai.in/"
  },
  {
    title: "Parikh Renewables",
    category: "Energy",
    description: "A professional corporate platform for Parikh Renewables, showcasing their commitment to sustainable energy solutions with a focused, efficient digital presence.",
    tech: ["React", "Glassmorphism", "Responsive Design"],
    image: "/images/projects/parikh-renewables.png",
    link: "https://www.parikhrenewable.com/"
  },
  {
    title: "HKM Chennai",
    category: "Spiritual & Community",
    description: "Digital hub for HKM Chennai, facilitating community outreach and providing a serene, accessible platform for spiritual information and engagement.",
    tech: ["Modern UI", "Community Portal", "Cloud Hosting"],
    image: "/images/projects/hkm-chennai.png",
    link: "https://hkmchennai.org/"
  }
];

export function ProjectShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-coral font-bold tracking-widest text-base uppercase mb-4 block">Our Portfolio</span>
          <SectionHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl">Digital Landmarks</SectionHeading>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated selection of engineering challenges we've solved for forward-thinking enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-coral uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-3 group-hover:text-coral transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-lg font-medium border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center text-sm font-bold text-coral transition-colors gap-2 px-0 py-1 border-b-2 border-transparent group-hover:border-coral w-fit">
                      Explore <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
