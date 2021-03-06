import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers/RootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [logger, thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
