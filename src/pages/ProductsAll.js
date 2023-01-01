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
  @media screen and (max-width: 500px) {
    margin-left: 210px;
    .products {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }
`;

const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  span {
    margin-bottom: 100px;
    color: gray;
  }
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
  let apiError = useSelector((state) => state.product.getProductsError);
  apiError = JSON.stringify(apiError);
  if (apiError === "{}" || '""') apiError = false;
  return (
    <Wrapper>
      <Products className="products">
        {!apiError ? (
          productList.length !== 0 ? (
            productList.map((item, index) => (
              <li key={index}>
                <ProductCard item={item} />
              </li>
            ))
          ) : (
            <span>검색 결과가 없습니다.</span>
          )
        ) : (
          apiError
        )}
      </Products>
    </Wrapper>
  );
};

export default ProductsAll;
