import React, { useState } from "react";
import ProjectTitle from "../components/ProjectTitle";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";

const Result = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 열림 상태를 관리하는

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // 사이드바 열림 상태를 토글
  };

  return (
    <MainContainer isSidebarOpen={isSidebarOpen}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ProjectTitle />
      <Dashboard />
    </MainContainer>
  );
};

export default Result;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ isSidebarOpen }) =>
    isSidebarOpen
      ? "350px"
      : "0"}; /* 사이드바가 열리면 MainContainer가 오른쪽으로 이동 */
  transition: margin-left 0.3s ease;
`;
