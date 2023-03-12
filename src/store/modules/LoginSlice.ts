import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import { loginUser, LoginUserType } from "../../services/api.serverce";
export const loginActions: any = createAsyncThunk(
  "user/login",
  async (user: LoginUserType) => {
    const result = await loginUser(user);
    return result;
  }
);

const loginSlice = createSlice({
  name: "login",
  // initialState: null,
  initialState: {
    logged: false,
    user: {} as any,
  },
  reducers: {},
  extraReducers(bilder) {
    bilder.addCase(loginActions.fulfilled, (state, action) => {
      //const result = action.payload;
      return {
        logged: true,
        user: action.payload.data,
      };
      // if (result.ok) {
      //   return result.data;
      // }
    });
  },
});

export default loginSlice.reducer;
