import React from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import { color } from "../color";

const Test = () => {
  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>인공지능 윤리 검사</Title>
        <Content>인공지능 윤리 검사 설명~~~</Content>
      </Header>
      <BlueCurve />
      <TestMainContent>
        <ButtonContainer>
          <AIorUserButton>
            <ButtonText>개발 윤리 검사</ButtonText>
          </AIorUserButton>
          <AIorUserButton>
            <ButtonText>사용자 윤리 검사</ButtonText>
          </AIorUserButton>
        </ButtonContainer>
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

const ButtonText = styled.p`
  color: ${color.primary};
  font-size: 1.5rem;
  font-weight: 700;
`;

const AIorUserButton = styled.button`
  height: 15rem;
  width: 20rem;
  margin: 2rem 3rem;
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
    animation: ${buttonShrink} 0.3s forwards; /* hover에서 벗어나면 축소 애니메이션 */
  }
`;
