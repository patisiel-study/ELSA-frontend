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
        <IntroductionTitle>소개</IntroductionTitle>
        <IntrotuctionContent>
          안녕하세요 저희는 팀 HUMAIND 입니다. <br />
          현재 인공지능이 발전함에 따라 윤리적인 인공지능의 필요성이 대두되고
          있는 현재의 시점에서 인공지능 기술의 윤리적 사용을 보장하고, <br />{" "}
          사회적 가치와 기술 발전 사이 균형을 모색하는 데 기여를 목표로 인공지능
          윤리평가 시스템을 제작하게 되었습니다.
        </IntrotuctionContent>
      </WhiteContainerTop>
      <BlueCurve />
      <BlueContainer>
        <InnerContainer>
          <LeftContainer>
            <TextWhite>
              <TextWhiteH1>HUMAIND</TextWhiteH1>
              HUMAIND 란 Human + AI + mind의 합성어로서, 인간의 마음을 이해하는
              인간 친화적인
              <br /> 인공지능의 개발을 기원한다는 의미로 내포하고 있습니다.
            </TextWhite>
          </LeftContainer>
        </InnerContainer>
      </BlueContainer>
      <BlueCurveReverse />
      <WhiteContainerBottom>
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
      </WhiteContainerBottom>
      <TextBlack></TextBlack>
      <Footer />
    </HomepageLayout>
  );
};

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
  padding: 2rem 0;
  background-color: ${color.primary};
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

const TextWhiteH1 = styled.h1``;

const TextWhite = styled.p`
  width: 100%;
  margin: 0 0 2rem 0;
  color: white;
  font-size: 1.1rem;
`;

const WhiteContainerTop = styled.div`
  display: flex;
  margin-bottom: 150px;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 200px;
`;

const WhiteContainerBottom = styled.div`
  display: flex;
  margin-bottom: 150px;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 550px;
`;

const TextBlack = styled.p`
  font-size: 1.1rem;
`;

const IntrotuctionContent = styled.p``;

const IntroductionTitle = styled.h1`
  margin-top: 200px;
`;

const DeveloperSectionTitle = styled.h1`
  magin-top: 100px;
  margin-bottom: 30px;
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
`;

export default IntroductionHumaind;
