import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate(); 

    const logoutClick = async (event) => {
    event.preventDefault(); 
    try {
      const accessToken = localStorage.getItem('accessToken');
  
      const response = await axios.post('/api/member/logout', {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
  
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
  
      alert(response.data.message || "You have been logged out.");
  
      navigate('/login');
      
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      
      if (error.response) {
        alert(error.response.data.message || '로그아웃 중 오류가 발생했습니다.');
      } else if (error.request) {
        alert('서버와의 통신 중 오류가 발생했습니다.');
      } else {
        alert('로그아웃 요청 중 오류가 발생했습니다.');
      }
    }
  }; 
  return (
    <AppContainer isOpen={isOpen}>
      <SidebarContainer isOpen={isOpen}>
        <SidebarContent isOpen={isOpen}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem>Main</MenuItem>
          </Link>

          <Link to="/evaluateEthics" style={{ textDecoration: "none" }}>
            <MenuItem>Evaluating Your LLM Ethics</MenuItem>
          </Link>

          <Link to="/selfDiagnosis" style={{ textDecoration: "none" }}>
            <MenuItem>Self-diagnosis</MenuItem>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem >Login</MenuItem>
          </Link>

          <MenuItem onClick={logoutClick}>Logout</MenuItem>
          


        </SidebarContent>
      </SidebarContainer>
      <ToggleButton onClick={toggleSidebar}>
        <img src="../img/menu.png" alt="Toggle Sidebar" />
      </ToggleButton>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  transition: margin-left 0.3s ease;
  margin-left: ${(props) => (props.isOpen ? "350px" : "0")};
  margin-left: ${(props) => (props.isOpen ? "350px" : "0")};
  padding: 0 20px;
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpen ? "350px" : "0")};
  left: 0;
  width: ${(props) => (props.isOpen ? "350px" : "0")};
  height: 100%;
  background-color: #f1f1f1;
  background-color: #f1f1f1;
  overflow-x: hidden;
  transition: width 0.3s;
  color: black;
  z-index: 10;
  z-index: 10;
`;

const SidebarContent = styled.div`
  margin-top: 80px;
  padding: 20px;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const MenuItem = styled.div`
  padding: 10px 10px;
  margin: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  color: black;
  white-space: nowrap;
  color: black;
  white-space: nowrap;

  &:hover {
    background-color: #d1d1d1;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  background-color: transparent;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 15px;
  z-index: 1000;
  z-index: 1000;

  img {
    width: 1.5rem;
  }
`;

export default Sidebar;
