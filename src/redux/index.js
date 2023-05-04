import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product-slice";
import singleProductSlice from "./productDetails-slice";
import productAddSlice from "./productAdd-slice";
import productDeleteSlice from "./productDelete-slice";
import productUpdateSlice from "./productUpdate-slice";

const store = configureStore({
  reducer: {
    allProducts: ProductSlice.reducer,
    singleProduct: singleProductSlice.reducer,
    upload: productAddSlice.reducer,
    delete: productDeleteSlice.reducer,
    update: productUpdateSlice.reducer,
  },
});
export default store;
