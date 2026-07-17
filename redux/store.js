import { configureStore } from "@reduxjs/toolkit";
import hamburgerClickedReducer from "./hamburgerClickedSlice";

export const store = configureStore({
  reducer: {
    hamburgerClicked: hamburgerClickedReducer,
  },
});
