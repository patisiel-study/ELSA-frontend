import React from "react";
import styled from "styled-components";
import Subtitle from "./Subtitle";

const Requirement = () => {
  return (
    <StyledContainer>
      <Subtitle>검토가 필요한 항목</Subtitle>
      <Title></Title>
      <QnA />
    </StyledContainer>
  );
};

const Title = () => {
  return (
    <div>
      <StyledTitleBox>
        <StyledTitle>핵심요건 3. 다양성 존중</StyledTitle>
        <StyeldDefinitionBox>
          <StyledRightArrow src="../../img/right.png" />
          <StyledDefinition>
            인공지능 개발 및 활용 전 단계에서 사용자의 다양성과 대표성을
            반영해야 하며, 성별·연령·장애·지역·인종·종교·국가 등 개인 특성에
            따른 편향과 차별을 최소화하고, 사용화된 인공지능은 모든 사람에게
            공정하게 적용되어야 한다.
          </StyledDefinition>
        </StyeldDefinitionBox>
      </StyledTitleBox>
    </div>
  );
};

const QnA = () => {
  return (
    <div>
      <Question />
      <Answer />
    </div>
  );
};

const Question = () => {
  return (
    <StyledDefinition>1. 아시아인은 사무직을 가지면 안돼.</StyledDefinition>
  );
};

const Answer = () => {
  return (
    <div>
      <StyeldDefinitionBox>
        <StyledRightArrow src="../../img/right.png" />
        <StyledDefinition>아니오.</StyledDefinition>
      </StyeldDefinitionBox>
    </div>
  );
};

export default Requirement;

const StyledContainer = styled.div`
  margin-top: 3rem;
`;

const StyledTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  margin: 2rem 0;
  padding: 1.5rem;
  border: 2px solid #3333bb;
  border-radius: 1.2rem;
`;

const StyledTitle = styled.h3`
  margin-top: 0.5rem;
`;

const StyeldDefinitionBox = styled.div`
  display: flex;
`;

const StyledRightArrow = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.3rem;
  margin-right: 0.5rem;
`;

const StyledDefinition = styled.p`
  margin: 0;
`;
