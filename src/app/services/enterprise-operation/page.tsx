"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Cpu } from "lucide-react";

export default function EnterpriseOperationPage() {
  return (
    <ServiceDetail
      title="Enterprise Operation"
      description="Scalable operational frameworks and robust digital infrastructure designed for large organizations. We streamline complex workflows and ensure your enterprise runs at peak efficiency."
      icon={Cpu}
      offerings={[
        {
          title: "Process Automation",
          description: "Identifying bottlenecks and implementing intelligent automation solutions to reduce manual effort and error rates."
        },
        {
          title: "Legacy Modernization",
          description: "Upgrading migration of legacy systems to modern cloud-native architectures without disrupting business continuity."
        },
        {
          title: "Data Infrastructure",
          description: "Building centralized data warehouses and governance frameworks to enable enterprise-wide business intelligence."
        },
        {
          title: "Security & Compliance",
          description: "Implementing enterprise-grade security protocols and ensuring compliance with industry standards (GDPR, HIPAA, SOC2)."
        }
      ]}
      audience={[
        "Large-scale Enterprises",
        "Organizations with legacy debt",
        "Operations Managers",
        "CTOs managing complex stacks"
      ]}
      businessValue="Operational excellence is the backbone of any enterprise. Our solutions ensure your internal systems are as agile and powerful as your customer-facing products, driving efficiency, reducing costs, and enabling innovation at scale."
    />
  );
}
