/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartCard from "../components/CartCard";
import { cartAction } from "../redux/actions/cartAction";

const Wrapper = styled.div`
  @media screen and (max-width: 500px) {
    .cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .cart__list,
      .cart__list--empty {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
      }
      .cart__payment {
        margin-top: 30px;
      }
    }
  }
  h1 {
    margin: 50px;
    font-size: 35px;
    text-align: center;
  }
  .cart {
    display: flex;
    justify-content: center;
    margin: 50px 0px;
    margin-bottom: 100px;
    .cart__list,
    .cart__list--empty {
      width: 600px;
      margin-right: 20px;
    }
    .cart__list {
      display: flex;
      flex-direction: column;
    }
    .cart__list--empty {
      background-color: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      height: 120px;
      span:first-child {
        font-size: 25px;
        margin-bottom: 60px;
      }
      span:last-child {
        text-decoration: underline;
        color: #2c3e50;
        cursor: pointer;
      }
    }
    .cart__payment {
      width: 350px;
      height: 360px;
      background-color: white;
      padding: 20px;
      .cart__login,
      .cart__payment-button {
        width: 100%;
        font-size: 17px;
        padding: 10px;
      }
      .cart__login {
        border: 1px solid #2c3e50;
        margin-bottom: 50px;
        background-color: white;
        cursor: pointer;
      }
      .cart__order-price,
      .cart__delivery-fee,
      .cart__total-price {
        display: flex;
        justify-content: space-between;
      }
      .cart__order-price {
        margin-bottom: 5px;
      }
      .cart__delivery-fee {
        margin-bottom: 30px;
      }
      .line {
        width: 100%;
        height: 1px;
        background-color: #2c3e50;
      }
      .cart__total-price {
        margin-top: 20px;
        margin-bottom: 30px;
      }
      .cart__payment-button {
        border: none;
        margin-bottom: 30px;
        background-color: #2c3e50;
        color: white;
        cursor: pointer;
      }
      .cart__info {
        font-size: 13px;
      }
    }
  }
`;

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const authenticate = useSelector((state) => state.auth.authenticate);
  const payment = () => {
    if (!authenticate) {
      navigate("/login");
    } else {
      window.alert("결제가 완료되었습니다.");
      dispatch({
        type: "DELETE_CART_ALL",
      });
      navigate("/");
    }
  };
  const cartInfoList = useSelector((state) => state.cart.cartInfoList);
  useEffect(() => {
    dispatch(cartAction.cartList(cartInfoList));
    caculatePrice();
  }, []);
  const cartData = useSelector((state) => state.cart.cartData);
  const caculatePrice = () => {
    if (cartInfoList.length !== 0) {
      const priceList = cartInfoList.map((item) => item.price * item.quantity);
      const totalPrice = priceList.reduce((a, b) => a + b, 0);
      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  };
  let apiError = useSelector((state) => state.cart.error);
  apiError = JSON.stringify(apiError);
  if (apiError === "{}" || '""') apiError = false;
  return (
    <Wrapper>
      <h1>장바구니</h1>
      <div className="cart">
        {!apiError ? (
          cartData.length === 0 ? (
            <div className="cart__list--empty">
              <span>고객님의 장바구니가 비어있습니다.</span>
              <span onClick={() => navigate("/")}>계속 쇼핑하기</span>
            </div>
          ) : (
            <div className="cart__list">
              {cartData.map((item, index) => (
                <CartCard key={index} item={item} />
              ))}
            </div>
          )
        ) : (
          apiError
        )}

        <div className="cart__payment">
          {authenticate ? (
            ""
          ) : (
            <button className="cart__login" onClick={() => navigate("/login")}>
              로그인
            </button>
          )}
          <div className="cart__order-price">
            <span>주문 가격</span>
            <span>₩ {totalPrice.toLocaleString()}</span>
          </div>
          <div className="cart__delivery-fee">
            <span>배송</span>
            <span>₩ {cartData.length !== 0 ? (2500).toLocaleString() : 0}</span>
          </div>
          <div className="line"></div>
          <div className="cart__total-price">
            <span>합계</span>
            <span>
              ₩{" "}
              {cartData.length !== 0 ? (totalPrice + 2500).toLocaleString() : 0}
            </span>
          </div>
          <button className="cart__payment-button" onClick={payment}>
            결제하기
          </button>
          <div className="cart__info">
            가능한 결제 수단 <br /> <br /> 귀하가 결제 단계에 도달할 때까지 가격
            및 배송료는 확인되지 않습니다.
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
