import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const res = await axios({
    method: "get",
    url: "https://api.escuelajs.co/api/v1/products?offset=0&limit=10",
  });
  return res.data;
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error;
    });
  },
  reducers: {
    setProducts(state, action) {
      for (let product of action.payload.list) {
        if (!state.products.find((item) => item.id === product.id)) {
          state.products.push(product);
        } else {
          continue;
        }
      }
    },
  },
});

export const productActions = ProductSlice.actions;
export default ProductSlice;
