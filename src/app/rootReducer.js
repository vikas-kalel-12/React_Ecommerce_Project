import { combineReducers } from "redux";
import authReducer from "../Features/Auth/authSlice";

const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
