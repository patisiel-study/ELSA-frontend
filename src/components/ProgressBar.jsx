import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ progress }) => {
  return (
    <ProgressContainer>
      <ProgressFiller style={{ width: `${progress}%` }} />
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  height: 10px;
  width: 60%;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-top: 20px;
`;

const ProgressFiller = styled.div`
  height: 100%;
  background-color: #FF8345;
  border-radius: inherit;
`;

export default ProgressBar;