import React from "react";
import styled from "styled-components";

const Checkbox = ({ standard, checked, onChange }) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckbox
        type="checkbox"
        id={standard}
        checked={checked}
        onChange={onChange}
      />
      <StyledLabel htmlFor={standard}>{standard}</StyledLabel>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const StyledCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  appearance: none;
  border: 2px solid #3333bb;
  border-radius: 0.1rem;

  &:hover {
    cursor: pointer;
  }

  &:checked {
    background-color: #3333bb;
    background-image: url("../../img/check.png");
    background-size: 100% 100%;
    background-position: 50%;
  }
`;

const StyledLabel = styled.label`
  margin-left: 0.4rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;
