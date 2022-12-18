/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { faHeart as normalHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { productAction } from "../redux/actions/productAction";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  .product-img {
    margin-right: 10px;
    img {
      width: 396px;
    }
  }
  .product-info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 25px;
      margin-bottom: 20px;
      .product-info__heart {
        &:hover {
          color: red;
          cursor: pointer;
        }
      }
    }
    .product-info__price {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .product-info__new {
      margin-bottom: 70px;
    }
    .size-select,
    button {
      width: 400px;
    }
    .size-select {
      height: 50px;
      padding-left: 10px;
      margin-bottom: 20px;
      &:focus {
        outline: none;
      }
      border-color: gray;
      color: gray;
    }
    button {
      height: 40px;
      margin-bottom: 5px;
      background-color: #2d3436;
      border: none;
      color: white;
    }
    .size-select,
    button {
      cursor: pointer;
    }
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [heart, setHeart] = useState("heart");
  useEffect(() => {
    getProductDetail();
  }, []);
  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };
  return (
    <Wrapper>
      <div className="product-img">
        <img src={product?.img} />
      </div>
      <div className="product-info">
        <div>
          <span>{product?.title}</span>
          <FontAwesomeIcon
            onMouseEnter={() => setHeart("fullHeart")}
            onMouseLeave={() => setHeart("heart")}
            icon={heart === "heart" ? normalHeart : fullHeart}
            className="product-info__heart"
          />
        </div>
        <span className="product-info__price">￦{product?.price}</span>
        <span className="product-info__new">{product?.new ? "new" : ""}</span>
        <select name="size" className="size-select">
          <option value="">사이즈 선택</option>
          {product?.size.map((size, index) => (
            <option key={index} value={size}>
              {size.toUpperCase()}
            </option>
          ))}
        </select>
        <button>장바구니</button>
        <button>결제</button>
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
