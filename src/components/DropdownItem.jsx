import React from "react";
import styled from "styled-components";

const DropdownItem = ({ item, setDataset, setIsOpen, isOpen }) => {
  const handleDatasetItemClick = () => {
    setDataset(item);
    setIsOpen(!isOpen);
  };
  return <StyledLi onClick={handleDatasetItemClick}>{item}</StyledLi>;
};

export default DropdownItem;

const StyledLi = styled.li`
  padding: 0.5rem;
  border-top: #ededed solid 1px;
  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;
