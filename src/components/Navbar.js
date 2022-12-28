/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div``;

const TopNav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");
  display: flex;
  justify-content: space-between;
  margin: 40px 20px;
  align-items: center;
  ul {
    width: 33%;
    list-style: none;
    display: flex;
    font-size: 14px;
    li {
      padding: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .ellipsis {
    margin-left: 10px;
    font-size: 16px;
    &:hover {
      color: orange;
    }
  }
  h1 {
    width: 100%;
    font-size: 40px;
    font-family: "Secular One", sans-serif;
    color: #30336b;
  }
  .login-menu {
    width: 33%;
    justify-content: flex-end;
    span {
      margin-left: 5px;
    }
  }
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ul {
    display: flex;
    li {
      padding: 15px;
      &:hover {
        cursor: pointer;
        span {
          border-bottom: 1px solid black;
        }
      }
    }
  }
  div {
    position: absolute;
    right: 30px;
    display: flex;
    align-items: center;
    .search {
      position: absolute;
      right: 170px;
    }
    input {
      height: 30px;
      border: none;
      border-bottom: 1px solid gray;
      background-color: #faf9f8;
      padding-left: 25px;
      &:focus {
        outline: none;
      }
    }
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const menuList = ["여성", "남성", "신생아/유아", "아동", "스포츠", "Sale"];
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);
  const [searchKeyword, setSearchKeyword] = useState("");
  const goToLogin = () => {
    navigate("/login");
  };
  const goToLogout = () => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    navigate("/");
  };
  const goToHeart = () => {
    navigate("/heart");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      const keyword = event.target.value;
      if (keyword === "") {
        navigate("/");
      } else {
        navigate(`/?q=${keyword}`);
      }
    }
  };
  const cartInfoList = useSelector((state) => state.cart.cartInfoList);
  return (
    <Wrapper>
      <TopNav>
        <ul>
          <li>About Us</li>
          <li>고객 서비스</li>
          <li>매장 찾기</li>
          <li>
            <FontAwesomeIcon icon={faEllipsisH} className="ellipsis" />
          </li>
        </ul>
        <Link to="/" onClick={() => setSearchKeyword("")}>
          <h1>My Shop</h1>
        </Link>
        <ul className="login-menu">
          {authenticate ? (
            <li onClick={goToLogout}>
              <FontAwesomeIcon icon={faUser} className="menu-icon" />
              <span>로그아웃</span>
            </li>
          ) : (
            <li onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} className="menu-icon" />
              <span>로그인</span>
            </li>
          )}
          <li onClick={goToHeart}>
            <FontAwesomeIcon icon={faHeart} className="menu-icon" />
            <span>즐겨찾기</span>
          </li>
          <li onClick={() => navigate("/cart")}>
            <FontAwesomeIcon icon={faShoppingCart} className="menu-icon" />
            <span>장바구니({cartInfoList.length})</span>
          </li>
        </ul>
      </TopNav>
      <BottomNav>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <span>{menu}</span>
            </li>
          ))}
        </ul>
        <div>
          <FontAwesomeIcon icon={faSearch} className="search" />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(event) => search(event)}
            onChange={(event) => setSearchKeyword(event.target.value)}
            value={searchKeyword}
          />
        </div>
      </BottomNav>
    </Wrapper>
  );
};

export default Navbar;
