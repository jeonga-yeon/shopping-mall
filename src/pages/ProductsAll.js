/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { productAction } from "../redux/actions/productAction";

const Wrapper = styled.div`
  margin: 80px 200px;
`;

const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
`;

const ProductsAll = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    dispatch(productAction.getProducts());
  };
  return (
    <Wrapper>
      <Products>
        {productList.map((item, index) => (
          <li key={index}>
            <ProductCard item={item} />
          </li>
        ))}
      </Products>
    </Wrapper>
  );
};

export default ProductsAll;
