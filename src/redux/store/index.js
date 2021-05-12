import { createStore, applyMiddleware } from "redux";
import jobReducer from "../reducer/jobReducer";
import thunk from "redux-thunk";

const store = createStore(jobReducer, applyMiddleware(thunk));

export default store;
