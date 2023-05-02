import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h2>Shop</h2>
      </Link>
      <Link to={'/product/add'} style={{textDecoration:'none',fontSize:'30px', fontWeight:"bold",marginRight:'80px'}}>
        Add a new product
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 30px;
`;
