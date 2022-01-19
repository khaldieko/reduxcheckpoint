import TaskReducer from "./TaskReducer";
import { signupReducer } from "./SignUpReducder";
import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  Tasks: TaskReducer,
  login: loginReducer,
  SignUp: signupReducer,
});

export default rootReducer;
