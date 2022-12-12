import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const Wrapper = styled.div``;

const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 20px;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 10px;
    }
  }
`;

const BottomNav = styled.div``;

const Navbar = () => {
  return (
    <Wrapper>
      <TopNav>
        <ul>
          <li>About Us</li>
          <li>고객 서비스</li>
          <li>매장 찾기</li>
          <li>
            <FontAwesomeIcon icon={faEllipsisH} />
          </li>
        </ul>
        <h1>My Shop</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} />
            <span>즐겨찾기</span>
          </li>
          <li>
            <span>쇼핑몰 (0)</span>
          </li>
        </ul>
      </TopNav>
      <BottomNav></BottomNav>
    </Wrapper>
  );
};

export default Navbar;
