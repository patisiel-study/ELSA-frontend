import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
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
