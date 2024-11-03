import React, { useState } from "react";
import styled from 'styled-components';
import { LoginAPI, TestAPI } from "../apis/LoginAPI";
import { Link } from "react-router-dom";
import OrangeButton from "../components/OrangeButton";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(email);
      console.log(password);
      const response = await LoginAPI(email, password);
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      const testResponse = await TestAPI(accessToken);
      console.log(testResponse);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const onLoginClick = () => {
    onSubmitHandler();
  };

  return (
      <Container>
        <Menu/>
        <LoginForm>
          <LoginHeader>로그인</LoginHeader>
          <Form onSubmit={onSubmitHandler}>
            <Input
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <OrangeButton type="submit"  width="300px" height="50px">로그인</OrangeButton>
          </Form>
          <FooterContainer>
          <StyledLink to="/signup">회원가입</StyledLink>|
          <StyledLink to="/find-id">아이디 찾기</StyledLink>|
          <StyledLink to="/find-password">비밀번호 찾기</StyledLink>
    </FooterContainer>
        </LoginForm>
      </Container>
 
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  margin: 11rem 0 8.5rem 0;
  padding: 3rem;
  background-color: white;
  padding: 40px;
  border-radius: 30px;
  border: 1.2px  solid #D9D9D9;
`;

const LoginHeader = styled.h2`
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 1.5rem;
`;

const Input = styled.input`
  width: 300px;
  height:25px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;
const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  color: #777777;
`;

const StyledLink = styled(Link)`
  color: #777777;
  text-decoration: none;
   margin:  0.3rem; 
   font-size: 0.9rem; 

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
