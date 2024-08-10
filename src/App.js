import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
<<<<<<< HEAD

=======
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
>>>>>>> upstream/main

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
<<<<<<< HEAD
=======
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Admin" element={<Admin />} />
>>>>>>> upstream/main
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justifycontent: center;
  align-items: center;
`;
