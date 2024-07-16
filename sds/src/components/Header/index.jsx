import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import Logo from "../../assets/icon/Logo";

function Header() {

  return (
    <Container>
      <Logo />
      <ButtonDiv>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonDiv>
    </Container>
  );
}

const Container = styled.div`
	width: 100%;
	height: 6vh;
  background-color: ${color.White};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 100px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${color.White};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`

const ButtonDiv = styled.div`
  width: 220px;
  height: 60px;
`

export default Header;