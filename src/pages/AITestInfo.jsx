import React, { useState, useEffect } from "react";
import CareersAPI from "../apis/CareersAPI";
import CountriesAPI from "../apis/CountriesAPI";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import OrangeButton from "../components/OrangeButton";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const AITestInfo = () => {
  const [carrer, setCarrer] = useState("직업을 선택하세요");
  const [country, setCountry] = useState("국가를 선택하세요");
  const [llmName, setLlmName] = useState("");
  const [careersList, setCareersList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const [careers, countries] = await Promise.all([
        CareersAPI(),
        CountriesAPI(),
      ]);
      setCareersList(careers.data.data);
      setCountriesList(countries.data.data);
    } catch (error) {
      console.error(
        "직업 및 국가 목록을 가져오는 중 오류가 발생했습니다.",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (carrer === "직업을 선택하세요" || country === "국가를 선택하세요") {
      setError("직업과 국가를 선택해주세요.");
      return;
    }

    localStorage.setItem(
      "dignosisInfo",
      JSON.stringify({ carrer, country, llmName })
    );

    window.location.href = "/aiTestQuestion";
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
          <form onSubmit={handleSubmit}>
            <Dropdown
              label="직업"
              value={carrer}
              onChange={setCarrer}
              options={careersList}
            />
            <Dropdown
              label="국가"
              value={country}
              onChange={setCountry}
              options={countriesList}
            />
            <FormGroup>
              <Label>LLM 이름</Label>
              <Input
                type="text"
                value={llmName}
                onChange={(e) => setLlmName(e.target.value)}
                placeholder="LLM 이름을 입력하세요"
              />
            </FormGroup>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <OrangeButton type="submit">다음</OrangeButton>
          </form>
        </FormContainer>
      </Container>
      <Footer />
    </HomepageLayout>
  );
};

const Dropdown = ({ label, value, onChange, options }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </FormGroup>
);

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
