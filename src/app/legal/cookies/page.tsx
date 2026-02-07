"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, Eye, Users, Shield, FileText, Mail } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "what", title: "What Are Cookies", icon: Cookie },
  { id: "how", title: "How We Use Cookies", icon: Eye },
  { id: "types", title: "Types of Cookies We Use", icon: Settings },
  { id: "third-party", title: "Third-Party Cookies", icon: Users },
  { id: "managing", title: "Managing Cookies", icon: Settings },
  { id: "consent", title: "Cookie Consent", icon: Shield },
  { id: "changes", title: "Changes to Cookie Policy", icon: FileText },
  { id: "contact", title: "Contact Information", icon: Mail },
];

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "Necessary for the website to function properly. Enable core functionality such as security, network management, and account access.",
    color: "coral",
    required: true
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    color: "blue",
    required: false
  },
  {
    name: "Functional Cookies",
    description: "Enable the website to provide enhanced functionality and personalization.",
    color: "green",
    required: false
  },
  {
    name: "Targeting Cookies",
    description: "May be set through our site by advertising partners to build a profile of your interests.",
    color: "purple",
    required: false
  }
];

const thirdPartyServices = [
  "Google Analytics",
  "Google Ads",
  "Facebook Pixel",
  "LinkedIn Insight Tag",
  "HubSpot"
];

export default function CookiesPage() {
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
              <Cookie className="w-4 h-4 text-coral" />
              <span className="text-sm font-bold text-coral uppercase tracking-wider">Cookies</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-black text-charcoal mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Understanding how we use cookies to enhance your browsing experience
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
                <div id="what" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Cookie className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">01</span>
                      <h2 className="text-2xl font-bold text-charcoal">What Are Cookies</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies enhance user experience by allowing websites to remember your preferences and understand how you use different parts of a website.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="how" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Eye className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">02</span>
                      <h2 className="text-2xl font-bold text-charcoal">How We Use Cookies</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-6">
                    <p>We use cookies for various purposes. Here's a breakdown of each type:</p>
                    
                    <div className="grid gap-4">
                      {cookieTypes.map((type, i) => (
                        <div key={i} className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-coral/30 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-charcoal">{type.name}</h3>
                            {type.required && (
                              <span className="px-2 py-0.5 bg-coral/10 text-coral text-xs font-bold rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="types" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Settings className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">03</span>
                      <h2 className="text-2xl font-bold text-charcoal">Types of Cookies We Use</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>We use both session cookies and persistent cookies:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                        <h3 className="font-bold text-charcoal mb-2">Session Cookies</h3>
                        <p className="text-sm text-gray-600">
                          Temporary cookies that are erased when you close your browser. They do not collect information from your computer.
                        </p>
                      </div>
                      
                      <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-200">
                        <h3 className="font-bold text-charcoal mb-2">Persistent Cookies</h3>
                        <p className="text-sm text-gray-600">
                          Remain on your device for a defined period or until you delete them. Help us recognize you as an existing user.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="third-party" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">04</span>
                      <h2 className="text-2xl font-bold text-charcoal">Third-Party Cookies</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>
                      In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
                    </p>
                    
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-charcoal mb-3 text-sm">Services We Use:</h3>
                      <div className="flex flex-wrap gap-2">
                        {thirdPartyServices.map((service, i) => (
                          <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="managing" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Settings className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">05</span>
                      <h2 className="text-2xl font-bold text-charcoal">Managing Cookies</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed space-y-4">
                    <p>
                      Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
                    </p>
                    
                    <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                      <p className="text-sm text-amber-900">
                        <strong>Note:</strong> Limiting cookies may stop you from saving customized settings like login information.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="consent" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">06</span>
                      <h2 className="text-2xl font-bold text-charcoal">Cookie Consent</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      When you first visit our website, you will be shown a cookie banner requesting your consent to set cookies according to this Cookie Policy. You can choose to accept all cookies, only essential cookies, or customize your preferences. You can change your cookie preferences at any time.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="changes" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">07</span>
                      <h2 className="text-2xl font-bold text-charcoal">Changes to Cookie Policy</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p>
                      We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div id="contact" className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-coral">08</span>
                      <h2 className="text-2xl font-bold text-charcoal">Contact Information</h2>
                    </div>
                  </div>
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    <p className="mb-4">
                      If you have any questions about our Cookie Policy, please contact us at:
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
                      href="/legal/privacy"
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-coral hover:text-coral transition-colors"
                    >
                      Privacy Policy
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
