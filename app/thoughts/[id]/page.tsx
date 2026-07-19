"use client";
import { projects } from "@/constants/data";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdShare } from "react-icons/io";

export default function ThoughtDetail() {
  const [screenHeight, setScreenHeight] = useState(0);

  const [selectedImageIndex, setSelectedImageIndex] = useState(1);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  const dispatch = useDispatch();
  function clickedAnywhere() {
    dispatch(setHamburgerClicked(false));
  }

  return (
    <div
      className="flex flex-col w-full py-32 gap-10 text-[#104649] bg-white p-5"
      onClick={clickedAnywhere}
    >
      <div
        className="w-full relative bg-black"
        style={{ height: screenHeight - 210 }}
      >
        <Image
          src="/images/projects/1.jpg"
          alt="Work Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
          <span className="w-full text-[clamp(1.5rem,10vw,20rem)] leading-none text-white font-light whitespace-nowrap overflow-hidden">
            Project Title
          </span>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1">
          <div className="flex flex-1 flex-col gap-2">
            <div className="w-full h-80 relative">
              <Image
                src={`/images/projects/${selectedImageIndex}.jpg`}
                alt="Work Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-2 h-30">
              {projects.slice(0, 5).map((project) => (
                <div
                  key={project.id}
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => setSelectedImageIndex(project.id)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1 flex flex-col gap-5 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea . Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <h3 className="text-2xl font-light">Aasghw asbs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea . Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc list-inside">
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </div>
          <div className="flex items-center justify-end p-5 w-full">
            <button className="flex items-center gap-2 text-[#104649] font-light">
              <IoMdShare />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
