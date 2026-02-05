"use client";

import { useLoading } from "@/context/LoadingContext";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { WhatsAppPopup } from "@/components/ui/WhatsAppPopup";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { isLoading, setIsLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    // Re-trigger loading on route change for internal pages
    if (pathname !== "/") {
      setIsLoading(true);
    }
  }, [pathname, setIsLoading]);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-700 ease-in-out"}>
        {children}
      </div>
      <WhatsAppPopup />
    </>
  );
}
