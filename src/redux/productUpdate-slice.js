import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProduct = createAsyncThunk(
  "product/update",
  async (data) => {
    const { id, uploadData } = data;
    const res = await axios({
      method: "put",
      url: `https://api.escuelajs.co/api/v1/products/${id}`,
      data: {
        title: uploadData.title,
        description: uploadData.description,
        categoryId: uploadData.categoryId,
        price: uploadData.price,
        images: uploadData.images,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    return res.data;
  }
);

const productUpdateSlice = createSlice({
  name: "productUpdate",
  initialState: {
    response: {},
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.response = { ...action.payload };
      state.error = "";
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.response = false;
      state.error = action.error;
    });
  },
});

export const uploadActions = productUpdateSlice.actions;
export default productUpdateSlice;
