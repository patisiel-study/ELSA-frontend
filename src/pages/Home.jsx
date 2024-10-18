import React from "react";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import OrangeLinkButton from "../components/OrangeLinkButton";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import { color } from "../color";

const Home = () => {
  return (
    <HomepageLayout>
      <Menu />
      <Curve /> {/* Curve 현 위치에 고정 */}
      <MainVisual>
        <MainVisualLeft>
          <MainVisualTitle>
            HUMAIND와 함께
            <br />
            여러분의 AI 윤리성을 확인해보세요!
          </MainVisualTitle>
          <MainVisualContent>
            <strong>HUMAIND</strong>의 <strong>AI 윤리 검사</strong>는 당신이
            사용하거나 개발하는 AI가 윤리적 기준을 충족하는지 간단하고 빠르게
            진단해 드립니다.
          </MainVisualContent>
          <OrangeLinkButton href="/test">테스트하기</OrangeLinkButton>
        </MainVisualLeft>
        <MainVisualRight></MainVisualRight>
      </MainVisual>
      <Sections>
        <Section>
          <SectionLeft>
            <SectionTitle>AI 윤리 검사</SectionTitle>
            <SectionContent>AI 윤리 검사</SectionContent>
          </SectionLeft>
          <SectionRight></SectionRight>
        </Section>
        <Section>
          <SectionLeft>
            <SectionTitle>인간성을 위한 인공지능</SectionTitle>
            <SectionContent>
              HUMAIND의 모든 검사는 '인간성을 위한 인공지능'의 3개 기본원칙과
              10대 핵심요건을 기준으로 구성되었습니다.
            </SectionContent>
            <DetailsLink href="/introduction">자세히 보기 →</DetailsLink>
          </SectionLeft>
          <SectionRight></SectionRight>
        </Section>
        <Section>
          <SectionLeft>
            <SectionTitle>증명서 발급</SectionTitle>
            <SectionContent>
              HUMAIND의 AI 윤리 평가에 따라 윤리적인 AI로 평가되면, 윤리적 AI를
              증명하는 증명서를 발급받을 수 있습니다.
            </SectionContent>
            <DetailsLink href="/evaluation">자세히 보기 →</DetailsLink>
          </SectionLeft>
          <SectionRight></SectionRight>
        </Section>
        <Section>
          <SectionTitle>HUMAIND의 차별점</SectionTitle>
          <Articles>
            <Article>
              <ArticleTitle>국내 최초</ArticleTitle>
              <ArticleContent>
                국내 최초 인공지능 윤리 평가 시스템
              </ArticleContent>
            </Article>
            <Article>
              <ArticleTitle>쉽고 간단</ArticleTitle>
              <ArticleContent>약 10분 정도의 쉽고 간단한 진단</ArticleContent>
            </Article>
            <Article>
              <ArticleTitle>정확한 결과</ArticleTitle>
              <ArticleContent>
                데이터 과학자들과 함께 해 정확한 결과
              </ArticleContent>
            </Article>
            <Article>
              <ArticleTitle>AI 윤리 인증서</ArticleTitle>
              <ArticleContent>
                국내 유일 AI 윤리 검증 인증서 발급
              </ArticleContent>
            </Article>
          </Articles>
        </Section>
      </Sections>
      <Footer />
      <Blank />
      <BottomBanner>
        <BannerText>
          지금 바로 윤리적인 AI 활용을 위한 첫 걸음을 내딛어보세요!
        </BannerText>
        <OrangeLinkButton href={"/test"}>테스트하기</OrangeLinkButton>
      </BottomBanner>
    </HomepageLayout>
  );
};

export default Home;

// 슬라이드 인 애니메이션 정의
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 페이드 인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainVisual = styled.header`
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-width: 70rem;
  min-width: 30rem;
  height: 22rem;
  animation: ${slideIn} 1s ease-out;
`;

const MainVisualLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
`;

const MainVisualRight = styled.div`
  width: 40%;
  background-color: gray;
`;

const MainVisualTitle = styled.h1`
  margin-right: 1rem;
  word-break: keep-all;
`;

const MainVisualContent = styled.p`
  margin: 1.2rem 2.6rem 4rem 0;
  font-size: 1.2rem;
  word-break: keep-all;
`;

const Curve = styled.div`
  position: relative;
  top: 28rem; /* Curve의 height + MainVisual의 height */
  height: 6rem;
  width: 100%;
  border-radius: 0 0 50% 50%;
  background-color: white;
`;

const Sections = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8rem 0 3rem 0; /* Curve의 height보다 커야 함 */
  background-color: ${color.primary};
`;

const Section = styled.section`
  width: 70%;
  max-width: 70rem;
  min-width: 30rem;
  margin: 3rem 0;
`;

const SectionLeft = styled.div`
  width: 60%;
`;

const SectionRight = styled.div`
  width: 40%;
  background-color: gray;
`;

const SectionTitle = styled.h2`
  color: white;
  word-break: keep-all;
`;

const SectionContent = styled.p`
  color: white;
  word-break: keep-all;
`;

const Articles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  text-align: center;
`;

const ArticleTitle = styled.h3`
  color: white;
  word-break: keep-all;
`;

const ArticleContent = styled.p`
  max-width: 10rem;
  color: white;
  word-break: keep-all;
`;

const DetailsLink = styled.a`
  color: white;
  text-decoration: underline;
`;

const Blank = styled.div`
  height: 6rem;
`;

const BottomBanner = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  width: 100%;
  background-color: #333333;
`;

const BannerText = styled.p`
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  word-break: keep-all;
`;
