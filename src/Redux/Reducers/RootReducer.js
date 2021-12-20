import TaskReducer from "./TaskReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({

  Tasks: TaskReducer,
});

export default rootReducer;
