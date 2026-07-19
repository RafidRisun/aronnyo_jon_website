"use client";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import { useDispatch } from "react-redux";
import { projects, slideImages } from "@/constants/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Divider from "@/components/Divider";
import { smoothScroll } from "@/libs/lenis";

export default function Home() {
  const dispatch = useDispatch();
  const [panCount, setPanCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const panTimer = setInterval(() => {
      if (panCount === 0) {
        setPanCount(1);
        console.log("count is 0");
      } else if (panCount === 1) {
        setPanCount(2);
        console.log("count is 1");
      } else {
        setPanCount(0);
        console.log("count is 2");
      }
    }, 7000);
    return () => clearInterval(panTimer);
  }, [panCount]);

  function clickedAnywhere() {
    dispatch(setHamburgerClicked(false));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full bg-white py-30 flex flex-col gap-18 items-center justify-start text-[#104649] text-justify"
      onClick={clickedAnywhere}
    >
      <div className="w-full gap-5">
        <div
          className="relative flex w-full h-[clamp(20rem,60vh,100rem)]"
        >
          {slideImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="banner"
              fill
              className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 flex flex-col items-center justify-end pointer-events-none">
            <span
              className="w-full px-32 text-[clamp(1.5rem,10vw,20rem)] leading-none text-white font-light whitespace-nowrap overflow-hidden"
              style={{ textAlign: "justify", textAlignLast: "justify" }}
            >
              লো কা ল অ র্কে স্ট্রা
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full h-screen p-5 gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex h-1/3 items-start justify-start pl-28 font-light text-5xl">
            Absdibe Soraswg
          </div>
          <div className="flex-1 flex gap-5">
            <div className="relative flex-1">
              <Image
                src="/images/projects/1.jpg"
                alt="project 1"
                fill
                className={`object-cover ${panCount === 0 ? "object-left" : panCount === 1 ? "object-center" : "object-right"} transition-all duration-5000 ease-in-out`}
              />
            </div>
            <div className="relative flex-1">
              <Image
                src="/images/projects/2.jpg"
                alt="project 1"
                fill
                className={`object-cover ${panCount === 0 ? "object-right" : panCount === 1 ? "object-left" : "object-center"} transition-all duration-5000 ease-in-out`}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 px-28">
          <div className="">
            WHO WE ARE Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea . Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
          <div className="flex-1">
            WHAT WE DO Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      {/* works */}
      <div className="flex flex-col items-center gap-15">
        <div className="flex flex-wrap items-center justify-center text-[#104649] font-light w-full">
          {projects.slice(0, 6).map((project) => (
            <a
              key={project.id}
              href={`/works/${project.id}`}
              className="m-2 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative w-75 h-75">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mt-2">{project.title}</h3>
            </a>
          ))}
        </div>
        <a
          href="/works"
          className="m-4 underline hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          More Works
        </a>
      </div>
      <Divider />
      <div className="flex w-full h-screen p-5 gap-5">
        <div className="flex-1 flex flex-col items-start justify-between font-light text-5xl">
          <span className="pl-15">Aneihx SJosfvlasd</span>
          <div className="w-full h-60 bg-[url('/images/projects/2.jpg')] bg-cover bg-center" />
        </div>
        <div className="flex-1 flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-5 px-28">
            <p>
              WHAT WE DO Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p>
              WHAT WE DO Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <div className="h-60 w-full bg-[url('/images/projects/3.jpg')] bg-cover bg-center" />
        </div>
      </div>
      {/* Thoughts */}
      <div className="flex flex-col items-center gap-15">
        <div className="flex flex-wrap items-center justify-center text-[#104649] font-light w-full">
          {projects.slice(0, 6).map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.id}`}
              className="m-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative w-75 h-75">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mt-2">{project.title}</h3>
            </a>
          ))}
        </div>
        <a
          href="/works"
          className="m-4 underline hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Explore More Thoughts
        </a>
      </div>
      <Divider />
    </div>
  );
}
