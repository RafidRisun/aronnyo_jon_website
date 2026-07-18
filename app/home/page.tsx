"use client";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import { useDispatch } from "react-redux";
import { projects, slideImages } from "@/constants/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const [panCount, setPanCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      className="w-full bg-white py-32 flex flex-col gap-18 items-center justify-start text-[#104649]"
      onClick={clickedAnywhere}
    >
      <div className="flex w-full gap-5 p-5">
        <div className="relative flex flex-1 h-screen">
          {/* <Image
            src="/images/projects/1.jpg"
            alt="lo ka lo"
            fill
            // className={`object-cover ${panCount === 0 ? "object-left" : panCount === 1 ? "object-center" : "object-right"} transition-all duration-5000 ease-in-out`}
            className="object-cover"
          /> */}
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
          <span
            className="absolute top-[-20] left-0 right-0 w-full text-[clamp(1.5rem,10vw,20rem)] text-white font-light pointer-events-none whitespace-nowrap overflow-hidden"
            style={{ textAlign: "justify", textAlignLast: "justify" }}
          >
            লো কা ল অ র্কে স্ট্রা
          </span>
        </div>
      </div>

      <div className="flex w-full h-screen p-5 gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex h-1/3 items-start justify-start pl-15 font-light text-5xl">
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
                className={`object-cover ${panCount === 0 ? "object-left" : panCount === 1 ? "object-center" : "object-right"} transition-all duration-5000 ease-in-out`}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-5">
          <div className="flex-1 p-15">
            WHO WE ARE Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea . Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
          <div className="flex-1 p-15">
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
          {projects.map((project) => (
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
          More Works
        </a>
      </div>
      <div className="w-full border-dashed border-t-2 " />
    </div>
  );
}
