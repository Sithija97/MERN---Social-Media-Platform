import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {},
});

// export const {  } = postSlice.actions;

export default postSlice.reducer;
