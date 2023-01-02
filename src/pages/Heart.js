/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
  @media screen and (max-width: 500px) {
    margin: 0px;
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
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  row-gap: 50px;
  margin-bottom: 50px;
`;

const Heart = () => {
  const [loading, setLoading] = useState(true);
  const idList = useSelector((state) => state.heart.idList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(heartAction.heartList(idList, setLoading));
  }, []);
  const heartData = useSelector((state) => state.heart.heartData);
  let apiError = useSelector((state) => state.heart.error);
  apiError = JSON.stringify(apiError);
  if (apiError === "{}" || '""') apiError = false;
  return (
    <Wrapper>
      <h1>즐겨찾기</h1>
      {!apiError ? (
        loading ? null : heartData.length !== 0 ? (
          <Products className="products">
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
