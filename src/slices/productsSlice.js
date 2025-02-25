import { createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllProducts = createAsyncThunk("products/getAll", async (_) => {
    const response = await axiosInstance.get("/products");
    return response.data;
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.error = false;
            state.isLoading = true;
        })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                state.products = action.payload;

            })
            .addCase(fetchAllProducts.rejected, (state, action) => {

                state.error = true;
            })
    },
});


export { fetchAllProducts };
export default productsSlice.reducer;