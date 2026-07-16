"use client";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  const [height, setHeight] = useState<number | 0>(0);
  const [screenWidth, setScreenWidth] = useState<number | 0>(0);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setHeight((window.innerWidth * 9216) / 2732);
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const calculatedHeight = (window.innerWidth * 9216) / 2732;
    setHeight(calculatedHeight);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-start w-full"
      onClick={() => setHamburgerClicked(false)}
    >
      <div
        className="relative overflow-hidden min-w-full flex flex-col items-center justify-start" 
      >
        {/* background image */}
        <Image
          src="/images/Background.png"
          alt="Background Image"
          height={height}
          width={screenWidth}
          className="object-cover object-top z-[-1]"
          priority // Recommended for large background/hero images
        />
        {/* <Image
          src="/images/Background.png"
          alt="Background Image"
          height={height}
          width={screenWidth}
          className="object-cover object-top absolute top-0 left-0 z-[-1]"
          priority // Recommended for large background/hero images
        /> */}
        {/* top bar */}
        <div className="flex items-center justify-between p-10 w-full absolute top-0 left-0 z-50">
          <div className="flex gap-2 items-center">
            <span className="text-4xl font-extrabold">Local</span>
            <span className="text-4xl font-light">Orchestra</span>
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation();
              setHamburgerClicked(!hamburgerClicked);
            }}
            className={`z-50 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ${
              hamburgerClicked ? "rotate-90" : "rotate-0"
            }`}
          >
            <GiHamburgerMenu style={{ height: 45, width: 45 }} />
          </button>
        </div>
        {/* red grail */}
        <Image
          src="/images/Red Grail.png"
          alt="Red Grail"
          width={screenWidth}
          height={700}
          className="object-cover absolute bottom-0 left-0 z-[-1]"
        />
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={400}
          height={700}
          className="object-cover absolute bottom-15 left-1/2 -translate-x-1/2 z-[-1]"
        />
      </div>
      {/* options modal */}
      <div
        onClick={(event) => event.stopPropagation()}
        className={`fixed top-32 right-5 z-50 flex flex-col items-end justify-start p-6 text-white font-light text-2xl gap-8 transition-all duration-300 ease-in-out ${hamburgerClicked ? "translate-x-0" : "translate-x-full"}`}
      >
        <a href="#about" className="hover:underline">About</a>
        <a href="#team" className="hover:underline">Team</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
      <span className="text-white underline decoration-1 decoration-white fixed bottom-5">welcome</span>
    </div>
  );
}
