import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import {
  getTokens,
  recoverToken,
  recoverVerifyToken,
  saveToken,
} from "../utils/helpers";

export const registerThunk = createAsyncThunk<any, any>(
  "customerSlice/registerThunk",
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

export const loginThunk = createAsyncThunk<any, any>(
  "customerSlice/loginThunk",
  async (data) => {
    const res = await axios.post(`auth/login`, data);

    console.log(res);

    const token = await res.data.token;
    if (token) {
      saveToken(token);
    }
    return res.data;
  }
);

export const authMe = createAsyncThunk<any>(
  "customerSlice/authMe",
  async () => {
    const res = await axios.get(`auth/me`);

    console.log(res);
    const token = await res.data.token;
    if (token) {
      saveToken(token);
    }
    return res.data;
  }
);

export const recoverSend = createAsyncThunk<any>(
  "customerSlice/authMe",
  async (data) => {
    const res = await axios.post(`recover/send`, data);
    const token = await res.data.token;

    if (token) {
      recoverToken(token);
    }
  }
);

export const recoverResponse = createAsyncThunk<any>(
  "customerSlice/authMe",
  async (data) => {
    const res = await axios.post(`recover/response`, data);
    const verifyToken = await res.data.verifyToken;

    if (verifyToken) {
      recoverVerifyToken(verifyToken);
    }
  }
);

export const recoverPassRecovery = createAsyncThunk<any>(
  "customerSlice/authMe",
  async (data: any) => {
    let tokens = getTokens();
    if (!tokens) {
      return;
    }
    let newData = {
      token: tokens.token,
      verifyToken: tokens.verifyToken,
      ...data,
    };
    const res = await axios.post(`recover/PassRecovery`, newData);
    const token = await res.data.token;
    if (token) {
      saveToken(token);
    }
    return res.data;
  }
);
