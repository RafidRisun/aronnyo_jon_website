"use client";
import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import { useDispatch } from "react-redux";

export default function Works() {
  const dispatch = useDispatch();

  function clickedAnywhere() {
    dispatch(setHamburgerClicked(false));
  }
  return (
    <div
      className="w-full h-screen bg-white pt-32 flex flex-col items-center justify-start text-[#104649]"
      onClick={clickedAnywhere}
    >
      works
    </div>
  );
}
