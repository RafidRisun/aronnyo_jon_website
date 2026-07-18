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
              alt="lo ka lo"
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

      {/* works */}
      <div className="flex flex-wrap items-center justify-center text-[#104649] font-light w-4/5">
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
      <div className="w-full border-dashed border-t-2 " />
      {/* thoughts */}
      <span className="text-2xl font-bold mt-8">Thoughts</span>
      <div className="flex flex-wrap items-center justify-center text-[#104649] font-light w-4/5">
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
        href="/thoughts"
        className="m-4 underline hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        More Works
      </a>
    </div>
  );
}
