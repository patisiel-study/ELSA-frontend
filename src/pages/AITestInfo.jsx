import React, { useState, useEffect } from "react";
import MemberInfoAPI from "../apis/MemberInfoAPI";
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
  const [career, setCareer] = useState("");
  const [country, setCountry] = useState("");
  const [llmName, setLlmName] = useState("이름 없음");
  const [careersList, setCareersList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [error, setError] = useState("");

  const fetchMemberInfo = async () => {
    try {
      const AT = localStorage.getItem("accessToken");
      const response = await MemberInfoAPI(AT);
      console.log(response.data);
      setCareer(response.data.career);
      setCountry(response.data.country);
    } catch (error) {
      console.error("회원 정보를 가져오는 중 오류가 발생했습니다.", error);
      throw error;
    }
  };

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
    const AT = localStorage.getItem("accessToken");
    if (AT) {
      fetchMemberInfo();
    } else {
      fetchData();
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (career === "" || country === "") {
      setError("직업과 국가를 선택해주세요.");
      return;
    }

    localStorage.setItem(
      "dignosisInfo",
      JSON.stringify({ career, country, llmName })
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
            {!localStorage.getItem("accessToken") && (
              <>
                <Dropdown
                  label="직업"
                  value={career}
                  onChange={setCareer}
                  options={careersList}
                />
                <Dropdown
                  label="국가"
                  value={country}
                  onChange={setCountry}
                  options={countriesList}
                />
              </>
            )}
            <FormGroup>
              <Label>LLM 이름</Label>
              <Input
                type="text"
                value={llmName}
                onChange={(e) => setLlmName(e.target.value)}
                placeholder="LLM 이름을 입력하세요"
              />
            </FormGroup>
            <br />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <OrangeButton type="submit" width={"100%"}>
              다음
            </OrangeButton>
          </form>
        </FormContainer>
        <IconContainer>
          <Circle1 />
          <Circle2 />
          <RobotIcon
            src="../img/robotWhite.svg"
            alt="로봇 아이콘"
            draggable="false"
          />
          <MagnifierIcon
            src="../img/magnifier.svg"
            alt="돋보기 아이콘"
            draggable="false"
          />
        </IconContainer>
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
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background-color: ${color.primary};
  border-radius: 3rem;
`;

const IconContainer = styled.div`
  position: relative;
  width: 40%;
`;

const Circle1 = styled.div`
  position: absolute;
  top: -6rem;
  left: 7rem;
  width: 9rem;
  height: 9rem;
  background-color: ${color.accent};
  border-radius: 100%;
`;

const Circle2 = styled.div`
  position: absolute;
  top: 2rem;
  left: 5.5rem;
  width: 6rem;
  height: 6rem;
  background-color: #2acad3;
  border-radius: 100%;
`;

const RobotIcon = styled.img`
  position: absolute;
  top: -6rem;
  left: -2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 12rem;
`;

const MagnifierIcon = styled.img`
  position: absolute;
  top: 1rem;
  left: 11.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
`;

const FormContainer = styled.div`
  padding: 2rem;
  margin-left: 5rem;
  max-width: 20rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
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
