import React from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import OrangeLinkButton from "../components/OrangeLinkButton";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const AITestIntro = () => {
  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>인공지능 개발 윤리 검사</Title>
        <Content>
          본 검사는 인공지능 개발자로서, 현재 개발 중인 인공지능이 윤리적 기준을
          얼마나 잘 반영하고 있는지를 평가하는 검사입니다.
        </Content>
      </Header>
      <BlueCurve />
      <TestMainContent>
        <TestInformation>
          "이 질문지는 과학기술정보통신부와 정보통신정책연구원이 제정한 '2022
          인공지능 윤리기준 실천을 위한 자율점검표(안)'에 따라 구성되어, 개발
          중인 인공지능 시스템이 윤리적 기준을 충실히 따르고 있는지 점검할 수
          있는 신뢰할 수 있는 평가 기준을 제공합니다."
        </TestInformation>
        <ChecklistContainer>
          <ChecklistTitle>
            인공지능 윤리기준 실천을 위한 자율점검표(안)
          </ChecklistTitle>
          <ChecklistTitle>1. 점검 목적 윤리기준</ChecklistTitle>
          <ChecklistContent>
            자율점검표의 목적은 인공지능시스템의 개발·운영 과정에서 국가
            「인공지능(AI) 윤리기준」이 제시한 3대 기본원칙을 구현하기 위한 10대
            핵심요건을 실천하기 위함입니다.
          </ChecklistContent>
          <ChecklistTitle>2. 권장 대상 윤리기준 자율점검표의</ChecklistTitle>
          <ChecklistContent>
            권장 대상은 인공지능시스템의 개발·운영에 필요한 의사결정을 수행하는
            개인과 조직입니다. 공공과 민간부문의 구분 없이 인공지능시스템의
            개발·운영의 목적과 절차를 수립하고 규정을 정하는 개인이나 조직이 본
            자율점검표의 점검문항을 참조하여 인공지능 윤리기준을 실천할 수 있는
            내부지침을 별도로 마련하거나 내부 규정에 반영할 수 있습니다.
            인공지능시스템을 설계·제작하고, 데이터와 알고리즘을 통해
            인공지능시스템을 구현하고, 인공지능시스템을 유지·관리하는 구성원이나
            집단이 업무를 수행하는 과정에서 자율점검표가 반영된 내부지침을
            따름으로써 「인공지능(AI) 윤리기준」의 핵심요건을 현장에서 실천할 수
            있습니다.
          </ChecklistContent>
          <ChecklistTitle>3. 구성</ChecklistTitle>
          <ChecklistContent>
            본 자율점검표는 인공지능 윤리기준의 10대 핵심요건별로 35개의
            점검항목을 제시합니다.
          </ChecklistContent>

          <ChecklistTitle>인공지능 윤리기준 관련 점검항목 수</ChecklistTitle>
          <Table>
            <TableRow>
              <TableHeader>핵심요건</TableHeader>
              <TableHeader>인권보장</TableHeader>
              <TableHeader>프라이버시 보호</TableHeader>
              <TableHeader>다양성 존중</TableHeader>
              <TableHeader>침해금지</TableHeader>
              <TableHeader>공공성</TableHeader>
              <TableHeader>연대성</TableHeader>
              <TableHeader>데이터 관리</TableHeader>
              <TableHeader>책임성</TableHeader>
              <TableHeader>안전성</TableHeader>
              <TableHeader>투명성</TableHeader>
            </TableRow>
            <TableRow>
              <TableData>문항 수</TableData>
              <TableData>5</TableData>
              <TableData>2</TableData>
              <TableData>5</TableData>
              <TableData>4</TableData>
              <TableData>3</TableData>
              <TableData>3</TableData>
              <TableData>3</TableData>
              <TableData>4</TableData>
              <TableData>3</TableData>
              <TableData>3</TableData>
            </TableRow>
          </Table>
        </ChecklistContainer>
        <OrangeLinkButton href="/aiTestInfo">테스트 시작하기</OrangeLinkButton>
      </TestMainContent>
      <Footer />
    </HomepageLayout>
  );
};

export default AITestIntro;

const TestMainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  background-color: ${color.primary};
`;

const TestInformation = styled.p`
  width: 70%;
  color: white;
  margin-top: 0;
  font-size: 1.1rem;
  text-align: center;
`;

const ChecklistContainer = styled.div`
  width: 70%;
  padding: 3rem 4rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

const ChecklistTitle = styled.p`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const ChecklistContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  // 가로 너비에 따라 가로스크롤이 생기도록 함
  // 근데 왜 안 됨?
  //   overflow-x: auto;

  //   @media (max-width: 70vw) {
  //     display: block;
  //     overflow-x: auto;
  //     white-space: nowrap;
  //   }
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  border: 0.1rem solid #ddd;
  padding: 0.8rem;
  background-color: #f4f4f4;
  font-weight: bold;
  text-align: center;
  word-break: keep-all;
`;

const TableData = styled.td`
  background-color: white;
  border: 0.1rem solid #ddd;
  padding: 0.8rem;
  text-align: center;
`;
