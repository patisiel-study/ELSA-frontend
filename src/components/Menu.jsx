import React, { useState, useEffect } from "react";
import { LogoutAPI } from "../apis/LoginAPI";
import styled from "styled-components";
import { color } from "../color";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("");
  const [showIntroductionBox, setShowIntroductionBox] = useState(false);
  const [showMemberBox, setShowMemberBox] = useState(false);

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

  const handleLogout = async () => {
    try {
      const AT = localStorage.getItem("accessToken");
      await LogoutAPI(AT);
      localStorage.removeItem("accessToken");
      console.log("로그아웃 API 요청 완료");
      window.location.href = "/";
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

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
        <RelativeContainer
          onMouseEnter={() => setShowIntroductionBox(true)}
          onMouseLeave={() => setShowIntroductionBox(false)}
        >
          <Nav
            href="/aiTestResult"
            isActive={activeItem === "소개"}
            onClick={() => setActiveItem("소개")}
          >
            소개
          </Nav>
          {showIntroductionBox && (
            <SubMenu>
              <SubNav href="#">HUMAIND 소개</SubNav>
              <SubNav href="#">윤리 기준 소개</SubNav>
            </SubMenu>
          )}
        </RelativeContainer>
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
      {!localStorage.getItem("accessToken") && (
        <Login href="/login">Login</Login>
      )}
      {localStorage.getItem("accessToken") && (
        <RelativeContainer
          onMouseEnter={() => setShowMemberBox(true)}
          onMouseLeave={() => setShowMemberBox(false)}
        >
          <Profile src="../img/profile.svg" draggable="false" />
          {showMemberBox && (
            <SubMenu>
              <SubNav href="#">회원 정보</SubNav>
              <SubNav href="/testHistory">자가진단 내역</SubNav>
              <Line />
              <SubNav onClick={handleLogout}>로그아웃</SubNav>
            </SubMenu>
          )}
        </RelativeContainer>
      )}
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

const RelativeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding: 1rem;
`;

const SubMenu = styled.div`
  position: absolute;
  top: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
  background-color: white;
  border: 1px solid #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* 상단 화살표 추가 */
  &::before {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 44%;
    width: 1rem;
    height: 1rem;
    background-color: white;
    transform: rotate(45deg);
    border-left: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
  }
`;

const SubNav = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.4rem;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    text-decoration-color: gray;
  }
`;

const Line = styled.hr`
  width: 90%;
  height: 1px;
  background-color: #e5e5e5;
  border: 0;
`;
