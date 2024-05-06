import React from "react";
import styled from "styled-components";

const Input = ({ inputRef, id, width }) => {
  return (
    <StyledInputContainer width={width}>
      <StyledInput ref={inputRef} id={id} />
      <StyledPost type="image" src="../img/post.png" alt="제출" />
    </StyledInputContainer>
  );
};

export default Input;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width || "100%"};
  box-sizing: border-box;
  padding: 0.6rem 1.1rem;
  border: #3333bb solid 2px;
  border-radius: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const StyledPost = styled.input`
  width: 1.5rem;
`;
