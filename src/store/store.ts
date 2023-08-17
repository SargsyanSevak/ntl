import { configureStore } from "@reduxjs/toolkit";
import { mapSLice } from "./mapSlice";
import customerSlice from "./customerSlice";

export const store = configureStore({
  reducer: {
    map: mapSLice.reducer,
    user: customerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
