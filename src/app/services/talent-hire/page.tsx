"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Users } from "lucide-react";

export default function TalentHirePage() {
  return (
    <ServiceDetail
      title="Talent Hire"
      description="We specialize in strategic recruitment and talent acquisition, helping companies build high-performing teams. whether you need a single developer or a full engineering squad, we connect you with top-tier professionals who fit your culture and technical requirements."
      icon={Users}
      offerings={[
        {
          title: "Tech Recruitment",
          description: "Sourcing and vetting top engineering talent including developers, designers, and product managers."
        },
        {
          title: "Executive Search",
          description: "Finding experienced leadership talent (CTOs, VPs of Engineering) to guide your technical vision."
        },
        {
          title: "Team Augmentation",
          description: "Rapidly scaling your existing capabilities with skilled professionals on a contract basis."
        },
        {
          title: "Remote Talent",
          description: "Accessing a global pool of remote experts to find the perfect match for your needs."
        }
      ]}
      audience={[
        "Companies scaling their tech teams",
        "Startups needing core team members",
        "Organizations looking for specialized skills",
        "Businesses with temporary project needs"
      ]}
      businessValue="People are your most valuable asset. We drastically reduce your time-to-hire while improving the quality of your candidates. Our rigorous vetting process ensures you get candidates who hit the ground running, saving you time and recruitment costs."
    />
  );
}
