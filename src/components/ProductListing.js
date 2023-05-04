import React, { useEffect } from "react";
import { ProductComponent } from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchProducts, productActions } from "../redux/product-slice";

export const ProductListing = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {products.loading && <div>Loading...</div>}
      {!products.loading && products.error ? (
        <div>Error: {products.error}</div>
      ) : null}
      {!products.loading && products.products.length ? (
        <ProductComponent />
      ) : null}
    </div>
  );
};
