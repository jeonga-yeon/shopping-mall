import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    margin: 50px;
    font-size: 35px;
    text-align: center;
  }
  .cart {
    display: flex;
    justify-content: center;
    margin: 50px 0px;
    .cart__list {
      width: 700px;
      height: 100px;
      background-color: white;
      margin-right: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
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
      background-color: white;
      margin-left: 10px;
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
  const authenticate = useSelector((state) => state.auth.authenticate);
  const payment = () => {
    if (!authenticate) {
      navigate("/login");
    } else {
      window.alert("결제가 완료되었습니다.");
    }
  };
  return (
    <Wrapper>
      <h1>장바구니</h1>
      <div className="cart">
        <div className="cart__list">
          <span>고객님의 장바구니가 비어있습니다.</span>
          <span onClick={() => navigate("/")}>계속 쇼핑하기</span>
        </div>
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
            <span>₩ 29,000</span>
          </div>
          <div className="cart__delivery-fee">
            <span>배송</span>
            <span>₩ 2,500</span>
          </div>
          <div className="line"></div>
          <div className="cart__total-price">
            <span>합계</span>
            <span>₩ 31,500</span>
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
