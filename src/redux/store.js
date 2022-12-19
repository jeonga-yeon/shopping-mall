import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import persistReducer from "../redux/reducers";

let store = createStore(persistReducer, applyMiddleware(thunk));

export default store;
