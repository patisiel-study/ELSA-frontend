import React from "react";
import Menu from "../components/Menu";
import HomepageLayout from "../components/HomepageLayout";
import { Header, Title, Content } from "../components/Header";
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
    { name: "Anna", role: "BE", avatar: "/img/Nam.png" },
    { name: "James", role: "BE & ML", avatar: "/img/Min.png" },
    { name: "Mary", role: "PM", avatar: "/img/choi.png" },
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
      <Header>
        <Title>HUMAIND 소개</Title>
        <InnerContainer>
          <IntoroductionText>
            안녕하세요, 저희는 팀 HUMAIND입니다.
            <br />
            HUMAIND는<strong> 인간(Human), 인공지능(AI), 마음(mind) </strong>의
            합성어로, 인간의 마음을 이해하고
            <br />
            존중하는 인간 친화적 인공지능의 개발을 목표로 합니다.
            <br />
            <br />
            현재 인공지능 기술이 빠르게 발전하면서 윤리적 AI에 대한 사회적
            요구가 높아지고 있는 가운데,
            <br />
            인공지능이 사회적 가치와 기술 발전 사이에서 균형을 유지하며 책임
            있게 사용될 수 있도록 노력하고 있습니다.
            <br />
            <br />
            HUMAIND는 이러한 비전을 실현하기 위해 인공지능 윤리 평가 시스템을
            개발하고 있으며,
            <br />
            이를 통해 윤리적인 AI 사용을 보장하고 지속 가능한 기술 발전을
            지원하는 데 기여하고자 합니다.
          </IntoroductionText>
          <HUMAINDLogoImg src="img/HUMAIND-Logo.png" alt="휴마인드 로고" />
        </InnerContainer>
      </Header>
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
  margin-bottom: 3rem;
`;

const IntoroductionText = styled.div`
  line-height: 1.6;
`;

const HUMAINDLogoImg = styled.img`
  width: 15rem;
  margin-left: 8rem;
`;

const DeveloperSectionTitle = styled.h1`
  color: white;
`;

const DeveloperCardsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 70%;
  margin-bottom: 2rem;
`;

const DeveloperCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 1rem auto;
`;

const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 1px solid gray;
`;

const DeveloperName = styled.h3``;

const DeveloperRole = styled.p`
  margin: 0;
`;

export default IntroductionHumaind;
