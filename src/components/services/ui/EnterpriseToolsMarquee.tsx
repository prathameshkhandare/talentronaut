"use client";

import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';

// Mapping enterprise tools to Simple Icons slugs and official URLs
const ENTERPRISE_TOOLS: Record<string, { slug: string; url: string }> = {
  // ERP Systems
  "SAP": { slug: "sap", url: "https://www.sap.com" },
  "Oracle": { slug: "oracle", url: "https://www.oracle.com" },
  "Microsoft Dynamics": { slug: "dynamics365", url: "https://dynamics.microsoft.com" },
  "NetSuite": { slug: "netsuite", url: "https://www.netsuite.com" },
  "Workday": { slug: "workday", url: "https://www.workday.com" },
  
  // Microsoft 365 Ecosystem
  "Microsoft 365": { slug: "microsoft365", url: "https://www.microsoft.com/microsoft-365" },
  "SharePoint": { slug: "microsoftsharepoint", url: "https://www.microsoft.com/sharepoint" },
  "Microsoft Teams": { slug: "microsoftteams", url: "https://www.microsoft.com/teams" },
  "OneDrive": { slug: "microsoftonedrive", url: "https://www.microsoft.com/onedrive" },
  "Outlook": { slug: "microsoftoutlook", url: "https://www.microsoft.com/outlook" },
  "Exchange": { slug: "microsoftexchange", url: "https://www.microsoft.com/exchange" },
  
  // Collaboration & Communication
  "Slack": { slug: "slack", url: "https://slack.com" },
  "Zoom": { slug: "zoom", url: "https://zoom.us" },
  "Webex": { slug: "webex", url: "https://www.webex.com" },
  "Confluence": { slug: "confluence", url: "https://www.atlassian.com/software/confluence" },
  "Notion": { slug: "notion", url: "https://www.notion.so" },
  
  // Project Management & Workflow
  "Jira": { slug: "jira", url: "https://www.atlassian.com/software/jira" },
  "Asana": { slug: "asana", url: "https://asana.com" },
  "Monday.com": { slug: "monday", url: "https://monday.com" },
  "Trello": { slug: "trello", url: "https://trello.com" },
  "Smartsheet": { slug: "smartsheet", url: "https://www.smartsheet.com" },
  
  // Cloud Platforms
  "AWS": { slug: "amazonaws", url: "https://aws.amazon.com" },
  "Azure": { slug: "microsoftazure", url: "https://azure.microsoft.com" },
  "Google Cloud": { slug: "googlecloud", url: "https://cloud.google.com" },
  
  // Analytics & BI
  "Tableau": { slug: "tableau", url: "https://www.tableau.com" },
  "Power BI": { slug: "powerbi", url: "https://powerbi.microsoft.com" },
  "Looker": { slug: "looker", url: "https://looker.com" },
  
  // CRM & Sales
  "Salesforce": { slug: "salesforce", url: "https://www.salesforce.com" },
  "HubSpot": { slug: "hubspot", url: "https://www.hubspot.com" },
  "Zoho": { slug: "zoho", url: "https://www.zoho.com" },
  
  // Service Management
  "ServiceNow": { slug: "servicenow", url: "https://www.servicenow.com" },
  "Zendesk": { slug: "zendesk", url: "https://www.zendesk.com" },
  
  // Document Management
  "DocuSign": { slug: "docusign", url: "https://www.docusign.com" },
  "Adobe": { slug: "adobe", url: "https://www.adobe.com" },
  // Logistics
  "Fresa": { slug: "fresa", url: "https://www.fresatechnologies.com" },
};

const TOOLS_ROW = [
  "SAP", "Oracle", "Microsoft Dynamics", "Workday", "Fresa", "Microsoft 365",
  "SharePoint", "Microsoft Teams", "OneDrive", "Exchange", "Slack",
  "Zoom", "Jira", "Asana", "Monday.com", "ServiceNow", "Salesforce"
];

export function EnterpriseToolsMarquee() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[36px] font-heading font-bold text-coral mb-4">
            Mastery Over Every Enterprise Tool.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We operate your digital ecosystem so you don't have to. Our team manages, administers, and optimizes these platforms on your behalf—acting as the specialized operators of your enterprise infrastructure.
          </p>
        </div>
      </div>

      <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

              {/* Infinite Row - Double Strip Technique */}
           <div className="flex overflow-hidden group mask-gradient-marquee">
             <LogoStrip tools={TOOLS_ROW} duration="80s" />
             <LogoStrip tools={TOOLS_ROW} duration="80s" />
           </div>
       </div>
     </section>
   );
 }
 
 function LogoStrip({ tools, duration }: { tools: string[], duration: string }) {
    return (
        <div 
            className="flex gap-12 animate-scroll-left whitespace-nowrap py-4 min-w-full shrink-0 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: duration }}
        >
             {[...tools, ...tools].map((tool, i) => (
                 <ToolItem key={i} name={tool} />
             ))}
        </div>
    );
 }
 
 function ToolItem({ name }: { name: string }) {
     const [imageError, setImageError] = React.useState(false);
     const [altImageError, setAltImageError] = React.useState(false);
     const toolInfo = ENTERPRISE_TOOLS[name] || { slug: "javascript", url: "#" };
     
     // Primary: Clearbit Logo API (Reliable for major tech brands)
     // Fallback: Simple Icons (Vector Brand Colors)
     const primaryLogoUrl = `https://logo.clearbit.com/${toolInfo.url.replace('https://', '').replace('http://', '').split('/')[0]}`;
     const fallbackLogoUrl = `https://cdn.simpleicons.org/${toolInfo.slug}`;
     
     return (
         <a 
             href={toolInfo.url} 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-6 px-10 py-6 bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] min-w-[280px] hover:border-coral/50 hover:shadow-[0_20px_60px_-15px_rgba(232,92,74,0.2)] hover:-translate-y-2 hover:scale-105 transition-all duration-500 group/item cursor-pointer mx-2 my-8" 
         >
             <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center p-3 group-hover/item:bg-coral/10 transition-colors duration-500 shrink-0 relative overflow-visible">
                 {!imageError ? (
                     <img 
                         src={primaryLogoUrl} 
                         alt={`${name} logo`} 
                         className="w-full h-full object-contain transition-all duration-500"
                         onError={() => setImageError(true)}
                     />
                 ) : !altImageError ? (
                     <img 
                         src={fallbackLogoUrl} 
                         alt={`${name} logo`} 
                         className="w-full h-full object-contain transition-all duration-500"
                         onError={() => setAltImageError(true)}
                     />
                 ) : (
                     <div className="w-full h-full flex items-center justify-center text-coral font-bold text-2xl">
                         {name.substring(0, 2).toUpperCase()}
                     </div>
                 )}
             </div>
             <span className="text-2xl font-bold text-charcoal group-hover/item:text-coral transition-colors duration-300">{name}</span>
         </a>
     )
 }
