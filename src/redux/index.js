import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product-slice";
import uploadSlice from "./upload-slice";
import singleProductSlice from "./productDetails-slice";

const store = configureStore({
  reducer: {
    allProducts: ProductSlice.reducer,
    singleProduct: singleProductSlice.reducer,
    upload: uploadSlice.reducer,
  },
});
export default store;
