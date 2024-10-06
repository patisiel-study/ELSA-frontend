import React, { useState, useEffect } from "react";
import ProjectTitle from "../components/ProjectTitle";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import BlueButton from "../components/BlueButton";
import { LLMScoreAPI } from "../apis/LLMScoreAPI";

const Main = () => {
  const [selectedLLM, setSelectedLLM] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 열림 상태를 관리하는 state
  const [LLMScore, setLLMScore] = useState(null);

  const handleClick = (imageName) => {
    switch (imageName) {
      case "GPT3.5":
        setSelectedLLM("GPT_3_5");
        break;
      case "GPT4":
        setSelectedLLM("GPT_4");
        break;
      case "GPT4o":
        setSelectedLLM("GPT_4o");
        break;
      case "Gemini":
        setSelectedLLM("GEMINI");
        break;
      default:
        console.log("정의되지 않은 값입니다.");
    }
  };

  const handleMouseEnter = (imageName) => {
    setHoveredImage(imageName);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // 사이드바 열림 상태를 토글
  };

  // 데이터 가져오기 함수
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

  // 로컬 스토리지에서 데이터 가져오기 또는 API 호출
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

  return (
    <MainContainer isOpen={isSidebarOpen ? 1 : 0}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Content>
        <ProjectTitle />
        <LLMButtonContainer>
          <ImageContainer
            onMouseEnter={() => handleMouseEnter("GPT3.5")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("GPT3.5")}
          >
            <StyledImage
              src="../img/ChatGpt-Img.png"
              alt="ChatGPT Logo"
              draggable="false"
            />
            {(selectedLLM === "GPT_3_5" || hoveredImage === "GPT3.5") && (
              <OverlayText>GPT3.5</OverlayText>
            )}
          </ImageContainer>

          <ImageContainer
            onMouseEnter={() => handleMouseEnter("GPT4")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("GPT4")}
          >
            <StyledImage
              src="../img/ChatGpt-Img.png"
              alt="ChatGPT Logo"
              draggable="false"
            />
            {(selectedLLM === "GPT_4" || hoveredImage === "GPT4") && (
              <OverlayText>GPT4</OverlayText>
            )}
          </ImageContainer>

          <ImageContainer
            onMouseEnter={() => handleMouseEnter("GPT4o")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("GPT4o")}
          >
            <StyledImage
              src="../img/ChatGpt-Img.png"
              alt="ChatGPT Logo"
              draggable="false"
            />
            {(selectedLLM === "GPT_4o" || hoveredImage === "GPT4o") && (
              <OverlayText>GPT4o</OverlayText>
            )}
          </ImageContainer>

          {/* <ImageContainer
            onMouseEnter={() => handleMouseEnter("Gemini")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("Gemini")}
          >
            <StyledImage
              src="../img/Gemini-Img.png"
              alt="Gemini Logo"
              draggable="false"
            />
            {hoveredImage === "Gemini" && <OverlayText>Gemini</OverlayText>}
          </ImageContainer> */}
        </LLMButtonContainer>

        {selectedLLM && LLMScore && (
          <Dashboard
            selectedLLM={selectedLLM}
            llmScore={LLMScore[selectedLLM]}
          />
        )}

        <Link to="/evaluateEthics">
          <BlueButton>Evaluating Your LLM Ethics</BlueButton>
        </Link>

        <Link to="/selfDiagnosis">
          <BlueButton>Self-Diagnosis</BlueButton>
        </Link>
      </Content>
    </MainContainer>
  );
};

const MainContainer = styled.div.attrs((props) => ({
  style: {
    marginLeft: props.isOpen ? "350px" : "0", // isOpen prop으로 스타일만 제어
  },
}))`
  display: flex;
  overflow: auto;
  transition: margin-left 0.3s ease;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const LLMButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 70px;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* 마우스를 올렸을 때 이미지 확대 */
  }
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  pointer-events: none; /* 텍스트가 클릭되지 않도록 설정 */
  font-size: 14px;
`;

export default Main;
