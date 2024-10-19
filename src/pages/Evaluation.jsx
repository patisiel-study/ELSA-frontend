import React, { useState, useEffect, useRef } from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import BlueCurve from "../components/BlueCurve";
import OrangeLinkButton from "../components/OrangeLinkButton";
import Footer from "../components/Footer";
import styled from "styled-components";
import { color } from "../color";

const Evaluation = () => {
  const numAndTextRefs = useRef([]); // 각 NumAndTextContainer의 ref를 저장
  const [visibleItems, setVisibleItems] = useState([]); // 보이는 아이템을 관리하는 state

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
    <HomepageLayout>
      <Header>
        <Title>인공지능 윤리 평가</Title>
      </Header>
      <Menu />
      <BlueCurve />
      <BlueContainer>
        <InnerContainer>
          <LeftContainer>
            <TextWhite>LLM의 윤리성을 평가하고 싶으신가요?</TextWhite>
            <TextWhite>
              LLM의 윤리적 판단능력을 평가하기 위해 다양한 질문을 제시하고, 그
              답변을 분석하여 LLM의 윤리성을 종합적으로 판단하는 과정을
              진행합니다.
            </TextWhite>
            <OrangeLinkButton href={"#"}>평가하기</OrangeLinkButton>
          </LeftContainer>
        </InnerContainer>
      </BlueContainer>
      <BlueCurveReverse />
      <WhiteContainer>
        <InnerContainer>
          <TextBlack>
            인공지능 윤리 평가는 다음과 같은 단계로 진행됩니다.
          </TextBlack>
          {[
            "윤리성 질문 분석: 보편적 윤리관에 기반한 질문을 LLM에 제시합니다.",
            "답변 평가: 답변의 논리성, 일관성, 그리고 윤리적 기준 준수 여부를 세밀하게 분석합니다.",
            "결과 제공: 평가가 완료되면 LLM의 윤리성에 대한 평가 결과를 제공해드립니다.",
          ].map((text, index) => (
            <NumAndText
              key={index}
              ref={(el) => (numAndTextRefs.current[index] = el)}
              className={visibleItems[index] ? "visible" : ""}
            >
              <Num>{index + 1}</Num>
              <TextBlack>{text}</TextBlack>
            </NumAndText>
          ))}
        </InnerContainer>
      </WhiteContainer>
      <BlueCurve />
      <BlueContainer>
        <InnerContainer>
          <LeftContainer>
            <TextWhite>
              Humaind 만의 평가 시스템에서 평가를 완료 하신다면 상세한 결과
              보고서와 인증서를 받아 보실 수 있습니다.
            </TextWhite>
            <OrangeLinkButton href={"#"}>문의하기</OrangeLinkButton>
          </LeftContainer>
        </InnerContainer>
      </BlueContainer>
      <Footer />
    </HomepageLayout>
  );
};

export default Evaluation;

const BlueCurveReverse = styled.div`
  height: 2rem;
  width: 100%;
  border-radius: 0 0 50% 50%;
  background-color: ${color.primary};
`;

const BlueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background-color: ${color.primary};
`;

const InnerContainer = styled.div`
  width: 70%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

const TextWhite = styled.p`
  width: 100%;
  margin: 0 0 2rem 0;
  color: white;
  font-size: 1.1rem;
`;

const WhiteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

const TextBlack = styled.p`
  font-size: 1.1rem;
`;

const NumAndText = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Num = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin: 1rem 2rem 1rem 0;
  background-color: ${color.primary};
  border-radius: 100%;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;
