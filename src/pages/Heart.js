/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { heartAction } from "../redux/actions/heartAction";

const Wrapper = styled.div`
  margin: 80px 200px;
`;

const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
`;

const Heart = () => {
  const idList = useSelector((state) => state.heart.idList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(heartAction.heartList(idList));
  }, []);
  const heartData = useSelector((state) => state.heart.heartData);
  return (
    <Wrapper>
      {heartData.length !== 0 ? (
        <Products>
          {heartData.map((item, index) => (
            <li key={index}>
              <ProductCard item={item} />
            </li>
          ))}
        </Products>
      ) : (
        <span>즐겨찾기에 추가된 상품이 없습니다.</span>
      )}
    </Wrapper>
  );
};

export default Heart;
