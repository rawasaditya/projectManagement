import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      return state;
    },
  },
});

export const { loggedIn } = authSlice.actions;
export default authSlice.reducer;
