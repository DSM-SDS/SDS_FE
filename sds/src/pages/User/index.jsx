import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import Header from "../../components/Header";

function SignupPage() {
  const [signupInputData, setSignupInputData] = useState({
    username: "",
    password: "",
    passwordCheck: "",
    name: "",
    hosu: "",
    apt_name: ""
  });

  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    name: "",
    hosu: "",
    apt_name: "",
    role: "User"
  });

  const onClickSignup = () => {
    window.location.assign("/");
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setSignupInputData({
      ...signupInputData,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <Container>
        <Text>Signup</Text>
        <InputDiv>
          <Input name="name" type="text" placeholder="이름" onChange={onChange} />
          <Input name="username" type="text" placeholder="아이디" onChange={onChange} />
          <Input name="password" type="password" placeholder="비밀번호"onChange={onChange} />
          <Input name="passwordCheck" type="password" placeholder="비밀번호 확인" onChange={onChange} />
          <Input name="apt_name" type="text" placeholder="아파트 이름" onChange={onChange} />
          <Input name="hosu" type="text" placeholder="호 수 ex) 000호/0000호" onChange={onChange}/>
        </InputDiv>
        <Button onClick={() => onClickSignup()}>회원가입</Button>
      </Container>
    </>
  );
}

const Container = styled.div`
	width: 100%;
	height: 94vh;
  background-color: ${color.Gray[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 100px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${color.Red[1]};
`

const Input = styled.input`
  width: 670px;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  padding-left: 30px;
  &:focus {
    outline: none;
  }
`

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
`

const Button = styled.button`
  background-color: ${color.Red[1]};
  color: ${color.White};
  font-size: 20px;
  font-weight: 600;
  width: 700px;
  height: 60px;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`

export default SignupPage;