import React from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import { Header, Title, Content } from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import BlueCurve from "../components/BlueCurve";
import { color } from "../color";

const IntroductionStandard = () => {
  return (
    <HomepageLayout>
      <Menu />
      <Header>
        <Title>윤리 기준 소개</Title>
        <Content>
          HUMAIND의 인공지능 윤리 평가 시스템은 대한민국 과학기술정보통신부에서
          발표한 사람이 중심이 되는 「인공지능(AI) 윤리기준」을 근간으로,
          안전하고 공정한 인공지능 기술 사용을 촉진하기 위해 개발되었으며,{" "}
          <b>3대 원칙과 10대 요건</b>을 중심으로, 기술 발전과 윤리적 책임 간의
          균형을 유지하며 사회에 긍정적인 영향을 미칠 수 있도록 설계되었습니다.
        </Content>
      </Header>
      <BlueCurve />
      <BlueContainer>
        <StandardSection>
          <StandardTitle>3대 기본 원칙과 10대 핵심요건</StandardTitle>
          <StandardImg
            src="img/StandardImg.png"
            alt="인공지능 윤리기준 이미지"
          />
          <StandardContent>
            <PrincipleSection>
              <h2>3대 기본원칙</h2>
              <Principle>
                <h3>① 인간 존엄성 원칙</h3>
                <ul>
                  <li>
                    인간은 신체와 이성이 있는 생명체로 인공지능을 포함하여
                    인간을 위해 개발된 기계제품과는 교환 불가능한 가치가 있다.
                  </li>
                  <li>
                    인공지능은 인간의 생명은 물론 정신적 및 신체적 건강에 해가
                    되지 않는 범위에서 개발 및 활용되어야 한다.
                  </li>
                  <li>
                    인공지능 개발 및 활용은 안전성과 견고성을 갖추어 인간에게
                    해가 되지 않도록 해야 한다.
                  </li>
                </ul>
              </Principle>
              <Principle>
                <h3>② 사회의 공공선 원칙</h3>
                <ul>
                  <li>
                    공동체로서 사회는 가능한 한 많은 사람의 안녕과 행복이라는
                    가치를 추구한다.
                  </li>
                  <li>
                    인공지능은 지능정보사회에서 소외되기 쉬운 사회적 약자와 취약
                    계층의 접근성을 보장하도록 개발 및 활용되어야 한다.
                  </li>
                  <li>
                    공익 증진을 위한 인공지능 개발 및 활용은 사회적, 국가적,
                    나아가 글로벌 관점에서 인류의 보편적 복지를 향상시킬 수
                    있어야 한다.
                  </li>
                </ul>
              </Principle>
              <Principle>
                <h3>③ 기술의 합목적성 원칙</h3>
                <ul>
                  <li>
                    인공지능 기술은 인류의 삶에 필요한 도구라는 목적과 의도에
                    부합되게 개발 및 활용되어야 하며 그 과정도 윤리적이어야
                    한다.
                  </li>
                  <li>
                    인류의 삶과 번영을 위한 인공지능 개발 및 활용을 장려하여
                    진흥해야 한다.
                  </li>
                </ul>
              </Principle>
            </PrincipleSection>

            <RequirementSection>
              <h2>10대 핵심요건</h2>
              <Requirement>
                <h3>① 인권보장</h3>
                <ul>
                  <li>
                    인공지능의 개발과 활용은 모든 인간에게 동등하게 부여된
                    권리를 존중하고, 다양한 민주적 가치와 국제 인권법 등에
                    명시된 권리를 보장하여야 한다.
                  </li>
                  <li>
                    인공지능의 개발과 활용은 인간의 권리와 자유를 침해해서는 안
                    된다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>② 프라이버시 보호</h3>
                <ul>
                  <li>
                    인공지능을 개발하고 활용하는 전 과정에서 개인의 프라이버시를
                    보호해야 한다.
                  </li>
                  <li>
                    인공지능 전 생애주기에 걸쳐 개인 정보의 오용을 최소화하도록
                    노력해야 한다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>③ 다양성 존중</h3>
                <ul>
                  <li>
                    인공지능 개발 및 활용 전 단계에서 사용자의 다양성과 대표성을
                    반영해야 하며, 성별·연령·장애·지역·인종·종교·국가 등 개인
                    특성에 따른 편향과 차별을 최소화하고, 상용화된 인공지능은
                    모든 사람에게 공정하게 적용되어야 한다.
                  </li>
                  <li>
                    사회적 약자 및 취약 계층의 인공지능 기술 및 서비스에 대한
                    접근성을 보장하고, 인공지능이 주는 혜택은 특정 집단이 아닌
                    모든 사람에게 골고루 분배되도록 노력해야 한다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>④ 침해금지</h3>
                <ul>
                  <li>
                    인공지능을 인간에게 직간접적인 해를 입히는 목적으로
                    활용해서는 안 된다.
                  </li>
                  <li>
                    인공지능이 야기할 수 있는 위험과 부정적 결과에 대응 방안을
                    마련하도록 노력해야 한다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>⑤ 공공성</h3>
                <ul>
                  <li>
                    인공지능은 개인적 행복 추구 뿐만 아니라 사회적 공공성 증진과
                    인류의 공동 이익을 위해 활용해야 한다.
                  </li>
                  <li>
                    인공지능은 긍정적 사회변화를 이끄는 방향으로 활용되어야
                    한다.
                  </li>
                  <li>
                    인공지능의 순기능을 극대화하고 역기능을 최소화하기 위한
                    교육을 다방면으로 시행하여야 한다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>⑥ 연대성</h3>
                <ul>
                  <li>
                    다양한 집단 간의 관계 연대성을 유지하고, 미래세대를 충분히
                    배려하여 인공지능을 활용해야 한다.
                  </li>
                  <li>
                    인공지능 전 주기에 걸쳐 다양한 주체들의 공정한 참여 기회를
                    보장하여야 한다.
                  </li>
                  <li>
                    윤리적 인공지능의 개발 및 활용에 국제사회가 협력하도록
                    노력해야 한다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>⑦ 데이터 관리</h3>
                <ul>
                  <li>
                    개인정보 등 각각의 데이터를 그 목적에 부합하도록 활용하고,
                    목적 외 용도로 활용하지 않아야 한다.
                  </li>
                  <li>
                    데이터 수집과 활용의 전 과정에서 데이터 편향성이
                    최소화되도록 데이터 품질과 위험을 관리해야 한다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>⑧ 책임성</h3>
                <ul>
                  <li>
                    인공지능 개발 및 활용과정에서 책임주체를 설정함으로써 발생할
                    수 있는 피해를 최소화하도록 노력해야 한다.
                  </li>
                  <li>
                    인공지능 설계 및 개발자, 서비스 제공자, 사용자 간의
                    책임소재를 명확히 해야 한다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>⑨ 안전성</h3>
                <ul>
                  <li>
                    인공지능 개발 및 활용 전 과정에 걸쳐 잠재적 위험을 방지하고
                    안전을 보장할 수 있도록 노력해야 한다.
                  </li>
                  <li>
                    인공지능 활용 과정에서 명백한 오류 또는 침해가 발생할 때
                    사용자가 그 작동을 제어할 수 있는 기능을 갖추도록 노력해야
                    한다.
                  </li>
                </ul>
              </Requirement>
              <Requirement>
                <h3>⑩ 투명성</h3>
                <ul>
                  <li>
                    사회적 신뢰 형성을 위해 타 원칙과의 상충관계를 고려하여
                    인공지능 활용 상황에 적합한 수준의 투명성과 설명 가능성을
                    높이려는 노력을 기울여야 한다.
                  </li>
                  <li>
                    인공지능기반 제품이나 서비스를 제공할 때 인공지능의 활용
                    내용과 활용 과정에서 발생할 수 있는 위험 등의 유의사항을
                    사전에 고지해야 한다.
                  </li>
                </ul>
              </Requirement>
            </RequirementSection>
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
  height: 100%;
  padding-top: 2rem;
  background-color: ${color.primary};
`;

const StandardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

const StandardImg = styled.img`
  width: 80%;
  margin: 1rem 0 2rem 0;
`;

const StandardTitle = styled.h2`
  color: white;
`;

const StandardContent = styled.div`
  color: white;
  line-height: 1.6;
`;

const PrincipleSection = styled.div`
  margin-bottom: 5rem;
`;

const Principle = styled.div`
  margin-bottom: 2rem;
`;

const RequirementSection = styled.div`
  margin-bottom: 5rem;
`;

const Requirement = styled.div`
  margin-bottom: 2rem;
`;

export default IntroductionStandard;
