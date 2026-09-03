"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { smoothScrollOptions } from "@/libs/lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={smoothScrollOptions}>
      <Provider store={store}>{children}</Provider>
    </ReactLenis>
  );
}
