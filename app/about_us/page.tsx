"use client";
import Divider from "@/components/Divider";
import { teamMembers } from "@/constants/data";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import ProfileModal from "./components/ProfileModal";
import { Person } from "@/type/person";

export default function AboutUs() {
  const dispatch = useDispatch();
  function clickedAnywhere() {
    dispatch(setHamburgerClicked(false));
  }

  const [personModalOpen, setPersonModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

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
              onClick={() => {
                setSelectedPerson(member);
                setPersonModalOpen(true);
              }}
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
              <h3 className="text-lg font-bold mt-2 text-start">{member.name}</h3>
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
              <button
                key={member.id}
                onClick={() => {
                  setSelectedPerson(member);
                  setPersonModalOpen(true);
                }}
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
                <h3 className="text-lg font-bold mt-2 text-start">{member.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
      {personModalOpen && (
        <ProfileModal setPersonModalOpen={setPersonModalOpen} selectedPerson={selectedPerson} />
      )}
    </div>
  );
}
