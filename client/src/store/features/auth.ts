import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
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

// export const { logout } = authSlice.actions;

export default authSlice.reducer;
