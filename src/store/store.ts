import { configureStore } from "@reduxjs/toolkit";
import { mapSLice } from "./mapSlice";
import customerSlice from "./customerSlice";
import loadSlice from './itemsSlice'
export const store = configureStore({
  reducer: {
    map: mapSLice.reducer,
    user: customerSlice,
    load : loadSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
