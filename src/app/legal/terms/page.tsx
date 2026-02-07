"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Scale, AlertCircle, Mail } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", icon: Shield },
  { id: "services", title: "Description of Services", icon: FileText },
  { id: "accounts", title: "User Accounts", icon: Shield },
  { id: "conduct", title: "User Conduct", icon: AlertCircle },
  { id: "ip", title: "Intellectual Property", icon: Scale },
  { id: "payment", title: "Payment Terms", icon: FileText },
  { id: "liability", title: "Limitation of Liability", icon: AlertCircle },
  { id: "indemnification", title: "Indemnification", icon: Scale },
  { id: "termination", title: "Termination", icon: AlertCircle },
  { id: "changes", title: "Changes to Terms", icon: FileText },
  { id: "governing", title: "Governing Law", icon: Scale },
  { id: "contact", title: "Contact Information", icon: Mail },
];

export default function TermsPage() {
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
              <Scale className="w-4 h-4 text-coral" />
              <span className="text-sm font-bold text-coral uppercase tracking-wider">Legal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-black text-charcoal mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Clear, transparent terms that govern your use of Talentronaut's services
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
                    {sections.map((section, i) => (
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
                <div id="acceptance" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">01</span>
                      <h2 className="text-2xl font-bold text-charcoal">Acceptance of Terms</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>
                      By accessing or using Talentronaut's services, website, or any applications (collectively, the "Services") provided by Talentronaut (or referred to as "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms").
                    </p>
                    <p className="text-sm bg-gray-50 border-l-4 border-coral p-4 rounded-r-lg">
                      <strong className="text-charcoal">Important:</strong> If you do not agree to these Terms, please do not use our Services.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="services" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">02</span>
                      <h2 className="text-2xl font-bold text-charcoal">Description of Services</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      Talentronaut provides technology solutions including but not limited to AI, Web3, SaaS, and automation services for enterprises. The specific services provided to you will be outlined in a separate agreement or statement of work.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="accounts" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">03</span>
                      <h2 className="text-2xl font-bold text-charcoal">User Accounts</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      Some of our Services require you to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="conduct" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">04</span>
                      <h2 className="text-2xl font-bold text-charcoal">User Conduct</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>You agree not to use the Services to:</p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Violate any applicable laws or regulations",
                        "Infringe upon the rights of others",
                        "Distribute malware or other harmful code",
                        "Interfere with or disrupt the Services or servers",
                        "Attempt to gain unauthorized access to any part of the Services"
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
                <div id="ip" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">05</span>
                      <h2 className="text-2xl font-bold text-charcoal">Intellectual Property</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Talentronaut or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="payment" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">06</span>
                      <h2 className="text-2xl font-bold text-charcoal">Payment Terms</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      For paid Services, you agree to pay all fees in accordance with the payment terms specified in your agreement with us. All payments are non-refundable unless otherwise specified in writing.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="liability" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">07</span>
                      <h2 className="text-2xl font-bold text-charcoal">Limitation of Liability</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      To the maximum extent permitted by law, Talentronaut shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div id="indemnification" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">08</span>
                      <h2 className="text-2xl font-bold text-charcoal">Indemnification</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      You agree to indemnify, defend, and hold harmless Talentronaut and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that arise from or relate to your use of the Services or violation of these Terms.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div id="termination" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">09</span>
                      <h2 className="text-2xl font-bold text-charcoal">Termination</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <div id="changes" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">10</span>
                      <h2 className="text-2xl font-bold text-charcoal">Changes to Terms</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on our website or through other communications. Your continued use of the Services after such modifications will constitute your acknowledgment and agreement to the modified Terms.
                    </p>
                  </div>
                </div>

                {/* Section 11 */}
                <div id="governing" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">11</span>
                      <h2 className="text-2xl font-bold text-charcoal">Governing Law</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                  </div>
                </div>

                {/* Section 12 */}
                <div id="contact" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">12</span>
                      <h2 className="text-2xl font-bold text-charcoal">Contact Information</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p className="mb-4">
                      If you have any questions about these Terms, please contact us at:
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
                      href="/legal/privacy"
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-coral hover:text-coral transition-colors"
                    >
                      Privacy Policy
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
