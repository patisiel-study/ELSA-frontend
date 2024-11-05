import React from "react";
import Menu from "../components/Menu";
import HomepageLayout from "../components/HomepageLayout";
import Footer from "../components/Footer";
import styled from "styled-components";
import BlueCurve from "../components/BlueCurve";
import { color } from "../color";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";

const IntroductionHumaind = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const developers = [
    { name: "Dana", role: "Design & FE", avatar: "/img/Kim.png" },
    { name: "Sophia", role: "Design & FE", avatar: "/img/Oh.png" },
    { name: "Lisa", role: "BE", avatar: "/img/Nam.png" },
    { name: "James", role: "BE & ML", avatar: "/img/Min.png" },
    { name: "Choi", role: "PM", avatar: "/img/choi.png" },
  ];

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 100) {
        controls.start("visible");
      }
    });

    return () => unsubscribe();
  }, [controls, scrollY]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <HomepageLayout>
      <Menu />
      <WhiteContainerTop>
        <IntroductionTitle>HUMAIND 소개</IntroductionTitle>
        <InnerContainer>
          안녕하세요, 저희는 팀 HUMAIND입니다. 
          <br/>
          <br/>
          HUMAIND는 인간(Human),
          인공지능(AI), 마음(mind)의 합성어로, 인간의 마음을 이해하고
          <br/>존중하는 인간 친화적 인공지능의 개발을 목표로 합니다.
          <br/>
          <br/>
           현재 인공지능 기술이 빠르게 발전하면서 윤리적 AI에 대한 사회적 요구가 높아지고 있는 가운데, 
          <br/>인공지능이 사회적 가치와 기술 발전 사이에서 균형을
          유지하며 책임 있게 사용될 수 있도록 노력하고 있습니다. 
          <br/>
          <br/>
          HUMAIND는 이러한 비전을 실현하기 위해 인공지능 윤리 평가 시스템을 개발하고 있으며, 
          <br/>이를 통해 윤리적인 AI 사용을 보장하고 지속 가능한 기술 발전을
          지원하는 데 기여하고자 합니다.
          <RightContainer>
            <HUMAINDLogoImg
              src="img/HUMAIND-Logo.png"
              alt="휴마인드 로고"
            ></HUMAINDLogoImg>
          </RightContainer>
        </InnerContainer>
      </WhiteContainerTop>
      <BlueCurve />
      <BlueContainer>
        <DeveloperSection>
          <DeveloperSectionTitle>개발자 소개</DeveloperSectionTitle>
          <DeveloperCardsContainer>
            {developers.map((dev, index) => (
              <DeveloperCard
                key={dev.name}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <Avatar src={dev.avatar} alt={dev.name} />
                <DeveloperName>{dev.name}</DeveloperName>
                <DeveloperRole>{dev.role}</DeveloperRole>
              </DeveloperCard>
            ))}
          </DeveloperCardsContainer>
        </DeveloperSection>
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
  height: 600px;
  background-color: ${color.primary};
`;

const DeveloperSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right 50px;
  
`;

const WhiteContainerTop = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 350px;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 200px;
`;
const IntroductionTitle = styled.h1`
  margin-top: 250px;
`;

const DeveloperSectionTitle = styled.h1`
  margin-bottom: 50px;
  color: white;
`;

const DeveloperCardsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const DeveloperCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 20px;
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 1px solid gray;
`;

const DeveloperName = styled.h3`
  margin-top: 10px;
`;

const DeveloperRole = styled.p`
  font-size: 0.9rem;
`

const HUMAINDLogoImg = styled.img`
  width: 320px;
`;

export default IntroductionHumaind;
