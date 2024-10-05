import React, { useState } from "react";
import ProjectTitle from "../components/ProjectTitle";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import BlueButton from "../components/BlueButton";

const Main = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 열림 상태를 관리하는 state

  const handleClick = (imageName) => {
    setSelectedImage(imageName);
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

  return (
    <MainContainer isOpen={isSidebarOpen ? 1 : 0}>  {/* 숫자로 전달 */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Content>
        <ProjectTitle />
        <LLMButtonContainer>
          <ImageContainer
            onMouseEnter={() => handleMouseEnter("ChatGPT")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("ChatGPT")}
          >
            <StyledImage
              src="../img/ChatGpt-Img.png"
              alt="ChatGPT Logo"
              draggable="false"
            />
            {hoveredImage === "ChatGPT" && <OverlayText>ChatGPT</OverlayText>}
          </ImageContainer>

          <ImageContainer
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
          </ImageContainer>

          <ImageContainer
            onMouseEnter={() => handleMouseEnter("Pi")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("Pi")}
          >
            <StyledImage
              src="../img/Pi-Img.png"
              alt="Pi Logo"
              draggable="false"
            />
            {hoveredImage === "Pi" && <OverlayText>Pi</OverlayText>}
          </ImageContainer>

          <ImageContainer
            onMouseEnter={() => handleMouseEnter("LLaMA")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("LLaMA")}
          >
            <StyledImage
              src="../img/LLaMA-Img.png"
              alt="LLaMA Logo"
              draggable="false"
            />
            {hoveredImage === "LLaMA" && <OverlayText>LLaMA</OverlayText>}
          </ImageContainer>
        </LLMButtonContainer>

        {selectedImage && <Dashboard imageName={selectedImage} />}

        <Link to="/result">
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

const BlueButtonContainer = styled.div`
  margin-top: 150px;
`;

export default Main;
