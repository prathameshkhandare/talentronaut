"use client"
import { ReactLenis, useLenis } from 'lenis/react'
import { ReactNode, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function HashHelpers() {
  const lenis = useLenis();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Handle hash scrolling on route change or initial load
    if (lenis && window.location.hash) {
        const hash = window.location.hash;
        
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                lenis.scrollTo(element, { offset: 0, duration: 1.5 });
            }
        }, 500);
    }
  }, [lenis, pathname, searchParams]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      <HashHelpers />
      {children}
    </ReactLenis>
  )
}
