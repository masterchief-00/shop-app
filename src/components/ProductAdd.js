import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { uploadActions } from "../redux/upload-slice";

export const ProductAdd = () => {
  const uploadData = useSelector((state) => state.upload.uploadData);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();

    dispatch(
      uploadActions.setUploadData({
        title: e.target.name === "title" ? e.target.value : uploadData.title,
        description:
          e.target.name === "description"
            ? e.target.value
            : uploadData.description,
        price: e.target.name === "price" ? e.target.value : uploadData.price,

        images: e.target.name === "images" ? e.target.value : uploadData.images,

        categoryId:
          e.target.name === "categoryId"
            ? e.target.value
            : uploadData.categoryId,
      })
    );
  };

  return (
    <Container>
      <Form>
        <Field
          type="text"
          name="title"
          value={uploadData.title}
          onChange={handleInput}
          placeholder="Product Title"
        />
        <Field
          type="text"
          name="description"
          value={uploadData.description}
          onChange={handleInput}
          placeholder="Product description"
        />
        <Field
          type="text"
          name="price"
          value={uploadData.price}
          onChange={handleInput}
          placeholder="Price"
        />
        <Field
          type="text"
          name="categoryId"
          value={uploadData.categoryId}
          onChange={handleInput}
          placeholder="Product category"
        />
        <Field
          type="text"
          name="images"
          value={uploadData.images}
          onChange={handleInput}
          placeholder="Product images"
        />
        <Submit>Submit</Submit>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
`;

const Field = styled.input`
  background-color: transparent;
  text-align: center;
  padding: 1rem;
  width: 30vw;
  color: black;
  border: solid 1px black;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;

  ::placeholder {
    color: grey;
  }
`;
const Submit = styled.button`
  padding: 0.8rem;
  width: 8rem;
  margin-top: 10px;
  background-color: black;
  border: solid 1px transparent;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    border-color: black;
    color: black;
  }
`;
