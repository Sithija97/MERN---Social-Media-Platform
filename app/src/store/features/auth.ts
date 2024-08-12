import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../models";
import { user } from "../../data";

const initialState: InitialState = {
  user: user,
  edit: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
    updateProfile(state, { payload }) {
      state.edit = payload;
    },
  },
  //   extraReducers: (builder) => {},
});

export const { updateProfile } = authSlice.actions;

export default authSlice.reducer;
