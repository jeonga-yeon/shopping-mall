/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faSearch,
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Menu = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");
  box-sizing: border-box;
  .mobile-menu {
    display: none;
  }
  @media screen and (max-width: 970px) {
    .menu {
      display: none;
    }
    .mobile-menu {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mobile-menu__nav,
      .mobile-menu__login {
        display: flex;
        margin-top: 40px;
        justify-content: space-between;
        align-items: center;
        h1,
        span {
          margin-left: 5px;
        }
      }
      .mobile-menu__nav {
        height: 100%;
        .mobile-menu__icon,
        h1 {
          margin-left: 30px;
        }
        .mobile-menu__icon {
          font-size: 25px;
          &:hover {
            cursor: pointer;
          }
        }
        h1 {
          margin-left: 10px;
          font-family: "Secular One", sans-serif;
          color: #30336b;
          font-weight: 600;
          font-size: 25px;
        }
        .mobile-menu__list {
          width: 300px;
          height: 200vh;
          background-color: #dfb887;
          z-index: 9;
          position: fixed;
          left: 0px;
          top: 0px;
          padding: 10px;
          .list__icon {
            width: 100%;
            text-align: end;
            font-size: 20px;
            margin-bottom: 30px;
            .fa-times {
              &:hover {
                cursor: pointer;
              }
            }
          }
          .list__category {
            font-size: 22px;
            text-align: center;
            li {
              margin-bottom: 25px;
              &:hover {
                cursor: pointer;
                text-decoration: underline;
              }
            }
          }
          .mobile-search {
            position: relative;
            margin-top: 320px;
            display: flex;
            align-items: center;
            justify-content: center;
            .search {
              position: fixed;
              left: 26px;
              z-index: 10;
              bottom: 6.5%;
            }
            input {
              position: fixed;
              height: 30px;
              width: 250px;
              border: none;
              border-bottom: 1px solid black;
              background-color: #dfb887;
              padding-left: 25px;
              bottom: 5%;
              &:focus {
                outline: none;
              }
            }
          }
        }
      }
      .mobile-menu__login {
        margin-right: 20px;
        li {
          padding: 5px;
          &:hover {
            cursor: pointer;
          }
          font-size: 20px;
        }
        .cart__amount {
          position: relative;
          .amount__icon {
            position: absolute;
            left: 11px;
            top: 0px;
            width: 14px;
            height: 14px;
            background-color: tomato;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              position: absolute;
              left: -1px;
              font-size: 11px;
              text-align: center;
              color: white;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;

const TopNav = styled.div`
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
    font-weight: 600;
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
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);
  const [searchKeyword, setSearchKeyword] = useState("");
  const goToLogin = () => {
    navigate("/shopping-mall/login");
  };
  const goToLogout = () => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    navigate("/shopping-mall/");
  };
  const goToHeart = () => {
    navigate("/shopping-mall/heart");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      const keyword = event.target.value;
      if (keyword === "") {
        return;
      } else {
        navigate(`/shopping-mall/?q=${keyword}`);
      }
    }
  };
  const cartInfoList = useSelector((state) => state.cart.cartInfoList);
  return (
    <Menu>
      <div className="menu">
        <TopNav>
          <ul>
            <li>About Us</li>
            <li>고객 서비스</li>
            <li>매장 찾기</li>
            <li>
              <FontAwesomeIcon icon={faEllipsisH} className="ellipsis" />
            </li>
          </ul>
          <Link to="/shopping-mall/" onClick={() => setSearchKeyword("")}>
            <h1>My Shop</h1>
          </Link>
          <ul className="login-menu">
            <li onClick={goToHeart}>
              <FontAwesomeIcon icon={faHeart} className="menu-icon" />
              <span>즐겨찾기</span>
            </li>
            <li onClick={() => navigate("/shopping-mall/cart")}>
              <FontAwesomeIcon icon={faShoppingCart} className="menu-icon" />
              <span>장바구니({cartInfoList.length})</span>
            </li>
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
      </div>
      <div className="mobile-menu">
        <div className="mobile-menu__nav">
          <FontAwesomeIcon
            icon={faBars}
            className="mobile-menu__icon"
            onClick={() => setMenu(true)}
          />
          <Link to="/shopping-mall/" onClick={() => setSearchKeyword("")}>
            <h1>My Shop</h1>
          </Link>
          {menu ? (
            <div className="mobile-menu__list">
              <div className="list__icon">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="fa-times"
                  onClick={() => setMenu(false)}
                />
              </div>
              <ul className="list__category">
                <li>여성</li>
                <li>남성</li>
                <li>신생아/유아</li>
                <li>아동</li>
                <li>스포츠</li>
                <li>Sale</li>
                <li>홈</li>
              </ul>
              <div className="mobile-search">
                <FontAwesomeIcon icon={faSearch} className="search" />
                <input
                  type="text"
                  placeholder="제품검색"
                  onKeyPress={(event) => search(event)}
                  onChange={(event) => setSearchKeyword(event.target.value)}
                  value={searchKeyword}
                />
              </div>
            </div>
          ) : null}
        </div>
        <ul className="mobile-menu__login">
          <li onClick={goToHeart}>
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li
            onClick={() => navigate("/shopping-mall/cart")}
            className="cart__amount"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartInfoList.length !== 0 ? (
              <div className="amount__icon">
                <span>{cartInfoList.length}</span>
              </div>
            ) : null}
          </li>
          {authenticate ? (
            <li onClick={goToLogout}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그아웃</span>
            </li>
          ) : (
            <li onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그인</span>
            </li>
          )}
        </ul>
      </div>
    </Menu>
  );
};

export default Navbar;
