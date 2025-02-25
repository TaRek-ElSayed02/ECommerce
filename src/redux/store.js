import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/sliceCart";
import productsSlice from "../slices/productsSlice";
// import { fetchAllProducts } from "../slices/productsSlice";
// import {cartReducer} from '../slices/sliceCart'
import authReducer from "../slices/authSlice";

import favoriteProductReducer from "../slices/favoriteProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
     products:productsSlice,
     auth:authReducer,
     favoriteProduct: favoriteProductReducer,
  },
});
