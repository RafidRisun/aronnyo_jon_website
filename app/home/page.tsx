"use client";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import { useDispatch } from "react-redux";
import { projects } from "@/constants/data";
import Image from "next/image";
import { useEffect } from "react";
import { smoothScroll } from "@/libs/lenis";

export default function Home() {
  const dispatch = useDispatch();

  function clickedAnywhere() {
    dispatch(setHamburgerClicked(false));
  }

  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <div
      className="w-full bg-white py-32 flex flex-col gap-18 items-center justify-start text-[#104649]"
      onClick={clickedAnywhere}
    >
      <div className="flex items-center justify-center w-full text-[clamp(1.5rem,10vw,20rem)] text-[#104649] font-light pointer-events-none">
        লো কা ল অ র্কে স্ট্রা
      </div>
      {/* works */}
      <div className="flex flex-wrap items-center justify-center text-[#104649] font-light w-4/5">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`/projects/${project.id}`}
            className="m-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-[300px] h-[300px]">
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
    </div>
  );
}
