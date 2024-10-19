import React, { useState } from "react";
import axios from "axios";
import CareersAPI from "../apis/CareersAPI";
import CountriesAPI from "../apis/CountriesAPI";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import OrangeLinkButton from "../components/OrangeLinkButton";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const AITestInfo = () => {
  const [occupation, setOccupation] = useState("개발자");
  const [country, setCountry] = useState("대한민국");
  const [llmName, setLlmName] = useState("");

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleLlmNameChange = (e) => {
    setLlmName(e.target.value);
  };

  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>인공지능 개발 윤리 검사</Title>
        <Content>
          정보를 입력해주세요.
          <br />본 정보는 단순 통계 및 분석용으로 활용될 예정입니다.
        </Content>
      </Header>
      <Container>
        <FormContainer>
          <FormGroup>
            <Label>직업</Label>
            <Select value={occupation} onChange={handleOccupationChange}>
              <option value="개발자">개발자</option>
              <option value="디자이너">디자이너</option>
              <option value="데이터 과학자">데이터 과학자</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>국가</Label>
            <Select value={country} onChange={handleCountryChange}>
              <option value="대한민국">대한민국</option>
              <option value="미국">미국</option>
              <option value="일본">일본</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>LLM 이름</Label>
            <Input
              type="text"
              value={llmName}
              onChange={handleLlmNameChange}
              placeholder="LLM 이름을 입력하세요"
            />
          </FormGroup>
        </FormContainer>
        <OrangeLinkButton href={"/aiTestQuestion"}>다음</OrangeLinkButton>
      </Container>
      <Footer />
    </HomepageLayout>
  );
};

export default AITestInfo;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background-color: ${color.primary};
  border-radius: 3rem;
`;

const FormContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
`;
