import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  background-color: #e4e4e4;
  .footer__category {
    padding: 0px 300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 80px;
    ul {
      text-align: start;
      font-size: 11px;
      li {
        margin-bottom: 20px;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        .icon {
          margin-left: 5px;
        }
      }
      .category__title {
        font-weight: 600;
        font-size: 13px;
        &:hover {
          cursor: text;
          text-decoration: none;
        }
      }
    }
  }
  .footer__logo {
    @import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");
    color: #30336b;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0px 0px 0px;
    padding-bottom: 80px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="footer__category">
        <ul>
          <li className="category__title">카테고리</li>
          <li>여성</li>
          <li>남성</li>
          <li>신생아/유아</li>
          <li>아동</li>
          <li>스포츠</li>
        </ul>
        <ul>
          <li className="category__title">기업 정보</li>
          <li>회사 소개</li>
          <li>채용 정보</li>
          <li>언론</li>
          <li>IR 정보</li>
        </ul>
        <ul>
          <li className="category__title">고객지원</li>
          <li>고객 서비스</li>
          <li>내 계정</li>
          <li>매장 찾기</li>
          <li>개인정보 처리방침</li>
          <li>문의하기</li>
          <li>사기 신고</li>
          <li>기프트 카드</li>
        </ul>
        <ul>
          <li className="category__title">지금 멤버십에 가입하세요!</li>
          <li>지금 가입하시고 10% 할인 받으세요</li>
          <li onClick={() => navigate("/join")}>
            지금 가입하기
            <FontAwesomeIcon icon={faArrowRight} className="icon" />
          </li>
        </ul>
      </div>
      <div className="footer__logo" onClick={() => navigate("/")}>
        My Shop
      </div>
    </Wrapper>
  );
};

export default Footer;
