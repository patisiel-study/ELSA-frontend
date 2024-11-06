import React, { useState, useEffect } from "react";
import { AITestHistoryAPI, UserTestHistoryAPI } from "../apis/TestHistoryAPI";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const TestHistory = () => {
  const [activeTab, setActiveTab] = useState("developer");
  const [AITests, setAITests] = useState([]);
  const [UserTests, setUserTests] = useState([]);

  const fetchData = async () => {
    try {
      const AT = localStorage.getItem("accessToken");
      const [fetchedAITests, fetchedUserTests] = await Promise.all([
        AITestHistoryAPI(AT),
        UserTestHistoryAPI(AT),
      ]);
      setAITests(fetchedAITests);
      setUserTests(fetchedUserTests);
    } catch (error) {
      console.error(
        "자가진단 내역 목록을 가져오는 중 오류가 발생했습니다.",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>AI 윤리 검사 내역</Title>
      </Header>
      <BlueCurve />
      <BlueContainer>
        <Container>
          <TabContainer>
            <Tab
              active={activeTab === "developer"}
              onClick={() => handleTabClick("developer")}
            >
              개발 윤리 검사 내역
            </Tab>
            <Tab
              active={activeTab === "user"}
              onClick={() => handleTabClick("user")}
            >
              사용자 윤리 검사 내역
            </Tab>
          </TabContainer>

          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <Th>연번</Th>
                  <Th>모델 이름</Th>
                  <Th>시간</Th>
                  <Th>점수</Th>
                  <Th>결과보기</Th>
                </tr>
              </thead>
              <tbody>
                {(activeTab === "developer" ? AITests : UserTests).map(
                  (item, index) => (
                    <tr key={item.diagnosisId}>
                      <Td style={{ width: "10%" }}>{index + 1}</Td>
                      <Td style={{ width: "30%" }}>{item.llmName}</Td>
                      <Td style={{ width: "30%" }}>
                        {new Date(item.createdAt).toLocaleString()}
                      </Td>
                      <Td style={{ width: "20%" }}>
                        {item.totalScoreToString}
                      </Td>
                      <Td style={{ width: "10%" }}>
                        <ResultButton
                          href={`/aiTestResult/${item.diagnosisId}`}
                        >
                          상세보기
                        </ResultButton>
                      </Td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </TableContainer>
        </Container>
      </BlueContainer>
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

const Container = styled.div`
  width: 70%;
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => (props.active ? color.black : "white")};
  background-color: ${(props) => (props.active ? "white" : color.accent)};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
    color: ${color.black};
  }
`;

const TableContainer = styled.div`
  width: 100%;
  padding: 1rem 3rem 2rem 3rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 0 0 1rem 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const Th = styled.th`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  text-align: center;
`;

const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const ResultButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: min-content;
  padding: 0.5rem 1.5rem;
  color: white;
  white-space: nowrap;
  border-radius: 2rem;
  background-color: ${color.accent};

  &: hover {
    cursor: pointer;
    color: ${color.black};
    background-color: white;
    box-shadow: inset 0 0 0.2rem rgba(200, 200, 200, 1);
  }
`;
