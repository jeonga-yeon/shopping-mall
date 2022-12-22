import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import heartReducer from "./heartReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["userReducer", "authenticateReducer", "heartReducer"],
};

const rootReducer = combineReducers({
  user: userReducer,
  auth: authenticateReducer,
  product: productReducer,
  heart: heartReducer,
});

export default persistReducer(persistConfig, rootReducer);
