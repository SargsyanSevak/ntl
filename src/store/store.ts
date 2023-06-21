import { configureStore } from "@reduxjs/toolkit";
import { mapSLice } from "./slice";

// export const rootReducer = configureStore({
//   reducer: {
//     taxi: taxiSLice.reducer,
//   },
// });

export const store = configureStore({
  reducer: {
    map: mapSLice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
