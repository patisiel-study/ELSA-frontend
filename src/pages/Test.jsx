import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import { color } from "../color";

const Test = () => {
  const [hoveredButton, setHoveredButton] = useState("");
  const navigate = useNavigate();
  const handleDeveloperClick = () => {
    navigate("/aiTestIntro");
  };
  const handleUserClick = () => {
    navigate("/userTestIntro");
  };

  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>인공지능 윤리 검사</Title>
        <Content>
          <b>인공지능 윤리 검사</b>는 인공지능 시스템의 개발 및 활용 과정에서
          윤리적 기준이 충실히 준수되고 있는지를 평가하는 신뢰성 있는
          검사입니다. 이를 통해 인공지능이 사회적 책임을 다하고, 인간의 가치와
          권리를 보호하는 방향으로 운용되고 있는지 확인할 수 있습니다.
        </Content>
      </Header>
      <BlueCurve />
      <TestMainContent>
        <ButtonContainer>
          <AIorUserButton
            onMouseEnter={() => setHoveredButton("developer")}
            onMouseLeave={() => setHoveredButton("")}
            onClick={handleDeveloperClick}
          >
            <ButtonIcon
              src={
                hoveredButton === "developer"
                  ? "../img/robotWhite.svg"
                  : "../img/robotPrimary.svg"
              }
              alt="로봇 아이콘"
              draggable="false"
            />
            <ButtonText>개발 윤리 검사</ButtonText>
          </AIorUserButton>

          <AIorUserButton
            onMouseEnter={() => setHoveredButton("user")}
            onMouseLeave={() => setHoveredButton("")}
            onClick={handleUserClick}
          >
            <ButtonIcon
              src={
                hoveredButton === "user"
                  ? "../img/humanWhite.svg"
                  : "../img/humanPrimary.svg"
              }
              alt="인간 아이콘"
              draggable="false"
            />
            <ButtonText>사용자 윤리 검사</ButtonText>
          </AIorUserButton>
        </ButtonContainer>
        <Explanation hoveredButton={hoveredButton}>
          {hoveredButton === "developer" && (
            <Content>
              <b>개발 윤리 검사</b>는 대화형 인공지능 시스템의 개발 과정에서
              개발자가 윤리적 기준을 철저히 반영하고 있는지 평가하는 신뢰성 있는
              검사입니다. 이를 통해 기술이 인간 중심의 가치와 책임을 충실히
              따르고 있음을 확인할 수 있습니다.
            </Content>
          )}
          {hoveredButton === "user" && (
            <Content>
              <b>사용자 윤리 검사</b>는 대화형 인공지능의 사용자가 윤리적
              관점에서 적절하게 시스템을 활용하고 있는지를 점검하는 검사입니다.
              사용자가 인공지능을 도덕적이고 책임감 있게 이용하고 있는지
              확인함으로써, 공정한 기술 사용 환경을 촉진합니다.
            </Content>
          )}
        </Explanation>
      </TestMainContent>
      <Footer />
    </HomepageLayout>
  );
};

export default Test;

const buttonHover = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const buttonShrink = keyframes`
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const TestMainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${color.primary};
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const ButtonIcon = styled.img`
  height: 5rem;
  width: 5rem;
  margin-top: 1rem;
`;

const ButtonText = styled.p`
  color: ${color.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const AIorUserButton = styled.button`
  height: 15rem;
  width: 20rem;
  margin: 2rem 3rem 4rem 3rem;
  background-color: white;
  border: none;
  border-radius: 3rem;

  &:hover {
    background-color: ${color.accent};
    cursor: pointer;
    animation: ${buttonHover} 0.3s forwards;

    ${ButtonText} {
      color: white;
    }
  }

  &:not(:hover) {
    animation: ${buttonShrink} 0.3s forwards;
  }
`;

const Explanation = styled.div`
  position: relative;
  height: 12rem;
  width: 46rem;
  margin: 2rem 0 4rem 0;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${({ hoveredButton }) =>
    hoveredButton ? "white" : "transparent"};
  border-radius: 3rem;
  animation: ${({ hoveredButton }) => (hoveredButton ? fadeIn : fadeOut)} 0.3s
    ease-in-out;
  transition: all 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: -6rem;
    left: ${({ hoveredButton }) =>
      hoveredButton === "developer"
        ? "22%"
        : hoveredButton === "user"
        ? "78%"
        : "50%"};
    transform: translateX(-50%);
    border-width: 3rem;
    border-style: solid;
    border-color: transparent transparent white transparent;
    display: ${({ hoveredButton }) => (hoveredButton ? "block" : "none")};
    animation: ${({ hoveredButton }) => (hoveredButton ? fadeIn : fadeOut)} 0.4s
      ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
