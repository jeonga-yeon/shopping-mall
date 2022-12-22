/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faHeart as normalHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { heartAction } from "../redux/actions/heartAction";

const Container = styled.div`
  position: relative;
  &:hover {
    scale: 1.1;
    z-index: 1;
    cursor: pointer;
  }
  .cart__heart--normal {
    font-size: 20px;
    position: absolute;
    right: 30px;
    bottom: 77px;
    color: #353b48;
    &:hover {
      color: red;
    }
    z-index: 7;
  }
  .cart__heart--full {
    font-size: 20px;
    position: absolute;
    right: 30px;
    bottom: 77px;
    color: red;
    z-index: 7;
  }
`;

const Wrapper = styled.div`
  font-size: 14px;
  height: 460px;
  transition: scale 0.1s;
  .card__title {
    margin-top: 15px;
    margin-bottom: 3px;
  }
  .card__new {
    font-size: 12px;
    margin-top: 7px;
    color: gray;
  }
`;

const ProductCard = ({ item }) => {
  const [heart, setHeart] = useState("heart");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };
  const idList = useSelector((state) => state.heart.idList);
  useEffect(() => {
    dispatch(heartAction.heartList(idList));
  }, [idList]);
  const heartData = useSelector((state) => state.heart.heartData);
  const heartIdList = heartData.map((item) => item.id);
  return (
    <Container>
      <Wrapper onClick={goToDetail}>
        <img width={260} src={item?.img} />
        <div className="card__title">{item?.title}</div>
        <div>￦{item?.price}</div>
        <div className="card__new">{item?.new ? "신제품" : ""}</div>
      </Wrapper>
      <FontAwesomeIcon
        onMouseEnter={() => setHeart("fullHeart")}
        onMouseLeave={() => setHeart("heart")}
        icon={
          heartIdList.includes(item?.id)
            ? fullHeart
            : heart === "heart"
            ? normalHeart
            : fullHeart
        }
        className={
          heartIdList.includes(item?.id)
            ? "cart__heart--full"
            : "cart__heart--normal"
        }
        onClick={() => dispatch({ type: "HEART", payload: { id: item?.id } })}
      />
    </Container>
  );
};

export default ProductCard;
