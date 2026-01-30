"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { TrendingUp } from "lucide-react";

export default function GrowthConsultingPage() {
  return (
    <ServiceDetail
      title="Growth Consulting"
      description="Unlock your business's full potential with data-driven growth strategies. We analyze your market, refine your value proposition, and optimize your customer journey to drive sustainable, exponential growth."
      icon={TrendingUp}
      offerings={[
        {
          title: "Market Analysis",
          description: "Deep-dive research into market trends, competitor analysis, and opportunity identification."
        },
        {
          title: "Go-to-Market Strategy",
          description: "Crafting comprehensive launch plans to ensure product success from day one."
        },
        {
          title: "User Acquisition",
          description: "Designing multi-channel acquisition strategies to attract and retain high-value customers."
        },
        {
          title: "Data Analytics",
          description: "Implementing analytics frameworks to measure KPIs and make actionable, data-backed decisions."
        }
      ]}
      audience={[
        "Startups looking to scale",
        "SMBs expanding into new markets",
        "Product teams seeking better retention",
        "Businesses needing revenue optimization"
      ]}
      businessValue="Growth isn't just about more users; it's about the right users. We help you optimize your funnel, reduce acquisition costs, and maximize lifetime value. Our strategies turn one-time visitors into loyal brand advocates."
    />
  );
}
