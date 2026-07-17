"use client";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { smoothScroll } from "../libs/lenis";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";

export default function Welcome() {
  const router = useRouter();
  const [height, setHeight] = useState<number | 0>(0);
  const [screenWidth, setScreenWidth] = useState<number | 0>(0);
  const [navigating, setNavigating] = useState(false);

  const [continueVisible, setContinueVisible] = useState(false);

  const hamburgerClicked = useSelector(
    (state: any) => state.hamburgerClicked.value,
  );
  const dispatch = useDispatch();

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
    smoothScroll();
  }, []);

  useEffect(() => {
    const calculatedHeight = (window.innerWidth * 9216) / 2732;
    setHeight(calculatedHeight);
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      setContinueVisible(true);
    }, 4000);
    return () => clearTimeout(time);
  }, []);

  function clickedAnywhere() {
    if (hamburgerClicked) {
      dispatch(setHamburgerClicked(false));
    } else {
      setNavigating(true);
      setTimeout(() => {
        router.push("/home");
      }, 500);
    }
  }

  return (
    <div
      className={`flex flex-col items-center justify-start w-full h-full transition-all duration-500 ease-in-out ${navigating ? "bg-white" : ""}`}
      onClick={clickedAnywhere}
    >
      <div className="relative overflow-hidden min-w-full flex flex-col items-center justify-start">
        {/* background image */}
        <Image
          src="/images/Background.png"
          alt="Background Image"
          height={height}
          width={screenWidth}
          className="object-cover object-top z-[-1]"
          priority // Recommended for large background/hero images
        />

        <div className="flex items-center justify-center w-full text-[clamp(1.5rem,10vw,20rem)] text-white font-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          লো কা ল অ র্কে স্ট্রা
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

      <span
        className={`text-white/80 text-xl fixed bottom-15 ${continueVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out`}
      >
        click anywhere to continue
      </span>
    </div>
  );
}
