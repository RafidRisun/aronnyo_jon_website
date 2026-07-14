"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  const [height, setHeight] = useState<number | 0>(0);
  const [screenWidth, setScreenWidth] = useState<number | 0>(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial height

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="relative min-w-full flex flex-col items-center justify-start" style={{ height: height * 5 }}>
    <Image
      src="/images/Background.png"
      alt="Background Image"
      width={screenWidth || 0}
      height={height*5 || 0}
      className="object-contain absolute top-0 left-0 z-[-1]"
    />
    <div id="start" className="flex flex-col items-center justify-start w-full" style={{ height: height - 110 }}>
      <div className="flex items-center justify-between p-10 w-full">
        <div className="flex gap-2 items-center">
          <span className="text-4xl font-extrabold">Local</span>
          <span className="text-4xl font-light">Orchestra</span>
        </div>
        <GiHamburgerMenu style={{height: 45, width: 45}}/>
      </div>
    </div>
    <div className="flex items-center justify-center gap-10 p-8 w-full sticky top-0">
        <a href="#start" className="text-xl font-medium hover:underline">
          home
        </a>
        <a href="/" className="text-xl font-medium hover:underline">
          about us
        </a>
        <a href="/" className="text-xl font-medium hover:underline">
          works
        </a>
        <a href="/" className="text-xl font-medium hover:underline">
          thoughts
        </a>
        <a href="/" className="text-xl font-medium hover:underline">
          contact
        </a>
      </div>
  </div>;
}
