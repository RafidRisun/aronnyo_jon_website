import Lenis from "lenis";

export function smoothScroll(): any {
    const lenis = new Lenis({
        lerp: 0.08,
        wheelMultiplier: 0.7,
        touchMultiplier: 0.7,
        smoothWheel: true,
    });

    let animationFrameId = 0;

    const raf = (time: number) => {
        lenis.raf(time);
        animationFrameId = window.requestAnimationFrame(raf);
    };

    animationFrameId = window.requestAnimationFrame(raf);

    return () => {
        window.cancelAnimationFrame(animationFrameId);
        lenis.destroy();
    };
};