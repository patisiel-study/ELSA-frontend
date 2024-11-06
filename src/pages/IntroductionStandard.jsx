import React from "react";
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
          HUMAIND의 인공지능 윤리 평가 시스템은 대한민국 과학기술정보통신부에서
          발표한 인공지능 윤리 기준을 근간으로, 안전하고 공정한 인공지능 기술
          사용을 촉진하기 위해 개발되었습니다.
          <br />
          저희 시스템은 3대 원칙과 10대 요건을 중심으로, 기술 발전과 윤리적 책임
          간의 균형을 유지하며 사회에 긍정적인 영향을 미칠 수 있도록
          설계되었습니다.
        </IntroductionText>
      </WhiteContainerTop>
      <BlueCurve />
      <BlueContainer>
        <StandardSection>
          <StandardTitle>3대 기본 원칙과 10대 핵심요건</StandardTitle>
          <StandardImg
            src="img/StandardImg.png"
            alt="인공지능 윤리기준 이미지"
          ></StandardImg>
          <StandardContent>
          <h2>3대 기본원칙</h2>

              인간 존엄성 원칙:<br/>
              인공지능 기술은 인간의 가치를 존중하고 인간을 중심으로 설계되어야 합니다.<br/>
              인간의 권리와 자유를 보호하고, 기술이 인간을 위한 도구로서 작동해야 함을 강조합니다.<br/><br/>

              사회적 공공선 원칙:<br/>
              인공지능은 사회적 공익을 고려하여 공정하고 투명하게 운영되어야 합니다.<br/>
              이를 통해 사회의 모든 구성원이 인공지능 기술의 혜택을 공평하게 누릴 수 있도록 합니다.<br/><br/>

              기술의 합목적성 원칙:<br/>
              인공지능 기술은 그 목적에 맞게 사용되어야 하며, 오용되거나 인간을 해치는 방식으로 사용되어서는 안 됩니다.<br/><br/><br/>

              <h2>10대 핵심요건</h2>

              투명성:<br/>
              인공지능의 운영 방식과 의사결정 과정이 설명 가능해야 하며, 사용자가 이해할 수 있도록 사전 고지가 필요합니다.<br/><br/>

              인권보장:<br/>
              인공지능은 인간의 권리와 자유를 보장해야 하며, 사람을 중심으로 한 서비스가 제공되어야 합니다.<br/><br/>

              프라이버시 보호:<br/>
              인공지능은 사생활을 보호하고, 개인 정보가 오용되지 않도록 철저히 관리되어야 합니다.<br/><br/>

              다양성 존중:<br/>
              인공지능 기술은 접근성을 보장하고, 비차별성과 평등을 지향해야 합니다.<br/><br/>

              책임성:<br/>
              인공지능의 사용에 있어 책임의 주체를 명확히 하고, 주체는 책임을 다해야 합니다.<br/><br/>

              안전성:<br/>
              인공지능 시스템은 잠재적 위험을 방지할 수 있도록 설계되고, 사용자 안전을 보장해야 합니다.<br/><br/>

              데이터 관리:<br/>
              인공지능에 사용되는 데이터는 목적 외 사용이 금지되며, 최소한의 데이터만 활용하여 품질과 안전을 유지해야 합니다.<br/><br/>

              연대성:<br/>
              인공지능 기술은 관련 이해관계자의 참여를 보장하고, 국제 사회와 협력하여 발전해야 합니다.<br/><br/>

              공공성:<br/>
              인공지능은 공공의 이익을 추구하고, 모든 인간이 공평하게 혜택을 누릴 수 있어야 합니다.<br/><br/>

              침해금지:<br/>
              인공지능은 인간에게 해를 끼치지 않도록 설계되어야 하며, 인간을 무해한 목적으로만 사용해야 합니다.<br/>
          </StandardContent>
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
  height: 2000px;
  background-color: ${color.primary};
`;
const StandardTitle = styled.h1`
  color: white;
  margin-top: 30px;
`;

const WhiteContainerTop = styled.div`
  display: flex;
  margin-top: 100px;
   margin-bottom: 100px;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 20%;
`;

const IntroductionText = styled.div``;

const StandardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IntroductionTitle = styled.h1``;

const StandardImg = styled.img`
  width: 50%;
  margin-top: 50px;
`;

const StandardContent = styled.div`
  color:white;
  margin-top:30px;
`;

export default IntroductionStandard;
