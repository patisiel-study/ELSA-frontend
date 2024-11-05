import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import ProjectTitle from "../components/ProjectTitle";
import styled from "styled-components";

const EvaluateEthics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 열림 상태를 관리하는 state
  const [visibleItems, setVisibleItems] = useState([]); // 보이는 아이템을 관리하는 state
  const numAndTextRefs = useRef([]); // 각 NumAndTextContainer의 ref를 저장

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // 사이드바 열림 상태를 토글
  };

  // 스크롤 이벤트를 감지하여 요소가 보이면 상태를 업데이트
  const handleScroll = () => {
    const visible = numAndTextRefs.current.map((ref) =>
      ref ? ref.getBoundingClientRect().top < window.innerHeight : false
    );
    setVisibleItems(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainContainer isOpen={isSidebarOpen ? 1 : 0}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ProjectTitle />
      <ImageContainer>
        <StyledImage src="../img/humanAndAI.png" />
        <TextContainer>
          <StyledH2>LLM의 윤리성을 평가하고 싶으신가요? </StyledH2>
          <StyledP>
            LLM의 윤리적 판단 능력을 평가하기 위해 다양한 질문을 제시하고,
            <br />그 답변을 분석하여 LLM의 윤리성을 종합적으로 판단하는 과정을
            진행합니다.
          </StyledP>
        </TextContainer>
      </ImageContainer>
      <br />
      <br />

      <TextContainer>
        <StyledP>평가는 다음과 같은 단계로 진행됩니다:</StyledP>
        {[
          "윤리성 질문 분석: 보편적 윤리관에 기반한 질문을 LLM에 제시합니다.",
          "답변 평가: 답변의 논리성, 일관성, 그리고 윤리적 기준 준수 여부를 세밀하게 분석합니다.",
          "결과 제공: 평가가 완료되면 LLM의 윤리성에 대한 평가 결과를 제공해드립니다.",
        ].map((text, index) => (
          <NumAndTextContainer
            key={index}
            ref={(el) => (numAndTextRefs.current[index] = el)} // ref 설정
            className={visibleItems[index] ? "visible" : ""} // 클래스 추가
          >
            <StyledNum>{index + 1}</StyledNum>
            <StyledP>{text}</StyledP>
          </NumAndTextContainer>
        ))}
        <br />
        <br />
        <br />
        <StyledP>
          API를 통해 쉽고 빠르게 LLM을 평가받을 수 있으며, 평가 완료 후에는
          상세한 결과 보고서를 받으실 수 있습니다.
          <br />
          LLM 윤리성 평가를 원하신다면, 지금 바로 저희에게 연락하세요!
          <br />
          Contact Information: realdeveloper@gmail.com
        </StyledP>
      </TextContainer>
    </MainContainer>
  );
};

export default EvaluateEthics;

// Styled Components
const MainContainer = styled.div.attrs((props) => ({
  style: {
    marginLeft: props.isOpen ? "350px" : "0", // isOpen prop으로 스타일만 제어
  },
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  transition: margin-left 0.3s ease;
`;

const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw; /* 화면 전체 너비 */
  box-sizing: border-box;
  background-color: #dddddd;
  margin-left: 0;
  margin-right: 0;
  padding: 3rem 6rem;
  display: flex;
`;

const StyledImage = styled.img`
  width: 30rem;
  height: auto;
  border-radius: 1rem;
  margin-right: 1.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
`;

const StyledH2 = styled.h2``;

const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2.5rem;
`;

const StyledNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  background-color: #3333dd;
  border-radius: 100%;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 2rem 1rem 0;
`;

const NumAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: 0; /* 초기 상태에서 숨김 */
  transform: translateY(20px); /* 아래로 이동 */
  transition: opacity 0.5s ease, transform 0.5s ease; /* 애니메이션 설정 */

  &.visible {
    opacity: 1; /* 보이게 설정 */
    transform: translateY(0); /* 원래 위치로 복귀 */
  }
`;
