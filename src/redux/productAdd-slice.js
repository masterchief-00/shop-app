import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const saveProduct = createAsyncThunk(
  "product/addProduct",
  async (uploadData) => {
    const response = await axios({
      method: "post",
      url: "https://api.escuelajs.co/api/v1/products/",
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

    return response.data;
  }
);

const productAddSlice = createSlice({
  name: "productAdd",
  initialState: {
    uploadData: {
      title: "",
      description: "",
      categoryId: "",
      price: "",
      images: [],
    },
    response: {},
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.response = { ...action.payload };
      state.error = "";
    });
    builder.addCase(saveProduct.rejected, (state, action) => {
      state.loading = false;
      state.response = {};
      state.error = action.error;
    });
  },
  reducers: {
    setUploadData(state, action) {
      state.uploadData = { ...action.payload };
    },
  },
});
export const productAddActions = productAddSlice.actions;
export default productAddSlice;
