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

  const [personModalOpen, setPersonModalOpen] = useState(false);

  return (
    <div
      className="flex min-h-svh w-full flex-col gap-12 bg-white px-5 pb-20 pt-32 text-left text-[#104649] sm:px-10 lg:gap-15 lg:px-[clamp(3rem,6vw,6rem)] lg:text-justify"
      onClick={clickedAnywhere}
    >
      <div className="mx-auto grid w-full max-w-[84rem] grid-cols-1 items-start gap-8 lg:grid-cols-4 lg:gap-5">
        <div>
          <h1 className="text-4xl font-light">About Us</h1>
        </div>

        <div className="hidden lg:block" />
        <div>
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
        <div>
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
      <div className="mx-auto grid w-full max-w-[84rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative h-72 sm:col-span-2 sm:h-96 lg:h-120">
          <Image
            src="/images/aboutus/team.jpg"
            alt="project 1"
            fill
            className={`object-cover`}
          />
        </div>
        <div className="relative h-72 sm:h-96 lg:h-120">
          <Image
            src="/images/aboutus/office2.jpg"
            alt="project 1"
            fill
            className={`object-cover`}
          />
        </div>
        <div className="relative h-72 sm:h-96 lg:h-120">
          <Image
            src="/images/aboutus/office3.jpg"
            alt="project 1"
            fill
            className={`object-cover`}
          />
        </div>
      </div>
      {/* Team Members */}
      <div className="mx-auto flex w-full max-w-[84rem] flex-col items-center gap-10">
        <div className="grid w-full grid-cols-1 gap-8 font-light text-[#104649] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setPersonModalOpen(true)}
              className="flex w-full cursor-pointer flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-[1.02]"
            >
              <div className="relative aspect-square w-full">
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
      <div className="mx-auto flex w-full max-w-[84rem] flex-col gap-12">
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-light">Artisans</h2>
          </div>
          <div>
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
        <div className="relative h-72 w-full sm:h-112 lg:h-140">
          <Image
            src="/images/aboutus/artisans.jpg"
            alt="project 1"
            fill
            className={`object-cover`}
          />
        </div>
        {/* Team Members */}
        <div className="flex w-full flex-col items-center gap-10">
          <div className="grid w-full grid-cols-1 gap-8 font-light text-[#104649] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setPersonModalOpen(true)}
                className="flex w-full cursor-pointer flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-[1.02]"
              >
                <div className="relative aspect-square w-full">
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
      </div>
      {personModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 p-4 sm:p-8"
          onClick={() => setPersonModalOpen(false)}
        >
          <div
            className="relative flex max-h-[90svh] w-full max-w-5xl flex-col overflow-hidden bg-white shadow-2xl md:h-4/5 md:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close team member details"
              className="absolute top-4 right-4 z-10 cursor-pointer text-2xl transition-transform duration-300 ease-in-out hover:scale-110 sm:top-5 sm:right-5"
              onClick={() => setPersonModalOpen(false)}
            >
              <IoMdClose />
            </button>
            <div className="relative h-56 w-full shrink-0 md:h-full md:w-1/3">
              <Image
                src="/images/aboutus/cat.jpg"
                alt="project 1"
                fill
                className={`object-cover`}
              />
            </div>
            <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-10 overflow-y-auto p-6 sm:p-10 md:w-2/3 lg:p-15">
              <div className="flex flex-col gap-10">
                <h3 className="text-4xl font-thin sm:text-5xl">Chengis Khan</h3>
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
