"use client";
import { toggleHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const hamburgerClicked = useSelector(
      (state: any) => state.hamburgerClicked.value,
    );
    const dispatch = useDispatch();

  function clickedAnywhere() {
    dispatch(toggleHamburgerClicked());
    }

  return <div className="w-full h-screen bg-white pt-32 flex flex-col items-center justify-start text-[#104649]"
  onClick={clickedAnywhere}
  >Home</div>;
}
