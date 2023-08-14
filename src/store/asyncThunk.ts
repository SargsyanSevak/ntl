import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { saveToken } from "../utils/helpers";

export const login = createAsyncThunk(
  "user/login",
  async (loginObj, ) => {
    const res = await axios.post(`/users/login`, {
      email: loginObj.email,
      password: loginObj.password,
    });
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
    return token;
  }
);
