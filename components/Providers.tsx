"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Create Lenis once, for the app's lifetime
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.7,
      touchMultiplier: 0.7,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let animationFrameId = 0;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Recalculate scroll height + reset position on every route change
  useEffect(() => {
    // let the new page's DOM paint first
    const timeout = setTimeout(() => {
      lenisRef.current?.resize();
      lenisRef.current?.scrollTo(0, { immediate: true });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return <Provider store={store}>{children}</Provider>;
}