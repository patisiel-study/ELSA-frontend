import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Introduction from "./pages/Introduction.jsx";
import Test from "./pages/Test.jsx";
import Evaluation from "./pages/Evaluation.jsx";
import EvaluateEthics from "./pages/EvaluateEthics";
import SelfDiagnosisResult from "./pages/SelfDiagnosisResult.jsx";
import SelfDiagnosis from "./pages/SelfDiagnosis.jsx";
import SelfDiagnosisQuestion from "./pages/SelfDiagnosisQuestion.jsx";

import Main from "./pages/Main";

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
          <Route path="/evaluation" element={<Evaluation />} />
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
