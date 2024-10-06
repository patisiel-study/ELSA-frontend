import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import EvaluateEthics from "./pages/EvaluateEthics";
import SelfDiagnosisResult from "./pages/SelfDiagnosisResult.jsx";
import SelfDiagnosis from "./pages/SelfDiagnosis.jsx";
import SelfDiagnosisQuestion from "./pages/SelfDiagnosisQuestion.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/evaluateEthics" element={<EvaluateEthics />} />
          <Route path="/selfDiagnosis" element={<SelfDiagnosis />} />
          <Route
            path="/selfDiagnosisResult"
            element={<SelfDiagnosisResult />}
          />
          <Route
            path="/selfDiagnosisQuestion"
            element={<SelfDiagnosisQuestion />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
