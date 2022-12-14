/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const ProductCard = ({ item }) => {
  return (
    <Wrapper>
      <img width={260} src={item.img} />
      <div>{item.title}</div>
      <div>￦{item.price}</div>
    </Wrapper>
  );
};

export default ProductCard;
