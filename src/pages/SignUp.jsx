import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SignUpAPI } from "../apis/SignUpAPI";
import { useNavigate } from "react-router-dom";
import OrangeButton from "../components/OrangeButton";
import axios from "axios";
import ReactSelect from "react-select";
import Menu from "../components/Menu";

const SignUp = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState(""); // 비밀번호 상태 추가
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newCountryOptions, setNewCountryOptions] = useState([]);
  const [newRoleOptions, setNewRoleOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryOptions = async () => {
      try {
        const response = await axios.get("/api/countries");
        setNewCountryOptions(
          response.data.data.map((country) => ({
            value: country,
            label: country,
          }))
        );
      } catch (error) {
        console.error("국가 옵션을 불러오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchCountryOptions();
  }, []);

  useEffect(() => {
    const fetchRoleOptions = async () => {
      try {
        const response = await axios.get("/api/careers");
        setNewRoleOptions(
          response.data.data.map((role) => ({
            value: role,
            label: role,
          }))
        );
      } catch (error) {
        console.error("유형을 불러오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchRoleOptions();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await SignUpAPI(newEmail, newPassword, newName, newCountry, newRole);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <MainContainer>
      <Container>
        <Menu />
        <SignUpForm>
          <SignUpHeader>회원가입</SignUpHeader>
          <Form onSubmit={onSubmitHandler}>
            <Input
              type="email"
              placeholder="이메일"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              type="text"
              placeholder="성명"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <ReactSelect
              options={newCountryOptions}
              placeholder="국가를 선택해주세요"
              onChange={(selected) => setNewCountry(selected.value)}
              styles={{
                container: (provided) => ({
                  ...provided,
                  marginBottom: "20px", // Add margin-bottom here
                }),
                control: (provided) => ({
                  ...provided,
                  width: "320px",
                  borderRadius: "10px",
                }),
                menu: (provided) => ({
                  ...provided,
                  zIndex: 10,
                }),
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: "150px",
                  overflowY: "auto",
                }),
              }}
            />

            <ReactSelect
              options={newRoleOptions}
              placeholder="유형을 선택해주세요"
              onChange={(selected) => setNewRole(selected.value)}
              styles={{
                container: (provided) => ({
                  ...provided,
                  marginBottom: "30px",
                }),
                control: (provided) => ({
                  ...provided,
                  width: "320px",
                  borderRadius: "10px",
                }),
                menu: (provided) => ({
                  ...provided,
                  zIndex: 10,
                  borderRadius: "10px",
                }),
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: "150px",
                  overflowY: "auto",
                }),
              }}
            />

            <OrangeButton type="submit" width="100%">
              회원가입
            </OrangeButton>
          </Form>
        </SignUpForm>
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

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 40px;
  border-radius: 30px;
  border: 1.2px solid #d9d9d9;
`;

const SignUpHeader = styled.h2`
  margin-bottom: 40px;
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
  border-radius: 10px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: auto;
`;

export default SignUp;
