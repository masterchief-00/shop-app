import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../redux/productDetails-slice";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const product = useSelector((state) => state.singleProduct);
  const singleProduct = useSelector(
    (state) => state.singleProduct.singleProduct
  );

  const dispatch = useDispatch();
  const params = useParams();

  const { title, price, description, images } = singleProduct;

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id));
  }, []);
  return (
    <Container>
      {product.loading && <div>loading...</div>}
      {!product.loading && product.error ? (
        <div>Error: {product.error}</div>
      ) : null}
      {!product.loading && product.singleProduct !== {} ? (
        <Container>
          <div>
            <h2>{title}</h2>
          </div>
          {images && (
            <ProductImages>
              {images.map((image) => (
                <Image src={image} key={image} />
              ))}
            </ProductImages>
          )}

          <OtherDetails>
            <div>{description}</div>
            <div>Price: ${price}</div>
          </OtherDetails>
        </Container>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProductImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
const OtherDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  border: solid 1px transparent;
  border-radius: 8px;
  height: 300px;
`;
