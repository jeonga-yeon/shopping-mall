/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { heartAction } from "../redux/actions/heartAction";

const Wrapper = styled.div`
  margin: 0px 200px;
  h1 {
    margin: 50px;
    font-size: 35px;
    text-align: center;
  }
  .empty-heart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 330px;
    span {
      color: gray;
    }
  }
`;

const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  margin-bottom: 50px;
`;

const Heart = () => {
  const idList = useSelector((state) => state.heart.idList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(heartAction.heartList(idList));
  }, []);
  const heartData = useSelector((state) => state.heart.heartData);
  const apiError = useSelector((state) => state.heart.error);
  return (
    <Wrapper>
      <h1>즐겨찾기</h1>
      {!apiError ? (
        heartData.length !== 0 ? (
          <Products>
            {heartData.map((item, index) => (
              <li key={index}>
                <ProductCard item={item} />
              </li>
            ))}
          </Products>
        ) : (
          <div className="empty-heart">
            <span>좋아하는 아이템을 저장하시겠습니까?</span>
            <span>아이템의 하트 기호를 클릭만 하면 여기에 나타납니다.</span>
          </div>
        )
      ) : (
        apiError
      )}
    </Wrapper>
  );
};

export default Heart;
