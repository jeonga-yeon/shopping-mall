/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as normalHeart,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { heartAction } from "../redux/actions/heartAction";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  .cart__item {
    @media screen and (max-width: 500px) {
      width: 400px;
      display: flex;

      justify-content: center;
      align-items: center;
    }
    display: flex;
    margin-bottom: 10px;
    .cart__item--img {
      cursor: pointer;
    }
    .cart__item--detail {
      position: relative;
      width: 100%;
      display: flex;
      margin-left: 10px;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;
      }
      .cart__heart--normal {
        position: absolute;
        right: 10px;
        bottom: 100px;
        color: #353b48;
        &:hover {
          color: red;
        }
        z-index: 7;
        cursor: pointer;
      }
      .cart__heart--full {
        position: absolute;
        right: 10px;
        bottom: 100px;
        color: red;
        z-index: 7;
        cursor: pointer;
      }
      .cart__delete {
        position: absolute;
        right: 10px;
        bottom: 5px;
        color: #dcdde1;
        &:hover {
          cursor: pointer;
          color: #353b48;
        }
        z-index: 7;
      }
      .cart__item--title {
        font-size: 17px;
        margin-bottom: 15px;
      }
      .cart__item--price {
        margin-bottom: 30px;
        font-size: 13px;
      }
      .cart__item--quantity,
      .cart__item--size {
        font-size: 13px;
        line-height: 20px;
      }
    }
  }
`;

const CartCard = ({ item }) => {
  const [heart, setHeart] = useState("heart");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartInfoList = useSelector((state) => state.cart.cartInfoList);
  const idList = useSelector((state) => state.heart.idList);
  useEffect(() => {
    dispatch(heartAction.heartList(idList));
  }, [idList]);
  const heartData = useSelector((state) => state.heart.heartData);
  const heartIdList = heartData.map((item) => item.id);
  const cartIdList = cartInfoList.map((item) => item.id);
  return (
    <Wrapper>
      <div className="cart__item">
        <div
          onClick={() => navigate(`/product/${item.id}`)}
          className="cart__item--img"
        >
          <img src={item.image} width={80} />
        </div>
        <div className="cart__item--detail">
          <div>
            <span className="cart__item--title">{item.title}</span>
            <span className="cart__item--price">
              ￦{item.price.toLocaleString()}
            </span>
            <span className="cart__item--quantity">
              수량: {cartInfoList[cartIdList.indexOf(item.id)].quantity}
            </span>
            <span className="cart__item--size">
              사이즈: {cartInfoList[cartIdList.indexOf(item.id)].size}
            </span>
          </div>
          {heartIdList.includes(item?.id) ? (
            <FontAwesomeIcon
              onMouseEnter={() => setHeart("fullHeart")}
              icon={fullHeart}
              className="cart__heart--full"
              onClick={() => {
                setHeart("heart");
                dispatch({
                  type: "DELETE_HEART",
                  payload: { id: item?.id },
                });
              }}
            />
          ) : (
            <FontAwesomeIcon
              onMouseEnter={() => setHeart("fullHeart")}
              onMouseLeave={() => setHeart("heart")}
              icon={heart === "heart" ? normalHeart : fullHeart}
              className="cart__heart--normal"
              onClick={() => {
                setHeart("fullHeart");
                dispatch({ type: "HEART", payload: { id: item?.id } });
              }}
            />
          )}
          <FontAwesomeIcon
            className="cart__delete"
            icon={faTrashAlt}
            onClick={() =>
              dispatch({
                type: "DELETE_CART",
                payload: { id: item?.id },
              })
            }
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default CartCard;
