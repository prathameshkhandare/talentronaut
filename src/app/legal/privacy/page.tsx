"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Mail, Globe, FileText } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "intro", title: "Introduction", icon: Shield },
  { id: "collect", title: "Information We Collect", icon: Database },
  { id: "how-collect", title: "How We Collect Information", icon: Eye },
  { id: "use", title: "How We Use Your Information", icon: UserCheck },
  { id: "disclosure", title: "Disclosure of Your Information", icon: Globe },
  { id: "security", title: "Data Security", icon: Lock },
  { id: "rights", title: "Your Rights", icon: Shield },
  { id: "children", title: "Children's Privacy", icon: Shield },
  { id: "changes", title: "Changes to Privacy Policy", icon: FileText },
  { id: "contact", title: "Contact Information", icon: Mail },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 rounded-full mb-6">
              <Lock className="w-4 h-4 text-coral" />
              <span className="text-sm font-bold text-coral uppercase tracking-wider">Privacy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-black text-charcoal mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Your privacy matters. Learn how we collect, use, and protect your personal data
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-coral" />
              Last Updated: March 19, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[240px_1fr] gap-12">
              {/* Table of Contents - Sticky */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:block"
              >
                <div className="sticky top-24">
                  <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-4">
                    On This Page
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-coral transition-colors group"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-coral transition-colors" />
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </motion.aside>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-12"
              >
                {/* Section 1 */}
                <div id="intro" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">01</span>
                      <h2 className="text-2xl font-bold text-charcoal">Introduction</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      At Talentronaut, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, or any applications (collectively, the "Services").
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="collect" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">02</span>
                      <h2 className="text-2xl font-bold text-charcoal">Information We Collect</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>We may collect several types of information from and about users of our Services:</p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-coral">
                        <h3 className="font-bold text-charcoal mb-2">Personal Data</h3>
                        <p className="text-sm">Name, email address, telephone number, company name, job title, and other identifiers by which you may be contacted online or offline.</p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-coral">
                        <h3 className="font-bold text-charcoal mb-2">Usage Data</h3>
                        <p className="text-sm">Information about how you use our Services, including IP address, browser type, device information, pages visited, and time spent on those pages.</p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-coral">
                        <h3 className="font-bold text-charcoal mb-2">Marketing and Communications Data</h3>
                        <p className="text-sm">Your preferences in receiving marketing from us and our third parties and your communication preferences.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="how-collect" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Eye className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">03</span>
                      <h2 className="text-2xl font-bold text-charcoal">How We Collect Information</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>We collect information through:</p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Direct interactions when you provide information by filling in forms, creating an account, or corresponding with us",
                        "Automated technologies or interactions, such as cookies and similar tracking technologies",
                        "Third parties or publicly available sources, such as business partners, analytics providers, and search information providers"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="use" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <UserCheck className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">04</span>
                      <h2 className="text-2xl font-bold text-charcoal">How We Use Your Information</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>We use your information to:</p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Provide, maintain, and improve our Services",
                        "Process transactions and send related information",
                        "Send administrative information, such as updates, security alerts, and support messages",
                        "Respond to your comments, questions, and requests",
                        "Personalize your experience and deliver content relevant to your interests",
                        "Monitor and analyze trends, usage, and activities in connection with our Services",
                        "Detect, prevent, and address technical issues",
                        "Protect against harmful, unauthorized, or illegal activity"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="disclosure" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">05</span>
                      <h2 className="text-2xl font-bold text-charcoal">Disclosure of Your Information</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>We may disclose your personal information to:</p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Our subsidiaries and affiliates",
                        "Contractors, service providers, and other third parties we use to support our business",
                        "A buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets",
                        "Fulfill the purpose for which you provide it",
                        "Comply with any court order, law, or legal process, including to respond to any government or regulatory request"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="security" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">06</span>
                      <h2 className="text-2xl font-bold text-charcoal">Data Security</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. We cannot guarantee the security of your personal information transmitted to our Services.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="rights" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">07</span>
                      <h2 className="text-2xl font-bold text-charcoal">Your Rights</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Access to your personal information",
                        "Correction of inaccurate or incomplete information",
                        "Deletion of your personal information",
                        "Restriction or objection to processing",
                        "Data portability",
                        "Withdrawal of consent"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Section 8 */}
                <div id="children" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">08</span>
                      <h2 className="text-2xl font-bold text-charcoal">Children's Privacy</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      Our Services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe we have collected information from your child, please contact us.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div id="changes" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">09</span>
                      <h2 className="text-2xl font-bold text-charcoal">Changes to Privacy Policy</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <div id="contact" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">10</span>
                      <h2 className="text-2xl font-bold text-charcoal">Contact Information</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p className="mb-4">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <a
                      href="mailto:support@talentronaut.in"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      support@talentronaut.in
                    </a>
                  </div>
                </div>

                {/* Related Policies */}
                <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-charcoal mb-4">Related Policies</h3>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/legal/terms"
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-coral hover:text-coral transition-colors"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href="/legal/cookies"
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-coral hover:text-coral transition-colors"
                    >
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
