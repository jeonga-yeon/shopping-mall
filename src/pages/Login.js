import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 130px;
  width: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdde1;
  border-radius: 20px;
  padding: 30px 50px;
  margin-bottom: 180px;
  label {
    margin-bottom: 8px;
  }
  input {
    height: 30px;
    border-radius: 15px;
    border: 1px solid #b2bec3;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
  }
  .error {
    font-size: 13px;
    padding: 5px 8px;
    color: #ee5a24;
  }
  .password-label {
    margin-top: 20px;
  }
  .join {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button,
    span {
      margin-top: 20px;
    }
    button {
      height: 30px;
      width: 70px;
      border-radius: 10px;
      border: none;
      background-color: #ee5253;
      color: white;
      cursor: pointer;
    }
    span {
      color: #576574;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("reduxState")).user.userList;
  const emailList = users.map((user) => user.id);
  const passwordList = users.map((user) => user.password);
  const login = (event) => {
    event.preventDefault();
    if (!emailList.includes(id)) {
      setEmailError("가입되지 않은 계정입니다.");
      setPasswordError("");
    } else if (emailList.indexOf(id) !== passwordList.indexOf(password)) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      setEmailError("");
    } else {
      dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
      navigate("/");
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={(event) => login(event)}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          required
          onChange={(event) => setId(event.target.value)}
        />
        <span className="error">{emailError ? emailError : ""}</span>
        <label htmlFor="password" className="password-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <span className="error">{passwordError ? passwordError : ""}</span>
        <div className="join">
          <button type="submit">로그인</button>
          <span onClick={() => navigate("/join")}>회원가입</span>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Login;
