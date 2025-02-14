import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.totalPrice -= state.products[index].price * state.products[index].quantity;
        state.totalQuantity -= state.products[index].quantity;
        state.products.splice(index, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= product.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
