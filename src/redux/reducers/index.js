import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["authenticateReducer"],
};

const rootReducer = combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
