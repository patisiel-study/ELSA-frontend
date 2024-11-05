import React from 'react'
import Menu from "../components/Menu";
import HomepageLayout from "../components/HomepageLayout";
import Footer from "../components/Footer";
import styled from "styled-components";
import BlueCurve from "../components/BlueCurve";
import { color } from "../color";

const IntroductionStandard = () => {
  return (
    <HomepageLayout>
      <Menu />
      <WhiteContainerTop>
        <IntroductionTitle>윤리 기준 소개</IntroductionTitle>
        <IntroductionText>
            HUMAIND의 인공지능 윤리 평가 시스템의 질문지는 과학기술 정보 통신부에서 발표한 10대 인공지능 윤리평가 기준안의 내용을 바탕으로 구성되었습니다.
        </IntroductionText>
      </WhiteContainerTop>
      <BlueCurve />
      <BlueContainer>
        <StandardSection>
        <StandardTitle>10대 인공지능 윤리평가 기준</StandardTitle>
        <StandardImg src='img/StandardImg.png' alt='인공지능 윤리기준 이미지'></StandardImg>
        </StandardSection>
      </BlueContainer>
      <Footer />
    </HomepageLayout>
  );
};

const BlueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: ${color.primary};
`;
const StandardTitle = styled.h1`
    color:white;
    margin-top: 30px;
`;

const WhiteContainerTop = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 250px;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100%;
`;

const IntroductionText = styled.div`

`;

const StandardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IntroductionTitle = styled.h1`
    
`;

const StandardImg = styled.img`
    width:50%;
    margin-top:50px;
`;

export default IntroductionStandard