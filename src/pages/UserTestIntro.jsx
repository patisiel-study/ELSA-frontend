import React from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import OrangeLinkButton from "../components/OrangeLinkButton";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const UserTestIntro = () => {
  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>인공지능 개발 윤리 검사</Title>
        <Content>
          본 검사는 인공지능 사용자로서, 현재 사용 중인 인공지능이 윤리적 기준을
          얼마나 잘 준수하고 있는지를 평가하는 검사입니다.
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
          <ChecklistTitle>2. 권장 대상 </ChecklistTitle>
          <ChecklistContent>
            이 글은 인공지능시스템을 사용하는 개인과 조직을 대상으로 합니다.
            공공과 민간부문을 불문하고, 인공지능시스템을 사용하는 목적과 절차를
            이해하고 윤리적인 사용 기준을 마련하고자 하는 개인이나 조직은 이
            자율점검표의 문항을 참조하여 내부지침을 만들거나 내부 규정에 반영할
            수 있습니다. 인공지능시스템을 사용하여 업무를 수행하는 개인이나
            집단은 이 자율점검표에 포함된 윤리적 지침을 따름으로써
            「인공지능(AI) 윤리기준」의 핵심요건을 실천할 수 있습니다.
          </ChecklistContent>
          <ChecklistTitle>3. 구성 </ChecklistTitle>
          <ChecklistContent>
            챗봇 분야 인공지능 윤리기준 자율점검표는 기존 「인공지능(AI)
            윤리기준 실천을 위한 자율점검표(안)」의 점검 문항 중, 특히 챗봇
            분야에서 강조되어야 하는 문항을 선별·가공하고, 새롭게 쟁점이 되는
            윤리 이슈에 대응하기 위한 문항을 신설하는 방식으로 구성하였습니다.
            본 자율 점검표는 인공지능 윤리기준의 10대 핵심요건별로 27개의
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
              <TableData>4</TableData>
              <TableData>4</TableData>
              <TableData>4</TableData>
              <TableData>5</TableData>
              <TableData>2</TableData>
              <TableData>1</TableData>
              <TableData>2</TableData>
              <TableData>1</TableData>
              <TableData>2</TableData>
              <TableData>2</TableData>
            </TableRow>
          </Table>
        </ChecklistContainer>
        <OrangeLinkButton href="#">테스트 시작하기</OrangeLinkButton>
      </TestMainContent>
      <Footer />
    </HomepageLayout>
  );
};

export default UserTestIntro;

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
