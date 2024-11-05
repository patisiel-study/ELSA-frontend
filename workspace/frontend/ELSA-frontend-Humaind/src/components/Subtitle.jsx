import styled from "styled-components";

const Subtitle = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
};

export default Subtitle;

const StyledSubtitle = styled.h2``;
