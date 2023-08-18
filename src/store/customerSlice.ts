import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, authMe } from "./asyncThunk";

let initialState: any = {
  user: {
    firstName: "Արամ",
    lastName: "",
    email: "",
    phoneNumber: "",
    userType: "carrier",
    companyName: "",
    subCustomers: "",
    address: "",
    website: "",
    paymentType: "",
    paymentDuration: null,
    about: "",
    planType: "",
    notification: null,
    isVerified: false,
    failedLoginAttempts: null,
    lockoutUntil: null,
  },
};

const customerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      // state.user.firstName = "aaa";
      // console.log("Hello world");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        console.log("payload");
        console.log(payload);

        state.user = payload;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log("payload");
        console.log(payload);
        state.user = payload;
      })
      .addCase(authMe.fulfilled, (state, { payload }) => {
        console.log("payload");
        console.log(payload);
        state.user = payload;
      });
  },
});

export const { getUser } = customerSlice.actions;

export default customerSlice.reducer;
