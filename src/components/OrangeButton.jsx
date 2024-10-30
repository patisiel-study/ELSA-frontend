
import React from "react";
import styled, { keyframes } from "styled-components";
import { color } from "../color";

const OrangeButton = ({ href, children, width, height }) => {
  return (
    <StyledOrangeButton href={href} width={width} height={height}>
      {children}
    </StyledOrangeButton>
  );
};

export default OrangeButton;

const buttonHover = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const buttonShrink = keyframes`
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledOrangeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: ${({ height }) => height || 'min-content'};
  width: ${({ width }) => width || 'max-content'};
  padding: 1rem 4rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 2rem;
  background-color: ${color.accent};

  &:hover {
    color: ${color.black};
    background-color: white;
    box-shadow: inset 0 0 0.2rem rgba(200, 200, 200, 1);
    animation: ${buttonHover} 0.3s forwards;
  }

  &:not(:hover) {
    animation: ${buttonShrink} 0.3s forwards; /* hover에서 벗어나면 축소 애니메이션 */
  }
`;
