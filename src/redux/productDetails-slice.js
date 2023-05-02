import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProducts",
  async (id) => {
    const res = await axios({
          method: "get",
          url: `https://api.escuelajs.co/api/v1/products/${id}`,
      });
      return res.data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProduct: {},
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = { ...action.payload };
      state.error = "";
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.singleProduct = {};
      state.error = action.error;
    });
  },
});

export const singleProductAction = singleProductSlice.actions;
export default singleProductSlice;
