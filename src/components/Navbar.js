import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";

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
  const goToLogin = () => {
    navigate("/login");
  };
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
        <Link to="/">
          <h1>My Shop</h1>
        </Link>
        <ul className="login-menu">
          <li onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} className="menu-icon" />
            <span>로그인</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className="menu-icon" />
            <span>즐겨찾기</span>
          </li>
          <li>
            <span>쇼핑몰(0)</span>
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
          <input type="text" placeholder="제품검색" />
        </div>
      </BottomNav>
    </Wrapper>
  );
};

export default Navbar;
