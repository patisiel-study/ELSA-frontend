import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-top: 6rem;
`;

const Title = styled.h1`
  margin-right: 1rem;
  word-break: keep-all;
`;

const Content = styled.p`
  margin: 1.2rem 2.6rem 4rem 0;
  font-size: 1.2rem;
  word-break: keep-all;
`;

export { Header, Title, Content };
