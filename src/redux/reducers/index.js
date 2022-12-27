import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import heartReducer from "./heartReducer";
import cartReducer from "./cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: [
    "userReducer",
    "authenticateReducer",
    "heartReducer",
    "cartReducer",
  ],
};

const rootReducer = combineReducers({
  user: userReducer,
  auth: authenticateReducer,
  product: productReducer,
  heart: heartReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
