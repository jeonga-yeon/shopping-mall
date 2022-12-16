import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 70px;
  width: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdde1;
  border-radius: 20px;
  padding: 30px 50px;
  label {
    margin-bottom: 8px;
  }
  input {
    height: 30px;
    border-radius: 15px;
    border: 1px solid #b2bec3;
    padding-left: 10px;
  }
  .password-label {
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
    height: 30px;
    width: 70px;
    border-radius: 10px;
    border: none;
    background-color: #ee5253;
    color: white;
    cursor: pointer;
  }
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password));
    navigate("/");
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
        <button type="submit">로그인</button>
      </Form>
    </Wrapper>
  );
};

export default Login;
