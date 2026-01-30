"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Cpu } from "lucide-react";

export default function TechnicalConsultingPage() {
  return (
    <ServiceDetail
      title="Technical Consulting"
      description="Navigate the complex technology landscape with confidence. Our expert consultants provide deep insights and strategic guidance to help you make informed technical decisions, modernize legacy systems, and implement best practices."
      icon={Cpu}
      offerings={[
        {
          title: "System Architecture",
          description: "Designing robust, scalable, and maintainable software architectures aligned with business goals."
        },
        {
          title: "Tech Stack Selection",
          description: "Evaluating and selecting the right technologies to ensure longevity and performance."
        },
        {
          title: "Security Audits",
          description: "Identifying vulnerabilities and implementing best-in-class security protocols."
        },
        {
          title: "Performance Optimization",
          description: "Analyzing and improving the speed and efficiency of your existing applications."
        }
      ]}
      audience={[
        "CTOs and Service Leads",
        "Businesses with legacy systems",
        "Companies facing scalability issues",
        "Organizations planning major tech migrations"
      ]}
      businessValue="Bad technical decisions are expensive. We help you avoid technical debt and ensure your infrastructure is built for the long haul. Our consulting services provide clear roadmaps, reduce risk, and ensure your technology investment delivers maximum ROI."
    />
  );
}
