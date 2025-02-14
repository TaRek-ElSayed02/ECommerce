import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/sliceCart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
