import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContainer isOpen={isOpen}>
      <SidebarContainer isOpen={isOpen}>
        <SidebarContent isOpen={isOpen}>
          <MenuItem>Evaluating Your LLM Ethics</MenuItem>
          <MenuItem>History Evaluating Your LLM Ethics</MenuItem>
          <MenuItem>Self-diagnosis</MenuItem>
          <MenuItem>History Self-diagnosis</MenuItem>
        </SidebarContent>
      </SidebarContainer>
      <ToggleButton onClick={toggleSidebar}>
        <img 
          src="../img/menu-icon-Img.png" 
          alt="Toggle Sidebar" 
          width="40px"
          height="40px"
        />
      </ToggleButton>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  transition: margin-left 0.3s ease;
  margin-left: ${props => (props.isOpen ? "350px" : "0")};
  padding: 0 20px;
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0; 
  width: ${props => (props.isOpen ? "350px" : "0")};
  height: 100%;
  background-color: #F1F1F1;
  overflow-x: hidden;
  transition: width 0.3s;
  color: black;
`;

const SidebarContent = styled.div`
  margin-top: 80px;
  padding: 20px;
  opacity: ${props => (props.isOpen ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const MenuItem = styled.div`
  padding: 10px 10px;
  margin: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d1d1d1;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  background-color: transparent; 
  border: none;
  cursor: pointer;
  padding: 15px;
  z-index: 1000; 

  img {
    width: 25px; 
    height: 25px;
  }
`;

export default Sidebar;
