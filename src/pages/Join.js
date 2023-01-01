import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
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
  margin-bottom: 200px;
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
  .email-label,
  .password-label {
    margin-top: 20px;
  }
  .join {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
`;

const Join = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("reduxState")).user.userList;
  const emailList = users.map((user) => user.id);
  const join = (event) => {
    event.preventDefault();
    if (emailList.includes(id)) {
      setEmailError("이미 가입된 계정입니다.");
    } else {
      const user = { name, id, password };
      dispatch({ type: "JOIN_SUCCESS", payload: { user } });
      navigate("/");
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={(event) => join(event)}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="name"
          placeholder="name"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email" className="email-label">
          Email address
        </label>
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
        <div className="join">
          <button type="submit">회원가입</button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Join;
