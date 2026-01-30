"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { TrendingUp } from "lucide-react";

export default function ConsultationPage() {
  return (
    <ServiceDetail
      title="Consultation Services"
      description="Navigate your digital journey with expert guidance. We combine deep technical knowledge with strategic business insights to help you make informed decisions and accelerate growth."
      icon={TrendingUp}
      offerings={[
        {
          title: "Technical Consulting",
          description: "Expert assessment of your technology stack, architecture planning, and digital transformation roadmaps to ensure your tech serves your business goals."
        },
        {
          title: "Growth Consulting",
          description: "Data-driven growth hacking strategies, market analysis, and user acquisition frameworks to scale your customer base and revenue."
        },
        {
          title: "Startup Advisory",
          description: "End-to-end guidance for early-stage ventures, from MVP definition and product-market fit to scaling operations and investor readiness."
        },
        {
          title: "Product Strategy",
          description: "Defining clear product visions, roadmaps, and feature prioritization to maximize user value and market competitiveness."
        }
      ]}
      audience={[
        "Startups needing strategic direction",
        "SMEs planning digital transformation",
        "Product teams seeking market fit",
        "Founders looking for tech partners"
      ]}
      businessValue="Our consultation services bridge the gap between technology and business. We don't just give advice; we provide actionable strategies and implementation plans that reduce risk, optimize resources, and drive measurable growth."
    />
  );
}
