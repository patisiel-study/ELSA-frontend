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
        <IntroductionTitle>HUMAIND</IntroductionTitle>
        <InnerContainer>
          안녕하세요. 저희는 팀 HUMAIND 입니다. <br />
          <br />
          HUMAIND의 의미는 Human + AI + mind의 합성어로서, 인간의 마음을
          이해하는 인간 친화적인 인공지능의 <br/>개발을 기원한다는 의미로 내포하고
          있습니다.
          <br />
          <br />
          현재 인공지능이 발전함에 따라 윤리적인 인공지능의 필요성이 대두되고
          있는 현재의 시점에서 인공지능 기술의 윤리적 사용을 보장하고, 
          사회적 가치와 기술 발전 사이 균형을 모색하는 데 기여하는 것을 목표로
          인공지능 윤리평가 시스템을 제작하게 되었습니다.
          <RightContainer></RightContainer>
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
  width: 85%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

const WhiteContainerTop = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 250px;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 200px;
`;
const IntroductionTitle = styled.h1`
  margin-top: 200px;
`;

const DeveloperSectionTitle = styled.h1`
  margin-bottom: 50px;
  color:white;
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