/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { faHeart as normalHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { heartAction } from "../redux/actions/heartAction";
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
      .cart__heart--normal {
        color: #353b48;
        &:hover {
          color: red;
          cursor: pointer;
        }
      }
      .cart__heart--full {
        color: red;
        &:hover {
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
    .product-info__quantity,
    .product-info__size,
    button {
      width: 400px;
      cursor: pointer;
    }
    .product-info__quantity,
    .product-info__size {
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
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [heart, setHeart] = useState("heart");
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();
  const idList = useSelector((state) => state.heart.idList);
  const authenticate = useSelector((state) => state.auth.authenticate);
  const navigate = useNavigate();
  const handlePayment = () => {
    if (!authenticate) {
      navigate("/login");
    } else {
      window.alert("결제가 완료되었습니다.");
      navigate("/");
    }
  };
  useEffect(() => {
    getProductDetail();
    dispatch(heartAction.heartList(idList));
  }, [idList]);
  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };
  const heartData = useSelector((state) => state.heart.heartData);
  const heartIdList = heartData.map((item) => item.id);
  const addCart = (event) => {
    event.preventDefault();
    dispatch({
      type: "CART",
      payload: { id: product?.id, quantity, size, price: product?.price },
    });
    if (window.confirm("장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")) {
      navigate("/cart");
    } else {
      return;
    }
  };
  return (
    <Wrapper>
      <div className="product-img">
        <img src={product?.img} />
      </div>
      <form className="product-info" onSubmit={addCart}>
        <div>
          <span>{product?.title}</span>
          {heartIdList.includes(product?.id) ? (
            <FontAwesomeIcon
              onMouseEnter={() => setHeart("fullHeart")}
              icon={fullHeart}
              className="cart__heart--full"
              onClick={() =>
                dispatch({ type: "DELETE_HEART", payload: { id: product?.id } })
              }
            />
          ) : (
            <FontAwesomeIcon
              onMouseEnter={() => setHeart("fullHeart")}
              onMouseLeave={() => setHeart("heart")}
              icon={heart === "heart" ? normalHeart : fullHeart}
              className="cart__heart--normal"
              onClick={() =>
                dispatch({ type: "HEART", payload: { id: product?.id } })
              }
            />
          )}
        </div>
        <span className="product-info__price">￦{product?.price}</span>
        <span className="product-info__new">{product?.new ? "new" : ""}</span>
        <select
          name="quantity"
          className="product-info__quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
        >
          <option value="">수량</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <select
          name="size"
          className="product-info__size"
          value={size}
          onChange={(event) => setSize(event.target.value)}
          required
        >
          <option value="">사이즈 선택</option>
          {product?.size.map((size, index) => (
            <option key={index} value={size}>
              {size.toUpperCase()}
            </option>
          ))}
        </select>
        <button type="submit">장바구니</button>
        <button onClick={handlePayment}>결제</button>
      </form>
    </Wrapper>
  );
};

export default ProductDetail;
