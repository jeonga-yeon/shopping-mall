/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { faHeart as normalHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  font-size: 14px;
  height: 460px;
  &:hover {
    scale: 1.1;
    z-index: 1;
    cursor: pointer;
  }
  transition: scale 0.1s;
  .card__title {
    margin-top: 15px;
    margin-bottom: 3px;
  }
  .card__heart {
    font-size: 20px;
    position: absolute;
    right: 30px;
    bottom: 77px;
    color: #353b48;
    &:hover {
      color: red;
    }
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
  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <Wrapper onClick={goToDetail}>
      <img width={260} src={item?.img} />
      <div className="card__title">{item?.title}</div>
      <div>￦{item?.price}</div>
      <div className="card__new">{item?.new ? "신제품" : ""}</div>
      <FontAwesomeIcon
        onMouseEnter={() => setHeart("fullHeart")}
        onMouseLeave={() => setHeart("heart")}
        icon={heart === "heart" ? normalHeart : fullHeart}
        className="card__heart"
      />
    </Wrapper>
  );
};

export default ProductCard;
