import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Sidebar from "../components/Sidebar";
import { LoginAPI, TestAPI } from "../apis/LoginAPI";

const Login = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
 
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(email);
      console.log(password);
      const response = await LoginAPI(email, password);
      const { accessToken, refreshToken } = response.data;

      console.log(accessToken);

      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);

      const testResponse = await TestAPI(accessToken);
      console.log(testResponse);


      setEmail("");
      setPassword("");
      setIsLoggedIn(true);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <MainContainer isOpen={isSidebarOpen ? 1 : 0}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Container>
        <Title>Artificial Intelligence Ethics Evaluation System</Title>
        {!isLoggedIn ? (
          <LoginForm>
            <LoginHeader>Login</LoginHeader>
            <Form onSubmit={onSubmitHandler}>
              <Input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <LoginButton type="submit">Login</LoginButton>
            </Form>
            <Footer>
              don't have account? <JoinLink href="/signup"> join us</JoinLink>
            </Footer>
          </LoginForm>
        ) : (
          <h3>You are already logged in!</h3> 
        )}
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 100px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

const LoginHeader = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const LoginButton = styled.button`
  width: 320px;
  padding: 10px;
  background-color: #3333bb;
  color: white;
  border: none;
  border-radius: 4px;
   font-weight:bold;

 &:hover {
   background-color: #5555dd;
 }
`;

const Footer = styled.div`
 margin-top: 20px;
`;

const JoinLink = styled.a`
 color: #3333bb;
 text-decoration: none;

 &:hover {
   text-decoration: underline;
 }
`;

const MainContainer = styled.div.attrs((props) => ({
 style: {
   marginLeft: props.isOpen ? "350px" : "0",
 },
}))`
 display: flex;
 overflow: auto;
 transition: margin-left 0.3s ease;
`;

export default Login;
