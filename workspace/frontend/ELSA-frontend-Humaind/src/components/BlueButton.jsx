import React from 'react';
import styled from 'styled-components';

const StyledBlueButton = styled.button`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  margin-top: 50px;
   margin-bottom: 30px; 
  background-color: #3333bb;
  color: white;
  font-size: 20px;
  font-weight:bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #6464d2;
  }
`;

// LongButton을 재사용 가능한 컴포넌트로
const BlueButton = ({ onClick, children }) => {
  return (
    <StyledBlueButton onClick={onClick}>
      {children}
    </StyledBlueButton>
  );
};

export default BlueButton;
