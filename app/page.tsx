"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  const [height, setHeight] = useState<number | 0>(0);
  const [screenWidth, setScreenWidth] = useState<number | 0>(0);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
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

  return (
    <div className="flex flex-col items-center justify-start w-full">
      {/* sentinel marks the scroll point where navbar should start sticking */}
      <div
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
        <a href="#fifth" className="text-xl font-medium hover:underline">
          contact
        </a>
      </div>
      <div className="relative min-w-full flex flex-col items-center justify-start">
        <Image
          src="/images/Background.png"
          alt="Background Image"
          fill
          className="object-cover absolute top-0 left-0 z-[-1]"
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
            <GiHamburgerMenu style={{ height: 45, width: 45 }} />
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
          className="flex items-center justify-start w-full"
          style={{ height: height }}
        >
          <div className="flex-1"/>
          <div className="flex flex-1 items-start justify-start pt-32 h-full text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className="flex-1 h-full">
            asdasd
          </div>
        </div>
        <div
          id="fourth"
          className="flex flex-col items-center justify-start w-full"
          style={{ height: height }}
        ></div>
        <div
          id="fifth"
          className="flex flex-col items-center justify-start w-full"
          style={{ height: height }}
        ></div>
      </div>
      <div className="w-full bg-black" style={{ height: height }}></div>
    </div>
  );
}
