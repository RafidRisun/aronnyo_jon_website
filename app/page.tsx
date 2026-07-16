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
      setHeight(window.innerHeight);
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

  return (
    <div className="flex flex-col items-center justify-start w-full overflow-x-hidden" onClick={() => setHamburgerClicked(false)}>
      {/* sentinel marks the scroll point where navbar should start sticking */}
      {/* <div
        ref={sentinelRef}
        style={{ position: "absolute", top: height - 90 }}
      />

      <div
        className={
          isStuck
            ? "flex items-center justify-center gap-10 p-8 w-full fixed top-0 left-0 z-50"
            : "flex items-center justify-center gap-10 p-8 w-full absolute z-50"
        }
        style={!isStuck ? { top: height - 90 } : undefined}
      >
        <a href="#start" className="text-xl font-medium hover:underline">
          home
        </a>
        <a href="#second" className="text-xl font-medium hover:underline">
          about us
        </a>
        <a href="#third" className="text-xl font-medium hover:underline">
          works
        </a>
        <a href="#fourth" className="text-xl font-medium hover:underline">
          thoughts
        </a>
        <a href="#fourth" className="text-xl font-medium hover:underline">
          residency
        </a>
        <a href="#fifth" className="text-xl font-medium hover:underline">
          contact
        </a>
      </div> */}
      <div className="relative min-w-full flex flex-col items-center justify-start">
        <Image
          src="/images/Background.png"
          alt="Background Image"
          fill
          className="object-cover object-top absolute top-0 left-0 z-[-1]"
        />
        {/*fit into screen */}
        <div
          id="start"
          className="flex flex-col items-center justify-start w-full"
          style={{ height: height }}
        >
          <div className="flex items-center justify-between p-10 w-full">
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
        </div>
        {/*fit into screen */}
        <div
          id="second"
          className="flex flex-col items-center justify-start w-full"
          style={{ height: height }}
        ></div>
        <div
          id="third"
          className="flex items-center justify-start w-full pt-32 gap-4 px-4"
          style={{ height: height }}
        >
          {/* <div className="flex-1" />
          <div className="flex flex-col flex-1 items-start justify-between h-full text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#start" className="text-xl font-medium hover:underline">
              Learn More
            </a>
          </div>
          <div className="flex-1 h-full relative">
            <Image
              src="/images/poster.jpg"
              alt="Background Image"
              fill
              className="object-cover"
            />
          </div> */}
        </div>
        <div
          id="second"
          className="flex flex-col items-center justify-start w-full"
          style={{ height: height }}
        ></div>
        {/* <div
          id="fourth"
          className="flex flex-col items-center justify-center w-full text-white"
          style={{ height: height, fontSize: "clamp(6rem, 10vw, 10rem)" }}
        >
          লো কা ল অ র্কে স্ট্রা
        </div> */}
        <div
          id="fifth"
          className="flex flex-col items-center justify-end p-16 w-full"
          style={{ height: height }}
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>
        <Image
          src="/images/Red Grail.png"
          alt="Red Grail"
          width={screenWidth}
          height={700}
          className="object-cover absolute bottom-0 left-0 z-[-1]"
        />
      </div>
      <div
        onClick={(event) => event.stopPropagation()}
        className={`fixed bottom-0 right-5 w-2/5 h-4/5 bg-white/20 backdrop-blur-lg z-50 border-4 border-[#265952] flex flex-col items-start justify-start p-6 text-white text-2xl gap-8 transition-all duration-300 ease-in-out ${hamburgerClicked ? "translate-y-0" : "translate-y-full"}`}
      >
        asd
      </div>
      {/* <div className="w-full bg-black" style={{ height: height }}></div> */}
      {/* Changed to backdrop-blur-xl for a more noticeable effect */}
    </div>
  );
}
