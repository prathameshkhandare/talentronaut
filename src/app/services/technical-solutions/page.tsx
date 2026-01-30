"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Monitor } from "lucide-react";

export default function TechnicalSolutionsPage() {
  return (
    <ServiceDetail
      title="Technical Solutions"
      description="We provide comprehensive, end-to-end IT solutions tailored to your unique business needs. From custom software development to complex system integrations, our technical expertise ensures your digital infrastructure is robust, scalable, and future-ready."
      icon={Monitor}
      offerings={[
        {
          title: "Web Application Development",
          description: "Building responsive, high-performance web applications using the latest frameworks like React, Next.js, and Node.js."
        },
        {
          title: "Mobile App Development",
          description: "Creating native and cross-platform mobile experiences for iOS and Android that engage users and drive retention."
        },
        {
          title: "Enterprise Software",
          description: "Developing scalable enterprise-grade software to streamline internal processes and improve operational efficiency."
        },
        {
          title: "Cloud Solutions",
          description: "Architecting secure and scalable cloud infrastructure on AWS, Azure, or Google Cloud Platform."
        }
      ]}
      audience={[
        "Enterprises seeking digital transformation",
        "Startups building their core product",
        "Businesses needing custom software",
        "Organizations optimizing IT operations"
      ]}
      businessValue="Our technical solutions are designed to not just solve current problems but to provide a foundation for future growth. By leveraging cutting-edge technology, we help you reduce operational costs, increase efficiency, and deliver superior experiences to your customers."
    />
  );
}
