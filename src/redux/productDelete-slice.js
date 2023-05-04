import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  const res = await axios({
    method: "delete",
    url: `https://api.escuelajs.co/api/v1/products/${id}`,
  });
  return res.data;
});

const productDeleteSlice = createSlice({
  name: "productDelete",
  initialState: {
    response: false,
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
      state.error = "";
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.response = false;
      state.error = action.error;
    });
  },
});

export const deleteActions = productDeleteSlice.actions;
export default productDeleteSlice;
