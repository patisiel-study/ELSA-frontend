import React, { useState } from "react";
 import Sidebar from "../components/Sidebar";
 import styled from "styled-components";
 import BlueButton from "../components/BlueButton";
 import { Link } from "react-router-dom";

 
 const SelfDiagnosis = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };
   return (
    <MainContainer>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <StyledeLayout>
      <StyledTitle>Self-Diagnosis</StyledTitle>
      <Content>
        <p>
             <ReferenceSpan>이 질문지는 ‘과학기술정보통신부·정보통신정책연구원의 「2022 인공지능 윤리기준 실천을 위한 자율점검표(안)」’을 기준으로 구성되었습니다.</ReferenceSpan> 
        </p>

        <h2>인공지능 윤리기준 실천을 위한 자율점검표(안)</h2>

        <h3>1. 점검 목적</h3>

        <p>
            윤리기준 자율점검표의 목적은 인공지능시스템의 개발·운영 과정에서 국가 「인공지능(AI) 윤리기준」이 
            제시한 3대 기본원칙을 구현하기 위한 10대 핵심요건을 실천하기 위함입니다.
        </p>
            
        <h3>2. 권장 대상</h3>
        
        <p>
            윤리기준 자율점검표의 권장 대상은 인공지능시스템의 개발·운영에 필요한 의사결정을 수행하는 개인과 조직입니다.
             공공과 민간부문의 구분 없이 인공지능시스템의 개발·운영의 목적과 절차를 수립하고 규정을 정하는 개인이나 조직이 본 자율점검표의 점검문항을 참조하여 인공지능 윤리기준을 실천할 수 있는 내부지침을 별도로 마련하거나 내부 규정에 반영할 수 있습니다. 
             인공지능시스템을 설계·제작하고, 데이터와 알고리즘을 통해 인공지능시스템을 구현하고, 인공지능시스템을 유지·관리하는 구성원이나 집단이 업무를 수행하는 과정에서 자율점검표가 반영된 내부지침을 따름으로써 「인공지능(AI) 윤리기준」의 핵심요건을 현장에서 실천할 수 있습니다.
        </p>
        <h3>3. 구성</h3>
        <p> 본 자율점검표는 인공지능 윤리기준의 10대 핵심요건별로 v35개의 점검항목을 제시합니다.</p>
        <ChartImg src="img/SelfDiagnosis-chart.png" alt="점검항목 표"/> 

        <Link to="/selfDiagnosisQuestion">
        <BlueButton>START</BlueButton>
        </Link>

        </Content>
      </StyledeLayout>
      
    </MainContainer>
   )
 }
 export default SelfDiagnosis

 const MainContainer = styled.div`
 display: flex;
 overflow: auto;
 margin-left: ${({ isSidebarOpen }) =>
   isSidebarOpen
     ? "350px"
     : "0"}; 
 transition: margin-left 0.3s ease;
`;
const StyledTitle = styled.h2` 
 text-align: center; 
 padding-top:30px;
 padding-bottom: 30px;
 width: 100%; 
`;

const StyledeLayout = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  height: 100vh; 
  margin-bottom:250px;
`;

const Content = styled.div`
  border: 2px solid #3333BB;
  border-radius:5px;
  padding:30px;
  width :55%;
`;

const ChartImg = styled.img`
  width:100%;
`;

const ReferenceSpan = styled.span`
  font-weight:bold;
`;