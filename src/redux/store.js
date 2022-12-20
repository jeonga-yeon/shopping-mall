import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import persistReducer from "../redux/reducers";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

let store = createStore(persistReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
