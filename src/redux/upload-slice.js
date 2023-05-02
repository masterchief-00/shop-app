import { createSlice } from "@reduxjs/toolkit";

const uploadSlice = createSlice({
  name: "Upload",
  initialState: {
    uploadData: {
      title: "",
      description: "",
      price: "",
      categoryId: "",
      images: [],
    },
  },
  reducers: {
    setUploadData(state, action) {
      state.uploadData = { ...action.payload };
    },
  },
});

export const uploadActions = uploadSlice.actions;
export default uploadSlice;
