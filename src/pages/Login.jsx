import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI, TestAPI } from "../apis/LoginAPI";
import HomepageLayout from "../components/HomepageLayout";
import Menu from "../components/Menu";
import OrangeButton from "../components/OrangeButton";
import Footer from "../components/Footer";
import styled from "styled-components";

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
    <HomepageLayout>
      <Menu />
      <LoginForm>
        <LoginTitle>로그인</LoginTitle>
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
          <OrangeButton type="submit">이메일로 로그인</OrangeButton>
        </Form>
      </LoginForm>
      <Footer />
    </HomepageLayout>
  );
};

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  margin: 11rem 0 8.5rem 0;
  padding: 3rem;
  background-color: white;
  border-radius: 3rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 2rem;
  border: 1px solid #ddd;
  border-radius: 0.3rem;
`;

export default Login;
