import React from "react";
import styled from "styled-components";

const HomepageLayout = ({ children }) => {
  return <StyledHomepageLayout>{children}</StyledHomepageLayout>;
};

export default HomepageLayout;

const StyledHomepageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
