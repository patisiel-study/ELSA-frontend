import React from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import OrangeLinkButton from "../components/OrangeLinkButton";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const TestHistory = () => {
  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>AI 윤리 검사 내역</Title>
      </Header>
      <BlueCurve />
      <BlueContainer></BlueContainer>
      <Footer />
    </HomepageLayout>
  );
};

export default TestHistory;
const BlueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  background-color: ${color.primary};
`;
