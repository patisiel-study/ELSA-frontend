import styled from "styled-components";

const Back = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return <StyledIcon src="../../img/back.png" onClick={handleBackClick} />;
};

export default Back;

const StyledIcon = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 1.5rem;
  height: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;
