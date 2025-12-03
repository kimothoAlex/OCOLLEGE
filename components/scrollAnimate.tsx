"use client";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimateProps {
  children: ReactNode;
  animation?: string; // e.g., "animate__fadeInUp"
}

export default function ScrollAnimate({ children, animation = "animate__fadeInUp" }: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add("animate__animated", animation);
            el.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation]);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
}
