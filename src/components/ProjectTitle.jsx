import styled from "styled-components";

const ProjectTitle = () => {
  return (
    <StyledProjectTitle>
      Artificial Intelligence Ethics Evaluation System
    </StyledProjectTitle>
  );
};

export default ProjectTitle;

const StyledProjectTitle = styled.h1`
  text-align: center; 
  padding-top:30px;
  padding-bottom: 70px;
  width: 100%; 
`;
const Content = styled.div`
  flex: 1;
  padding: 20px;
`;
