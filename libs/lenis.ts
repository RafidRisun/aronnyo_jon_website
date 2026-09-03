import type { LenisOptions } from "lenis";

// Edit these values to make the global smooth scroll softer or more responsive.
export const smoothScrollOptions: LenisOptions = {
  autoRaf: true,
  lerp: 0.075,
  wheelMultiplier: 0.85,
  touchMultiplier: 1,
  smoothWheel: true,
  syncTouch: true,
  anchors: true,
  stopInertiaOnNavigate: true,
};
