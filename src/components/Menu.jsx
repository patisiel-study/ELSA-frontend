import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color } from "../color";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/introduction":
        setActiveItem("소개");
        break;
      case "/test":
        setActiveItem("AI 윤리 검사");
        break;
      case "/evaluation":
        setActiveItem("AI 윤리 평가");
        break;
      case "/dashboard":
        setActiveItem("평가 데이터");
        break;
      default:
        setActiveItem("");
        break;
    }
  }, []);

  return (
    <StyledMenu>
      <Logo
        href="/"
        isActive={activeItem === "홈"}
        onClick={() => setActiveItem("홈")}
      >
        HUMAIND
      </Logo>
      <NavBar>
        <Nav
          href="/aiTestResult"
          isActive={activeItem === "소개"}
          onClick={() => setActiveItem("소개")}
        >
          소개
        </Nav>
        <Nav
          href="/test"
          isActive={activeItem === "AI 윤리 검사"}
          onClick={() => setActiveItem("AI 윤리 검사")}
        >
          AI 윤리 검사
        </Nav>
        <Nav
          href="/evaluation"
          isActive={activeItem === "AI 윤리 평가"}
          onClick={() => setActiveItem("AI 윤리 평가")}
        >
          AI 윤리 평가
        </Nav>
        <Nav
          href="/dashboard"
          isActive={activeItem === "평가 데이터"}
          onClick={() => setActiveItem("평가 데이터")}
        >
          평가 데이터
        </Nav>
      </NavBar>
      <Login href="/login">Login</Login>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  border-bottom: solid 2px #f5f5f5;
`;

const Logo = styled.a`
  margin-right: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

const NavBar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 70rem;
  min-width: 15rem;
  width: 58%;
`;

const Nav = styled.a`
  position: relative;
  margin: 0.7rem 1rem;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: -0.4rem;
    left: 50%;
    transform: translateX(-50%); /* 점을 중앙 정렬 */
    height: 0.3rem;
    width: 0.3rem;
    background-color: ${({ isActive }) =>
      isActive ? color.primary : "transparent"};
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }
`;

const Login = styled.a`
  position: relative;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 1rem;
  }
`;
