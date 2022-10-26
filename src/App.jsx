import { Content } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

function App() {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/repos" element={<RepoPage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
