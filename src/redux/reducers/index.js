import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["userReducer", "authenticateReducer"],
};

const rootReducer = combineReducers({
  user: userReducer,
  auth: authenticateReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
