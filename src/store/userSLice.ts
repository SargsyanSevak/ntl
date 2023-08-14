import { createSlice } from "@reduxjs/toolkit";
import { TypeFrom, TypeInitialState } from "./types";
import { CustomerProps } from "../interfaces/CustomerProps";

const initialState: CustomerProps = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  userType: "",
  companyName: "",
  passwordHash: "",
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
};

export const mapSLice = createSlice({
  name: "map",
  initialState,
  reducers: {
    // setFrom: (state, action) => {
    //   state.from = action.payload;
    // },
    // setTo: (state, action) => {
    //   state.to = action.payload;
    // },
  },
});
