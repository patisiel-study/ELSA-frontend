import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Introduction from "./pages/Introduction.jsx";
import Test from "./pages/Test.jsx";
import AITestIntro from "./pages/AITestIntro.jsx";
import AITestInfo from "./pages/AITestInfo.jsx";
import AITestQuestion from "./pages/AITestQuestion.jsx";
import Evaluation from "./pages/Evaluation.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import EvaluateEthics from "./pages/EvaluateEthics";
import SelfDiagnosisResult from "./pages/SelfDiagnosisResult.jsx";
import SelfDiagnosis from "./pages/SelfDiagnosis.jsx";
import SelfDiagnosisQuestion from "./pages/SelfDiagnosisQuestion.jsx";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/test" element={<Test />} />
          <Route path="/aiTestIntro" element={<AITestIntro />} />
          <Route path="/aiTestInfo" element={<AITestInfo />} />
          <Route path="/aiTestQuestion" element={<AITestQuestion />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/dashboard" element={<Dashboard />} />

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
          <Route path="/aiTestQuestion" element={<AITestQuestion />} />
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
