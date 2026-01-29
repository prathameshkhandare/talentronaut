export function HandArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 25 C 20 25, 50 25, 90 25" />
      <path d="M70 10 C 80 15, 90 25, 90 25 C 90 25, 80 35, 70 40" />
    </svg>
  );
}

export function HandUnderline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 10 Q 50 18, 100 10 T 195 10" />
    </svg>
  );
}

export function HandCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 10 C 20 10, 10 30, 10 50 C 10 80, 30 90, 50 90 C 80 90, 90 70, 90 50 C 90 20, 70 5, 50 10" />
    </svg>
  );
}

export function HandStar({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 50 50" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M25 5 L 30 20 L 45 20 L 32 30 L 37 45 L 25 35 L 13 45 L 18 30 L 5 20 L 20 20 Z" />
        </svg>
    )
}
