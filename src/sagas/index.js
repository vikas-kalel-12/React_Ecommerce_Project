import { all, fork } from "redux-saga/effects";
import { watchLogin } from "../Features/Auth/authSaga";

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    // Add other sagas here as the app grows
  ]);
}
