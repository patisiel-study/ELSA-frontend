import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Result from "./pages/Result";
import SelfDiagnosisResult from "./pages/SelfDiagnosisResult.jsx";
import SelfDiagnosis from "./pages/SelfDiagnosis.jsx";
import SelfDiagnosisQuestion from "./pages/SelfDiagnosisQuestion.jsx";

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<Result />} />
          <Route path="/selfDiagnosis" element={<SelfDiagnosis/>}/>
          <Route
            path="/selfDiagnosisResult"
            element={<SelfDiagnosisResult />}
          />
          <Route path="/selfDiagnosisQuestion" element={<SelfDiagnosisQuestion/>}/>
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
