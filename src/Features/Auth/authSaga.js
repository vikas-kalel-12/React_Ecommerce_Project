import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./authSlice";
import axiosInstance from "../../app/axios";

function* handleLogin(action) {
  try {
    const response = yield call(axiosInstance.post, "/auth/login", {
      username: action.payload.userName,
      password: action.payload.password,
    });

    yield put(loginSuccess({ response }));
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || "Login failed"));
  }
}

export function* watchLogin() {
  yield takeLatest(loginRequest.type, handleLogin);
}
