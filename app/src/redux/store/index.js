import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import thunk from "redux-thunk"

import storesReducer from "../slices/storesSlice";
import dealsReducer from "../slices/dealsSlice";
import productsReducer from "../slices/productsSlice";


const reducers = combineReducers({
  stores: storesReducer,
  products: productsReducer,
  deals: dealsReducer,

});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["stores", "products", "deals"]
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

const getState = store.getState;
const dispatch = store.dispatch;

export default store;

export { getState, dispatch };
