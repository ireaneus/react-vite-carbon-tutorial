import { Button, Content } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import './app.scss';

function App() {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Button>Button</Button>
      </Content>
    </>
  );
}

export default App;
