import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLeft>
          <FooterTitle>HUMAIND</FooterTitle>
          <FooterCopyright>
            ⓒ 2024. HUMAIND. All rights reserved.
          </FooterCopyright>
        </FooterLeft>
        <FooterRight>
          <FooterNavbar>
            <FooterNav href="/introduction">소개</FooterNav>
            <FooterNav href="/test">AI 윤리 검사</FooterNav>
            <FooterNav href="/evaluation">AI 윤리 평가</FooterNav>
            <FooterNav href="#">업적</FooterNav>
          </FooterNavbar>
        </FooterRight>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #3f4757;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  width: 70%;
  max-width: 70rem;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 5rem;
`;

const FooterRight = styled.div``;

const FooterTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

const FooterCopyright = styled.p`
  margin: 0;
  color: white;
  word-break: keep-all;
`;

const FooterNavbar = styled.nav`
  display: flex;

  @media (max-width: 1279px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const FooterNav = styled.a`
  margin: 0 1rem;
  color: white;
  word-break: keep-all;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1279px) {
    margin: 0.3rem 0;
  }
`;
