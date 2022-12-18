/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
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
  const [query, setQuery] = useSearchParams();
  const productList = useSelector((state) => state.product.productList);
  useEffect(() => {
    getProducts();
  }, [query]);
  const getProducts = () => {
    dispatch(productAction.getProducts(query));
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
