import { createSlice } from "@reduxjs/toolkit";

const hamburgerClickedSlice = createSlice({
  name: "hamburgerClicked",
  initialState: {
    value: false,
  },
  reducers: {
    setHamburgerClicked: (state, action) => {
      state.value = action.payload; // true or false
    },
    toggleHamburgerClicked: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setHamburgerClicked, toggleHamburgerClicked } =
  hamburgerClickedSlice.actions;
export default hamburgerClickedSlice.reducer;
