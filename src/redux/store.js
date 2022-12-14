import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";

let store = createStore(productReducer, applyMiddleware(thunk));

export default store;
