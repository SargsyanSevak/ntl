import { configureStore } from "@reduxjs/toolkit";
import { mapSLice } from "./mapSlice";
import { userSlice } from "./userSlice";

// export const rootReducer = configureStore({
//   reducer: {
//     taxi: taxiSLice.reducer,
//   },
// });

export const store = configureStore({
  reducer: {
    map: mapSLice.reducer,
    user:  userSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
