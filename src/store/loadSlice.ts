import { createSlice } from "@reduxjs/toolkit";

import { LogOutUser } from "../utils/helpers";
import { getLoads } from "./asyncThunk";

let initialState: any = {
  load: {},
};

const loadSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // removeUser: (state) => {
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoads.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.load = payload;
    });
  },
});

// export const { removeUser } = customerSlice.actions;

export default loadSlice.reducer;
