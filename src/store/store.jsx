import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/AuthSlice"
import ProductReducer from "./Reducers/ProductSlice"
import adminProductSclice from "./Reducers/AdminProductSlice"
import cardReducer from "./Reducers/CardReducers"
import orderReducer from "./Reducers/OrderSlice"

export const store = configureStore({
    reducer: {
      Auth:  userReducer, 
      Product: ProductReducer, 
      admin: adminProductSclice,
      Card: cardReducer,
      Order: orderReducer,
    },
});