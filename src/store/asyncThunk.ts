import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { saveToken } from "../utils/helpers";

export const registerThunk = createAsyncThunk<any, any>(
  "userSLice/registerThunk",
  async (data) => {
    const res = await axios.post(`auth/register`, data);

    // console.log(res);

    // if (res?.status === "error") {
    //   thunkApi.dispatch(
    //     showSnackBar({
    //       bg: "rgba(255, 0, 0, 0.54)",
    //       text: res?.message,
    //       isVisible: true,
    //       withoutSnack: true,
    //     })
    //   );
    //   return thunkApi.rejectWithValue(res.message);
    // }
    const token = await res.data.token;
    if (token) {
      saveToken(token);
    }
    return res.data;
  }
);

export const loginThunk = createAsyncThunk<any, any>("login", async (data) => {
  const res = await axios.post(`auth/login`, data);

  console.log(res);

  const token = await res.data.token;
  if (token) {
    saveToken(token);
  }
  return res.data;
});
