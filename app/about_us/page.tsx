"use client";
import Divider from "@/components/Divider";
import { teamMembers } from "@/constants/data";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";

export default function AboutUs() {
  const dispatch = useDispatch();
  function clickedAnywhere() {
    dispatch(setHamburgerClicked(false));
  }

  const [personModalOpen, setPersonModalOpen] = useState(true);

  return (
    <div
      className="flex flex-col py-32 w-full bg-white gap-15 text-[#104649] text-justify"
      onClick={clickedAnywhere}
    >
      <div className="flex items-start justify-between gap-5 flex-1 p-5">
        <div className="flex-1">
          <span className="flex-1 font-light text-4xl px-15">About Us</span>
        </div>

        <div className="flex-1"></div>
        <div className="flex-1">
          <p>
            WHO WE ARE Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea . Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex-1">
          <p>
            WHO WE ARE Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea . Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-start justify-between flex-1 p-5">
        <div className="flex-1 h-120 relative">
          <Image
            src="/images/aboutus/team.jpg"
            alt="project 1"
            fill
            className={`object-cover`}
          />
        </div>
        <div className="w-1/4 h-120 relative">
          <Image
            src="/images/aboutus/office2.jpg"
            alt="project 1"
            fill
            className={`object-cover`}
          />
        </div>
        <div className="w-1/4 h-120 relative">
          <Image
            src="/images/aboutus/office3.jpg"
            alt="project 1"
            fill
            className={`object-cover`}
          />
        </div>
      </div>
      {/* Team Members */}
      <div className="flex flex-col items-center gap-15 p-5">
        <div className="flex flex-wrap items-center justify-center text-[#104649] font-light w-full">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setPersonModalOpen(true)}
              className="m-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <div className="relative w-75 h-75">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mt-2">{member.name}</h3>
            </button>
          ))}
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-15 w-full p-5">
        <div className="flex items-start justify-between w-full">
          <div className="flex-1">
            <span className="flex-1 font-light text-4xl px-15">Artisans</span>
          </div>
          <div className="flex-1">
            <p>
              WHO WE ARE Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea . Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="w-full h-140 relative">
          <Image
            src="/images/aboutus/artisans.jpg"
            alt="project 1"
            fill
            className={`object-cover`}
          />
        </div>
        {/* Team Members */}
        <div className="flex flex-col items-center gap-15 p-5">
          <div className="flex flex-wrap items-center justify-center text-[#104649] font-light w-full">
            {teamMembers.map((member) => (
              <a
                key={member.id}
                href={`/team/${member.id}`}
                className="m-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="relative w-75 h-75">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mt-2">{member.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
      {personModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white/40 flex items-center justify-center z-50"
          onClick={() => setPersonModalOpen(false)}
        >
          <div
            className="w-3/5 h-4/5 flex bg-white relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-2xl hover:scale-130 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => setPersonModalOpen(false)}
            >
              <IoMdClose />
            </button>
            <div className="w-1/3 h-full relative">
              <Image
                src="/images/aboutus/cat.jpg"
                alt="project 1"
                fill
                className={`object-cover`}
              />
            </div>
            <div className="w-2/3 h-full flex flex-col justify-between p-15">
              <div className="flex flex-col gap-10">
                <h3 className="text-5xl font-thin">Chengis Khan</h3>
                <p>
                  Chengis Khan is a passionate musician with over 10 years of
                  experience in the industry. He has performed in various venues
                  and is known for his innovative approach to music.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl font-normal">Founder</h4>
                <h4 className="text-xl font-light">BUET</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
