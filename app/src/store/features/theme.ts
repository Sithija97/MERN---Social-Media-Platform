import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload;
    },
  },
  //   extraReducers: (builder) => {},
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
