import { configureStore } from "@reduxjs/toolkit";
import { mapSLice } from "./mapSlice";
import userSLice from "./userSlice";

// export const rootReducer = configureStore({
//   reducer: {
//     taxi: taxiSLice.reducer,
//   },
// });

export const store = configureStore({
  reducer: {
    map: mapSLice.reducer,
    user: userSLice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

let initialState: any = {
  user: {
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
  },
};
