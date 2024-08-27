import { createSlice } from "@reduxjs/toolkit";
import { removeToken, saveToken } from "../../utilities/saveStates";
import Toasty from "../../Components/Toasty";
import { useSelector } from "react-redux";

const initialState = {
  loading: false,
  token: "",
  isAuthorized: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      if (action.payload.response.token) {
        state.token = action.payload.response.token;
        state.isAuthorized = true;
      }
      saveToken(action.payload.response.token);
      Toasty.success("LoggedIn Successfully!!");
    },
    loginFailure: (state, action) => {
      state.loading = false;
      Toasty.error(action.payload);
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.token = "";
      state.isAuthorized = false;
      removeToken();
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export const useLoading = () =>
  useSelector((state) => state[userSlice.name].loading);

export const useAuthorizedUser = () =>
  useSelector((state) => state[userSlice.name].isAuthorized);

export default userSlice.reducer;
