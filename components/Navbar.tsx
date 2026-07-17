"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setHamburgerClicked,
  toggleHamburgerClicked,
} from "@/redux/hamburgerClickedSlice";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const hamburgerClicked = useSelector(
    (state: any) => state.hamburgerClicked.value,
  );
  const dispatch = useDispatch();

  const path = usePathname();

  return (
    <>
      <div
        className={`flex items-center justify-between p-10 w-full fixed top-0 left-0 z-50 ${path === "/" ? "text-white" : "text-[#104649]"}`}
      >
        <div className="flex gap-2 items-center">
          <span className="text-4xl font-extrabold">Local</span>
          <span className="text-4xl font-light">Orchestra</span>
        </div>
        <button
          onClick={(event) => {
            event.stopPropagation();
            dispatch(toggleHamburgerClicked());
          }}
          className={
            "z-50 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          }
        >
          <GiHamburgerMenu style={{ height: 45, width: 45 }} />
        </button>
      </div>

      <div
        onClick={(event) => event.stopPropagation()}
        className={`fixed top-32 right-5 z-50 flex flex-col items-end justify-start p-6 font-light text-2xl gap-8 transition-all duration-300 ease-in-out ${hamburgerClicked ? "translate-x-0" : "translate-x-full"} ${path === "/" ? "text-white" : "text-[#104649]"}`}
      >
        <a href="/home" className="hover:underline">
          Home
        </a>
        <a href="#team" className="hover:underline">
          About Us
        </a>
        <a href="#contact" className="hover:underline">
          Works
        </a>
        <a href="#contact" className="hover:underline">
          Thoughts
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </>
  );
}
