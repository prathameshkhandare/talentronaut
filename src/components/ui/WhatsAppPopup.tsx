"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const features = [
  "Instant responses",
  "Direct communication",
  "24/7 support available",
];

export function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  // Only show on home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    // Only run on home page
    if (!isHomePage) return;

    const handleScroll = () => {
      // Show popup after scrolling 50% of viewport height
      const scrollThreshold = window.innerHeight * 0.5;
      
      if (window.scrollY > scrollThreshold && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, isHomePage]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // No sessionStorage - will show again on refresh
  };

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "919876543210"; // Format: country code + number without +
    const message = encodeURIComponent("Hi! I'm interested in your services. Can you help me?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    handleDismiss();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[100]"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-[420px]"
          >
            <div className="bg-[#fafafa] rounded-2xl shadow-xl p-8 md:p-10 relative">
              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="absolute top-5 right-5 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              {/* WhatsApp Icon with Glow */}
              <div className="flex justify-center mb-8">
                <motion.div 
                  className="relative w-16 h-16 rounded-full bg-[#D44531]/10 flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(212, 69, 49, 0.3)",
                      "0 0 20px 8px rgba(212, 69, 49, 0.15)",
                      "0 0 0 0 rgba(212, 69, 49, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-8 h-8 text-[#D44531]"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </motion.div>
              </div>

              {/* Heading - Script Style */}
              <h2 className="text-2xl md:text-[28px] font-heading text-center text-[#4A4A46] mb-5 leading-tight" style={{ fontStyle: 'italic' }}>
                Interested in Our<br />Services?
              </h2>

              {/* Description */}
              <p className="text-center text-[#4A4A46]/60 text-sm leading-relaxed mb-8">
                Get instant support and quick responses to all your queries. Connect with our team directly on WhatsApp for personalized assistance.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D44531]" />
                    <span className="text-[#4A4A46] text-[15px] font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons - Pill Shape like Hero */}
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 bg-[#D44531] text-white text-sm font-semibold rounded-full hover:bg-[#C13D2B] transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.button>
                
                <motion.button
                  onClick={handleDismiss}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-[#4A4A46] text-sm font-medium rounded-full hover:bg-gray-50 transition-all"
                >
                  <span>Maybe Later</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="7" x2="17" y2="17"></line>
                    <polyline points="17 7 17 17 7 17"></polyline>
                  </svg>
                </motion.button>
              </div>

              {/* Footer Note */}
              <div className="flex items-center justify-center gap-2 mt-8 text-xs text-[#4A4A46]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D44531]/40" />
                Secure & Private Messaging
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

