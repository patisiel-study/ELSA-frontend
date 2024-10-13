import React from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const Test = () => {
  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>AI 윤리 검사</Title>
        <Content>AI 윤리 검사 설명~~~</Content>
      </Header>
      <BlueCurve />
      <TestMainContent></TestMainContent>
      <Footer />
    </HomepageLayout>
  );
};

export default Test;

const TestMainContent = styled.main`
  height: 50rem;
  width: 100%;
  background-color: ${color.primary};
`;

const AIorUserButton = styled.button``;
