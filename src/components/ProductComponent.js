import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <Container>
      <Cards>
        {products.map((product) => {
          const { id, title, price, category, images } = product;
          return (
            <StyledLink to={`/product/${id}`} key={id}>
              <Card>
                <ProductImage>
                  <img
                    src={images[0]}
                    alt={title}
                    style={{ height: "200px" }}
                  />
                </ProductImage>
                <ProductContent>
                  <div className="productTitle">{title}</div>
                  <div className="price">$ {price}</div>
                  <div className="category">{category.name}</div>
                </ProductContent>
              </Card>
            </StyledLink>
          );
        })}
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 15px;
  padding: 5px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
  border-radius: 8px;
  padding: 3px;
  transition: 0.2s;

  &:hover {
    box-shadow: 1px 1px 8px;
  }
`;
const ProductImage = styled.div``;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
`;


