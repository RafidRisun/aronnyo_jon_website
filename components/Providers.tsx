"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { smoothScroll } from "@/libs/lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    smoothScroll();
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
