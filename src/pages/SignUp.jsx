import React, { useState } from "react";
import styled from 'styled-components';
import Sidebar from "../components/Sidebar";
import { SignUpAPI } from "../apis/SignUpAPI";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("Developer");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await SignUpAPI(newEmail, newPassword, newName, newRole);

      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <MainContainer isOpen={isSidebarOpen ? 1 : 0}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Container>
        <Title>Artificial Intelligence Ethics Evaluation System</Title>
        <SignUpForm>
          <SignUpHeader>Sign up</SignUpHeader>
          <Form onSubmit={onSubmitHandler}>
            <Input
              type="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            >
              <option value="">Choose Role</option>
              <option value="DEVELOPER">Developer</option>
              <option value="COMPANY">Company</option>
            </Select>
            <Input
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <ButtonRow>

              <ActionButton type="submit">Confirm</ActionButton>
            </ButtonRow>
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

const Title = styled.h1`
  margin-bottom: 70px;
`;

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`;

const SignUpHeader = styled.h2`
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

const Select = styled.select`
  width: 320px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonRow = styled.div`
  display: flex;
`;

const ActionButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #3333bb;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background-color: #5555dd;
    cursor: pointer;
  }
`;

const MainContainer = styled.div.attrs((props) => ({
  style: {
    marginLeft: props.isOpen ? "350px" : "0",
  },
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: auto;
  transition: margin-left 0.3s ease;
`;

export default SignUp;