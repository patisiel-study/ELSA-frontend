import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import LLMScoreAPI from "../apis/LLMScoreAPI";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

// Chart.js 등록
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [LLMScore, setLLMScore] = useState(null);
  const [selectedLLM, setSelectedLLM] = useState(null); // 선택된 LLM 상태

  const fetchData = async () => {
    try {
      const response = await LLMScoreAPI();
      return response.data.data;
    } catch (error) {
      console.error(
        "LLM 점수 데이터를 가져오는 중 오류가 발생했습니다.",
        error
      );
      throw error;
    }
  };

  const getLLMScore = async () => {
    const localStorageData = localStorage.getItem("LLMScore");

    if (localStorageData) {
      console.log("로컬 스토리지에서 데이터를 가져왔습니다.");
      setLLMScore(JSON.parse(localStorageData));
    } else {
      try {
        const apiData = await fetchData();
        setLLMScore(apiData);
        localStorage.setItem("LLMScore", JSON.stringify(apiData));
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    }
  };

  useEffect(() => {
    getLLMScore();
  }, []);

  // LLM 데이터 선택 시 차트를 표시하는 함수
  const handleLLMClick = (llm) => {
    setSelectedLLM(LLMScore[llm]);
  };

  // 선택된 LLM 데이터를 차트 형식으로 변환하는 함수
  const getChartData = (llmData) => {
    if (!llmData) return null;

    const labels = Object.keys(llmData); // 항목 이름들
    const scores = labels.map((key) => llmData[key].score); // 점수들

    return {
      labels,
      datasets: [
        {
          label: "Score",
          data: scores,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>평가 데이터</Title>
        <Content>
          HUMAIND의 인공지능 윤리 평가를 거쳐간 LLM들의 점수 통계 분석
          데이터입니다.
        </Content>
      </Header>
      <BlueCurve />
      <MainContent>
        <DashboardContainer>
          <LLMs>
            <LLM onClick={() => handleLLMClick("GPT_3_5")}>
              <LLMLogo
                src="../img/logoChatGPT.svg"
                alt="ChatGPT Logo"
                draggable="false"
              />
              <LLMName>GPT-3.5</LLMName>
            </LLM>
            <LLM onClick={() => handleLLMClick("GPT_4")}>
              <LLMLogo
                src="../img/logoChatGPT.svg"
                alt="ChatGPT Logo"
                draggable="false"
              />
              <LLMName>GPT-4</LLMName>
            </LLM>
            <LLM onClick={() => handleLLMClick("GPT_4o")}>
              <LLMLogo
                src="../img/logoChatGPT.svg"
                alt="ChatGPT Logo"
                draggable="false"
              />
              <LLMName>GPT-4o</LLMName>
            </LLM>
            <LLM onClick={() => handleLLMClick("GEMINI")}>
              <LLMLogo
                src="../img/logoGemini.svg"
                alt="Gemini Logo"
                draggable="false"
              />
              <LLMName>Gemini</LLMName>
            </LLM>
          </LLMs>

          {/* 선택된 LLM의 데이터가 있으면 차트 표시 */}
          {selectedLLM && (
            <BarChartContainer>
              <Bar
                data={getChartData(selectedLLM)}
                options={{ responsive: true }}
              />
            </BarChartContainer>
          )}
        </DashboardContainer>
      </MainContent>
      <Footer />
    </HomepageLayout>
  );
};

export default Dashboard;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60rem;
  background-color: ${color.primary};
`;

const DashboardContainer = styled.div`
  width: 70%;
  height: auto;
  margin-top: 3rem;
  padding: 3rem 4rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 3rem;
`;

const LLMs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LLM = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const LLMLogo = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  border-radius: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1); /* 마우스를 올렸을 때 이미지 확대 */
  }
`;

const LLMName = styled.p`
  margin-top: 0;
`;

const BarChartContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
`;
