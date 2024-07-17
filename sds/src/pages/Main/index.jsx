import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import MainHeader from "../../components/MainHeader";
import MainImg from "../../assets/MainImg.png";

function MainPage() {
    const onClickReport = () => {
        window.location.assign("/create");
    };

  return (
    <>
      <MainHeader />
      <Container>
        <LeftContainer>
            <TextContainer>
                <Text>층간소음으로</Text>
                <Text>고통받고 계시다면</Text>
            </TextContainer>
            <Button onClick={() => onClickReport()}>신고하기</Button>
        </LeftContainer>
        <Img src={MainImg} />
      </Container>
    </>
  );
}

const Container = styled.div`
	width: 100%;
	height: 94vh;
  background-color: ${color.Gray[0]};
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 100px;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 200px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`

const Text = styled.div`
    font-size: 50px;
    font-weight: bold;
    color: ${color.Black};
`

const Img = styled.img`
    width: 850px;
`

const Button = styled.button`
    width: 430px;
    height: 60px;
    border-radius: 10px;
    color: ${color.White};
    font-size: 20px;
    font-weight: bold;
    border: none;
    background-color: ${color.Red[1]};

    &:focus {
        cursor: pointer;
        outline: none;
    }
`

export default MainPage;