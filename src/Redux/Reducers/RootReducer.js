import CreateTaskReducer from "./CreateTaskReducer";
import GetTaskReducer from "./GetTaskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  getTask: GetTaskReducer,
  createTask: CreateTaskReducer,
});

export default rootReducer;
