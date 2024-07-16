import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import MainHeader from "../../components/MainHeader";
import onReport from "../../utils/Report";

const CreatePage = () => {
  const [reportData, setReportData] = useState({
    title: "",
    detail: "",
    time: "",
    date: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...reportData,
      [name]: value,
    });
  };

  return (
    <>
      <MainHeader />
      <Container>
        <Text>신고하기</Text>
        <TopDiv>
          <InputDiv>
            <BoldText>날짜</BoldText>
            <TopInput placeholder="발생한 날짜를 입력해주세요 ex)24_07_16" name="date" onChange={onChange} />
          </InputDiv>
          <InputDiv>
            <BoldText>시간</BoldText>
            <TopInput placeholder="발생한 시간을 입력해주세요 ex)10:30" name="time" onChange={onChange}/>
          </InputDiv>
        </TopDiv>
        <InputDiv>
          <BoldText>제목</BoldText>
          <Input placeholder="제목을 입력해주세요"name="title" onChange={onChange} />  
        </InputDiv>
        <InputDiv>
          <BoldText>신고 내용</BoldText>
          <ContentsInput placeholder="신고 내용을 입력해주세요" name="detail" onChange={onChange} />
        </InputDiv>
        <Button onClick={() => onReport(reportData)}>신고하기</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
	width: 100%;
	height: 94vh;
  background-color: ${color.Gray[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${color.Red[1]};
`

const TopDiv = styled.div`
  display: flex;
  gap: 100px;
`

const BoldText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${color.Black};
`

const Input = styled.input`
  width: 930px;
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

const TopInput = styled.input`
  width: 400px;
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
  row-gap: 10px;
`
export const ContentsInput = styled.textarea`
  width: 930px;
  height: 200px;
  border-radius: 10px;
  padding: 15px 20px;
  border: 1px solid #e1e2e3;
  color: #191c1b;
  display: flex;
  resize: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: ${color.Red[1]};
  color: ${color.White};
  font-size: 20px;
  font-weight: 600;
  width: 970px;
  height: 60px;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`

export default CreatePage;